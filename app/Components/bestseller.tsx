"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function Bestseller() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const images = section.querySelectorAll(".anim-layer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove fade-out & restart animations
            images.forEach((img: any) => {
              img.classList.remove("fade-out");

              // Restart CSS animations
              img.style.animation = "none";
              void img.offsetHeight; // force reflow
              img.style.animation = "";
            });
          } else {
            // When scrolling away
            images.forEach((img: any) => {
              img.classList.add("fade-out");
            });
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
       @keyframes revealCenter {
  from { 
    opacity: 0; 
    transform: translate(-50%, -50%) scale(0.90); 
    filter: blur(6px);
  }
  to { 
    opacity: 1; 
    transform: translate(-50%, -50%) scale(1); 
    filter: blur(0px);
  }
}

@keyframes revealCorners {
  from { 
    opacity: 0; 
    transform: scale(0.75); 
    filter: blur(8px);
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
    filter: blur(0); 
  }
}

/* smoother cubic easing */
.animate-center {
  animation: revealCenter 3.2s cubic-bezier(0.11, 0.65, 0.2, 1) forwards;
}

.animate-corner {
  animation: revealCorners 3.8s cubic-bezier(0.11, 0.65, 0.2, 1) forwards;
}

/* Fade-out effect stays smooth */
.fade-out {
  opacity: 0 !important;
  transition: opacity 0.8s ease-out;
}

      `}</style>

      <div
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-12 lg:py-20 overflow-hidden bg-[#f4f4f4]"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* LEFT SECTION */}
          <div className="max-w-md relative z-50 text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="font-['Playfair_Display'] text-3xl lg:text-5xl leading-tight text-[#1a1a1a] mb-6">
              Rishab Rikhiram Sharma in Torani
            </h1>
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg mb-8 font-light">
              Renowned Sitarist Rishab Rikhiram Sharma looked ethereal as he
              chose our Dahre Anjum Sherwani Set for his performance.
            </p>
            <Link href="products/Women-White-Shirts-1">
              <button className="bg-[#8c5c5c] text-white px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold hover:opacity-90 transition-opacity">
                Shop the Look
              </button>
            </Link>
          </div>

          {/* RIGHT COLLAGE */}
          <div className="relative h-[550px] lg:h-[700px] w-full mobile-collage-container">

            {/* 1. MAIN FOCAL */}
            <div className="anim-layer main-focal absolute top-1/2 left-1/2 w-[42%] h-[60%] z-30 shadow-2xl border-[6px] lg:border-[8px] border-[#f4f4f4] rounded-sm animate-center">
              <img
                src="https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. TOP LEFT */}
            <div className="anim-layer bg-top-left absolute top-0 left-2 w-[38%] h-[50%] z-0 animate-corner delay-1 origin-bottom-right">
              <img
                src="https://images.pexels.com/photos/19351175/pexels-photo-19351175.jpeg"
                className="w-full h-full object-cover shadow-lg rounded-sm opacity-90"
              />
            </div>

            {/* 3. TOP RIGHT */}
            <div className="anim-layer bg-top-right absolute top-8 right-2 w-[35%] h-[45%] z-0 animate-corner delay-2 origin-bottom-left">
              <img
                src="https://images.pexels.com/photos/29421072/pexels-photo-29421072.jpeg"
                className="w-full h-full object-cover shadow-lg rounded-sm"
              />
            </div>

            {/* 4. BOTTOM LEFT */}
            <div className="anim-layer bg-bottom-left absolute bottom-2 left-6 w-[32%] h-[40%] z-10 shadow-xl border-[4px] lg:border-[6px] border-[#f4f4f4] rounded-sm animate-corner delay-3 origin-top-right">
              <img
                src="https://images.pexels.com/photos/3393793/pexels-photo-3393793.jpeg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bestseller;
