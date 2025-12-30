"use client"
import Link from "next/link"

function navbar() {
  return (
    
    <nav className="fixed top-4 left-0 right-0 z-[100] px-6">
    <div className="mx-auto max-w-7xl">
      <div className="flex h-12 items-center justify-between bg-transparent px-4 transition-all duration-500">
        
        <div className="flex flex-1 items-center gap-8 text-[10px] uppercase tracking-[0.25em] font-bold text-black/50">
            <Link href="/collections/womens" className=" text-black transition-colors">Womens</Link>
          <Link href="/collections/kids" className=" text-black transition-colors">Kids</Link>
          
        </div>

        <div className="flex flex-none justify-center">
          <Link href="/" className="text-xl font-black tracking-[-0.05em] text-black">
            WRII STUDIO<span className="text-blue-500">.</span>
          </Link>
        </div>

        <div className="flex flex-1 justify-end items-center gap-8 text-[10px] uppercase tracking-[0.25em] font-bold text-black/50">
          <Link href="/collections/new-arrivals" className="text-black transition-colors">New Arrivals</Link>
          <Link href="/collections/sale" className="text-black transition-colors">Sale</Link>
          <Link href="/collections" className="text-black transition-colors">Collections</Link>
          <Link href="/auth/login" className="text-black transition-colors">Login/Signup</Link>
        </div>
        
      </div>
    </div>
  </nav>
  )
}

export default navbar