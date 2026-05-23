"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, ShoppingBag } from "lucide-react";
import { privateApi } from '@/lib/app';
import { useAuth } from '@/context/AuthContext';

function Navbar_on_other_pages() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartBounce, setCartBounce] = useState(false);

  const { isRestoring } = useAuth();

  // — exact same fetchCartCount as CollectionPdt —
  const fetchCartCount = async () => {
    try {
      const response = await privateApi.post("/User/cartItemCount");
      const count = typeof response.data === "number"
        ? response.data
        : response.data?.count ?? response.data?.cartItemCount ?? 0;
      setCartCount(count);
    } catch (err) {
      console.error("Cart count fetch failed", err);
      setCartCount(0);
    }
  };

  // — exact same effects as CollectionPdt —
  useEffect(() => {
    if (!isRestoring) {
      fetchCartCount();
    }
  }, [isRestoring]);

  useEffect(() => {
    const handleFocus = () => {
      if (!isRestoring) fetchCartCount();
    };
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [isRestoring]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const categories = {
    women: [
      "Women-White-Shirts",
      "Women-Summer-Dresses",
      "Women-Knitted-Sweaters",
      "Women-Cotton-Trousers",
      "Women-Classic-Denim",
    ],
    girls: [
      "Girls-Winter-Coats",
      "Girls-Floral-Dresses",
      "Girls-Denim-Jackets",
      "Girls-Basic-Tees",
      "Girls-Active-Leggings",
    ],
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
      <nav className="fixed top-1 left-0 right-0 z-[100] bg-white shadow-sm transition-all duration-500 text-black">
        <div className="w-full">
          <div className="flex h-20 2xl:h-44 items-center justify-between px-5 2xl:px-20 transition-all duration-500">

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

            {/* FULL NAV ROW */}
            <div className="hidden md:grid flex-1 grid-cols-[1fr_auto_1fr] items-center">

              {/* LEFT GROUP */}
              <div className="flex items-center justify-between pr-28 2xl:pr-48">
                <Link href="/shop/" className="text-[14px] 2xl:text-[30px] tracking-[0.15em] uppercase font-normal text-black hover:opacity-50 transition-opacity">Shop</Link>
                <Link href="/campaign" className="text-[14px] 2xl:text-[30px] tracking-[0.15em] uppercase font-normal text-black hover:opacity-50 transition-opacity">Campaign</Link>
                <Link href="/collections/new-arrivals" className="text-[14px] 2xl:text-[30px] tracking-[0.15em] uppercase font-normal text-black hover:opacity-50 transition-opacity">Craft</Link>
                <Link href="/curation" className="text-[14px] 2xl:text-[30px] tracking-[0.15em] uppercase font-normal text-black hover:opacity-50 transition-opacity">New In</Link>
              </div>

              {/* CENTER LOGO */}
              <div className="flex shrink-0 justify-center py-1 2xl:py-7">
                <Link href="/" className="flex items-center">
                  <Image
                    src="https://i.ibb.co/QFK5ZSNM/Wrii-LOGO-website.png"
                    alt="WRII Studio"
                    width={65}
                    height={22}
                    priority
                    unoptimized
                    className="object-contain w-[90px] 2xl:w-[165px] h-auto"
                  />
                </Link>
              </div>

              {/* RIGHT GROUP */}
              <div className="flex items-center justify-between pl-28 2xl:pl-48">
                <Link href="/about" className="text-[14px] 2xl:text-[30px] tracking-[0.15em] uppercase font-normal text-black hover:opacity-50 transition-opacity">About</Link>
                <Link href="/search" className="text-[14px] 2xl:text-[30px] tracking-[0.15em] uppercase font-normal text-black hover:opacity-50 transition-opacity">Search</Link>
                <Link href="/account/profile" className="text-[14px] 2xl:text-[30px] tracking-[0.15em] uppercase font-normal text-black hover:opacity-50 transition-opacity">Account</Link>

                {/* Cart — same logic as CollectionPdt floating button */}
                <Link
                  href="/account/profile"
                  className={`relative flex items-center justify-center transition-all duration-300 hover:opacity-50 ${cartBounce ? "animate-bounce" : ""}`}
                >
                  <ShoppingBag size={18} strokeWidth={1.5} className="text-black 2xl:w-7 2xl:h-7" />
                  <span className="absolute w-5 h-5 rounded-full bg-black/20 animate-ping" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white text-[#10995b] text-[9px] font-bold flex items-center justify-center shadow-sm">
                      {cartCount > 99 ? "99+" : cartCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>

            <div className="flex md:hidden flex-1" />
          </div>

          {/* DESKTOP HOVER CATEGORIES */}
          <div className={`hidden md:block overflow-hidden transition-all duration-700 ease-in-out ${isHovered ? "max-h-[400px] opacity-100 py-10" : "max-h-0 opacity-0 py-0"}`}>
            <div className="grid grid-cols-2 gap-20 border-t border-gray-100 pt-10 px-6">
              <div>
                <p className="text-[9px] 2xl:text-[12px] 3xl:text-[16px] uppercase tracking-[0.4em] text-slate-400 mb-6 font-bold">Womens Collection</p>
                <div className="flex flex-col gap-4">
                  {categories.women.map((cat) => (
                    <Link key={cat} href={`/collections/${cat.toLowerCase()}`} className="text-[13px] 2xl:text-[16px] 3xl:text-[22px] font-medium hover:opacity-50 transition-opacity">
                      {cat.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] 2xl:text-[12px] 3xl:text-[16px] uppercase tracking-[0.4em] text-slate-400 mb-6 font-bold">Girls Collection</p>
                <div className="flex flex-col gap-4">
                  {categories.girls.map((cat) => (
                    <Link key={cat} href={`/collections/${cat.toLowerCase()}`} className="text-[13px] 2xl:text-[16px] 3xl:text-[22px] font-medium hover:opacity-50 transition-opacity">
                      {cat.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"} md:hidden flex flex-col justify-start overflow-y-auto`}>
        <div className="flex flex-col space-y-7 px-12 pt-28 text-left">
          {mobileMenuItems.map((item, index) => (
            <Link key={index} onClick={() => setIsOpen(false)} href={item.href} className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-black hover:opacity-50 transition-opacity">
              {item.label}
              {item.icon && <Search size={14} strokeWidth={2.5} className="text-black/70" />}
            </Link>
          ))}
        </div>
        <div className={`w-full px-6 pt-12 pb-10 transition-all duration-700 delay-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm grayscale-[0.2] hover:grayscale-0 transition-all duration-500 shadow-sm border border-black/5">
            <Image src="https://colefax-fcaqase9a7bzhphc.z01.azurefd.net/designs-images/large/J0060-02_l.jpg" alt="Campaign Visual" fill className="object-cover" unoptimized priority />
            <div className="absolute inset-0 bg-black/5 flex items-end p-4">
              <p className="text-[10px] text-white uppercase tracking-[0.4em] font-semibold drop-shadow-sm">Current Season / 2026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar_on_other_pages;