import React from 'react'

function Footer() {
  return (
    /* md:sticky: keeps the stacking effect on laptops.
       relative: allows natural flow on mobile.
    */
<>      
      {/* --- MOBILE VERSION (Original Design) --- */}
      <footer className="block md:hidden w-full bg-slate-950 text-slate-400 py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
              <span className="text-white text-2xl font-black tracking-tighter uppercase italic">Wrii Studio</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm opacity-80 mb-8">
              Crafting high-end digital experiences and premium editorial collections.
            </p>
            
            <div className="grid grid-cols-2 gap-8 w-full mb-12">
              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Explore</h4>
                <ul className="space-y-2 text-xs">
                  <li><a href="#">Latest Works</a></li>
                  <li><a href="#">Studio Journal</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Company</h4>
                <ul className="space-y-2 text-xs">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>

            <form className="w-full max-w-sm flex flex-col gap-3 mb-10">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-blue-600"
              />
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl text-sm">
                Subscribe
              </button>
            </form>

            <div className="flex gap-6 mb-10">
               {/* Social Icons from original mobile */}
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                 <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </div>
            </div>

            <p className="text-[10px] uppercase tracking-widest opacity-60">© 2025 Wrii Studio</p>
          </div>
        </div>
      </footer>

      {/* --- DESKTOP VERSION (New Design) --- */}
      <footer className="hidden md:block w-full bg-[#1a1a1a] text-[#b0b0b0] py-16 px-16 border-t border-gray-800 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12">
            
            {/* Brand & Newsletter */}
            <div className="space-y-6">
                <div className="mb-6">
                   <h2 className="text-white text-4xl font-light tracking-tighter uppercase">Wrii Studio</h2>
                </div>
                <p className="text-white text-[11px] font-bold tracking-[0.2em]">JOIN THE GANG</p>
                <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="bg-white text-black text-sm px-4 py-3 w-full outline-none" 
                    />
                    <button className="bg-[#111111] text-white text-xs px-6 py-3 font-bold tracking-widest hover:bg-black transition-colors">
                      SUBMIT
                    </button>
                </div>
            </div>

            {/* Company */}
            <div>
                <h4 className="text-white text-[11px] font-bold tracking-[0.2em] mb-6 uppercase">Company</h4>
                <ul className="text-[11px] space-y-3 tracking-wide font-medium">
                    <li><a href="#" className="hover:text-white transition-colors">LEGAL & PRIVACY</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">TERMS & CONDITIONS</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">CONTACT US</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">CAREERS</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">REQUEST AN APPOINTMENT</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">STORE LOCATOR</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">FAQ'S</a></li>
                </ul>
            </div>

            {/* Policies */}
            <div>
                <h4 className="text-white text-[11px] font-bold tracking-[0.2em] mb-6 uppercase">Policies</h4>
                <ul className="text-[11px] space-y-3 tracking-wide font-medium">
                    <li><a href="#" className="hover:text-white transition-colors">SHIPPING TERMS</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">PAYMENT TERMS</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">RETURN & EXCHANGE</a></li>
                </ul>
            </div>

            {/* Address & Socials */}
            <div className="space-y-8">
                <div>
                    <h4 className="text-white text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Address</h4>
                    <div className="text-[11px] leading-relaxed font-medium">
                        <p className="text-white mb-1">Layap Hgnis Apparels Pvt. Ltd.</p>
                        <p className="opacity-80">Plot No 10 & 11 Gurkul Inderprasth Industrial Estate, Faridabad - 121003, Haryana - 06</p>
                        <p className="mt-4">Ph No. <span className="text-white">0129-4092300</span></p>
                        <p>GST- 06AAACL6708M1ZB</p>
                    </div>
                </div>
                
                <div className="flex items-center space-x-4">
                    <span className="text-white text-[10px] font-bold tracking-[0.1em]">STAY CONNECTED</span>
                    <div className="flex space-x-2">
                        {/* Placeholder for FontAwesome Icons - Ensure FontAwesome is loaded in your index.html */}
                        <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/10 text-xs hover:bg-white hover:text-black transition-all">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center border border-white/10 text-xs hover:bg-white hover:text-black transition-all">
                          <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* WhatsApp Floating Button */}
        <div className="absolute bottom-8 right-12 flex items-center">
            <div className="relative bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <i className="fab fa-whatsapp"></i>
                <span className="absolute -top-1 -right-1 bg-red-600 text-[10px] text-white w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-[#1a1a1a]">1</span>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer