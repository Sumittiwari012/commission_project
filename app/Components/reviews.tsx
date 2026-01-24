"use client";
import React, { useRef } from "react";

function Reviews() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const reviews = [
    { id: 1, name: "Alex Rivera", role: "Creative Director", text: "The attention to detail in the editorial collection is simply unmatched. A true studio masterpiece." },
    { id: 2, name: "Sarah Chen", role: "Fashion Stylist", text: "Innovative designs that push the boundaries of modern street style. Highly recommended." },
    { id: 3, name: "Marcus Thorne", role: "Photographer", text: "Clean lines and premium materials. These pieces photograph beautifully in any light." },
    { id: 4, name: "Elena Rossi", role: "Trend Analyst", text: "A perfect blend of comfort and high-fashion aesthetics. This is the future of retail." },
    { id: 5, name: "James Wilson", role: "Model", text: "The fit is impeccable. You can feel the quality of the fabric the moment you put it on." },
    { id: 6, name: "Mia Takahashi", role: "Boutique Owner", text: "Our customers can't get enough of the Winter Lookbook. It sold out within days." },
    { id: 7, name: "David Vance", role: "Design Lead", text: "Bold choices and a sophisticated palette. This brand understands the modern minimalist." }
  ];

  const handleScroll = (direction: string) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -sliderRef.current.offsetWidth : sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    /* Changed py-20 to pt-20 and removed justify-center */
    <div
      id="reviews"
      className="flex min-h-screen w-full flex-col items-center bg-[#708090] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] pt-20"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 flex-grow">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="text-blue-500 font-semibold tracking-[0.3em] uppercase text-[10px] md:text-sm mb-3">
              Testimonials
            </h2>
            <h1 className="text-white text-3xl md:text-5xl font-bold italic font-['Instrument_Sans'] tracking-tight">
              What our clients say
            </h1>
          </div>

          <div className="hidden md:flex gap-3">
            <button onClick={() => handleScroll("left")} className="p-4 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button onClick={() => handleScroll("right")} className="p-4 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-10
                     [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {reviews.map((item) => (
            <div
              key={item.id}
              className="min-w-full md:min-w-[calc(25%-1.25rem)] snap-center md:snap-start
                         bg-slate-900/80 backdrop-blur-lg p-10 md:p-8 rounded-[2rem]
                         border border-white/5 hover:border-blue-500/30
                         transition-all duration-500 shadow-2xl group"
            >
              <div className="flex justify-between items-start mb-8">
                 <div className="text-blue-500 text-lg tracking-widest">★★★★★</div>
                 <span className="text-4xl text-white/5 font-serif">“</span>
              </div>

              <p className="text-slate-200 italic mb-10 leading-relaxed text-lg md:text-sm md:h-24 overflow-hidden">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-900 border border-white/10" />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide mb-1">
                    {item.name}
                  </h4>
                  <p className="text-blue-400/60 text-[10px] font-bold uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4 mb-20">
           <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
           <div className="w-1 h-1 bg-white/20 rounded-full"></div>
           <div className="w-1 h-1 bg-white/20 rounded-full"></div>
        </div>
      </div>

      
    </div>
  );
}

export default Reviews;