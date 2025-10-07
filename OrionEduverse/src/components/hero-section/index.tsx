// // // import { Button } from "@/components/ui/button"
// // import { Sparkles } from "lucide-react"
// // import { useState } from "react"
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// // } from "@/components/ui/dialog"
// // import LoginForm from "@/components/auth/login-form"
// // import UserFormModal from '../UserFormModal';
// // // import { useAuth } from "@/contexts/AuthContext"

// // import coinRollingVideo from "@/assets/videos/Coins.mp4"

// // const HeroSection = () => {
// //   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
// //   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
// //   
// //   const handleOpenModal = () => setIsModalOpen(true);
// //   const handleCloseModal = () => setIsModalOpen(false);
// // // Function to run after successful submission (e.g., close modal and log)
// //   const handleSubmissionSuccess = () => {
// //     console.log('Form submission successful. Closing modal.');
// //     handleCloseModal();
// //   };
// //   // const { user } = useAuth()

// //   return (
// //     <section className="relative min-h-[70vh] max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl mx-auto max-w-7xl">
// //       {/* Video Background */}
// //       <video
// //         autoPlay
// //         muted
// //         loop
// //         playsInline
// //         className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-3xl"
// //       >
// //         <source src={coinRollingVideo} type="video/mp4" />
// //         Your browser does not support the video tag.
// //       </video>

// //       {/* Content Container */}
// //       <div className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
// //         <div className="text-center text-white bg-black/30 rounded-3xl p-8">
// //           {/* Badge */}
// //           <div className="inline-flex items-center space-x-2 bg-blue-900 bg-opacity-50 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-8">
// //             <Sparkles className="h-4 w-4" />
// //             <span>From Pre-Seed to Post-IPO</span>
// //           </div>

// //           {/* Main Heading */}
// //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
// //             Welcome to World's{" "}
// //             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
// //               Largest Platform
// //             </span>
// //             <br />
// //             For Startups
// //           </h1>

// //           {/* Subheading */}
// //           <p className="text-xl mb-8 max-w-3xl mx-auto">
// //             Build,Connect & Grow with the Next-Gen StartUp Network powered by AI and Blockchain
// //           </p>

// //           {/* CTA Section */}
// //           <div className="mb-12">
// //             <button 
// //               className="
// //                 bg-amber-300 hover:bg-amber-400 
// //                 text-gray-900 font-semibold 
// //                 px-4 py-2 rounded-xl transition-colors duration-200
// //                 whitespace-nowrap text-sm sm:text-base cursor-pointer
// //               " 
// //               onClick={handleOpenModal}
// //             >
// //               Join the Waitlist
// //             </button>
// //             {/* <Button
// //               size="lg"
// //               onClick={() => {
// //                 if (!user) {
// //                   setIsLoginModalOpen(true)
// //                 } else {
// //                   // Handle navigation for authenticated users
// //                   console.log('Navigate to dashboard or registration')
// //                 }
// //               }}
// //               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
// //             >
// //               Register Now
// //               <ArrowRight className="ml-2 h-5 w-5" />
// //             </Button> */}
// //           </div>

// //           {/* Stats */}
// //           {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
// //             <div className="text-center">
// //               <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
// //               <div>Active Startups</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-3xl font-bold text-purple-400 mb-2">$2B+</div>
// //               <div>Funding Raised</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-3xl font-bold text-green-400 mb-2">50K+</div>
// //               <div>Connections Made</div>
// //             </div>
// //           </div> */}
// //           {isModalOpen && (
// //         <UserFormModal
// //           onClose={handleCloseModal}
// //           onSubmitSuccess={handleSubmissionSuccess}
// //         />
// //       )}
// //         </div>
// //       </div>

// //       {/* Login Modal */}
// //       <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
// //         <DialogContent className="sm:max-w-md border-0 shadow-2xl">
// //           <DialogHeader className="text-center">
// //             <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// //               Welcome Back
// //             </DialogTitle>
// //             <DialogDescription className="text-gray-600">
// //               Sign in to your account to get started
// //             </DialogDescription>
// //           </DialogHeader>
// //           <LoginForm onClose={() => setIsLoginModalOpen(false)} />
// //         </DialogContent>
// //       </Dialog>
// //     </section>
// //   )
// // }

// // export default HeroSection

// "use client";

// import { useState } from "react";
// import { Sparkles } from "lucide-react";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// // } from "@/components/ui/dialog";
// // import LoginForm from "@/components/auth/login-form";
// import UserFormModal from "../UserFormModal";

// import coinRollingVideo from "@/assets/videos/Coins.mp4";

// const HeroSection = () => {
//   // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);
//   const handleSubmissionSuccess = () => {
//     console.log("Form submission successful. Closing modal.");
//     handleCloseModal();
//   };

//   return (
//     <section className="relative min-h-[75vh] overflow-hidden rounded-3xl shadow-2xl mx-auto max-w-8xl group">
//       {/* 🔹 Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-3xl brightness-75"
//       >
//         <source src={coinRollingVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* 🔹 Gradient Overlay for readability */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 z-[1] rounded-3xl" />

//       {/* 🔹 Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32">
//         {/* Badge */}
//         <div className="inline-flex items-center space-x-2 bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-indigo-200 px-5 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
//           <Sparkles className="h-4 w-4 text-indigo-300" />
//           <span>From Pre-Seed to Post-IPO</span>
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-up">
//           Welcome to the World’s{" "}
//           <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Largest Platform
//           </span>{" "}
//           for Startups
//         </h1>

//         {/* Subheading */}
//         <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up [animation-delay:150ms]">
//           Build, Connect & Grow with the next-gen startup network — powered by
//           AI and Blockchain.
//         </p>

//         {/* CTA Button */}
//         {/* <button
//           onClick={handleOpenModal}
//           className="cursor-pointer relative inline-flex items-center justify-center px-6 py-3 
//           font-semibold text-gray-900 rounded-xl overflow-hidden 
//           bg-gradient-to-r from-amber-300 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 
//           shadow-lg hover:shadow-amber-500/30 transition-all duration-300 text-sm sm:text-base"
//         >
//           <span className="relative z-10">Join the Waitlist</span>
//           <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
//         </button> */}

//          <div className='flex justify-center mt-6 mb-20'> {/* Added top and bottom margin for spacing */}
//     <button 
//       className="
//         relative group overflow-hidden 
//         font-extrabold text-lg 
//         px-8 py-3 rounded-xl 
//         bg-gradient-to-br from-violet-600 to-indigo-700 
//         text-white shadow-lg shadow-violet-500/50 
//         transition-all duration-300 ease-out 
//         hover:shadow-xl hover:shadow-violet-400/60
//         whitespace-nowrap cursor-pointer
//       " 
//       onClick={handleOpenModal}
//     >
//       {/* Pulsing Border Element (Requires Custom CSS) */}
//       <span id="button-border-pulse" className="absolute inset-0 rounded-xl"></span>
      
//       {/* Text Content */}
//       <span className="relative z-10 tracking-wider">
//         Join the Waitlist
//       </span>
//     </button>
//   </div>

//         {/* Optional Floating Stats (for later reactivation) */}
//         {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto text-gray-200">
//           <div className="flex flex-col items-center">
//             <div className="text-3xl font-bold text-blue-400 mb-1">10K+</div>
//             <div>Active Startups</div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="text-3xl font-bold text-purple-400 mb-1">$2B+</div>
//             <div>Funding Raised</div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="text-3xl font-bold text-green-400 mb-1">50K+</div>
//             <div>Connections Made</div>
//           </div>
//         </div> */}
//       </div>

//       {/* 🔹 Waitlist Modal */}
//       {isModalOpen && (
//         <UserFormModal
//           onClose={handleCloseModal}
//           onSubmitSuccess={handleSubmissionSuccess}
//         />
//       )}

//       {/* 🔹 Login Modal */}
//       {/* <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
//         <DialogContent className="sm:max-w-md border-0 shadow-2xl bg-gray-900 text-white">
//           <DialogHeader className="text-center">
//             <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Welcome Back
//             </DialogTitle>
//             <DialogDescription className="text-gray-400">
//               Sign in to your account to get started.
//             </DialogDescription>
//           </DialogHeader>
//           <LoginForm onClose={() => setIsLoginModalOpen(false)} />
//         </DialogContent>
//       </Dialog> */}
//     </section>
//   );
// };

// export default HeroSection;
"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import UserFormModal from "../UserFormModal";

// You can remove this import since we're not using the video anymore
// import coinRollingVideo from "@/assets/videos/Coins.mp4";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(255, 255, 255, 0.8)';
        context.fill();
      }
    }

    // Set canvas size properly
    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    // Initialize canvas and particles
    const initParticles = () => {
      setCanvasSize();
      particles = [];
      const particleCount = 150;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!canvas.width || !canvas.height) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      // Redistribute particles on resize
      particles.forEach(particle => {
        if (particle.x > canvas.width) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = canvas.height;
      });
    };

    // Wait for next frame to ensure canvas is properly sized
    requestAnimationFrame(() => {
      initParticles();
      animate();
    });

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmissionSuccess = () => {
    console.log("Form submission successful. Closing modal.");
    handleCloseModal();
  };

  return (
    <section className="relative min-h-[75vh] overflow-hidden rounded-3xl shadow-2xl mx-auto max-w-8xl group">
      {/* Canvas Background with Particles */}
      <div className="absolute top-0 left-0 w-full h-full z-0 rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #1a2332 50%, #0d1b2a 100%)'
        }}>
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-blue-950/40 z-[1] rounded-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-indigo-200 px-5 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4 text-indigo-300" />
          <span>From Pre-Seed to Post-IPO</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Welcome to the World's{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Largest Platform
          </span>{" "}
          for Startups
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Build, Connect & Grow with the next-gen startup network — powered by
          AI and Blockchain.
        </p>

        {/* CTA Button */}
        <div className='flex justify-center mt-6 mb-20'>
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
            <span className="relative z-10 tracking-wider">
              Join the Waitlist
            </span>
          </button>
        </div>
      </div>

      {/* Waitlist Modal */}
      {isModalOpen && (
        <UserFormModal
          onClose={handleCloseModal}
          onSubmitSuccess={handleSubmissionSuccess}
        />
      )}
    </section>
  );
};

export default HeroSection;