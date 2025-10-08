import ankur from "../../assets/Ankur shukla.jpg";
import vivek from "../../assets/vivek_k.png"
import bhanu from "../../assets/Bhanu.png"
import jayant from "../../assets/jayant.jpeg"
import mandal from "../../assets/ankur_mandal.jpeg"
import saurav from "../../assets/Saurav.png"
// "use client";

// import { useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const mentors = [
//   { name: "Vivek KV", role: "IAS, IIM Calcutta", image: vivek },
//   { name: "Dr. Ankur Shukla", role: "Prof. Finance & Strategy, IIM Ranchi", image: ankur },
//   { name: "Bhanu Pratap", role: "Co-founder at Mediversal HealthCare", image: bhanu },
//   { name: "Jayant Gandhi", role: "Co-founder at Mediversal HealthCare", image: jayant },
//   { name: "Ankur Mandal", role: "DoppleIQ, IIM Calcutta", image: mandal },
// ];

// export default function MentorsSection() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
  
//   // We want to show 3 items, and slide by 3 items.
//   const cardsPerPage = 3;
//   const totalCards = mentors.length;
//   // Calculate the total number of pages/slides needed
//   const totalPages = Math.ceil(totalCards / cardsPerPage);

//   const slideToPage = (pageIndex: number) => {
//     if (!scrollContainerRef.current) return;

//     // 1. Calculate the distance to scroll (width of one card * 3 cards)
//     // We assume all mentor cards have equal width defined by 'lg:w-1/3'
//     const container = scrollContainerRef.current;
    
//     // Check if the card element exists to get its calculated width
//     const firstCard = container.querySelector('.mentor-card') as HTMLElement | null;
//     if (!firstCard) return;

//     // The container's width is max-w-7xl, but the calculation needs to be based on the card's width
//     // The width of a single card is container.clientWidth / 3 (due to flex and w-1/3)
//     const cardWidth = container.clientWidth / cardsPerPage;
    
//     // 2. Set the scroll position
//     const scrollPosition = pageIndex * cardsPerPage * cardWidth;
    
//     // We scroll smoothly to the calculated position
//     container.scrollTo({
//       left: scrollPosition,
//       behavior: 'smooth',
//     });

//     setCurrentPage(pageIndex);
//   };


//   const goToPrev = () => {
//     const newPage = currentPage === 0 ? totalPages - 1 : currentPage - 1;
//     slideToPage(newPage);
//   };

//   const goToNext = () => {
//     const newPage = currentPage === totalPages - 1 ? 0 : currentPage + 1;
//     slideToPage(newPage);
//   };


//   // Helper to render a single mentor card
//   const MentorCard = ({ m }: { m: typeof mentors[0] }) => (
//     <div
//         className="mentor-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4" // w-1/3 for desktop, w-1/2 for tablet, w-full for mobile
//     >
//         <div 
//             className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center h-full"
//         >
//             <img
//                 src={m.image}
//                 alt={m.name}
//                 className="w-24 h-24 rounded-full object-cover mb-4 ring-2 ring-indigo-500"
//             />
//             <h3 className="text-lg font-semibold">{m.name}</h3>
//             <p className="text-sm text-indigo-400">{m.role}</p>
//         </div>
//     </div>
//   );

//   return (
//     <section className="py-16 bg-gray-900 text-gray-100">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Title Section */}
//         <h2 className="text-3xl text-center sm:text-4xl font-bold text-white mb-2">
//           <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
//             Get mentorship
//           </span>{" "}
//           from brightest minds
//         </h2>
//         <p className="text-xl mb-12 text-center text-gray-300 max-w-4xl mx-auto">
//           Access top-tier advisors and mentors with backgrounds from IITs, IIMs, Harvard, and global accelerators.
//         </p>

//         {/* Carousel Container */}
//         <div className="relative">
            
//           {/* Scrollable Track */}
//           <div 
//             ref={scrollContainerRef}
//             className="flex overflow-x-hidden snap-x snap-mandatory py-4"
//             // We are deliberately hiding the scrollbar here as we control scrolling via buttons
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
//           >
//             {mentors.map((m, index) => (
//               <MentorCard key={index} m={m} />
//             ))}
//           </div>

//           {/* Navigation Buttons (Absolute Positioned) */}
//           {/* Previous Button */}
//           <button
//             onClick={goToPrev}
//             className="absolute top-1/2 cursor-pointer left-0 transform -translate-y-1/2 -ml-12 
//                        bg-indigo-600 p-3 rounded-full shadow-lg text-white 
//                        hover:bg-indigo-500 transition duration-300 z-10 
//                        focus:outline-none focus:ring-4 focus:ring-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
//             aria-label="Previous page"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           {/* Next Button */}
//           <button
//             onClick={goToNext}
//             className="absolute cursor-pointer top-1/2 right-0 transform -translate-y-1/2 -mr-12 
//                        bg-indigo-600 p-3 rounded-full shadow-lg text-white 
//                        hover:bg-indigo-500 transition duration-300 z-10 
//                        focus:outline-none focus:ring-4 focus:ring-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
//             aria-label="Next page"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
        
//         {/* Page Indicators */}
//         <div className="flex justify-center mt-10 space-x-2">
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => slideToPage(index)}
//               className={`
//                 h-3 w-3 rounded-full transition-all duration-300
//                 ${index === currentPage ? 'bg-indigo-500 w-8' : 'bg-gray-600'}
//               `}
//               aria-label={`Go to page ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import ankur from "../../assets/Ankur shukla.jpg";
// import vivek from "../../assets/vivek_k.png";
// import bhanu from "../../assets/Bhanu.png";
// import jayant from "../../assets/jayant.jpeg";
// import mandal from "../../assets/ankur_mandal.jpeg";

// const mentors = [
//   { name: "Vivek KV", role: "IAS, IIM Calcutta", image: vivek },
//   { name: "Dr. Ankur Shukla", role: "Prof. Finance & Strategy, IIM Ranchi", image: ankur },
//   { name: "Bhanu Pratap", role: "Co-founder at Mediversal HealthCare", image: bhanu },
//   { name: "Jayant Gandhi", role: "Co-founder at Mediversal HealthCare", image: jayant },
//   { name: "Ankur Mandal", role: "DoppleIQ, IIM Calcutta", image: mandal },
// ];

// export default function MentorsSection() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const cardsPerPage = 3;
//   const totalCards = mentors.length;
//   const totalPages = Math.ceil(totalCards / cardsPerPage);

//   const slideToPage = (pageIndex: number) => {
//     if (!scrollContainerRef.current) return;
//     const container = scrollContainerRef.current;
//     const cardWidth = container.clientWidth / cardsPerPage;
//     const scrollPosition = pageIndex * cardsPerPage * cardWidth;

//     container.scrollTo({ left: scrollPosition, behavior: "smooth" });
//     setCurrentPage(pageIndex);
//   };

//   const goToPrev = () => {
//     const newPage = currentPage === 0 ? totalPages - 1 : currentPage - 1;
//     slideToPage(newPage);
//   };

//   const goToNext = () => {
//     const newPage = currentPage === totalPages - 1 ? 0 : currentPage + 1;
//     slideToPage(newPage);
//   };

//   const MentorCard = ({ m }: { m: typeof mentors[0] }) => (
//     <div className="cursor-pointer mentor-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-6">
//       <div
//         className="bg-gray-800 border border-gray-700 p-8 rounded-3xl shadow-lg 
//                    hover:shadow-2xl hover:scale-105 transition-all duration-300
//                    flex flex-col items-center text-center h-full"
//       >
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/40 to-purple-400/30 rounded-full blur-lg"></div>
//           <img
//             src={m.image}
//             alt={m.name}
//             className="w-36 h-36 rounded-full object-cover mb-5 ring-4 ring-indigo-500 relative z-10"
//           />
//         </div>
//         <h3 className="text-xl font-semibold text-white mt-2">{m.name}</h3>
//         <p className="text-sm text-indigo-300 mt-1">{m.role}</p>
//       </div>
//     </div>
//   );

//   return (
//     <section id="mentors" className="py-20 bg-gray-900 text-gray-100 rounded-2xl">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Title Section */}
//         <h2 className="text-3xl text-center sm:text-4xl font-bold text-white mb-3">
//           <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
//             Get Mentorship
//           </span>{" "}
//           From Brightest Minds
//         </h2>
//         <p className="text-lg sm:text-xl mb-12 text-center text-gray-300 max-w-3xl mx-auto">
//           Access top-tier advisors and mentors with backgrounds from IITs, IIMs, Harvard, and global accelerators.
//         </p>

//         {/* Carousel */}
//         <div className="relative">
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-hidden snap-x snap-mandatory py-4"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {mentors.map((m, index) => (
//               <MentorCard key={index} m={m} />
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={goToPrev}
//             className="cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2 -ml-10
//                        bg-indigo-600 p-3 rounded-full shadow-lg text-white
//                        hover:bg-indigo-500 transition duration-300 z-10"
//             aria-label="Previous page"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={goToNext}
//             className="cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 -mr-10
//                        bg-indigo-600 p-3 rounded-full shadow-lg text-white
//                        hover:bg-indigo-500 transition duration-300 z-10"
//             aria-label="Next page"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Page Indicators */}
//         <div className="flex justify-center mt-10 space-x-2">
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => slideToPage(index)}
//               className={`h-3 w-3 rounded-full transition-all duration-300 ${
//                 index === currentPage ? "bg-indigo-500 w-8" : "bg-gray-600"
//               }`}
//               aria-label={`Go to page ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const mentors = [
  { name: "Saurav Kumar", role: "Founder Orion Eduverse, IIM Calcutta", image: saurav },
  { name: "Vivek KV", role: "IAS, IIM Calcutta", image: vivek },
  { name: "Dr. Ankur Shukla", role: "Prof. Finance & Strategy, Ph.D IIM Ranchi", image: ankur },
  { name: "Bhanu Pratap", role: "Co-founder at Mediversal HealthCare", image: bhanu },
  { name: "Jayant Gandhi", role: "Co-founder at Mediversal HealthCare", image: jayant },
  { name: "Ankur Mandal", role: "DoppleIQ, IIM Calcutta", image: mandal },
];

export default function MentorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Keep cardsPerView state
  const [cardsPerView, setCardsPerView] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Detect screen size and set cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      let newCardsPerView = 1;
      if (width >= 1024) {
        newCardsPerView = 3; // Desktop: 3 cards
      } else if (width >= 768) {
        newCardsPerView = 2; // Tablet: 2 cards
      }
      setCardsPerView(newCardsPerView);
      // Reset index to 0 when card view changes to prevent being stuck on a non-existent index
      setCurrentIndex(0); 
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalCards = mentors.length;
  // **NEW:** Calculate the total number of "pages" or slides needed
  const totalPages = Math.ceil(totalCards / cardsPerView);

  const slideToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    
    // Calculate the width of one "page" (cardsPerView * card width)
    // The total scrollable width divided by the number of total pages.
    const scrollablePageWidth = container.scrollWidth / totalPages;
    
    // Ensure index does not exceed totalPages - 1
    const newIndex = Math.max(0, Math.min(index, totalPages - 1));
    
    const scrollPosition = newIndex * scrollablePageWidth;

    container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    setCurrentIndex(newIndex);
  };

  const goToPrev = () => {
    // Navigate to the previous page index
    const newIndex = currentIndex === 0 ? totalPages - 1 : currentIndex - 1;
    slideToIndex(newIndex);
  };

  const goToNext = () => {
    // Navigate to the next page index
    const newIndex = currentIndex === totalPages - 1 ? 0 : currentIndex + 1;
    slideToIndex(newIndex);
  };

  const MentorCard = ({ m }: { m: typeof mentors[0] }) => (
    // **IMPORTANT:** Added flex-basis and snap-align to make the carousel work correctly
    // flex-basis controls the width of the card.
    <div 
        className="cursor-pointer mentor-card flex-shrink-0 p-6 snap-start"
        style={{ flexBasis: `${100 / cardsPerView}%` }}
    >
      <div
        className="bg-gray-800 border border-gray-700 p-8 rounded-3xl shadow-lg
                     hover:shadow-2xl hover:scale-105 transition-all duration-300
                     flex flex-col items-center text-center h-full"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/40 to-purple-400/30 rounded-full blur-lg"></div>
          <img
            src={m.image}
            alt={m.name}
            className="w-36 h-36 rounded-full object-cover mb-5 ring-4 ring-indigo-500 relative z-10"
          />
        </div>
        <h3 className="text-xl font-semibold text-white mt-2">{m.name}</h3>
        <p className="text-sm text-indigo-300 mt-1">{m.role}</p>
      </div>
    </div>
  );

  return (
    <section id="mentors" className="py-20 bg-gray-900 text-gray-100 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <h2 className="text-3xl text-center sm:text-4xl font-bold text-white mb-3">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get Mentorship
          </span>{" "}
          From Brightest Minds
        </h2>
        <p className="text-lg sm:text-xl mb-12 text-center text-gray-300 max-w-3xl mx-auto">
          Connect with world-class advisors and mentors from IITs, IIMs, LSE, BCG and McKinsey alongside investors and accelerators with a global footprint.
        </p>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            // Removed overflow-x-hidden, added overflow-x-scroll to enable scrolling
            className="flex overflow-x-scroll snap-x snap-mandatory py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {mentors.map((m, index) => (
              <MentorCard key={index} m={m} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2 -ml-4 md:-ml-10
                         bg-indigo-600 p-3 rounded-full shadow-lg text-white
                         hover:bg-indigo-500 transition duration-300 z-20" // Increased z-index
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 -mr-4 md:-mr-10
                         bg-indigo-600 p-3 rounded-full shadow-lg text-white
                         hover:bg-indigo-500 transition duration-300 z-20" // Increased z-index
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center mt-10 space-x-2">
          {/* Indicators are based on totalPages, not totalCards */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => slideToIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-indigo-500 w-8" : "bg-gray-600"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}