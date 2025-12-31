import Link from 'next/link';
import React from 'react'

interface addsectionprops {
    imgurl: string;        // Desktop link
    mobileImgUrl: string;  // Phone link
}

function AddSection({ imgurl, mobileImgUrl }: addsectionprops) {
    return (
        /* h-screen: Full height on mobile.
           md:h-[70vh]: Returns to original height on laptops.
           sticky top-0: Maintains the stacking lookbook effect.
        */
        <div className="relative sticky top-0 w-full h-screen md:h-[70vh]
                 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]
                 overflow-hidden relative group cursor-pointer">
            
            <Link href="/collections" className="block w-full h-full">
                
                {/* MOBILE IMAGE: 
                    'block' makes it visible on phones. 
                    'md:hidden' hides it on laptops. 
                */}
                <img 
                    src={mobileImgUrl} 
                    alt="Mobile Collection Section" 
                    className="block md:hidden w-full h-full object-cover"
                />

                {/* LAPTOP IMAGE: 
                    'hidden' hides it on phones. 
                    'md:block' shows it on laptops. 
                */}
                <img 
                    src={imgurl} 
                    alt="Desktop Collection Section" 
                    className="hidden md:block w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-105"
                />

                {/* Mobile-only Gradient: 
                    Ensures white text is readable against various photo backgrounds. 
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden"></div>
            </Link>

            {/* Content Overlay */}
            <div className="absolute bottom-12 right-8 md:bottom-10 md:right-10 flex items-center gap-4 text-white pointer-events-none">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold drop-shadow-lg">
                    Explore Now
                </span>
                <div className="w-8 h-[1px] bg-white/50 md:group-hover:w-12 md:group-hover:bg-white transition-all duration-500"></div>
            </div>
        </div>
    )
}

export default AddSection;