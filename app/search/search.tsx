"use client";
import Link from "next/link";
import React, { useState } from 'react';
import { Search, PenLine, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter

function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter(); // Initialize the router

  const handleSearch = (e) => {
    // Prevent default if you're using a form, otherwise trigger navigation
    if (keyword.trim()) {
      router.push(`/curation/${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 font-mono selection:bg-red-100 selection:text-red-600">
      
      <div className="relative w-full max-w-lg aspect-[1.4/1] bg-[#fdfaf3] shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm overflow-hidden flex flex-col border border-black/5">
        
        {/* CSS-only Lined Paper Texture */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#f1e9d2 1.5px, transparent 1.5px)`,
            backgroundSize: '100% 42px',
            backgroundPosition: '0 22px' 
          }}
        />

        <div className="relative flex-1 z-10 flex flex-col px-10 pb-4 pt-[64px]">
          
          {/* Animated Pen */}
          {keyword === '' && (
            <div className="absolute top-[32px] left-0 flex items-center pointer-events-none animate-pulse">
               <PenLine size={20} className="text-red-500 -rotate-45 mr-2" />
               <span className="text-[10px] tracking-widest text-red-400 font-bold uppercase">Ready to Write...</span>
            </div>
          )}

          <textarea
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full flex-1 bg-transparent resize-none focus:outline-none text-lg md:text-xl leading-[42px] tracking-[0.15em] font-bold text-zinc-800 uppercase py-0 z-10"
            spellCheck="false"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
              }
            }}
          />

          {/* Aesthetic Footer */}
          <div className="flex justify-between items-center pt-4 border-t border-red-600/10">
            <div className="flex items-center gap-6">
               <div className="flex gap-2">
                  <span className="w-12 h-[1.5px] bg-red-600" />
                  <span className="w-4 h-[1.5px] bg-red-600/40" />
               </div>
               
               {/* Fixed Search Action */}
               <Link 
                href={keyword.trim() ? `/curation/${encodeURIComponent(keyword)}` : "#"} 
                className="group flex items-center gap-2 hover:opacity-70 transition-all cursor-pointer"
               >
                 <Search size={14} className="text-red-600" strokeWidth={3} />
                 <span className="text-[10px] tracking-[0.3em] font-black text-red-600 uppercase">Execute Search</span>
                 <ArrowRight size={12} className="text-red-600 translate-x-0 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>

            <p className="text-[8px] tracking-[0.5em] text-red-600/40 font-black uppercase">
              Ref. Index 2026
            </p>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: translateY(0) rotate(-45deg); opacity: 0.6; }
          50% { transform: translateY(-5px) rotate(-40deg); opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default SearchPage;