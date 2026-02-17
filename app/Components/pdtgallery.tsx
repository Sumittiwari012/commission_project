"use client"
import React, { useEffect, useRef, useState } from 'react';

interface ModelPanel {
  imgurl1?: string; imgurl2?: string; imgurl3?: string;
  imgurl4?: string; imgurl5?: string; imgurl6?: string;
  imgurl7?: string; imgurl8?: string; imgurl9?: string;
  bgUrl?: string;
}

const Pdtgallery = (props: ModelPanel) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    props.imgurl1, props.imgurl2, props.imgurl3,
    props.imgurl4, props.imgurl5, props.imgurl6,
    props.imgurl7, props.imgurl8, props.imgurl9
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getPositionStyles = (index: number) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    return {
      top: `calc(${-row * 100}% - ${row * 16}px)`,
      left: `calc(${-col * 100}% - ${col * 16}px)`,
    };
  };

  return (
    <div ref={sectionRef} className="relative flex items-center justify-center min-h-screen p-4 bg-[#111] overflow-hidden">
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes colorify {
          0% { filter: grayscale(100%) brightness(0.7); }
          100% { filter: grayscale(0%) brightness(1.1); }
        }
        .item-animate {
          animation:
            fadeInScale 1.5s ease-out forwards,
            colorify 6.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-[30s] ease-linear"
        style={{
          backgroundImage: `url(${props.bgUrl ||
            'https://images.pexels.com/photos/17485738/pexels-photo-17485738.png'})`,
          transform: isVisible ? 'scale(1.2)' : 'scale(1)',
          filter: 'brightness(0.9)'
        }}
      />

      {/* MAIN CONTAINER */}
      <div
  className="
    relative z-10 
    w-[70vmin] h-[90vmin] max-w-[450px] max-h-[600px]
    bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl
    p-6 overflow-hidden     /* FIXED: prevents overflowing */
    
    /* MOBILE FIXES */
    md:w-[70vmin] md:h-[90vmin]
    w-[90vmin] h-[110vmin]  /* reduced height */
  "
>

        <div className="grid grid-cols-3 grid-rows-3 w-full h-full gap-4 relative">
          {images.map((url, index) => {
            if (!url) return null;
            const { top, left } = getPositionStyles(index);
            const titles = [
              "WOMENS", "KIDS", "STUDIO",
              "COLLECTION", "ACCESSORIES", "EDITORIAL",
              "ARCHIVE", "LOOKBOOK", "CONTACT"
            ];

            return (
              <div
                key={index}
                className={`group relative cursor-pointer opacity-0 grayscale ${isVisible ? 'item-animate' : ''}`}
                style={{
                  animationDelay: `${index * 0.2}s, ${2.5 + index * 0.2}s`,
                  zIndex: 1
                }}
                onMouseEnter={(e) => (e.currentTarget.style.zIndex = "100")}
                onMouseLeave={(e) => (e.currentTarget.style.zIndex = "1")}
              >

                {/* MAIN IMAGE CELL */}
                <div
  className="
    w-full h-full bg-cover bg-center rounded-sm sharp-img
  "
  style={{ backgroundImage: `url(${url})` }}
/>


                {/* HOVER ZOOM PANEL */}
                <div
                  className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[100] border border-white/30"
                  style={{
                    width: 'calc(300% + 32px)',
                    height: 'calc(300% + 32px)',
                    top: top,
                    left: left,
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(0%) brightness(1.1)',
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <h3 className="text-3xl md:text-5xl font-black italic text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] uppercase tracking-tighter">
                      {titles[index]}
                    </h3>
                    <div className="w-0 group-hover:w-24 h-[2px] bg-white mt-4 transition-all duration-1000 delay-100"></div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pdtgallery;
