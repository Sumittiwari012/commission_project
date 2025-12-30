import React from 'react';

function Gallery() {
  const gridImages = [
    { id: 1, src: "https://i.ibb.co/HLFH1zy9/image.jpg", title: "Traditional Weave" },
    { id: 2, src: "https://gaatha.com/wp-content/uploads/2010/07/WOVEN-PIXELS.jpg", title: "Process" },
    { id: 3, src: "https://i.ibb.co/0RV7LZQ2/image.jpg", title: "Heritage" },
    { id: 4, src: "https://images.news18.com/ibnlive/uploads/2025/08/image-2025-08-0ef78f3694fb557031eb4b2f550cfde7-4x3.jpg", title: "Artistry" },
  ];

  const modelPanels = [
    {
      id: 1,
      src: "https://as1.ftcdn.net/jpg/01/06/61/08/1000_F_106610803_2QtZeWUw2cdBD6LmziySFBGQ26YTMkAF.jpg",
      title: "Editorial Vol. 1",
      subtitle: "Summer Collection 2024",
    },
  ];

  return (
    <div id="gallery" className="sticky top-0 flex flex-col md:flex-row h-screen w-full overflow-hidden bg-[#808080] font-['Instrument_Sans']">
      
      {/* 1. Large Background Title */}
      <div className="absolute top-10 left-10 z-0 opacity-5 pointer-events-none select-none">
        <h2 className="text-[15vw] font-black uppercase leading-none text-white italic">
          Archive
        </h2>
      </div>

      {/* Left Section: Balanced Grid (65% Width) */}
      <div className="relative z-10 w-full md:w-[65%] h-full p-8 md:p-16">
        <div className="grid grid-cols-2 grid-rows-2 h-full gap-6">
          {gridImages.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-2xl bg-[#808080] border border-white/10"
            >
              <img 
                src={item.src} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110" 
                alt={item.title} 
              />
              {/* Modern minimalist overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <p className="text-white text-xs uppercase tracking-[0.3em] font-bold border-b border-white/50 pb-1">
                   {item.title}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Featured Focus (35% Width) */}
      <div className="relative z-10 w-full md:w-[35%] h-full flex flex-col items-center justify-center p-8 bg-slate-900/30 backdrop-blur-3xl border-l border-white/10">
        
        {/* Floating "Gallery" Heading */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <h2 className="font-['Instrument_Sans'] text-[50px] font-normal text-[#f6eeee]">
         Gallery
        </h2>
      </div>

        {modelPanels.map((panel) => (
          <div key={panel.id} className="relative w-full max-w-sm h-[75%] group rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20">
            <img 
              src={panel.src} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt={panel.title}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-10">
                <h3 className="text-white text-3xl font-bold tracking-tight mb-1 group-hover:text-amber-500 transition-colors">
                  {panel.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 uppercase tracking-[0.2em] font-medium">{panel.subtitle}</p>
                
                <button className="px-10 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-amber-600 hover:text-white transition-all transform active:scale-95">
                  View Story
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;