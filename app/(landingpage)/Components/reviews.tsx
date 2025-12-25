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

  // Helper function to handle both directions
  const handleScroll = (direction:string) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      id="reviews"
      className="sticky top-0 flex min-h-screen w-full flex-col items-center justify-center
                 bg-slate-950 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-7xl mx-auto w-full px-8">
        {/* Header */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-2">
              Testimonials
            </h2>
            <h1 className="text-white text-4xl font-bold italic font-['Instrument_Sans']">
              What our clients say
            </h1>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 border border-white/10 rounded-full text-white
                         hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Scroll Left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() => handleScroll("right")}
              className="p-3 border border-white/10 rounded-full text-white
                         hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Scroll Right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar
                     scroll-smooth snap-x snap-mandatory pb-8"
        >
          {reviews.map((item) => (
            <div key={item.id} className="min-w-[calc(25%-1.25rem)] snap-start bg-slate-900 border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 group">
                <div>
                    <div className="flex text-blue-500 mb-4 text-xs">★★★★★</div>
                    <p className="text-slate-300 italic mb-8">{item.text}</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-600"></div>
                    <div>
                        <h4 className="text-white font-bold text-sm">{item.name}</h4>
                        <p className="text-slate-500 text-xs">{item.role}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;