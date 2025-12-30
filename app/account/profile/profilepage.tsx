import Link from 'next/link';
import React from 'react';

function ProfilePage() {
  return (
    <>
      {/* 1. AESTHETIC BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-50/60 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-50/50 blur-[100px] animate-[pulse_10s_infinite]"></div>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8 flex justify-between items-center">
        <a href="#" className="text-xs uppercase tracking-[0.4em] font-bold">
          Wrii Studio<span className="text-blue-500">.</span>
        </a>
        <div className="flex gap-8">
          <button className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-black transition-colors">Shop</button>
          <button className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-black transition-colors">Sign Out</button>
        </div>
      </nav>

      {/* 3. MAIN LAYOUT */}
      <main className="flex h-screen">
        
        {/* SIDEBAR */}
        <aside className="w-[30%] border-r border-slate-100 flex flex-col justify-center px-12 lg:px-24 h-full bg-white/20 backdrop-blur-sm">
          <div className="space-y-12">
            <header>
              <p className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold mb-2">Member</p>
              <h2 className="text-2xl font-serif italic text-slate-900">Aman Sharma</h2>
            </header>

            <nav className="flex flex-col gap-6" id="sidebar-nav">
              {[
                { id: 'details', label: 'Personal Details' },
                { id: 'bag', label: 'Studio Bag' },
                { id: 'orders', label: 'Order History' },
                { id: 'feedback', label: 'Product Feedback' },
                { id: 'rewards', label: 'Rewards & Offers' },
                { id: 'connect', label: 'Connect With Us' }
              ].map((item) => (
                <Link 
  key={item.id}
  href={`/account/profile#${item.id}`}
  className="nav-link group flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-black transition-all"
>
                  <span className="dot w-2 h-[1px] bg-black transition-all group-hover:w-6"></span> 
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* CONTENT STAGE */}
        <section className="w-[70%] h-full overflow-y-auto snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* 01 / DETAILS */}
          <div id="details" className="h-full w-full snap-center flex items-center justify-center p-24">
            <div className="max-w-2xl w-full">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-12">01 / Personal Details</h3>
              <div className="grid grid-cols-2 gap-x-12 gap-y-16">
                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">Full Name</label>
                  <input type="text" defaultValue="Aman Sharma" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm"/>
                </div>
                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">Email Address</label>
                  <input type="email" defaultValue="aman@wriistudio.com" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm" />
                </div>
              </div>
              <button className="mt-20 px-12 py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-slate-800 transition-all">Update Profile</button>
            </div>
          </div>

          {/* 02 / STUDIO BAG */}
          <div id="bag" className="h-full w-full snap-center flex items-center justify-center p-24">
            <div className="max-w-2xl w-full">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-12">02 / Studio Bag</h3>
              <div className="space-y-8 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-28 bg-slate-100 overflow-hidden">
                    <img src="https://thehouseofrare.com/cdn/shop/products/HERO_76c59c07-ac65-40f5-96e4-1de84fcdee92.jpg?v=1743587556" alt="Item" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Midnight Coat</h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">₹24,310</p>
                  </div>
                  <button className="text-slate-300 hover:text-black text-xl">×</button>
                </div>
                <div className="pt-12 border-t border-slate-100 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Subtotal</p>
                    <p className="text-2xl font-bold">₹24,310</p>
                  </div>
                  <button className="px-10 py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-slate-800 transition-all">Checkout</button>
                </div>
              </div>
            </div>
          </div>

          {/* 03 / ORDERS */}
          <div id="orders" className="h-full w-full snap-center flex items-center justify-center p-24">
            <div className="max-w-2xl w-full">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-12">03 / Order History</h3>
              <div className="p-10 border border-slate-100 bg-white/40 backdrop-blur-md flex justify-between items-center hover:border-slate-300 transition-all">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">Order #WS-2025-042</p>
                  <p className="text-sm font-medium">Carolinae Round Neck Top</p>
                  <p className="text-[11px] text-green-600 font-semibold tracking-widest uppercase">Delivered</p>
                </div>
                <p className="text-sm font-bold">₹15,800</p>
              </div>
            </div>
          </div>

          {/* 04 / FEEDBACK */}
          <div id="feedback" className="h-full w-full snap-center flex items-center justify-center p-24">
            <div className="max-w-2xl w-full">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-12">04 / Feedback</h3>
              <div className="bg-white/50 border border-slate-100 p-12 text-center backdrop-blur-sm">
                <p className="font-serif italic text-lg text-slate-600 mb-8">Share your thoughts on recent acquisitions.</p>
                <div className="flex justify-center gap-6 mb-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} className="text-2xl text-slate-300 hover:text-black transition-colors">★</button>
                  ))}
                </div>
                <textarea placeholder="Observations..." className="w-full h-32 bg-transparent border border-slate-200 p-4 text-sm outline-none focus:border-black transition-all mb-8"></textarea>
                <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-black pb-1 hover:text-slate-500 hover:border-slate-500 transition-all">Submit</button>
              </div>
            </div>
          </div>

          {/* 05 / REWARDS */}
          <div id="rewards" className="h-full w-full snap-center flex items-center justify-center p-24">
            <div className="max-w-2xl w-full">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-12">05 / Studio Rewards</h3>
              <div className="bg-black p-12 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.5em] mb-4 text-slate-500">Available Balance</p>
                  <h4 className="text-5xl font-light tracking-tighter mb-8">4,250 <span className="text-sm uppercase tracking-widest text-slate-500 ml-2">Points</span></h4>
                  <div className="flex gap-4">
                    <button className="px-8 py-4 bg-white text-black text-[9px] uppercase tracking-widest font-bold hover:bg-slate-200 transition-colors">Redeem Points</button>
                    <button className="px-8 py-4 border border-white/20 text-white text-[9px] uppercase tracking-widest font-bold hover:bg-white/10 transition-colors">Point History</button>
                  </div>
                </div>
                <div className="absolute -right-16 -bottom-16 w-64 h-64 border border-white/5 rounded-full"></div>
              </div>
              <p className="mt-8 text-[11px] text-slate-400 italic font-serif">Points can be used for exclusive access to the SS/26 Collection pre-order.</p>
            </div>
          </div>

          {/* 06 / CONNECT */}
          <div id="connect" className="h-full w-full snap-center flex items-center justify-center p-24">
            <div className="max-w-2xl w-full text-center">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-12">06 / Connect</h3>
              <p className="text-2xl font-serif italic text-slate-700 mb-16 leading-relaxed">
                "Design is a dialogue between <br/> the studio and the soul."
              </p>
              <div className="grid grid-cols-3 gap-12">
                {['Instagram', 'WhatsApp', 'Email Concierge'].map((link) => (
                  <a key={link} href="#" className="group">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-black transition-colors">{link}</p>
                    <div className="h-[1px] w-0 bg-black mx-auto mt-2 transition-all group-hover:w-full"></div>
                  </a>
                ))}
              </div>
              <div className="mt-24 pt-12 border-t border-slate-100">
                <p className="text-[9px] uppercase tracking-[0.5em] text-slate-300">Wrii Studio Boutique — New Delhi / Paris</p>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}

export default ProfilePage;