"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [expandedMenu, setExpandedMenu] = useState<"women" | "girls" | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | HTMLButtonElement | null>>({});

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

  const mobileMenuItems = [
    { label: "Shop", href: "/collections/", submenu: null },
    { label: "Campaign", href: "/campaign", submenu: null },
    { label: "New Arrival", href: "/collections/new-arrivals", submenu: null },
    { label: "About", href: "/about", submenu: null },
    { label: "Contact", href: "/contact", submenu: null },
    { label: "Account", href: "/account/profile", submenu: null },
    { label: "Womens Collection", href: null, submenu: "women" as const },
    { label: "Girls Collection", href: null, submenu: "girls" as const },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!isOpen || !container) return;

    const itemHeight = 80;
    const totalItems = mobileMenuItems.length;

    const handleMobileScroll = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const zoneCenter = containerHeight / 2;
      const zoneHalf = 40;

      let foundKey: string | null = null;
      let closestDist = Infinity;
      const containerRect = container.getBoundingClientRect();

      Object.entries(linkRefs.current).forEach(([key, el]) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemTop = rect.top - containerRect.top;
        const itemCenter = itemTop + rect.height / 2;
        const distFromZoneCenter = Math.abs(itemCenter - zoneCenter);
        if (distFromZoneCenter < zoneHalf && distFromZoneCenter < closestDist) {
          closestDist = distFromZoneCenter;
          foundKey = key;
        }
      });

      setActiveKey(foundKey);

      const scrollHeight = container.scrollHeight;
      const threshold = itemHeight * 2;
      if (scrollTop < threshold) {
        container.scrollTop = scrollTop + itemHeight * totalItems;
      } else if (scrollTop > scrollHeight - containerHeight - threshold) {
        container.scrollTop = scrollTop - itemHeight * totalItems;
      }
    };

    container.addEventListener("scroll", handleMobileScroll);
    handleMobileScroll();
    return () => container.removeEventListener("scroll", handleMobileScroll);
  }, [isOpen, mobileMenuItems.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (isOpen && container) {
      container.scrollTop = 80 * mobileMenuItems.length;
    }
  }, [isOpen, mobileMenuItems.length]);

  useEffect(() => {
    if (!isOpen) setExpandedMenu(null);
  }, [isOpen]);

  return (
    <>
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-2 transition-all duration-500 ${
          scrolled || isHovered ? "bg-white shadow-sm" : "bg-transparent"
        } text-black`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex h-14 items-center justify-between px-6 transition-all duration-500">

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => { setIsOpen(!isOpen); setExpandedMenu(null); }}
              className="flex flex-1 md:hidden flex-col gap-1.5 z-[110] relative focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`h-[1.5px] bg-black transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`h-[1.5px] bg-black transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`} />
              <span className={`h-[1.5px] bg-black transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
            </button>

            {/* DESKTOP LINKS - LEFT */}
            <div className="hidden md:flex flex-1 items-center gap-24">
              <Link href="/collections/" className="text-[11px] tracking-[0.25em] uppercase font-semibold">Shop</Link>
              <Link href="/campaign" className="text-[11px] tracking-[0.25em] uppercase font-semibold">Campaign</Link>
              <Link href="/collections/new-arrivals" className="text-[11px] tracking-[0.25em] uppercase font-semibold">New Arrival</Link>
            </div>

            {/* CENTER LOGO */}
            <div className="flex shrink-0 justify-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://i.postimg.cc/85RHt9TY/WRII-STUDIO-website.png"
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
              <Link href="/about" className="text-[11px] tracking-[0.25em] uppercase font-semibold">About</Link>
              <Link href="/contact" className="text-[11px] tracking-[0.25em] uppercase font-semibold">Contact</Link>
              <Link href="/account/profile" className="text-[11px] tracking-[0.25em] uppercase font-semibold">Account</Link>
            </div>

            {/* MOBILE LOGIN */}
            <div className="flex md:hidden flex-1 justify-end">
              <Link href="/auth/login" className="text-[10px] uppercase font-bold tracking-[0.1em]">Login</Link>
            </div>
          </div>

          {/* EXPANDABLE CATEGORIES SECTION (Desktop Only) */}
          <div
            className={`hidden md:block overflow-hidden transition-all duration-700 ease-in-out ${
              isHovered ? "max-h-[400px] opacity-100 py-10" : "max-h-0 opacity-0 py-0"
            }`}
          >
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

      {/* FULLSCREEN MOBILE MENU */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "translate-y-0" : "-translate-y-full"} md:hidden`}>
        <div
          ref={scrollContainerRef}
          className="h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
          style={{ scrollBehavior: "auto" }}
        >
          <div className="py-[50vh]">
            {[0, 1, 2].map((setIndex) => (
              <div key={setIndex}>
                {mobileMenuItems.map((item, index) => {
                  const uniqueKey = `${setIndex}-${index}`;
                  const isActive = activeKey === uniqueKey;
                  const isExpanded = item.submenu && expandedMenu === item.submenu;

                  if (item.submenu) {
                    return (
                      <div key={uniqueKey}>
                        {/* Collection heading button */}
                        <button
                          ref={(el) => { linkRefs.current[uniqueKey] = el; }}
                          onClick={() =>
                            setExpandedMenu(
                              expandedMenu === item.submenu ? null : item.submenu!
                            )
                          }
                          className={`flex items-center justify-center gap-2 w-full h-20 text-center transition-all duration-200 uppercase tracking-wider text-black ${
                            isActive ? "text-[27px] font-black opacity-100" : "text-lg font-semibold opacity-30"
                          }`}
                        >
                          {item.label}
                          <span
                            className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : "rotate-0"}`}
                          >
                            ›
                          </span>
                        </button>

                        {/* Inline subcategories — expand below */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="flex flex-col items-center gap-5 py-4 pb-6">
                            <p className="text-[9px] uppercase tracking-[0.4em] text-slate-400 font-bold">
                              {item.submenu === "women" ? "Womens Collection" : "Girls Collection"}
                            </p>
                            {categories[item.submenu].map((cat) => (
                              <Link
                                key={cat}
                                href={`/collections/${cat.toLowerCase()}`}
                                onClick={() => { setIsOpen(false); setExpandedMenu(null); }}
                                className="text-[15px] font-medium uppercase tracking-wide text-black opacity-70 hover:opacity-100 transition-opacity"
                              >
                                {cat.replace(/-/g, " ")}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={uniqueKey}
                      ref={(el) => { linkRefs.current[uniqueKey] = el; }}
                      onClick={() => setIsOpen(false)}
                      href={item.href!}
                      className={`flex items-center justify-center h-20 text-center transition-all duration-200 uppercase tracking-wider text-black ${
                        isActive ? "text-[27px] font-black opacity-100" : "text-lg font-semibold opacity-30"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}

export default Navbar;