import Link from "next/dist/client/link"

function navbar() {
  return (
    
    <nav className="fixed top-8 left-0 right-0 z-[100] px-6">
    <div className="mx-auto max-w-7xl">
      <div className="flex h-12 items-center justify-between bg-transparent px-4 transition-all duration-500">
        
        <div className="flex flex-1 items-center gap-8 text-[10px] uppercase tracking-[0.25em] font-bold text-black/50">
            <a href="#" className=" text-black transition-colors">Womens</a>
          <a href="#" className=" text-black transition-colors">Kids</a>
          
        </div>

        <div className="flex flex-none justify-center">
          <a href="#" className="text-xl font-black tracking-[-0.05em] text-black">
            WRII STUDIO<span className="text-blue-500">.</span>
          </a>
        </div>

        <div className="flex flex-1 justify-end items-center gap-8 text-[10px] uppercase tracking-[0.25em] font-bold text-black/50">
          <Link href="/products" className="text-black transition-colors">Products</Link>
          <a href="#" className="text-black transition-colors">Collections</a>
          <a href="#" className="text-black transition-colors">Login/Signup</a>
        </div>
        
      </div>
    </div>
  </nav>
  )
}

export default navbar