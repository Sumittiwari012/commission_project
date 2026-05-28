"use client";
import Link from "next/link";
import React, { useState, ChangeEvent, KeyboardEvent, useEffect, useRef } from 'react';
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
  const [is2xl, setIs2xl] = useState(false);
  const router = useRouter();

  // Detect 2xl (≥1536px) — scale up only above this threshold
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1536px)');
    setIs2xl(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIs2xl(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleSearch = () => {
    if (keyword.trim()) {
      router.push(`/curation/${encodeURIComponent(keyword)}`);
    }
  };

  // At 2xl scale everything up proportionally (~1.55×)
  const scale = is2xl ? 2 : 1;
  return (
<div className="min-h-screen bg-[rgb(85,0,0)] flex items-center justify-center p-6 2xl:p-12 font-mono selection:bg-red-100 selection:text-red-600">
      <div
        className="relative bg-[#fdfaf3] shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm flex flex-col border border-black/5"
        style={{
  width: is2xl ? '46vw' : '100%',
  maxWidth: is2xl ? '900px' : '448px',
  minWidth: is2xl ? '760px' : 'unset',
  aspectRatio: '4/3',
  overflow: 'visible',
}}
      >

        {/* Lined paper */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#f1e9d2 1px, transparent 1px)`,
            backgroundSize: `100% ${LINE_HEIGHT * scale}px`,
            backgroundPosition: `0 0`,
            overflow: 'hidden',
            borderRadius: '2px',
          }}
        />

        {/* Red inset border */}
        <div className="absolute border border-red-500/50 pointer-events-none"
          style={{ inset: `${16 * scale}px` }} />

        {/* TOP-RIGHT corner image */}
        <div className="absolute z-20 pointer-events-none"
          style={{
            top: `${-32 * scale}px`,
            right: `${-32 * scale}px`,
            width: `${96 * scale}px`,
            height: `${80 * scale}px`,
          }}>
          <img src={topRightImg} alt="" className="w-full h-full object-contain" />
        </div>

        {/* BOTTOM-LEFT corner image */}
        <div className="absolute z-20 pointer-events-none"
          style={{
            bottom: `${-28 * scale}px`,
            left: `${-24 * scale}px`,
            width: `${96 * scale}px`,
            height: `${80 * scale}px`,
          }}>
          <img src={bottomLeftImg} alt="" className="w-full h-full object-contain" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col h-full pb-6"
          style={{ paddingLeft: `${40 * scale}px`, paddingRight: `${40 * scale}px` }}>

          {/* Spacer — 2 lines */}
          <div style={{ height: `${LINE_HEIGHT * scale * 2}px`, flexShrink: 0 }} />

          {/* Textarea */}
          <div className="relative flex-1 flex flex-col">
            <textarea
              value={keyword}
              placeholder="SEARCH"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setKeyword(e.target.value)}
              className="w-full flex-1 bg-transparent resize-none focus:outline-none tracking-[0.15em] font-bold text-zinc-800 uppercase p-0 border-none placeholder:text-zinc-400 placeholder:font-normal"
              style={{
                fontSize: `${18 * scale}px`,
                lineHeight: `${LINE_HEIGHT * scale}px`,
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
            {/* Underline below first line */}
            <div
              className="absolute left-0 right-0 bg-red-600/40 pointer-events-none"
              style={{ top: `${LINE_HEIGHT * scale}px`, height: '1.5px' }}
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center shrink-0 pt-2">
            <Link
              href={keyword.trim() ? `/curation/${encodeURIComponent(keyword)}` : '#'}
              className="group flex items-center gap-2 hover:opacity-70 transition-all cursor-pointer"
            >
              <Search strokeWidth={3} className="text-red-600"
                style={{ width: `${13 * scale}px`, height: `${13 * scale}px` }} />
              <span className="font-black text-red-600 uppercase"
                style={{ fontSize: `${10 * scale}px`, letterSpacing: '0.3em' }}>
                Execute Search
              </span>
              <ArrowRight className="text-red-600 group-hover:translate-x-1 transition-transform"
                style={{ width: `${11 * scale}px`, height: `${11 * scale}px` }} />
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-sm bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
      </div>

    </div>
  );
}

export default SearchPage;