import Link from "next/link";
import React from "react";
import Image from "next/image";

interface ModelPanel {
  imgurl1: string;
  imgurl2: string;
  imgurl3: string;
  mobileImgUrl1: string;
  mobileImgUrl2: string;
  mobileImgUrl3: string;
}

function WomenShop({
  imgurl1,
  mobileImgUrl1,
  mobileImgUrl2,
  mobileImgUrl3,
}: ModelPanel) {
  const panel = {
    title: "Editorial Vol. 1",
    subtitle: "Summer Collection 2024",
  };

  return (
    <div
      id="women-shop"
      className="relative w-full min-h-screen md:h-screen bg-black overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* 1. MOBILE VIEW: Stacked Layout (Design Kept As Is) */}
      <div className="flex flex-col md:hidden w-full pt-20 pb-10 px-4 gap-10">
        <div className="w-full text-center mb-4">
          <h2 className="text-3xl font-normal text-[#f6eeee] tracking-widest uppercase">
            Shop By Styles
          </h2>
        </div>

        {/* Mobile Main Image */}
        <div className="relative h-[70vh] w-full rounded-sm overflow-hidden">
          <Link href="/collections/kids" className="block w-full h-full">
            <Image 
              src={mobileImgUrl1} 
              alt="Style 01" 
              fill 
              unoptimized 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold uppercase">{panel.title}</h3>
              <p className="text-purple-200 text-sm">{panel.subtitle}</p>
            </div>
          </Link>
        </div>

        {/* Mobile Sub Style 01 */}
        <div className="relative h-[40vh] w-full rounded-sm overflow-hidden">
          <Image src={mobileImgUrl2} alt="Style 02" fill unoptimized className="object-cover" />
        </div>

        {/* Mobile Sub Style 02 */}
        <div className="relative h-[40vh] w-full rounded-sm overflow-hidden">
          <Image src={mobileImgUrl3} alt="Style 03" fill unoptimized className="object-cover" />
        </div>
      </div>

      {/* 2. LAPTOP VIEW: Full Screen Single Image */}
     {/* 2. LAPTOP VIEW: Full Screen Single Image */}
<div className="hidden md:block relative w-full h-full group"> {/* Added 'group' here */}
  <Image
    src={imgurl1}
    alt={panel.title}
    fill
    priority
    unoptimized
    className="object-cover transition-transform duration-1000 group-hover:scale-105"
  />
  
  {/* Desktop Cinematic Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
    
    {/* CLICKABLE LINK CONTAINER */}
    <Link 
      href="/campaign" 
      className="absolute bottom-12 right-8 md:bottom-16 md:right-16 flex items-center gap-4 text-white z-20 whitespace-nowrap group/link"
    >
      {/* Label - whitespace-nowrap ensures it stays on one line */}
      <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold drop-shadow-lg transition-opacity hover:opacity-70">
        Shop By Campaign
      </span>

      {/* Animated CTA Line */}
      <div className="w-8 h-[1px] bg-white/50 group-hover/link:w-20 group-hover/link:bg-white transition-all duration-700"></div>
    </Link>

  </div>
</div>
    </div>
  );
}

export default WomenShop;