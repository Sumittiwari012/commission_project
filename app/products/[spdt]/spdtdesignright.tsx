"use client";
import { privateApi } from '@/lib/app';
import Link from 'next/link';
import { useEffect, useState } from 'react'
interface inputprops{
        productid:number;
        productName: string;
        price: number;
        color: string;
        description: string;
        composition: string;
        care: string;
        fit: string;
        cartItemExists:boolean;
      }
function SpdtDesignRight({productid,productName, price, color, description, composition, care, fit,cartItemExists}:inputprops) {

const [isAdded, setIsAdded] = useState<boolean>(cartItemExists);


const handleAddToBag = async () => {
  if (isAdded) return;

  try {
    await privateApi.post(
      '/User/addToCart',
      null,
      { params: { productId: productid } }
    );

    setIsAdded(true); // ✅ change color + disable
  } catch (error) {
    console.error("Failed to add item to cart", error);
  }
};
useEffect(() => {
  setIsAdded(cartItemExists);
}, [cartItemExists]);

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
           {productName}
          </h1>
          <p className="text-xl text-slate-600 font-medium">{price}</p>
        </div>

        {/* 2. Color Selection (Hardcoded Swatch) */}
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-widest font-bold mb-4">
            Color: <span className="font-normal text-gray-500">{color}</span>
          </p>
          <div className="flex gap-3">
            {/* Active Color */}
            <button className="w-14 h-18 border border-black p-1 transition-all">
              <div className="w-full h-full bg-[{color}] flex items-center justify-center text-[10px] text-gray-400">
            
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
          <button
  disabled={isAdded}
  onClick={handleAddToBag}
  className={`w-full py-4 text-[11px] uppercase tracking-[0.3em] font-bold
    transition-colors duration-300
    ${
      isAdded
        ? "bg-green-600 text-white cursor-not-allowed opacity-80"
        : "bg-black text-white cursor-pointer"
    }
  `}
>
  {isAdded ? "Added to Bag" : "Add to Studio Bag"}
</button>

          <Link href={`/checkout/${productid}`}>
            <button className="w-full py-4 bg-black text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-slate-800 transition-all">
              Buy it Now
            </button>
          </Link>
        </div>

        {/* 5. Product Details (Collapsible/List Style) */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-sm leading-relaxed text-slate-600 font-light mb-8">
            {description}
          </p>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Composition</span>
              <span className="text-[11px] font-medium text-slate-900">{composition}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Care</span>
              <span className="text-[11px] font-medium text-slate-900">{care}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Fit</span>
              <span className="text-[11px] font-medium text-slate-900">{fit}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default SpdtDesignRight