import React from 'react'
interface suggestionprops{
        idval:number;
      }
function suggestion({idval}:suggestionprops ) {
  return (
    <>
  <div className="max-w-7xl mx-auto px-6 py-20">
    
    <section className="mb-24">
      <div className="flex items-center justify-between mb-12">
        <div className="h-[1px] flex-1 bg-gray-200"></div>
        <h2 className="px-8 text-sm md:text-base font-semibold tracking-[0.3em] text-gray-800 uppercase font-sans">
          Designers Picks
        </h2>
        <div className="h-[1px] flex-1 bg-gray-200"></div>
      </div>

      <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth 
                  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        <div className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
            <img src="https://img.freepik.com/free-photo/curious-girl-home-clothes-posing-floor-indoor-photo-brunette-pretty-woman_197531-14050.jpg?semt=ais_hybrid&w=740&q=80" alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-[15px] tracking-tight text-gray-600 font-light mb-1">Green Amama Kurta Set</h3>
            <p className="text-[13px] font-bold tracking-widest uppercase text-gray-900">INR 13,500</p>
          </div>
        </div>

        <div className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
            <img src="https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-businessman-model-dressed-elegant-black-suit_158538-11503.jpg?semt=ais_hybrid&w=740&q=80" alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
            <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">Sale</span>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-[15px] tracking-tight text-gray-600 font-light mb-1">Green Ella Chanderi Suit Set</h3>
            <div className="flex items-center justify-center gap-3">
                <span className="text-[11px] text-gray-400 line-through">INR 16,800</span>
                <span className="text-[13px] font-bold tracking-widest uppercase text-red-600">INR 6,720</span>
            </div>
          </div>
        </div>

        <div className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100">
            <img src="https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-9-682x1024.jpg" alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-[15px] tracking-tight text-gray-600 font-light mb-1">Beige Arith Suit Set</h3>
            <div className="flex items-center justify-center gap-3">
                <span className="text-[11px] text-gray-400 line-through">INR 18,500</span>
                <span className="text-[13px] font-bold tracking-widest uppercase text-red-600">INR 14,800</span>
            </div>
          </div>
        </div>

        <div className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100">
            <img src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-black-jacket-jeans-fashion-male-posing-studio-near-grey-wall_158538-24002.jpg?semt=ais_hybrid&w=740&q=80" alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-[15px] tracking-tight text-gray-600 font-light mb-1">Yellow Pratika Suit Set</h3>
            <p className="text-[13px] font-bold tracking-widest uppercase text-gray-900">INR 18,500</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 bg-white overflow-hidden">
  {/* Header Section */}
  <div className="flex items-center justify-between mb-16">
    <div className="h-[1px] flex-1 bg-gray-200"></div>
    <h2 className="px-8 text-sm md:text-base font-semibold tracking-[0.3em] text-gray-800 uppercase font-sans">
      New Arrivals
    </h2>
    <div className="h-[1px] flex-1 bg-gray-200"></div>
  </div>

  {/* Main Container - No Scroll */}
  <div className="max-w-7xl mx-auto px-4 md:px-12">
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
      
      {/* Left Product (Flanking) */}
      <div className="w-full md:w-[35%] transition-all duration-500 scale-90  hover:opacity-100">
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-overcoat-posing-studio_158538-11452.jpg" 
            alt="Product" 
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
          />
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-[13px] tracking-tight text-gray-400 font-light">Coffee Brown Anisa Maxi Dress</h3>
          <p className="text-[11px] font-bold text-gray-400">INR 7,140</p>
        </div>
      </div>

      {/* Center Product (HERO / BIGGER) */}
      <div className="w-full md:w-[44%] z-10 transition-transform duration-500 scale-105 shadow-2xl md:shadow-none">
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm ring-1 ring-black/5">
          <img 
            src="https://www.stylerave.com/wp-content/uploads/2025/02/adut-akeh.jpg" 
            alt="Product" 
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
          />
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-[18px] tracking-tight text-gray-900 font-medium mb-1">Signature Silk Set</h3>
          <p className="text-[15px] font-bold tracking-[0.2em] uppercase text-gray-900">INR 22,000</p>
          <button className="mt-6 px-8 py-3 border border-black text-[11px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            View Details
          </button>
        </div>
      </div>

      {/* Right Product (Flanking) */}
      <div className="w-full md:w-[35%] transition-all duration-500 scale-90  hover:opacity-100">
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img 
            src="https://images.unsplash.com/photo-1654358062106-a2d3b051fef9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBwb3NlfGVufDB8fDB8fHww" 
            alt="Product" 
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
          />
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-[13px] tracking-tight text-gray-400 font-light">Morning Chanderi</h3>
          <p className="text-[11px] font-bold text-gray-400">INR 14,000</p>
        </div>
      </div>

    </div>
  </div>
</section>

  </div>
    </>
  )
}

export default suggestion