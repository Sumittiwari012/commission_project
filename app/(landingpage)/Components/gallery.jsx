import React from 'react';

function Gallery() {
  // Data for the 4-grid layout (Left)
  const gridImages = [
    { id: 1, src: "https://i.ibb.co/HLFH1zy9/image.jpg" },
    { id: 2, src: "https://i.ibb.co/kW0tqtZ/image.jpg" },
    { id: 3, src: "https://i.ibb.co/0RV7LZQ2/image.jpg" },
    { id: 4, src: "https://i.ibb.co/wF4cYkKr/image.jpg" },
  ];

  // Data for the narrow panels (Right)
  const modelPanels = [
    {
      id: 1,
      src: "https://as1.ftcdn.net/jpg/01/06/61/08/1000_F_106610803_2QtZeWUw2cdBD6LmziySFBGQ26YTMkAF.jpg",
      title: "Editorial Vol. 1",
      subtitle: "Summer Collection 2024",
    },
  ];

  return (
    <div id="gallery" className="sticky top-0 flex h-screen w-full shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden bg-gray-900">
      
      {/* Left Half */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 bg-[#37073E] h-full">
        {gridImages.map((item) => (
          <div key={item.id} className="border border-purple-400 flex items-center justify-center p-8 group overflow-hidden">
            <img 
              src={item.src} 
              className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105" 
              alt={`Gallery item ${item.id}`} 
            />
          </div>
        ))}
      </div>

      {/* Right Half - FIXED: Strictly defined h-full and items-center */}
      <div className="flex-1 bg-[#9C661F] flex items-center justify-center p-12 h-full">
        {modelPanels.map((panel) => (
          /* FIXED: Set a fixed width (w-80) and a percentage height (h-[85%]) to prevent image bloat */
          <div key={panel.id} className="w-[70%] h-[90%] relative rounded-3xl overflow-hidden group border border-white/20 shadow-2xl shrink-0">
            <img 
              src={panel.src} 
              /* FIXED: absolute + h-full forces the image to respect the container div, not its own 1000px height */
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt={panel.title}
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {panel.title}
              </h3>
              <p className="text-purple-200 text-sm mb-4">{panel.subtitle}</p>
              <button className="w-max px-6 py-2 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-purple-900 transition-colors">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-white drop-shadow-2xl">
          Gallery
        </h1>
        <p className="mt-4 text-lg text-purple-100 font-medium px-6 py-2 bg-black/40 backdrop-blur-sm rounded-full">
          Weekly Special 
        </p>
      </div>

    </div>
  );
}

export default Gallery;