import React from 'react'
import Spdtdesignright from './spdtdesignright';

interface inputprops{
        idval:number;
      }
function spdtdesign({idval}:inputprops) {
     const data = [
        { id: 1, src: "https://www.hancockfashion.com/cdn/shop/files/5579BGREEN_1_M.jpg?v=1734411915", label: "Emerald Silk", price: "$240", luminosity: 0 },
        { id: 2, src: "https://thehouseofrare.com/cdn/shop/products/HERO_76c59c07-ac65-40f5-96e4-1de84fcdee92.jpg?v=1743587556", label: "Midnight Coat", price: "$310", luminosity: 0 },
        { id: 3, src: "https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP7047.jpg?v=1683819034", label: "Dove Polo", price: "$180", luminosity: 0 },
        { id: 4, src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500", label: "Alabaster Tee", price: "$120", luminosity: 0 },
        { id: 5, src: "https://rukminim2.flixcart.com/image/480/640/xif0q/shirt/d/z/7/m-plan-shirts-hems-trends-original-imagyvjx5mpdha9x.jpeg?q=90", label: "Onyx Shirt", price: "$195", luminosity: 0 },
        { id: 6, src: "https://www.blackdenim.in/cdn/shop/files/0A0A6024_1.jpg?v=1726837920", label: "Ivory Knit", price: "$150", luminosity: 0 },
        { id: 7, src: "https://trendoye.com/cdn/shop/files/black-designer-saree-TSNJ-SMA-AYSH-4004_1200x.jpg?v=1731305012", label: "Slate Overcoat", price: "$290", luminosity: 0 }
      ];
      
  return (
    <>
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
  <main className="flex flex-col md:flex-row min-h-screen">
    {/* LEFT SECTION: Immersive Gallery */}
    <section className="w-full md:w-[47%] h-screen sticky top-0 overflow-hidden bg-[#f6f6f6]">
      <div 
  className="h-full flex flex-col overflow-y-auto snap-y snap-mandatory scroll-smooth 
             [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] 
             focus:outline-none"
>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div 
            key={i} 
            className="w-full h-full min-h-full snap-center relative flex items-center justify-center"
          >
            <img 
              src={data[idval - 1]?.src} 
              className="w-full h-full object-cover" 
              alt={`Product view ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
    <Spdtdesignright label={data[idval - 1]?.label} price={data[idval - 1]?.price} />
    
  </main>
</div>
        
    </>
  )
}

export default spdtdesign