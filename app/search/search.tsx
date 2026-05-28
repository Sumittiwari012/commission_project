"use client";
import Link from "next/link";
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SearchPageProps {
  topRightImg?: string;
  bottomLeftImg?: string;
}

const LINE_HEIGHT = 42;

function SearchPage({
  topRightImg = 'https://drive.google.com/thumbnail?id=1GxdMrh2gwoF8rV9JThacXJ7GZCKSUH5a',
  bottomLeftImg = 'https://drive.google.com/thumbnail?id=16lTfQ3sitYQZSNprSQ-Q7Ps-QeoJ9I7P',
}: SearchPageProps) {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (keyword.trim()) {
      router.push(`/curation/${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(85,0,0)] flex items-center justify-center p-6 font-mono selection:bg-red-100 selection:text-red-600">

      <div
        className="relative w-full max-w-md bg-[#fdfaf3] shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm flex flex-col border border-black/5"
        style={{ aspectRatio: '4/3', overflow: 'visible' }}
      >

        {/* Lined paper — lines from very top */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#f1e9d2 1px, transparent 1px)`,
            backgroundSize: `100% ${LINE_HEIGHT}px`,
            backgroundPosition: `0 0`,
            overflow: 'hidden',
            borderRadius: '2px',
          }}
        />

        {/* Red inset border */}
        <div className="absolute inset-[16px] border border-red-500/50 pointer-events-none" />

        {/* TOP-RIGHT corner image */}
        <div className="absolute -top-8 -right-8 w-24 h-20 z-20 pointer-events-none">
          <img src={topRightImg} alt="" className="w-full h-full object-contain" />
        </div>

        {/* BOTTOM-LEFT corner image */}
        <div className="absolute -bottom-7 -left-6 w-24 h-20 z-20 pointer-events-none">
          <img src={bottomLeftImg} alt="" className="w-full h-full object-contain" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col h-full px-10 pt-0 pb-6">

          {/* Spacer — pushes textarea down by 2 lines */}
          <div style={{ height: `${LINE_HEIGHT * 2}px`, flexShrink: 0 }} />

          {/* Textarea with visible underline below */}
          <div className="relative flex-1 flex flex-col">
            <textarea
              value={keyword}
              placeholder="SEARCH"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setKeyword(e.target.value)}
              className="w-full flex-1 bg-transparent resize-none focus:outline-none tracking-[0.15em] font-bold text-zinc-800 uppercase p-0 border-none placeholder:text-zinc-400 placeholder:font-normal"
              style={{
                fontSize: '18px',
                lineHeight: `${LINE_HEIGHT}px`,
                paddingTop: '1px',
              }}
              spellCheck="false"
              autoFocus
              onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearch();
                }
              }}
            />
            {/* Visible underline — sits directly below the first line of text */}
            <div
              className="absolute left-0 right-0 bg-red-600/40 pointer-events-none"
              style={{ top: `${LINE_HEIGHT}px`, height: '1.5px' }}
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center shrink-0 pt-2">
            <Link
              href={keyword.trim() ? `/curation/${encodeURIComponent(keyword)}` : '#'}
              className="group flex items-center gap-2 hover:opacity-70 transition-all cursor-pointer"
            >
              <Search size={13} className="text-red-600" strokeWidth={3} />
              <span className="text-[10px] tracking-[0.3em] font-black text-red-600 uppercase">Execute Search</span>
              <ArrowRight size={11} className="text-red-600 group-hover:translate-x-1 transition-transform" />
            </Link>

            
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-sm bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
      </div>

    </div>
  );
}

export default SearchPage;