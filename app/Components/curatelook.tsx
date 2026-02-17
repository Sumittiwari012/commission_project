"use client"
import React, { useState, useEffect } from 'react';

function Curatelook() {
  const [activeItemId, setActiveItemId] = useState('item-1');

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).backgroundColor;
    const originalImage = window.getComputedStyle(document.body).backgroundImage;

    document.documentElement.style.backgroundColor = "#a8a7a0";
    document.body.style.backgroundColor = "#a8a7a0";
    document.body.style.backgroundImage = "none";
    document.body.style.margin = "0";

    return () => {
      document.documentElement.style.backgroundColor = originalStyle;
      document.body.style.backgroundColor = originalStyle;
      document.body.style.backgroundImage = originalImage;
    };
  }, []);

  const products = [
    {
      id: 'item-1',
      title: 'Vintage Jhumkas',
      description: 'Fine hand-painted enamel jewelry with freshwater pearls.',
      mainImg: 'https://images.pexels.com/photos/27992044/pexels-photo-27992044.jpeg',
      top: '35%',
      left: '20%',
    },
    {
      id: 'item-2',
      title: 'Crimson Drape',
      description: 'Luxurious silk fabric featuring heritage block prints.',
      mainImg: 'https://images.pexels.com/photos/18108801/pexels-photo-18108801.jpeg',
      top: '55%',
      left: '58%',
    },
    {
      id: 'item-3',
      title: 'Ancestral Gold',
      description: 'Intricate zari work inspired by 16th-century patterns.',
      mainImg: 'https://images.pexels.com/photos/3687510/pexels-photo-3687510.jpeg',
      top: '48%',
      left: '30%',
    },
    {
      id: 'item-4',
      title: 'Floral Potli',
      description: 'Signature velvet accessory with handcrafted tassels.',
      mainImg: 'https://images.pexels.com/photos/27239700/pexels-photo-27239700.png',
      top: '72%',
      left: '42%',
    },
  ];

  return (
    <div className="w-full min-h-screen relative z-10">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.4); opacity: 0.8; }
        }
        .animate-pulse-heart {
          animation: heartbeat 2s ease-in-out infinite;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -12px;
          margin-left: -12px;
        }

        #root, .__next { background-color: #a8a7a0 !important; }
      `}</style>

      {/* REDUCED MOBILE PADDING: py-6 changed to pt-2 pb-0 */}
      <div className="text-[#2d2d2d] pt-2 pb-0 md:py-20 px-4 md:px-10 lg:px-20">
        <section className="max-w-[1440px] mx-auto font-montserrat">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch overflow-hidden">
            
            {/* LEFT SIDE: MAIN IMAGE */}
            <div className="relative aspect-[2/3] md:aspect-[2/3.5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&q=80&w=1000"
                alt="Ivory Bridal"
                className="w-full h-full object-cover"
              />
              {products.map((item) => (
                <div 
                  key={item.id}
                  className="absolute" 
                  style={{ top: item.top, left: item.left }}
                  onMouseEnter={() => setActiveItemId(item.id)}
                  onClick={() => setActiveItemId(item.id)}
                >
                  <svg 
                    className="animate-pulse-heart text-pink-500 pointer-events-none" 
                    width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <div 
                    className={`relative z-10 w-3 h-3 bg-white rounded-full cursor-pointer transition-transform duration-300 shadow-sm 
                      ${activeItemId === item.id ? 'scale-[2.5]' : ''}`}
                  ></div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE: DYNAMIC PRODUCT CARDS */}
            {/* REDUCED min-h for mobile to pull content up */}
            <div className="flex items-start md:items-center justify-center text-center relative min-h-[250px] md:min-h-[500px]">
              {products.map((item) => (
                <div 
                  key={item.id}
                  className={`transition-all duration-500 ease-in-out w-full flex 
                    flex-row items-center px-4 py-3
                    md:flex-col md:justify-center md:px-0 md:py-0
                    ${activeItemId === item.id ? 'opacity-100 flex' : 'opacity-0 hidden'}`}
                >
                  {/* Product Thumbnail */}
                  <div className="relative group w-1/2 md:w-1/2 overflow-hidden shadow-lg cursor-pointer flex-shrink-0">
                    <img 
                      src={item.mainImg} 
                      alt={item.title}
                      className="w-full aspect-[4/5] md:aspect-auto h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <button className="hidden md:block absolute bottom-0 left-0 w-full bg-[#2d2d2d] text-white text-[11px] tracking-[0.2em] uppercase font-medium py-3 hover:bg-pink-600 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="w-1/2 md:w-full text-left md:text-center pl-6 md:pl-0 md:mt-6">
                    <h3 className="font-serif text-lg md:text-xl uppercase tracking-widest mb-1 md:mb-2 text-[#2d2d2d]">
                      {item.title}
                    </h3>
                    <p className="text-[11px] md:text-[13px] leading-relaxed text-gray-700 line-clamp-4 md:line-clamp-none">
                      {item.description}
                    </p>
                    <button className="mt-3 md:mt-4 border-b border-black text-[9px] tracking-[0.3em] uppercase hover:text-pink-600 hover:border-pink-600 transition-colors">
                      Shop Look {item.id.split('-')[1]}
                    </button>
                    <div className="md:hidden mt-3">
                         <button className="bg-[#2d2d2d] text-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                           Add to Bag +
                         </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Curatelook;