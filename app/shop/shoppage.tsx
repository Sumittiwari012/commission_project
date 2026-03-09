"use client"
import React, { useState } from 'react'
import Link from 'next/link' 

const ShopPage = () => {
  const [openSection, setOpenSection] = useState<string | null>("COLLECTION");
  const [openSubSection, setOpenSubSection] = useState<string | null>(null);

  const collections = [
    "THE DAY DREAMER", "ADIVASI", "HAWA HAWAAII", 
    "ATITHI DEVO BHAVA", "BAHAR", "SAUGAT", "ABHAYA", "AAWAZ"
  ];

  const categoryData = {
    Women: [
      "View All", "Sarees", "Jamdani Sarees", "Kantha Sarees", 
      "Dresses", "Shirts", "Tunics", "Bottomwear", "Jackets"
    ],
    Kids: ["Jamdani Sarees"]
  };

  // Helper function to format strings for URLs
  const formatSlug = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, '-');
  };

  const toggleSection = (label: string) => {
    setOpenSection(openSection === label ? null : label);
  };

  const toggleSubSection = (label: string) => {
    setOpenSubSection(openSubSection === label ? null : label);
  };

  return (
    <main className="relative min-h-screen bg-[#8b965e] py-20 px-10 font-mono text-[#dcdcdc] overflow-hidden">
      
      <div className="flex flex-col space-y-6 max-w-2xl relative z-10">
        
        {/* CATEGORY SECTION */}
        <div className="space-y-4">
          <NavItem 
            label="CATEGORY" 
            isOpen={openSection === "CATEGORY"} 
            onClick={() => toggleSection("CATEGORY")} 
          />
          
          {openSection === "CATEGORY" && (
            <div className="flex flex-col space-y-4 pl-4 transition-all duration-300">
              {Object.entries(categoryData).map(([broadCat, items]) => (
                <div key={broadCat} className="space-y-2">
                  <div 
                    onClick={() => toggleSubSection(broadCat)}
                    className="flex items-center space-x-2 cursor-pointer group"
                  >
                    <span className={`text-lg tracking-wider uppercase transition-colors ${openSubSection === broadCat ? 'text-white' : 'group-hover:text-white opacity-90'}`}>
                      {broadCat}
                    </span>
                    <span className={`text-sm transition-transform duration-300 ${openSubSection === broadCat ? 'rotate-90' : ''}`}>
                      {">"}
                    </span>
                  </div>

                  {openSubSection === broadCat && (
                    <div className="flex flex-col space-y-1 pl-6 border-l border-[#dcdcdc]/20 transition-all">
                      {items.map((item) => (
                        <Link 
                          key={item} 
                          href={item === "View All" ? "/curation/" : `/curation/${formatSlug(item)}`}
                          className="text-left hover:text-white transition-colors text-base tracking-wider uppercase opacity-80 hover:opacity-100"
                        >
                          {item === "Jamdani Sarees" && broadCat === "Kids" ? `• ${item}` : item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* COLLECTION SECTION */}
        <div className="space-y-4">
          <NavItem 
            label="COLLECTION" 
            isOpen={openSection === "COLLECTION"} 
            onClick={() => toggleSection("COLLECTION")} 
          />
          
          {openSection === "COLLECTION" && (
            <div className="flex flex-col space-y-1 pl-4 transition-all duration-300">
              {collections.map((item) => (
                <Link 
                  key={item} 
                  href={`/curation/${formatSlug(item)}`}
                  className="text-left hover:text-white transition-colors text-lg tracking-wider uppercase"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6 pt-4">
          <Link href={`/curation/${formatSlug("NEW ARRIVAL")}`} className="block"><NavItem label="NEW ARRIVAL" /></Link>
          <Link href={`/curation/${formatSlug("BEST SELLER")}`} className="block"><NavItem label="BEST SELLER" /></Link>
          <Link href={`/curation/${formatSlug("SHOP THE LOOK")}`} className="block"><NavItem label="SHOP THE LOOK" /></Link>
        </div>
      </div>

      <FloatingFish delay="0s"   top="65%" scale={1.1} speed="40s" />
      <FloatingFish delay="-10s"  top="72%" scale={0.6} speed="55s" />
      <FloatingFish delay="-25s"  top="78%" scale={0.9} speed="48s" />
      <FloatingFish delay="-40s"  top="85%" scale={0.5} speed="65s" />
      <FloatingFish delay="-15s"  top="90%" scale={0.7} speed="52s" />

      <style jsx global>{`
        @keyframes swimPattern {
          0% { left: -150px; transform: rotateY(0deg); }
          49% { transform: rotateY(0deg); }
          50% { left: calc(100% + 50px); transform: rotateY(180deg); }
          99% { transform: rotateY(180deg); }
          100% { left: -150px; transform: rotateY(0deg); }
        }
        @keyframes wavy {
          0%, 100% { margin-top: 0px; rotate: -3deg; }
          50% { margin-top: -50px; rotate: 3deg; }
        }
        .fish-tank {
          position: absolute;
          width: 150px;
          pointer-events: none;
          z-index: 5;
          animation: swimPattern var(--speed) linear infinite;
          animation-delay: var(--delay);
        }
        .wave-layer {
          animation: wavy 8s ease-in-out infinite;
          animation-delay: var(--delay);
        }
        .fish-img {
          width: 100%;
          height: auto;
          opacity: 0.75;
          filter: drop-shadow(0 15px 10px rgba(0,0,0,0.15));
        }
      `}</style>
    </main>
  )
}

const FloatingFish = ({ delay, top, scale, speed }: { delay: string, top: string, scale: number, speed: string }) => (
  <div 
    className="fish-tank" 
    style={{ 
        top, 
        '--delay': delay, 
        '--speed': speed,
        transform: `scale(${scale})` 
    } as React.CSSProperties}
  >
    <div className="wave-layer">
      <img src="https://i.ibb.co/7fN5XYF/1-copy-1.png" alt="Fish" className="fish-img" />
    </div>
  </div>
);

const NavItem = ({ label, isOpen, onClick }: { label: string, isOpen?: boolean, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className="flex items-center justify-between w-full max-w-[300px] cursor-pointer group border-b border-transparent hover:border-[#dcdcdc] transition-all"
  >
    <span className={`text-xl font-medium tracking-widest transition-colors ${isOpen ? 'text-white' : 'group-hover:text-white'}`}>
      {label}
    </span>
    <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
      {">"}
    </span>
  </div>
);

export default ShopPage;