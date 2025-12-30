import Link from 'next/link';
import React from 'react'
interface addsectionprops{
    imgurl:string;
}
function addsection({imgurl}:addsectionprops) {
  return (
    <>
    <div className="sticky top-0 w-full h-[70vh]
                 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]
                 overflow-hidden">
                    <Link href="/collections">
                    <img src={imgurl} alt="Add Section Image" className="w-full h-full object-cover"/>
                    </Link>
                    <div className="absolute bottom-10 right-10 flex items-center gap-4 text-black">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold drop-shadow-md">
            Explore Now
        </span>
        
        <div className="w-8 h-[1px] bg-white/50 group-hover:w-12 group-hover:bg-white transition-all duration-500"></div>
        
    </div>
        
</div>
    </>
  )
}

export default addsection