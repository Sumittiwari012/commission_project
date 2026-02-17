"use client"
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
}: ModelPanel) {
  const panel = {
    title: "Editorial Vol. 1",
  };

  return (
    <div
      id="women-shop"
      /* Changed to h-screen to ensure full-screen on both mobile and desktop */
      className="relative w-full h-screen bg-black overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)] group"
    >
      {/* 1. MOBILE IMAGE (Full Screen) */}
      <div className="block md:hidden relative w-full h-full">
        <Image 
          src={mobileImgUrl1} 
          alt="Mobile Collection" 
          fill 
          unoptimized 
          className="object-cover" 
        />
      </div>

      {/* 2. LAPTOP VIEW (Full Screen) */}
      <div className="hidden md:block relative w-full h-full">
        <Image
          src={imgurl1}
          alt={panel.title}
          fill
          priority
          unoptimized
          className="object-cover transition-transform duration-1000 md:group-hover:scale-105"
        />
      </div>

      {/* Cinematic Overlay (Shared) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-10"></div>

      {/* NAVIGATION LINKS CONTAINER */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        
        {/* RIGHT LINK (Bottom Right) */}
        <div className="absolute bottom-12 right-8 md:bottom-16 md:right-16 flex items-center gap-4 text-white">
          <Link 
            href="/campaign" 
            className="pointer-events-auto flex items-center gap-4 group/link"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold drop-shadow-lg transition-opacity hover:opacity-70">
              Shop by Campaign
            </span>
            <div className="w-8 h-[1px] bg-white/50 group-hover/link:w-20 group-hover/link:bg-white transition-all duration-700"></div>
          </Link>
        </div>

        {/* LEFT LINK (Bottom Left) */}
        

      </div>
    </div>
  );
}

export default WomenShop;