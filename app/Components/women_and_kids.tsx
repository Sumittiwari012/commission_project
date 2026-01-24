"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface addsectionprops {
    imgurl: string;
    mobileImgUrl: string;
}

function Women_And_kids({ imgurl, mobileImgUrl }: addsectionprops) {
    return (
        <div className="relative top-0 w-full h-screen shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden group cursor-default bg-black">
            
            {/* MOBILE IMAGE */}
            <div className="block md:hidden relative w-full h-full">
                <Image 
                    src={mobileImgUrl} 
                    alt="Mobile Collection Section" 
                    fill
                    unoptimized
                    className="object-cover"
                />
            </div>

            {/* DESKTOP IMAGE */}
            <div className="hidden md:block relative w-full h-full">
                <Image 
                    src={imgurl} 
                    alt="Desktop Collection Section" 
                    fill
                    unoptimized
                    priority
                    className="object-cover transition-transform duration-1000 md:group-hover:scale-105"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

            {/* WOMENS LINK (Bottom Right) */}
            <div className="absolute bottom-12 right-8 md:bottom-16 md:right-16 flex items-center gap-4 text-white z-20 pointer-events-none">
                <Link 
                    href="/collections/Women-Classic-Denim" 
                    className="pointer-events-auto flex items-center gap-4 group/link"
                >
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold drop-shadow-lg transition-opacity hover:opacity-70">
                        Womens
                    </span>
                    <div className="w-8 h-[1px] bg-white/50 group-hover/link:w-20 group-hover/link:bg-white transition-all duration-700"></div>
                </Link>
            </div>

            {/* KIDS LINK (Bottom Left) */}
            <div className="absolute bottom-12 left-8 md:bottom-16 md:left-16 flex items-center gap-4 text-white z-20 pointer-events-none">
                <Link 
                    href="/collections/Girls-Floral-Dresses" 
                    className="pointer-events-auto flex items-center gap-4 group/link"
                >
                    <div className="w-8 h-[1px] bg-white/50 group-hover/link:w-20 group-hover/link:bg-white transition-all duration-700"></div>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold drop-shadow-lg transition-opacity hover:opacity-70">
                        Kids
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Women_And_kids;