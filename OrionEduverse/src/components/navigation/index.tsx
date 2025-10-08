// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"
// import OrionLogo from "../../assets/Orion__logo.png"
// import UserFormModal from '../UserFormModal';
// // Import the new auth components at the top
// // import AuthModals from "@/components/auth/auth-modals"

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const handleOpenModal = () => setIsModalOpen(true);
  
//   const handleCloseModal = () => setIsModalOpen(false);

//   // Function to run after successful submission (e.g., close modal and log)
//   const handleSubmissionSuccess = () => {
//     console.log('Form submission successful. Closing modal.');
//     handleCloseModal();
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//     setIsMenuOpen(false)
//   }

//   const navItems = [
//     { label: "Share Needs", id: "share-needs" },
//     { label: "Explore", id: "explore" },
//     { label: "Host Sessions", id: "host-sessions" },
//     { label: "Get Funded", id: "get-funded" },
//   ]

//   return (
//     <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <img src={OrionLogo} alt="Orion Logo" className="h-14 w-auto" />
//           </div>
//           <button className="bg-amber-300 p-1.5 rounded-2xl cursor-pointer" onClick={handleOpenModal}>
//               Join the Waitlist
//           </button>

          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200"
//               >
//                 {item.label}
//               </button>
//             ))}
//             {/* Replace the Login and Sign Up buttons section with: */}
//             {/* <div className="flex items-center space-x-4">
//               <AuthModals />
//             </div> */}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="h-6 w-6 text-gray-300" /> : <Menu className="h-6 w-6 text-gray-300" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-gray-700 bg-gray-900/90">
//             <div className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="text-left text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200"
//                 >
//                   {item.label}
//                 </button>
//               ))}
//               {/* Also update the mobile navigation section to use AuthModals: */}
//               {/* <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700">
//                 <AuthModals />
//               </div> */}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navigation
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import OrionLogo from "../../assets/logoimg.png"
// import LogoWord from "../../assets/OmVerg_word.png";
// import AuthModals from "@/components/auth/auth-modals" // Kept for context

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: "Share Needs", id: "share-needs" },
    { label: "Get Funded", id: "get-funded" },
    { label: "Mentors", id: "mentors" },
    { label: "Host Sessions", id: "host-sessions" },
    { label: "Explore", id: "explore" },
  ]

  return (
    <>
      {/* 1. The Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              {/* NOTE: Make sure OrionLogo path is correct or use a placeholder */}
              <img src={OrionLogo} alt="Orion Logo" className="h-10 w-auto" />
              {/* <img src={LogoWord} alt="Orion Logo" className="h-5 ml-[0px] w-auto" /> */}
              <h3 className="text-white font-bold">Om<span className="text-fuchsia-500">Verg</span></h3>
            </div>

            {/* Primary Action Button (Desktop/Mobile) */}
            {/* Styled to match your existing button but slightly adjusted for Tailwind */}
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 ">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-blue-400 font-medium transition-colors cursor-pointer duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6 text-gray-300" /> : <Menu className="h-6 w-6 text-gray-300" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700 bg-gray-900/90">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navigation