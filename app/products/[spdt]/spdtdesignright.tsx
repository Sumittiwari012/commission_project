import React from 'react'
interface inputprops{
        label:string;
        price:string;
      }
function spdtdesignright({label, price}:inputprops) {
  return (
    <>
<section className="w-full md:w-[53%] bg-white p-6 md:p-16 lg:p-24 overflow-y-auto">
      <div className="max-w-xl mx-auto md:mx-0">
        
        {/* 1. Header: Breadcrumbs & Product Title */}
        <div className="mb-10">
          <nav className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-4 flex gap-2">
            <a href="#" className="hover:text-black">New In</a>
            <span>/</span>
            <a href="#" className="hover:text-black">Contemporary</a>
          </nav>
          <h1 className="text-3xl md:text-4xl font-light tracking-widest text-slate-900 uppercase mb-2">
           {label}
          </h1>
          <p className="text-xl text-slate-600 font-medium">{price}</p>
        </div>

        {/* 2. Color Selection (Hardcoded Swatch) */}
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-widest font-bold mb-4">
            Color: <span className="font-normal text-gray-500">White</span>
          </p>
          <div className="flex gap-3">
            {/* Active Color */}
            <button className="w-14 h-18 border border-black p-1 transition-all">
              <div className="w-full h-full bg-[#F5F5F5] flex items-center justify-center text-[10px] text-gray-400">
            
              </div>
            </button>
            
          </div>
        </div>

        {/* 3. Size Selection */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <p className="text-[11px] uppercase tracking-widest font-bold">Size:</p>
            <button className="text-[10px] uppercase tracking-widest underline text-gray-400 hover:text-black">
              Size Guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <button 
                key={size}
                className={`min-w-[60px] h-11 border text-xs font-medium transition-all flex items-center justify-center px-4 ${
                  size === 'M' ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black text-slate-900'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Action Buttons (Standard transactional UI) */}
        <div className="space-y-3 mb-12">
          <button className="w-full py-4 border border-black text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white transition-all duration-300">
            Add to Studio Bag
          </button>
          <button className="w-full py-4 bg-black text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-slate-800 transition-all">
            Buy it Now
          </button>
        </div>

        {/* 5. Product Details (Collapsible/List Style) */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-sm leading-relaxed text-slate-600 font-light mb-8">
            Round neck top crafted in handloom fabric with selvedge detailing at the hem and open sleeves. 
            Panelled construction with gathers placed along the sides, accented with signature floral cross-stitch embroidery.
          </p>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Composition</span>
              <span className="text-[11px] font-medium text-slate-900">100% Handloom Cotton</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Care</span>
              <span className="text-[11px] font-medium text-slate-900">Dry Clean Only</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Fit</span>
              <span className="text-[11px] font-medium text-slate-900">Relaxed Fit</span>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default spdtdesignright