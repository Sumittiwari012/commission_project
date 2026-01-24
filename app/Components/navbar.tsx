"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track navbar hover

  // Categories data grouped for the layout
  const categories = {
    women: [
      "Women-White-Shirts",
      "Women-Summer-Dresses",
      "Women-Knitted-Sweaters",
      "Women-Cotton-Trousers",
      "Women-Classic-Denim"
    ],
    girls: [
      "Girls-Winter-Coats",
      "Girls-Floral-Dresses",
      "Girls-Denim-Jackets",
      "Girls-Basic-Tees",
      "Girls-Active-Leggings"
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-2 transition-all duration-500 ${
          scrolled || isHovered ? 'bg-white shadow-sm' : 'bg-transparent'
        } text-black`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex h-14 items-center justify-between px-6 transition-all duration-500">
            
            {/* MOBILE HAMBURGER */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-1 md:hidden flex-col gap-1.5 z-[110] relative focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`h-[1.5px] bg-black transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`h-[1.5px] bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-[1.5px] bg-black transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
            </button>

            {/* DESKTOP LINKS - LEFT */}
            <div className="hidden md:flex flex-1 items-center gap-24">
              <Link href="/collections/" className="text-[11px] tracking-[0.25em] uppercase font-semibold">
                Shop
              </Link>

              <Link href="/campaign" className="text-[11px] tracking-[0.25em] uppercase font-semibold">
                Campaign
              </Link>

              <Link href="/collections/new-arrivals" className="text-[11px] tracking-[0.25em] uppercase font-semibold">
                New Arrival
              </Link>
            </div>

            {/* CENTER LOGO */}
            <div className="flex shrink-0 justify-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://img.sanishtech.com/u/c35d619f92c92345f342287fc86dbfe5.png" 
                  alt="WRII Studio"
                  width={140}
                  height={40}
                  priority
                  unoptimized 
                  className="object-contain"
                />
              </Link>
            </div>

            {/* RIGHT-SIDE LINKS */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-24">
              <Link href="/about" className="text-[11px] tracking-[0.25em] uppercase font-semibold">
                About
              </Link>

              <Link href="/contact" className="text-[11px] tracking-[0.25em] uppercase font-semibold">
                Contact
              </Link>

              <Link href="/account/profile" className="text-[11px] tracking-[0.25em] uppercase font-semibold">
                Account
              </Link>
            </div>

            {/* MOBILE ACCOUNT ICON */}
            <div className="flex md:hidden flex-1 justify-end">
                <Link href="/auth/login" className="text-[10px] uppercase font-bold tracking-[0.1em]">Login</Link>
            </div>
          </div>

          {/* EXPANDABLE CATEGORIES SECTION (Desktop Only) */}
          <div 
            className={`hidden md:block overflow-hidden transition-all duration-700 ease-in-out ${
              isHovered ? 'max-h-[400px] opacity-100 py-10' : 'max-h-0 opacity-0 py-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-20 border-t border-gray-100 pt-10 px-6">
              {/* Women Column */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-slate-400 mb-6 font-bold">Womens Collection</p>
                <div className="flex flex-col gap-4">
                  {categories.women.map((cat) => (
                    <Link 
                      key={cat} 
                      href={`/collections/${cat.toLowerCase()}`}
                      className="text-[13px] font-medium hover:opacity-50 transition-opacity"
                    >
                      {cat.replace(/-/g, ' ')}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Girls Column */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-slate-400 mb-6 font-bold">Girls Collection</p>
                <div className="flex flex-col gap-4">
                  {categories.girls.map((cat) => (
                    <Link 
                      key={cat} 
                      href={`/collections/${cat.toLowerCase()}`}
                      className="text-[13px] font-medium hover:opacity-50 transition-opacity"
                    >
                      {cat.replace(/-/g, ' ')}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          <p className="text-[9px] uppercase tracking-[0.5em] text-slate-400 mb-4">Discover</p>
          <Link onClick={() => setIsOpen(false)} href="/collections/womens" className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-50 transition-opacity">Womenswear</Link>
          <Link onClick={() => setIsOpen(false)} href="/collections/kids" className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-50 transition-opacity">Kidswear</Link>
          <Link onClick={() => setIsOpen(false)} href="/collections/new-arrivals" className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-50 transition-opacity">New Arrivals</Link>
          <Link onClick={() => setIsOpen(false)} href="/collections" className="text-5xl font-black uppercase tracking-tighter text-black hover:opacity-50 transition-opacity">Full Collections</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;