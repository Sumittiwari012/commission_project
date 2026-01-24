import Link from "next/link";
import React from "react";
import Image from "next/image";

interface ModelPanel {
  imgurl1: string;
  imgurl2: string; // Kept in interface to prevent prop-type errors
  imgurl3: string; // Kept in interface to prevent prop-type errors
  mobileImgUrl1: string;
  mobileImgUrl2: string;
  mobileImgUrl3: string;
}

function Shop({
  imgurl1,
  mobileImgUrl1,
  mobileImgUrl2,
  mobileImgUrl3,
}: ModelPanel) {
 

  return (
    <div
      id="shop"
      /* CHANGED: h-auto on mobile to fit the stack, h-screen on desktop for full-screen effect */
      className="relative w-full min-h-screen md:h-screen bg-black overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* 1. MOBILE VIEW: DESIGN KEPT AS IS (Vertical Stack) */}
      <div className="flex flex-col md:hidden w-full pt-20 pb-10 px-4 gap-10">
        <div className="w-full text-center mb-4">
          <h2 className="text-3xl font-normal text-[#f6eeee] tracking-widest uppercase">
            Shop By Styles
          </h2>
        </div>

        {/* Mobile Main Image */}
        <div className="relative h-[70vh] w-full rounded-sm overflow-hidden">
          <Link href="/collections/kids" className="block w-full h-full">
            <Image src={mobileImgUrl1} alt="Style 01" fill unoptimized className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 p-6 flex flex-col justify-end">
              
            </div>
          </Link>
        </div>

        {/* Mobile Style 01 */}
        <div className="relative h-[40vh] w-full rounded-sm overflow-hidden">
          <Image src={mobileImgUrl2} alt="Style 02" fill unoptimized className="object-cover" />
        </div>

        {/* Mobile Style 02 */}
        <div className="relative h-[40vh] w-full rounded-sm overflow-hidden">
          <Image src={mobileImgUrl3} alt="Style 03" fill unoptimized className="object-cover" />
        </div>
      </div>

      {/* 2. LAPTOP VIEW: FULL SCREEN SINGLE IMAGE */}
     {/* 2. LAPTOP VIEW: FULL SCREEN SINGLE IMAGE */}
<div className="hidden md:block relative w-full h-full">
  <Image
    src={imgurl1}
    alt="collection panel"
    fill
    priority
    unoptimized
    className="object-cover transition-transform duration-1000 group-hover:scale-105"
  />

  {/* Desktop Overlay Content */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
    {/* Corrected Link Wrapper */}
    <Link
      href="/collections/Girls-Floral-Dresses"
      className="absolute bottom-12 right-8 md:bottom-16 md:right-16 flex items-center gap-4 text-white z-20 group/link"
    >
      <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold drop-shadow-lg transition-opacity hover:opacity-70">
        New Collections
      </span>
      {/* The line now animates when the Link is hovered */}
      <div className="w-8 h-[1px] bg-white/50 group-hover/link:w-20 group-hover/link:bg-white transition-all duration-700"></div>
    </Link>
  </div>
</div>
    </div>
  );
}

export default Shop;