import { Suspense, lazy } from 'react'
import { useState } from 'react'

import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
const ShareNeedsSection = lazy(() => import('@/components/share-needs-section'))
const GetFundedComponent = lazy(() => import('@/components/postlogincomponents/GetFuded'))
const HostSessionsSection = lazy(() => import('@/components/host-sessions/host-sessions-section'))
const ExploreSection = lazy(() => import('@/components/explore-section'))
// const FAQComponent = lazy(() => import('@/components/postlogincomponents/FAQComponent'))
// const Footer = lazy(() => import('@/components/postlogincomponents/footer'))
const Mentor = lazy(() => import('@/components/mentors'))
import UserFormModal from '../../components/UserFormModal';

const Prelogin = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
  
    // Function to run after successful submission (e.g., close modal and log)
    const handleSubmissionSuccess = () => {
      console.log('Form submission successful. Closing modal.');
      handleCloseModal();
    };
  
  return (
    <div className="min-h-screen relative pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
 


      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <Suspense fallback={<div>Loading...</div>}>
          <ShareNeedsSection />
          {/* <h2 className="mt-[20px] text-3xl text-center sm:text-4xl font-bold text-white mb-6 animate-in fade-in-0 slide-in-from-top-4 duration-700">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Get Funded
            </span>
          </h2>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-top-6 duration-700 delay-200">
            Fuel your startup with smart capital & AI-backed support
          </p> */}
          <div id="get-funded">
            <GetFundedComponent />
          </div>
          <Mentor/>
          <HostSessionsSection />
          <ExploreSection />
          {/* <FAQComponent /> */}
<>
  {/* The Heading with subtle neon glow */}
  <h2 
    className="
      mt-[30px] text-3xl text-center sm:text-4xl md:text-5xl font-extrabold mb-8 
      animate-in fade-in-0 slide-in-from-top-4 duration-700
    "
  >
    <span 
      className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      style={{ 
        // Applying the subtle glow directly to the text
        filter: 'drop-shadow(0 0 4px rgba(236, 72, 153, 0.7))'
      }}
    >
      Join the Startup Network of the future
    </span>
  </h2>
  
  {/* The Button with Pulsing Holographic Border */}
  <div className='flex justify-center mt-6 mb-20'> {/* Added top and bottom margin for spacing */}
    <button 
      className="
        relative group overflow-hidden 
        font-extrabold text-lg 
        px-8 py-3 rounded-xl 
        bg-gradient-to-br from-violet-600 to-indigo-700 
        text-white shadow-lg shadow-violet-500/50 
        transition-all duration-300 ease-out 
        hover:shadow-xl hover:shadow-violet-400/60
        whitespace-nowrap cursor-pointer
      " 
      onClick={handleOpenModal}
    >
      {/* Pulsing Border Element (Requires Custom CSS) */}
      <span id="button-border-pulse" className="absolute inset-0 rounded-xl"></span>
      
      {/* Text Content */}
      <span className="relative z-10 text-2xl tracking-wider">
        Join the Waitlist
      </span>
    </button>
  </div>
</>
          {isModalOpen && (
        <UserFormModal
          onClose={handleCloseModal}
          onSubmitSuccess={handleSubmissionSuccess}
        />
      )}
          {/* <Footer /> */}
        </Suspense>
      </main>
    </div>
  )
}

export default Prelogin
