"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* 1. Main Navigation Wrapper */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-4">
        <div className="mx-auto max-w-7xl">
          {/* h-14 provides better touch targets for mobile than h-12 */}
          <div className="flex h-14 items-center justify-between bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 px-6 transition-all duration-500 rounded-full md:rounded-none border border-white/20 md:border-none shadow-sm md:shadow-none">
            
            {/* 2. MOBILE HAMBURGER (md:hidden) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-1 md:hidden flex-col gap-1.5 z-[110] relative focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`h-[1px] bg-black transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`h-[1px] bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-[1px] bg-black transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
            </button>

            {/* 3. DESKTOP LINKS - LEFT */}
            <div className="hidden md:flex flex-1 items-center gap-8 text-[10px] uppercase tracking-[0.25em] font-bold text-black/50">
                <Link href="/collections/womens" className="hover:text-black transition-colors">Womens</Link>
                <Link href="/collections/kids" className="hover:text-black transition-colors">Kids</Link>
            </div>

            {/* 4. LOGO - Centered on all screens */}
            <div className="flex flex-none justify-center">
              <Link href="/" className="text-lg md:text-xl font-black tracking-[-0.05em] text-black">
                WRII STUDIO<span className="text-blue-500">.</span>
              </Link>
            </div>

            {/* 5. DESKTOP LINKS - RIGHT */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-8 text-[10px] uppercase tracking-[0.25em] font-bold text-black/50">
              <Link href="/collections/new-arrivals" className="hover:text-black transition-colors">New Arrivals</Link>
              <Link href="/collections/sale" className="hover:text-black transition-colors text-red-500">Sale</Link>
              <Link href="/collections" className="hover:text-black transition-colors">Collections</Link>
              <Link href="/auth/login" className="hover:text-black transition-colors">Account</Link>
            </div>

            {/* 6. MOBILE ACCOUNT ICON (Simplified for phones) */}
            <div className="flex md:hidden flex-1 justify-end">
                <Link href="/auth/login" className="text-[10px] uppercase font-bold tracking-[0.1em] text-black">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 7. FULLSCREEN MOBILE MENU */}
      <div className={`fixed inset-0 bg-white/95  z-[90] transition-transform duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <p className="text-[9px] uppercase tracking-[0.5em] text-slate-400 mb-4">Discover</p>
          <Link onClick={() => setIsOpen(false)} href="/collections/womens" className="text-4xl font-serif italic text-black hover:opacity-50 transition-opacity">Womenswear</Link>
          <Link onClick={() => setIsOpen(false)} href="/collections/kids" className="text-4xl font-serif italic text-black hover:opacity-50 transition-opacity">Kidswear</Link>
          <Link onClick={() => setIsOpen(false)} href="/collections/new-arrivals" className="text-4xl font-serif italic text-black hover:opacity-50 transition-opacity">New Arrivals</Link>
          <Link onClick={() => setIsOpen(false)} href="/collections" className="text-4xl font-serif italic text-black hover:opacity-50 transition-opacity">Full Collections</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;