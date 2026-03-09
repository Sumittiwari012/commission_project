"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const categories = {
    women: ["Women-White-Shirts", "Women-Summer-Dresses", "Women-Knitted-Sweaters", "Women-Cotton-Trousers", "Women-Classic-Denim"],
    girls: ["Girls-Winter-Coats", "Girls-Floral-Dresses", "Girls-Denim-Jackets", "Girls-Basic-Tees", "Girls-Active-Leggings"]
  };

  const mobileMenuItems = [
    { label: "Shop", href: "/shop" },
    { label: "Campaign", href: "/campaign" },
    { label: "Craft", href: "/collections/new-arrivals" },
    { label: "About", href: "/about" },
    { label: "New In", href: "/curation" },
    { label: "Search", href: "/search", icon: true },
    { label: "Account", href: "/account/profile" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav
       
        className={`fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-2 transition-all duration-500 ${
          scrolled || isHovered ? "bg-[#FAEBD7] shadow-sm" : "bg-transparent"
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
              <span className={`h-[1.5px] bg-black transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`h-[1.5px] bg-black transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`} />
              <span className={`h-[1.5px] bg-black transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
            </button>

            {/* DESKTOP LINKS - LEFT */}
            <div className="hidden md:flex flex-1 items-center gap-36">
              <Link href="/shop/" className="text-[11px] tracking-[0.25em] uppercase font-semibold">Shop</Link>
              <Link href="/campaign" className="text-[11px] tracking-[0.25em] uppercase font-semibold">Campaign</Link>
              <Link href="/collections/new-arrivals" className="text-[11px] tracking-[0.25em] uppercase font-semibold">Craft</Link>
            </div>

            {/* CENTER LOGO */}
            <div className="flex shrink-0 justify-center">
              <Link href="/" className="flex items-center">
                <Image src="https://i.ibb.co/QFK5ZSNM/Wrii-LOGO-website.png" alt="WRII Studio" width={70} height={10} priority unoptimized className="object-contain" />
              </Link>
            </div>

            {/* RIGHT-SIDE LINKS */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-24">
              <Link href="/about" className="text-[11px] tracking-[0.25em] uppercase font-semibold">About</Link>
              <Link href="/curation" className="text-[11px] tracking-[0.25em] uppercase font-semibold">New In</Link>
              <Link href="/search">
                <div className="p-2 hover:bg-red/10 rounded-full transition-all cursor-pointer">
                  <Search size={16} strokeWidth={2} />
                </div>
              </Link>
              <Link href="/account/profile" className="text-[11px] tracking-[0.25em] uppercase font-semibold">Account</Link>
            </div>

            <div className="flex md:hidden flex-1" />
          </div>

          {/* DESKTOP HOVER CATEGORIES */}
          <div className={`hidden md:block overflow-hidden transition-all duration-700 ease-in-out ${isHovered ? "max-h-[400px] opacity-100 py-10" : "max-h-0 opacity-0 py-0"}`}>
            <div className="grid grid-cols-2 gap-20 border-t border-gray-100 pt-10 px-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-slate-400 mb-6 font-bold">Womens Collection</p>
                <div className="flex flex-col gap-4">
                  {categories.women.map((cat) => (
                    <Link key={cat} href={`/collections/${cat.toLowerCase()}`} className="text-[13px] font-medium hover:opacity-50 transition-opacity">
                      {cat.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-slate-400 mb-6 font-bold">Girls Collection</p>
                <div className="flex flex-col gap-4">
                  {categories.girls.map((cat) => (
                    <Link key={cat} href={`/collections/${cat.toLowerCase()}`} className="text-[13px] font-medium hover:opacity-50 transition-opacity">
                      {cat.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* REFINED MOBILE MENU */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"} md:hidden flex flex-col justify-start overflow-y-auto`}>
        
        {/* Top Navigation Links */}
        <div className="flex flex-col space-y-7 px-12 pt-28 text-left">
          {mobileMenuItems.map((item, index) => (
            <Link
              key={index}
              onClick={() => setIsOpen(false)}
              href={item.href}
              className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-black hover:opacity-50 transition-opacity"
            >
              {item.label}
              {item.icon && <Search size={14} strokeWidth={2.5} className="text-black/70" />}
            </Link>
          ))}
        </div>

        {/* Enlarged & Lifted Editorial Image Box */}
        <div className={`w-full px-6 pt-12 pb-10 transition-all duration-700 delay-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm grayscale-[0.2] hover:grayscale-0 transition-all duration-500 shadow-sm border border-black/5">
            {/* Replace the src with your campaign/branding image */}
            <Image 
              src="https://colefax-fcaqase9a7bzhphc.z01.azurefd.net/designs-images/large/J0060-02_l.jpg" 
              alt="Campaign Visual"
              fill
              className="object-cover"
              unoptimized
              priority
            />
            {/* Optional Overlay Text */}
            <div className="absolute inset-0 bg-black/5 flex items-end p-4">
                <p className="text-[10px] text-white uppercase tracking-[0.4em] font-semibold drop-shadow-sm">Current Season / 2026</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;