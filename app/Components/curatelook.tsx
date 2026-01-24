"use client"
import React, { useState, useEffect } from 'react';

function Curatelook() {
  const [activeItemId, setActiveItemId] = useState('item-1');

  // FORCE BACKGROUND ON MOUNT
  useEffect(() => {
    // Save original styles to restore them if the user leaves this page
    const originalStyle = window.getComputedStyle(document.body).backgroundColor;
    const originalImage = window.getComputedStyle(document.body).backgroundImage;

    // Apply the yellow background directly to the browser's root
    document.documentElement.style.backgroundColor = "#facc15";
    document.body.style.backgroundColor = "#facc15";
    document.body.style.backgroundImage = "none"; // This kills the grass background
    document.body.style.margin = "0";

    return () => {
      // Restore original styles when component unmounts
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
    /* The outer container now uses !important to fight off other CSS files */
    <div className="w-full min-h-screen bg-grey-400 !bg-[#656460] relative z-10">
      
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

        /* Force transparency off the main container */
        #root, .__next { background-color: #facc15 !important; }
      `}</style>

      <div className="text-[#2d2d2d] py-10 md:py-20 px-4 md:px-10 lg:px-20">
        <section className="max-w-[1440px] mx-auto font-montserrat">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch bg-grey-400 shadow-2xl overflow-hidden">
            
            {/* LEFT SIDE: INTERACTIVE IMAGE */}
            <div className="relative aspect-[3/5] overflow-hidden bg-grey-400">
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
            <div className="flex items-center justify-center text-center relative min-h-[500px] bg-grey-400">
              {products.map((item) => (
                <div 
                  key={item.id}
                  className={`transition-all duration-500 ease-in-out w-full flex flex-col items-center hover:scale-105 
                    ${activeItemId === item.id 
                      ? 'opacity-100 transform translateY(0) block' 
                      : 'opacity-0 transform translateY(5px) hidden'
                    }`}
                >
                  <div className="relative group h-[40%] w-1/2 overflow-hidden mb-6 shadow-md cursor-pointer">
                    <img 
                      src={item.mainImg} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <button className="absolute bottom-0 left-0 w-full bg-[#2d2d2d] text-white text-[11px] tracking-[0.2em] uppercase font-medium py-3 hover:bg-pink-600 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>

                  <div className="max-w-xs px-4">
                    <h3 className="font-serif text-xl uppercase tracking-widest mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                    <button className="mt-4 border-b border-black text-[9px] tracking-[0.3em] uppercase hover:text-pink-600 hover:border-pink-600 transition-colors">
                      Shop Look {item.id.split('-')[1]}
                    </button>
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

