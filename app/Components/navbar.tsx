"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* 1. Main Navigation Wrapper 
          ADDED: mix-blend-mode-difference and text-white. 
          The 'difference' mode makes white text appear black on light backgrounds.
      */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-4 mix-blend-difference text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-14 items-center justify-between px-6 transition-all duration-500 rounded-full md:rounded-none border border-white/20 md:border-none shadow-sm md:shadow-none">
            
            {/* 2. MOBILE HAMBURGER 
                CHANGED: bg-white (since the wrapper is difference, white will invert) 
            */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-1 md:hidden flex-col gap-1.5 z-[110] relative focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
            </button>

            {/* 3. DESKTOP LINKS - LEFT (Desktop remains largely unaffected) */}
            <div className="hidden md:flex flex-1 items-center gap-8 text-[10px] uppercase tracking-[0.25em] font-bold opacity-70 hover:opacity-100">
                <Link href="/collections/womens" className="transition-colors">Womens</Link>
                <Link href="/collections/kids" className="transition-colors">Kids</Link>
            </div>

            {/* 4. LOGO */}
            <div className="flex flex-none justify-center">
              <Link href="/" className="text-lg md:text-xl font-black tracking-[-0.05em]">
                WRII STUDIO<span className="text-blue-500">.</span>
              </Link>
            </div>

            {/* 5. DESKTOP LINKS - RIGHT */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-8 text-[10px] uppercase tracking-[0.25em] font-bold opacity-70">
              <Link href="/collections/new-arrivals" className="hover:opacity-100 transition-opacity">New Arrivals</Link>
              <Link href="/collections/sale" className="text-red-500">Sale</Link>
              <Link href="/collections" className="hover:opacity-100 transition-opacity">Collections</Link>
              <Link href="/auth/login" className="hover:opacity-100 transition-opacity">Account</Link>
            </div>

            {/* 6. MOBILE ACCOUNT ICON */}
            <div className="flex md:hidden flex-1 justify-end">
                <Link href="/auth/login" className="text-[10px] uppercase font-bold tracking-[0.1em]">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 7. FULLSCREEN MOBILE MENU 
          CHANGED: Font-weight to font-black and font-serif for extra thickness 
      */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          <p className="text-[9px] uppercase tracking-[0.5em] text-slate-400 mb-4">Discover</p>
          
          {/* Increased thickness with font-black and text-5xl */}
          <Link onClick={() => setIsOpen(false)} href="/collections/womens" 
            className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-50 transition-opacity">Womenswear</Link>
          
          <Link onClick={() => setIsOpen(false)} href="/collections/kids" 
            className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-50 transition-opacity">Kidswear</Link>
          
          <Link onClick={() => setIsOpen(false)} href="/collections/new-arrivals" 
            className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-50 transition-opacity">New Arrivals</Link>
          
          <Link onClick={() => setIsOpen(false)} href="/collections" 
            className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-50 transition-opacity">Full Collections</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;