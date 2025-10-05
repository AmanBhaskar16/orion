import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { 
  createSession, 
  getSessions, 
  getSessionById
} from '../controllers/sessionController.js';

const router = express.Router();

// Create a new session (matches your frontend endpoint)
router.post('/', authenticateToken, createSession);

// Get all sessions (with optional type and userId filters)
// GET /api/host-sessions?type=webinar&userId=123
router.get('/', authenticateToken, getSessions);

// Get single session by ID
// GET /api/host-sessions/123
router.get('/:id', authenticateToken, getSessionById);

export default router;