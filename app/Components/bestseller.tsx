"use client";
import Link from "next/link";
import React from 'react'

// Changed 'bestseller' to 'Bestseller'
function Bestseller() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-8 py-20 overflow-hidden bg-[#f4f4f4]">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* LEFT SECTION */}
            <div className="max-w-md relative z-10">
                <h1 className="font-['Playfair_Display'] text-4xl lg:text-5xl leading-tight text-[#1a1a1a] mb-6">
                    Rishab Rikhiram Sharma in Torani
                </h1>
                <p className="text-gray-600 leading-relaxed text-lg mb-8 font-light">
                    Renowned Sitarist Rishab Rikhiram Sharma looked ethereal as he 
                    chose our Dahre Anjum Sherwani Set for his performance, and we 
                    are in awe of this look as much as we are in awe of his music.
                </p>
                <Link  href="products/Women-White-Shirts-1">
                <button className="bg-[#8c5c5c] text-white px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold hover:opacity-90 transition-opacity">
                    Shop the Look
                </button>
                </Link>
            </div>

            {/* RIGHT SECTION: COLLAGE */}
            <div className="relative h-[550px] lg:h-[700px] w-full mt-10 lg:mt-0">
                
                {/* Background Top Left */}
                <div className="absolute top-0 left-2 w-[38%] h-[50%] z-0">
                    <img src="https://images.pexels.com/photos/19351175/pexels-photo-19351175.jpeg" 
                         alt="Background Top Left" 
                         className="w-full h-full object-cover shadow-lg rounded-sm opacity-90 grayscale-[20%]" />
                </div>

                {/* Background Top Right */}
                <div className="absolute top-8 right-2 w-[35%] h-[45%] z-0">
                    <img src="https://images.pexels.com/photos/29421072/pexels-photo-29421072.jpeg" 
                         alt="Background Top Right" 
                         className="w-full h-full object-cover shadow-lg rounded-sm grayscale-[20%]" />
                </div>

                {/* Midground Bottom Left */}
                <div className="absolute bottom-2 left-6 w-[32%] h-[40%] z-10 shadow-xl border-[6px] border-[#f4f4f4] rounded-sm">
                    <img src="https://images.pexels.com/photos/3393793/pexels-photo-3393793.jpeg" 
                         alt="Foreground Bottom Left" 
                         className="w-full h-full object-cover" />
                </div>

                {/* MAIN Focal Image - Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] h-[60%] z-30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-[8px] border-[#f4f4f4] rounded-sm">
                    <img src="https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg" 
                         alt="Main Focus" 
                         className="w-full h-full object-cover" />
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Bestseller;