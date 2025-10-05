import prisma from "../config/prismaClient.js";

// Create Session - Updated to work with your unified Session schema
export const createSession = async (req, res) => {
  try {
    const { sessionType, sessionData, userId } = req.body;

    console.log('Received request:', { sessionType, sessionData, userId });

    // Validation
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }
    if (!sessionType) {
      return res.status(400).json({ success: false, message: "Session type is required" });
    }
    if (!sessionData) {
      return res.status(400).json({ success: false, message: "Session data is required" });
    }

    // Ensure user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Map frontend sessionType to schema SessionType enum
    const sessionTypeMapping = {
      'webinar_sessions': 'WEBINAR',
      'panel_sessions': 'PANEL_DISCUSSION',
      'demo_sessions': 'PRODUCT_DEMO'
    };

    const mappedSessionType = sessionTypeMapping[sessionType];
    if (!mappedSessionType) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid session type. Must be webinar_sessions, panel_sessions, or demo_sessions" 
      });
    }

    // Validate and parse date/time
    let parsedDateTime;
    try {
      if (sessionData.date && sessionData.time) {
        // Handle separate date and time from frontend
        parsedDateTime = new Date(`${sessionData.date}T${sessionData.time}`);
      } else {
        return res.status(400).json({ success: false, message: "Date and time are required" });
      }

      if (isNaN(parsedDateTime.getTime())) {
        throw new Error('Invalid date');
      }

      // Check if the date is in the past
      if (parsedDateTime < new Date()) {
        return res.status(400).json({ success: false, message: "Session date cannot be in the past" });
      }
    } catch (error) {
      return res.status(400).json({ success: false, message: "Invalid date and time format" });
    }

    // Prepare base session data
    const baseSessionData = {
      type: mappedSessionType,
      title: sessionData.title,
      dateTime: parsedDateTime,
      duration: sessionData.duration,
      registrationLink: sessionData.link || null,
      userId: userId,
    };

    let fullSessionData = { ...baseSessionData };

    // Add type-specific fields based on session type
    switch (sessionType) {
      case 'webinar_sessions':
        // Validate webinar required fields
        if (!sessionData.title || !sessionData.speakers || !sessionData.audience) {
          return res.status(400).json({ 
            success: false, 
            message: "Title, speakers, and audience are required for webinar" 
          });
        }

        // Map audience array to boolean fields
        const audienceTypes = sessionData.audience || [];
        fullSessionData = {
          ...fullSessionData,
          description: sessionData.description || null,
          audienceStudents: audienceTypes.includes('Students'),
          audienceProfessionals: audienceTypes.includes('Professionals'),
          speakerName: sessionData.speakers[0]?.name || null,
          speakerEmail: sessionData.speakers[0]?.email || null,
          contactInfo: sessionData.contact || null,
          
          // Set other type-specific fields to null
          panelistName: null,
          panelistDesignation: null,
          panelistBio: null,
          moderatorName: null,
          moderatorDesignation: null,
          moderatorBio: null,
          presenterName: null,
          presenterDesignation: null,
          presenterAffiliation: null,
          aboutCompany: null,
          aboutProduct: null,
        };
        break;

      case 'panel_sessions':
        // Validate panel required fields
        if (!sessionData.title || !sessionData.panelists || !sessionData.moderator) {
          return res.status(400).json({ 
            success: false, 
            message: "Title, panelists, and moderator are required for panel discussion" 
          });
        }

        fullSessionData = {
          ...fullSessionData,
          description: sessionData.description || null,
          panelistName: sessionData.panelists[0]?.name || null,
          panelistDesignation: sessionData.panelists[0]?.designation || null,
          panelistBio: sessionData.panelists[0]?.bio || null,
          moderatorName: sessionData.moderator?.name || null,
          moderatorDesignation: sessionData.moderator?.designation || null,
          moderatorBio: sessionData.moderator?.bio || null,
          
          // Set other type-specific fields to null
          audienceStudents: null,
          audienceProfessionals: null,
          speakerName: null,
          speakerEmail: null,
          contactInfo: null,
          presenterName: null,
          presenterDesignation: null,
          presenterAffiliation: null,
          aboutCompany: null,
          aboutProduct: null,
        };
        break;

      case 'demo_sessions':
        // Validate demo required fields
        if (!sessionData.title || !sessionData.presenter) {
          return res.status(400).json({ 
            success: false, 
            message: "Title and presenter are required for product demo" 
          });
        }

        fullSessionData = {
          ...fullSessionData,
          description: sessionData.description || null,
          presenterName: sessionData.presenter?.name || null,
          presenterDesignation: sessionData.presenter?.designation || null,
          presenterAffiliation: sessionData.presenter?.affiliation || null,
          aboutCompany: sessionData.aboutCompany || null,
          aboutProduct: sessionData.aboutProduct || null,
          
          // Set other type-specific fields to null
          audienceStudents: null,
          audienceProfessionals: null,
          speakerName: null,
          speakerEmail: null,
          contactInfo: null,
          panelistName: null,
          panelistDesignation: null,
          panelistBio: null,
          moderatorName: null,
          moderatorDesignation: null,
          moderatorBio: null,
        };
        break;

      default:
        return res.status(400).json({ 
          success: false, 
          message: "Invalid session type" 
        });
    }

    // Create session in database
    const session = await prisma.session.create({
      data: fullSessionData,
      include: {
        user: {
          select: { 
            id: true, 
            full_name: true, 
            email: true 
          }
        }
      }
    });

    res.status(201).json({
      success: true,
      message: `${mappedSessionType.replace('_', ' ').toLowerCase()} session created successfully!`,
      session
    });

  } catch (error) {
    console.error('Create session error:', error);
    
    // Handle Prisma errors
    if (error.code === 'P2002') {
      return res.status(400).json({ 
        success: false, 
        message: "A session with this information already exists" 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Something went wrong while creating the session" 
    });
  }
};

// Get sessions with optional type filter
export const getSessions = async (req, res) => {
  try {
    const { type, userId } = req.query;
    
    let whereClause = {};
    
    // Filter by userId if provided
    if (userId) {
      whereClause.userId = parseInt(userId);
    }
    
    // Filter by type if provided
    if (type) {
      const typeMapping = {
        'webinar': 'WEBINAR',
        'panel': 'PANEL_DISCUSSION',
        'demo': 'PRODUCT_DEMO'
      };
      
      const mappedType = typeMapping[type.toLowerCase()];
      if (!mappedType) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid type. Must be webinar, panel, or demo" 
        });
      }
      
      whereClause.type = mappedType;
    }

    const sessions = await prisma.session.findMany({
      where: whereClause,
      include: {
        user: { 
          select: { 
            id: true, 
            full_name: true, 
            email: true 
          } 
        }
      },
      orderBy: { created_at: 'desc' }
    });

    // Transform sessions to include formatted data
    const transformedSessions = sessions.map(session => {
      const baseSession = {
        id: session.id,
        type: session.type,
        title: session.title,
        dateTime: session.dateTime,
        duration: session.duration,
        registrationLink: session.registrationLink,
        user: session.user,
        created_at: session.created_at,
        updated_at: session.updated_at
      };

      // Add type-specific data
      switch (session.type) {
        case 'WEBINAR':
          return {
            ...baseSession,
            description: session.description,
            audience: [
              ...(session.audienceStudents ? ['Students'] : []),
              ...(session.audienceProfessionals ? ['Professionals'] : [])
            ],
            speakers: session.speakerName ? [{
              name: session.speakerName,
              email: session.speakerEmail
            }] : [],
            contact: session.contactInfo
          };

        case 'PANEL_DISCUSSION':
          return {
            ...baseSession,
            description: session.description,
            panelists: session.panelistName ? [{
              name: session.panelistName,
              designation: session.panelistDesignation,
              bio: session.panelistBio
            }] : [],
            moderator: session.moderatorName ? {
              name: session.moderatorName,
              designation: session.moderatorDesignation,
              bio: session.moderatorBio
            } : null
          };

        case 'PRODUCT_DEMO':
          return {
            ...baseSession,
            description: session.description,
            presenter: session.presenterName ? {
              name: session.presenterName,
              designation: session.presenterDesignation,
              affiliation: session.presenterAffiliation
            } : null,
            aboutCompany: session.aboutCompany,
            aboutProduct: session.aboutProduct
          };

        default:
          return baseSession;
      }
    });

    res.json({
      success: true,
      count: transformedSessions.length,
      sessions: transformedSessions
    });

  } catch (error) {
    console.error("Get sessions error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Something went wrong while fetching sessions" 
    });
  }
};

// Get single session by ID
export const getSessionById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ 
        success: false, 
        message: "Session ID is required" 
      });
    }

    const session = await prisma.session.findUnique({
      where: { id: parseInt(id) },
      include: {
        user: { 
          select: { 
            id: true, 
            full_name: true, 
            email: true 
          } 
        }
      }
    });

    if (!session) {
      return res.status(404).json({ 
        success: false, 
        message: "Session not found" 
      });
    }

    // Transform session similar to getSessions
    const baseSession = {
      id: session.id,
      type: session.type,
      title: session.title,
      dateTime: session.dateTime,
      duration: session.duration,
      registrationLink: session.registrationLink,
      user: session.user,
      created_at: session.created_at,
      updated_at: session.updated_at
    };

    let transformedSession;
    switch (session.type) {
      case 'WEBINAR':
        transformedSession = {
          ...baseSession,
          description: session.description,
          audience: [
            ...(session.audienceStudents ? ['Students'] : []),
            ...(session.audienceProfessionals ? ['Professionals'] : [])
          ],
          speakers: session.speakerName ? [{
            name: session.speakerName,
            email: session.speakerEmail
          }] : [],
          contact: session.contactInfo
        };
        break;

      case 'PANEL_DISCUSSION':
        transformedSession = {
          ...baseSession,
          description: session.description,
          panelists: session.panelistName ? [{
            name: session.panelistName,
            designation: session.panelistDesignation,
            bio: session.panelistBio
          }] : [],
          moderator: session.moderatorName ? {
            name: session.moderatorName,
            designation: session.moderatorDesignation,
            bio: session.moderatorBio
          } : null
        };
        break;

      case 'PRODUCT_DEMO':
        transformedSession = {
          ...baseSession,
          description: session.description,
          presenter: session.presenterName ? {
            name: session.presenterName,
            designation: session.presenterDesignation,
            affiliation: session.presenterAffiliation
          } : null,
          aboutCompany: session.aboutCompany,
          aboutProduct: session.aboutProduct
        };
        break;

      default:
        transformedSession = baseSession;
    }

    res.json({
      success: true,
      session: transformedSession
    });

  } catch (error) {
    console.error("Get session by ID error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Something went wrong while fetching the session" 
    });
  }
};