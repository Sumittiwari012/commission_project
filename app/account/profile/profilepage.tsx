"use client";

import Link from 'next/link';
import React from 'react';

function ProfilePage() {
  const navItems = [
    { id: 'details', label: 'Details' },
    { id: 'bag', label: 'Bag' },
    { id: 'orders', label: 'Orders' },
    { id: 'feedback', label: 'Feedback' },
    { id: 'rewards', label: 'Rewards' },
    { id: 'connect', label: 'Connect' }
  ];

  return (
    <>
      {/* 1. AESTHETIC BACKGROUND - Optimized blur for mobile */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[100%] md:w-[60%] h-[60%] rounded-full bg-blue-50/60 blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] md:w-[50%] h-[50%] rounded-full bg-orange-50/50 blur-[80px] md:blur-[100px] animate-[pulse_10s_infinite]"></div>
      </div>

      {/* 2. TOP NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center bg-white/10 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-slate-100 md:border-none">
        <a href="#" className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
          Wrii Studio<span className="text-blue-500">.</span>
        </a>
        <div className="flex gap-6">
          <button className="text-[9px] uppercase tracking-widest text-slate-400 hover:text-black transition-colors">Sign Out</button>
        </div>
      </nav>

      {/* 3. MAIN LAYOUT */}
      <main className="flex flex-col md:flex-row h-screen">
        
        {/* DESKTOP SIDEBAR (30%) - Hidden on mobile */}
        <aside className="hidden md:flex w-[30%] border-r border-slate-100 flex-col justify-center px-12 lg:px-24 h-full bg-white/20 backdrop-blur-sm">
          <div className="space-y-12">
            <header>
              <p className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold mb-2">Member</p>
              <h2 className="text-2xl font-serif italic text-slate-900">Aman Sharma</h2>
            </header>

            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-black transition-all"
                >
                  <span className="dot w-2 h-[1px] bg-black transition-all group-hover:w-6"></span> 
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* MOBILE MEMBER HEADER & STICKY JUMP MENU */}
        <div className="md:hidden pt-24 bg-white/40 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40">
            <div className="px-6 pb-4">
                <p className="text-[8px] uppercase tracking-[0.5em] text-slate-400 font-bold mb-1">Member Dashboard</p>
                <h2 className="text-xl font-serif italic text-slate-900">Aman Sharma</h2>
            </div>
            
            <div className="flex overflow-x-auto no-scrollbar border-t border-slate-50 px-4 py-3 gap-6 snap-x">
                {navItems.map((item) => (
                    <Link 
                        key={item.id} 
                        href={`#${item.id}`}
                        className="flex-shrink-0 text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400 active:text-black snap-start"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>

        {/* 4. CONTENT STAGE (70% on Desktop, Full on Mobile) */}
        <section className="w-full md:w-[70%] h-full overflow-y-auto snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* 01 / DETAILS */}
          <div id="details" className="h-full w-full snap-start md:snap-center flex items-center justify-center p-8 md:p-24">
            <div className="max-w-2xl w-full">
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-10 md:mb-12">01 / Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16">
                <div className="relative group">
                  <label className="text-[8px] md:text-[9px] uppercase tracking-widest text-slate-400 absolute -top-5 left-0">Full Name</label>
                  <input type="text" defaultValue="Aman Sharma" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm"/>
                </div>
                <div className="relative group">
                  <label className="text-[8px] md:text-[9px] uppercase tracking-widest text-slate-400 absolute -top-5 left-0">Email Address</label>
                  <input type="email" defaultValue="aman@wriistudio.com" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm" />
                </div>
              </div>
              <button className="mt-12 md:mt-20 w-full md:w-auto px-12 py-5 bg-black text-white text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">Update Profile</button>
            </div>
          </div>

          {/* 02 / STUDIO BAG */}
          <div id="bag" className="h-full w-full snap-start md:snap-center flex items-center justify-center p-8 md:p-24">
            <div className="max-w-2xl w-full">
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-10 md:mb-12">02 / Studio Bag</h3>
              <div className="space-y-6 md:space-y-8 border-t border-slate-100 pt-8">
                <div className="flex items-center gap-6 md:gap-8 group">
                  <div className="w-20 h-28 bg-slate-100 flex-shrink-0 overflow-hidden">
                    <img src="https://thehouseofrare.com/cdn/shop/products/HERO_76c59c07-ac65-40f5-96e4-1de84fcdee92.jpg?v=1743587556" alt="Item" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Midnight Coat</h4>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-bold">₹24,310</p>
                  </div>
                </div>
                <div className="pt-8 md:pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-slate-400">Subtotal</p>
                    <p className="text-xl md:text-2xl font-bold">₹24,310</p>
                  </div>
                  <button className="w-full md:w-auto px-10 py-5 bg-black text-white text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">Checkout</button>
                </div>
              </div>
            </div>
          </div>

          {/* 03 / ORDERS */}
          <div id="orders" className="h-full w-full snap-start md:snap-center flex items-center justify-center p-8 md:p-24">
            <div className="max-w-2xl w-full">
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-10 md:mb-12">03 / Order History</h3>
              <div className="p-8 md:p-10 border border-slate-100 bg-white/40 backdrop-blur-md flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-[9px] uppercase tracking-widest text-slate-400">Order #WS-2025-042</p>
                  <p className="text-xs md:text-sm font-medium">Carolinae Top</p>
                  <p className="text-[10px] text-green-600 font-semibold tracking-widest uppercase">Delivered</p>
                </div>
                <p className="text-sm font-bold">₹15,800</p>
              </div>
            </div>
          </div>

          {/* 05 / REWARDS */}
          <div id="rewards" className="h-full w-full snap-start md:snap-center flex items-center justify-center p-8 md:p-24">
            <div className="max-w-2xl w-full">
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-10 md:mb-12">05 / Studio Rewards</h3>
              <div className="bg-black p-8 md:p-12 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-4 text-slate-500">Points Balance</p>
                  <h4 className="text-4xl md:text-5xl font-light tracking-tighter mb-8">4,250</h4>
                  <div className="flex flex-col md:flex-row gap-4">
                    <button className="px-8 py-4 bg-white text-black text-[9px] uppercase tracking-widest font-bold">Redeem</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div id="feedback" className="h-full w-full snap-start md:snap-center flex items-center justify-center p-8 md:p-24">
            <div className="max-w-2xl w-full">
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-10 md:mb-12">04 / Product Feedback</h3>
              <div className="bg-white/50 border border-slate-100 p-8 md:p-12 text-center backdrop-blur-sm rounded-2xl md:rounded-none">
                <p className="font-serif italic text-base md:text-lg text-slate-600 mb-8">Share your observations on your recent acquisitions.</p>
                <div className="flex justify-center gap-4 md:gap-6 mb-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} className="text-xl md:text-2xl text-slate-300 hover:text-black transition-colors">★</button>
                  ))}
                </div>
                <textarea 
                  placeholder="Tell us about the fit, fabric, and feel..." 
                  className="w-full h-32 bg-transparent border border-slate-200 p-4 text-sm outline-none focus:border-black transition-all mb-8 rounded-lg"
                ></textarea>
                <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-black pb-1 hover:text-slate-500 hover:border-slate-500 transition-all">
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
          {/* 06 / CONNECT */}
          <div id="connect" className="h-full w-full snap-start md:snap-center flex items-center justify-center p-8 md:p-24">
            <div className="max-w-2xl w-full text-center">
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-slate-300 mb-10 md:mb-12">06 / Connect</h3>
              <p className="text-xl md:text-2xl font-serif italic text-slate-700 mb-12 md:mb-16 leading-relaxed">
                "Design is a dialogue between <br/> the studio and the soul."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {['Instagram', 'WhatsApp', 'Email Concierge'].map((link) => (
                  <a key={link} href="#" className="group">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-black transition-colors">{link}</p>
                  </a>
                ))}
              </div>
              <div className="mt-16 md:mt-24 pt-12 border-t border-slate-100">
                <p className="text-[9px] uppercase tracking-[0.5em] text-slate-300">Wrii Studio — New Delhi / Paris</p>
              </div>
            </div>
          </div>

        </section>
      </main>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}

export default ProfilePage;