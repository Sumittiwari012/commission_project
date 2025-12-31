"use client";
import React, { useState } from 'react';

function CheckoutPage() {
  const [showSummary, setShowSummary] = useState(false);

  const orderItems = [
    { id: 1, name: "Midnight Coat", size: "M", price: "₹24,310", img: "https://thehouseofrare.com/cdn/shop/products/HERO_76c59c07-ac65-40f5-96e4-1de84fcdee92.jpg?v=1743587556" },
    { id: 2, name: "Carolinae Silk Top", size: "S", price: "₹15,800", img: "https://mir-s3-cdn-cf.behance.net/projects/404/3ae68a197512361.Y3JvcCw0MzE0LDMzNzUsOTYsMA.jpg" }
  ];

  return (
    <main className="min-h-screen bg-white font-['Instrument_Sans'] text-gray-900">
      
      {/* 1. MOBILE COLLAPSIBLE HEADER (Optional Context) */}
      <div className="md:hidden sticky top-0 z-[60] bg-white border-b border-gray-100">
        <div className="px-6 py-4 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold">
          <span>Checkout</span>
          <span>₹40,110</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* LEFT: SHIPPING FORM (60%) */}
        <section className="w-full md:w-[60%] px-6 md:px-12 lg:px-24 py-12 md:py-20 md:border-r md:border-gray-100">
          <div className="max-w-xl ml-auto">
            <header className="mb-16">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4">Step 01 / Shipping</p>
              <h1 className="text-3xl md:text-5xl font-serif italic text-gray-800">Delivery Information</h1>
            </header>

            <form className="space-y-16">
              {/* Line-Based Minimalist Inputs */}
              <div className="space-y-16">
                <div className="relative group">
                  <input type="email" placeholder=" " className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm"/>
                  <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:top-3 peer-focus:top-0 pointer-events-none">Email Address</label>
                </div>

                <div className="grid grid-cols-2 gap-12">
                  <div className="relative">
                    <input type="text" placeholder=" " className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm" />
                    <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:top-3 peer-focus:top-0 pointer-events-none">First Name</label>
                  </div>
                  <div className="relative">
                    <input type="text" placeholder=" " className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm" />
                    <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:top-3 peer-focus:top-0 pointer-events-none">Last Name</label>
                  </div>
                </div>

                <div className="relative">
                  <input type="text" placeholder=" " className="peer w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm" />
                  <label className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:top-3 peer-focus:top-0 pointer-events-none">Street Address</label>
                </div>
              </div>

              {/* 2. MOBILE PRE-PAYMENT PRODUCT PREVIEW (Visible only on Mobile) */}
              <div className="md:hidden border-t border-gray-100 pt-12 mt-12">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-8">Confirm Your Selection</h3>
                <div className="space-y-6">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-6 items-center">
                      <div className="w-16 h-20 bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0">
                        <img src={item.img} className="w-full h-full object-cover grayscale" alt={item.name} />
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <div>
                          <h4 className="text-[10px] uppercase tracking-widest font-bold">{item.name}</h4>
                          <p className="text-[9px] text-gray-400">Size {item.size}</p>
                        </div>
                        <p className="text-xs font-bold">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Mobile Subtotal Line */}
                <div className="mt-10 pt-6 border-t border-gray-50 flex justify-between items-end">
                   <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400">Total (Complimentary Shipping)</span>
                   <span className="text-lg font-bold tracking-tighter">₹40,110</span>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full md:w-auto px-20 py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-xl">
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* RIGHT: DESKTOP ORDER SUMMARY (40%) */}
        <aside className="hidden md:block w-full md:w-[40%] px-12 lg:px-20 py-20 bg-gray-50 h-screen sticky top-0 overflow-y-auto">
          <div className="max-w-md">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold mb-12">Review Your Order</h3>
            
            <div className="space-y-10 mb-16">
              {orderItems.map((item) => (
                <div key={item.id} className="flex gap-8 group">
                  <div className="w-20 h-28 bg-white border border-gray-100 overflow-hidden">
                    <img src={item.img} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0" alt={item.name} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-gray-800 mb-1">{item.name}</h4>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-2">Size {item.size} / Qty 1</p>
                    <p className="text-xs font-bold tracking-widest">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-8 space-y-5">
              <div className="flex justify-between text-[11px] uppercase tracking-widest text-gray-400">
                <span>Subtotal</span>
                <span className="text-gray-900">₹40,110</span>
              </div>
              <div className="flex justify-between items-end pt-6 border-t border-gray-100">
                <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400">Total Due</span>
                <span className="text-2xl font-bold tracking-tighter">₹40,110</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default CheckoutPage;