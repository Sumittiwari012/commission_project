import Link from "next/dist/client/link"

function navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] px-6">
    <div className="mx-auto max-w-5xl">
      <div className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-white/10 px-8 backdrop-blur-xl shadow-2xl">
        
        <a href="#" className="text-2xl font-black tracking-tighter text-white">
          Wrii Studio<span className="text-blue-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-200">
          <Link href="/products">Products</Link>
          <a href="#shop" className="hover:text-blue-400 transition-colors">Collections</a>
          <a href="#gallery" className="hover:text-blue-400 transition-colors">Login/SignUp</a>
        </div>

        
      </div>
    </div>
    </nav>
  )
}

export default navbar