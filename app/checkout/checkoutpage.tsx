import React from 'react'

function CheckoutPage() {
  return (
    /* This main div is the missing "parent" that enables the side-by-side layout */
    <main className="flex flex-col md:flex-row min-h-screen bg-[#fdfcfb]">
      
      {/* LEFT SECTION (65%) */}
      <section className="w-full md:w-[65%] px-12 lg:px-32 py-16 pt-24">
        <div className="max-w-xl mx-auto md:mx-0">
          <header className="mb-16">
            <h1 className="text-4xl font-serif italic mb-2">Checkout</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-400">Step 01 / Shipping Information</p>
          </header>

          <form className="space-y-12">
            <div className="space-y-8">
              <div className="relative group">
                <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">Email for Updates</label>
                <input type="email" defaultValue="aman@wriistudio.com" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm" />
              </div>
            </div>

            <div className="space-y-12 pt-4">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300">Shipping Address</h2>
              
              <div className="grid grid-cols-2 gap-10">
                <div className="relative">
                  <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">First Name</label>
                  <input type="text" placeholder="Aman" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm" />
                </div>
                <div className="relative">
                  <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">Last Name</label>
                  <input type="text" placeholder="Sharma" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm" />
                </div>
              </div>

              <div className="relative">
                <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">Street Address</label>
                <input type="text" placeholder="House No. 12, Studio Lane" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm" />
              </div>

              <div className="grid grid-cols-3 gap-10">
                <div className="relative">
                  <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">City</label>
                  <input type="text" placeholder="New Delhi" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm" />
                </div>
                <div className="relative">
                  <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">State</label>
                  <input type="text" placeholder="DL" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm" />
                </div>
                <div className="relative">
                  <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">PIN Code</label>
                  <input type="text" placeholder="110001" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm" />
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button type="submit" className="w-full md:w-max px-16 py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-slate-800 transition-all">
                Review & Payment
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* RIGHT SECTION (35%) */}
      <aside className="hidden md:block w-[35%] bg-white border-l border-slate-100 h-screen sticky top-0 px-12 py-16 pt-24">
        <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-12">Your Order</h3>
        
        <div className="space-y-8 mb-12">
          <div className="flex gap-6 group">
            <div className="w-20 h-28 bg-slate-100 overflow-hidden">
              <img src="https://thehouseofrare.com/cdn/shop/products/HERO_76c59c07-ac65-40f5-96e4-1de84fcdee92.jpg?v=1743587556" className="w-full h-full object-cover" alt="Product" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="text-[13px] font-medium tracking-tight mb-1">Midnight Coat</h4>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Size: M / Qty: 1</p>
              <p className="text-xs font-bold mt-2 tracking-widest">₹24,310</p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="w-20 h-28 bg-slate-100 overflow-hidden">
              <img src="https://mir-s3-cdn-cf.behance.net/projects/404/3ae68a197512361.Y3JvcCw0MzE0LDMzNzUsOTYsMA.jpg" className="w-full h-full object-cover" alt="Product" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="text-[13px] font-medium tracking-tight mb-1">Carolinae Silk Top</h4>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Size: S / Qty: 1</p>
              <p className="text-xs font-bold mt-2 tracking-widest">₹15,800</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 space-y-4">
          <div className="flex justify-between text-[11px] uppercase tracking-widest text-slate-400">
            <span>Subtotal</span>
            <span>₹40,110</span>
          </div>
          <div className="flex justify-between text-[11px] uppercase tracking-widest text-slate-400">
            <span>Shipping</span>
            <span className="text-green-600">Complimentary</span>
          </div>
          <div className="flex justify-between text-base font-bold tracking-widest pt-4 border-t border-slate-50">
            <span>Total</span>
            <span>₹40,110</span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[9px] uppercase tracking-[0.5em] text-slate-300">Secure Checkout — SSL Encrypted</p>
        </div>
      </aside>
    </main>
  )
}

export default CheckoutPage