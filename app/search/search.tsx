"use client";
import Link from "next/link";
import React, { useState, ChangeEvent, KeyboardEvent, useEffect, useRef } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SearchPageProps {
  topRightImg?: string;
  bottomLeftImg?: string;
  flowerImg?: string;  // large botanical/decorative image on the right side of the page
}

const LINE_HEIGHT = 42;

function SearchPage({
  topRightImg = 'https://drive.google.com/thumbnail?id=1GxdMrh2gwoF8rV9JThacXJ7GZCKSUH5a',
  bottomLeftImg = 'https://drive.google.com/thumbnail?id=16lTfQ3sitYQZSNprSQ-Q7Ps-QeoJ9I7P',
  flowerImg='https://cdn.phototourl.com/free/2026-05-28-2fa8e6d6-4615-4a77-ba7e-ce036393ea5c.png'  // leave undefined by default — pass your illustration URL as a prop
}: SearchPageProps) {
  const [keyword, setKeyword] = useState('');
  const [is2xl, setIs2xl] = useState(false);
  const router = useRouter();
const birdFlapAnimation = {
  animation: 'birdFlap 0.9s ease-in-out infinite',
  transformOrigin: 'center center',
  willChange: 'transform',
};
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
  const scale = is2xl ? 1.55 : 1;

  return (
    <div className="min-h-screen bg-[rgb(85,0,0)] flex items-center justify-center p-6 font-mono selection:bg-red-100 selection:text-red-600 relative overflow-hidden"
    >
      <style jsx>{`
      @keyframes birdFlyBottom {
  0% {
    bottom: 4%;
    left: 108%;
    opacity: 0;
    transform: rotate(-8deg);
  }

  6% {
    opacity: 1;
  }

  18% {
    bottom: 10%;
    left: 92%;
    transform: rotate(-2deg);
  }

  32% {
    bottom: 18%;
    left: 80%;
    transform: rotate(4deg);
  }

  46% {
    bottom: 30%;
    left: 68%;
    transform: rotate(-3deg);
  }

  58% {
    bottom: 42%;
    left: 58%;
    transform: rotate(6deg);
  }

  70% {
    bottom: 56%;
    left: 50%;
    transform: rotate(-2deg);
  }

  82% {
    bottom: 70%;
    left: 46%;
    transform: rotate(3deg);
    opacity: 1;
  }

  92% {
    bottom: 82%;
    left: 40%;
    opacity: 0.4;
    transform: rotate(0deg);
  }

  100% {
    bottom: 95%;
    left: 34%;
    opacity: 0;
    transform: rotate(0deg);
  }
}
  @keyframes birdFlap {
    0% {
      transform: scaleX(1) scaleY(1);
    }

    25% {
      transform: scaleX(0.9) scaleY(1.08);
    }

    50% {
      transform: scaleX(1.08) scaleY(0.92);
    }

    75% {
      transform: scaleX(0.94) scaleY(1.05);
    }

    100% {
      transform: scaleX(1) scaleY(1);
    }
  }

  @keyframes birdFly {
  0% {
    bottom: 4%;
    left: -10%;
    opacity: 0;
    transform: rotate(-5deg);
  }

  8% {
    opacity: 1;
  }

  18% {
    bottom: 14%;
    left: 8%;
    transform: rotate(2deg);
  }

  32% {
    bottom: 26%;
    left: 24%;
    transform: rotate(-3deg);
  }

  46% {
    bottom: 38%;
    left: 42%;
    transform: rotate(4deg);
  }

  /* HALT NEAR TOP FLOWER */
  58% {
    bottom: 52%;
    left: 50%;
    transform: rotate(-2deg);
  }

  66% {
    bottom: 52%;
    left: 60%;
    transform: rotate(0deg);
  }

  74% {
    bottom: 54%;
    left: 64%;
    transform: rotate(2deg);
  }

  86% {
    bottom: 56%;
    left: 75%;
    opacity: 1;
    transform: rotate(-2deg);
  }
  
  100% {
    bottom: 58%;
    left: 110%;
    opacity: 100;
    transform: rotate(0deg);
  }
}
  .flyingBird {
  width: 120px;
  height: 100px;
  animation: birdFly 24s ease-in-out infinite;
      }
  .flyingBirdBottom {
    width: 120px;
    height: 100px;
    animation: birdFlyBottom 22s cubic-bezier(0.42, 0, 0.2, 1) infinite;
    animation-delay: 6s;
  
  }
`}</style>
      {/* RIGHT SIDE DECORATIVE IMAGE — pass flowerImg prop with your botanical illustration */}
      {flowerImg && (
        <div
  className="absolute pointer-events-none z-0 flex items-end"
  style={{
    right: '8%',
    bottom: '-20%',
    height: '120vh',
  }}
>
          <img
  src={flowerImg}
  alt=""
  className="h-full w-auto object-contain object-bottom"
/>
        </div>
      )}
      <div className="flyingBird absolute pointer-events-none z-20">
  <img
    src={topRightImg}
    alt=""
    className="w-full h-full object-contain"
    style={birdFlapAnimation}
  />
</div>
<div className="flyingBirdBottom absolute pointer-events-none z-20">
  <img
    src={bottomLeftImg}
    alt=""
    className="w-full h-full object-contain"
    style={birdFlapAnimation}
  />
</div>
      <div
        className="relative z-10 bg-[#fdfaf3] shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm flex flex-col border border-black/5"
        style={{
          // Regular: max-w-md = 448px. 2xl: 448 * 1.55 ≈ 694px
          width: is2xl ? '694px' : '100%',
          maxWidth: is2xl ? '694px' : '448px',
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
          <img
  src={topRightImg}
  alt=""
  className="w-full h-full object-contain"
  
/>
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