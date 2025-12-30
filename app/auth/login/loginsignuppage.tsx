import React from 'react'

function loginsignuppage() {
  return (
    <>
    <main className="flex h-screen w-full">
        
        <section className="hidden md:block w-[70%] h-full relative overflow-hidden bg-slate-100">
            <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070" 
                alt="Editorial Fashion" 
                className="w-full h-full object-cover grayscale-[20%] brightness-90"
            />
            
            <div className="absolute inset-0 bg-black/10 flex items-end p-20">
                <div className="text-white">
                    <p className="text-[10px] uppercase tracking-[0.6em] mb-4 opacity-80">The Art of Living</p>
                    <h2 className="text-5xl font-serif italic leading-tight">Curated collections <br/> for the modern soul.</h2>
                </div>
            </div>
        </section>

        <section className="w-full md:w-[30%] h-full bg-white flex flex-col justify-between p-10 lg:p-16 z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)]">
            
    

            <div className="space-y-10">
                <header>
                    <h1 className="text-3xl font-serif italic mb-2">Welcome Back</h1>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400">Please enter your details to continue</p>
                </header>

                <form className="space-y-8">
                    <div className="relative group">
                        <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">Email Address</label>
                        <input type="email" placeholder="example@studio.com" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm placeholder:text-slate-200"/>
                    </div>

                    <div className="relative group">
                        <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm placeholder:text-slate-200"/>
                    </div>

                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                        <label className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-black">
                            <input type="checkbox" className="accent-black"/> Remember me
                        </label>
                        <a href="#" className="border-b border-transparent hover:border-black transition-all">Forgot?</a>
                    </div>

                    <button className="w-full py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-slate-800 transition-all">
                        Sign In
                    </button>
                </form>

                <footer className="text-center pt-4">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400">
                        New to the studio? <a href="#" className="text-black font-bold border-b border-black">Create Account</a>
                    </p>
                </footer>
            </div>

            <footer className="text-[9px] uppercase tracking-[0.3em] text-slate-300 md:text-left text-center">
                &copy; 2025 Wrii Studio.
            </footer>
        </section>

    </main>
    </>
  )
}

export default loginsignuppage