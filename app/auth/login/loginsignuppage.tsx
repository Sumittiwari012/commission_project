import React from 'react'

function LoginSignupPage() {
  return (
    <>
      <main className="relative flex min-h-screen w-full overflow-hidden font-['Instrument_Sans']">
        
        {/* 1. BACKGROUND IMAGE SECTION 
            - Mobile: Full-screen background for a premium feel.
            - Desktop: Occupies 70% width on the left.
        */}
        <section className="absolute inset-0 md:relative md:block md:w-[70%] h-full overflow-hidden bg-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070" 
            alt="Editorial Fashion" 
            className="w-full h-full object-cover grayscale-[20%] brightness-[0.7] md:brightness-90 transition-all duration-1000"
          />
          
          {/* Text Overlay - Hidden on small mobile to keep form clean, visible on md+ */}
          <div className="absolute inset-0 bg-black/20 hidden md:flex items-end p-20">
            <div className="text-white">
              <p className="text-[10px] uppercase tracking-[0.6em] mb-4 opacity-80">The Art of Living</p>
              <h2 className="text-5xl font-serif italic leading-tight">Curated collections <br/> for the modern soul.</h2>
            </div>
          </div>
        </section>

        {/* 2. FORM SECTION
            - Mobile: Floating glass card over the image.
            - Desktop: Solid white side panel.
        */}
        <section className="relative w-full md:w-[30%] min-h-screen bg-white/10 md:bg-white backdrop-blur-xl md:backdrop-blur-none flex flex-col justify-between p-8 lg:p-16 z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.1)]">
          
          {/* Brand Logo - Mobile Centered */}
          <div className="md:text-left text-center mb-10 md:mb-0">
             <h3 className="text-xs uppercase tracking-[0.5em] font-bold text-white md:text-black">
                Wrii Studio<span className="text-blue-500">.</span>
             </h3>
          </div>

          <div className="space-y-10 bg-white md:bg-transparent p-8 md:p-0 rounded-[2rem] md:rounded-none shadow-2xl md:shadow-none">
            <header className="md:text-left text-center">
              <h1 className="text-3xl font-serif italic mb-2 text-slate-900">Welcome Back</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-400">Please enter your details to continue</p>
            </header>

            <form className="space-y-8">
              <div className="relative group">
                <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">Email Address</label>
                <input 
                  type="email" 
                  placeholder="example@studio.com" 
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm placeholder:text-slate-300"
                />
              </div>

              <div className="relative group">
                <label className="text-[9px] uppercase tracking-widest text-slate-400 absolute -top-6 left-0">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-black outline-none transition-all text-sm placeholder:text-slate-300"
                />
              </div>

              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                <label className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-black">
                  <input type="checkbox" className="accent-black w-3 h-3"/> Remember me
                </label>
                <a href="#" className="border-b border-transparent hover:border-black transition-all">Forgot?</a>
              </div>

              <button className="w-full py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-slate-800 transition-all active:scale-95">
                Sign In
              </button>
            </form>

            <footer className="text-center pt-4">
              <p className="text-[10px] uppercase tracking-widest text-slate-400">
                New to the studio? <a href="#" className="text-black font-bold border-b border-black">Create Account</a>
              </p>
            </footer>
          </div>

          {/* Footer Copyright */}
          <footer className="text-[9px] uppercase tracking-[0.3em] text-slate-400 md:text-slate-300 text-center md:text-left mt-10 md:mt-0">
            &copy; 2025 Wrii Studio.
          </footer>
        </section>

      </main>
    </>
  )
}

export default LoginSignupPage