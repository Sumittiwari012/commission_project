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
  flowerImg='https://cdn.phototourl.com/free/2026-05-28-2fa8e6d6-4615-4a77-ba7e-ce036393ea5c.png'
}: SearchPageProps) {
  const [keyword, setKeyword] = useState('');
  const [showLoomText, setShowLoomText] = useState(false);
  const [is2xl, setIs2xl] = useState(false);
  const router = useRouter();
  const audio1Ref = useRef<HTMLAudioElement | null>(null);
  const audio2Ref = useRef<HTMLAudioElement | null>(null);
  const clickToggleRef = useRef(false);

  const birdFlapAnimation = {
    animation: 'birdFlap 0.9s ease-in-out infinite',
    transformOrigin: 'center center',
    willChange: 'transform',
  };

  useEffect(() => {
    audio1Ref.current = new Audio('/audio/click1.mp3');
    audio2Ref.current = new Audio('/audio/click2.mp3');
    if (audio1Ref.current) audio1Ref.current.volume = 0.5;
    if (audio2Ref.current) audio2Ref.current.volume = 0.5;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1536px)');
    setIs2xl(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIs2xl(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const playAlternateClick = () => {
    const useSecond = clickToggleRef.current;
    const audio = useSecond ? audio2Ref.current : audio1Ref.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    clickToggleRef.current = !clickToggleRef.current;
  };

  const handleSearch = () => {
    if (keyword.trim()) {
      router.push(`/curation/${encodeURIComponent(keyword)}`);
    }
  };

  const scale = is2xl ? 1.55 : 1;

  // Bird base size — scales up at 2xl
  const birdSize = 120 * scale;

  return (
    <div
      className="min-h-screen bg-[rgb(85,0,0)] flex items-center justify-center p-6 font-mono selection:bg-red-100 selection:text-red-600 relative overflow-hidden"
    >
      <style jsx>{`
        @keyframes birdFlap {
          0%   { transform: scaleX(1)    scaleY(1);    }
          25%  { transform: scaleX(0.9)  scaleY(1.08); }
          50%  { transform: scaleX(1.08) scaleY(0.92); }
          75%  { transform: scaleX(0.94) scaleY(1.05); }
          100% { transform: scaleX(1)    scaleY(1);    }
        }

        @keyframes birdFly {
          0%  { bottom: 6%;  left: 104%; opacity: 0; transform: rotate(-12deg); }
          6%  { opacity: 1; }
          16% { bottom: 18%; left: 92%;  transform: rotate(-6deg); }
          28% { bottom: 36%; left: 84%;  transform: rotate(2deg);  }
          40% { bottom: 52%; left: 78%;  transform: rotate(8deg);  }
          48% { bottom: 52%; left: 80%;  transform: rotate(8deg);  }
          56% { bottom: 50%; left: 78%;  transform: rotate(8deg);  }
          64% { bottom: 50%; left: 78%;  transform: rotate(8deg);  }
          70% { bottom: 54%; left: 76%;  transform: rotate(8deg);  }
          76% { bottom: 54%; left: 76%;  transform: rotate(8deg);  }
          82% { bottom: 53%; left: 78%;  transform: rotate(8deg);  }
          86% { bottom: 53%; left: 78%;  transform: rotate(8deg);  opacity: 1;   }
          90% { bottom: 52%; left: 80%;  transform: rotate(8deg);  opacity: 1;   }
          94% { bottom: 52%; left: 80%;  transform: rotate(8deg);  opacity: 0.9; }
          97% { bottom: 52%; left: 80%;  transform: rotate(8deg);  opacity: 0.45;}
          100%{ bottom: 52%; left: 80%;  transform: rotate(8deg);  opacity: 0;   }
        }

        .flyingBird {
          animation: birdFly 24s ease-in-out infinite;
        }
      `}</style>

      {/* RIGHT SIDE DECORATIVE IMAGE */}
      {flowerImg && (
        <div
          className="absolute pointer-events-none z-0 flex items-end"
          style={{ right: '8%', bottom: '-20%', height: '120vh' }}
        >
          <img
            src={flowerImg}
            alt=""
            className="h-full w-auto object-contain object-bottom"
          />
        </div>
      )}

      {/* FLYING BIRD — width & height now scale with `scale` */}
      <div
        className="flyingBird absolute pointer-events-none z-20"
        style={{ width: `${birdSize}px`, height: `${birdSize * (100 / 120)}px` }}
      >
        <img
          src="https://cdn.phototourl.com/free/2026-05-28-2e77feb4-068a-4c60-8a97-6362f5059d20.png"
          alt=""
          className="w-full h-full object-contain"
          style={birdFlapAnimation}
        />
      </div>

      {/* CARD */}
      <div
        className="relative z-10 bg-[#fdfaf3] shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm flex flex-col border border-black/5"
        style={{
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
        <div
          className="absolute border border-red-500/50 pointer-events-none"
          style={{ inset: `${16 * scale}px` }}
        />

        {/* TOP-RIGHT corner image */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            top: `${-32 * scale}px`,
            right: `${-32 * scale}px`,
            width: `${96 * scale}px`,
            height: `${80 * scale}px`,
          }}
        >
          <img src={topRightImg} alt="" className="w-full h-full object-contain" />
        </div>

        {/* BOTTOM-LEFT corner image */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            bottom: `${-28 * scale}px`,
            left: `${-24 * scale}px`,
            width: `${96 * scale}px`,
            height: `${80 * scale}px`,
          }}
        >
          <img src={bottomLeftImg} alt="" className="w-full h-full object-contain" />
        </div>

        {/* CONTENT */}
        <div
          className="relative z-10 flex flex-col h-full pb-6"
          style={{ paddingLeft: `${40 * scale}px`, paddingRight: `${40 * scale}px` }}
        >
          {/* Spacer — 2 lines */}
          <div style={{ height: `${LINE_HEIGHT * scale * 2}px`, flexShrink: 0 }} />

          {/* Textarea */}
          <div className="relative flex-1 flex flex-col">
            {/* Search icon */}
            <Search
              strokeWidth={3}
              className="absolute text-red-600 z-20"
              style={{
                width: `${24 * scale}px`,
                height: `${24 * scale}px`,
                top: `${(LINE_HEIGHT * scale) / 2 - 12}px`,
                right: `${8 * scale}px`,
              }}
            />
            <textarea
              value={keyword}
              placeholder="SEARCH"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                setKeyword(e.target.value);
                playAlternateClick();
                if (!showLoomText && e.target.value.trim().length > 0) {
                  setShowLoomText(true);
                }
              }}
              className="w-full flex-1 bg-transparent resize-none focus:outline-none tracking-[0.15em] font-bold text-zinc-800 uppercase p-0 border-none placeholder:text-zinc-400 placeholder:font-normal"
              style={{
                fontSize: `${18 * scale}px`,
                lineHeight: `${LINE_HEIGHT * scale}px`,
                paddingTop: '1px',
                paddingRight: `${42 * scale}px`,
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
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-sm bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
      </div>

      {/* LOOM TEXT — width scales with `scale` so full sentence is always visible */}
      <div
        className={`absolute overflow-hidden whitespace-nowrap transition-all duration-30000 ${
          showLoomText ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          bottom: is2xl ? '25%' : '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#f5e6c8',
          letterSpacing: '0.08em',
          fontSize: `${16 * scale}px`,
          fontFamily: 'monospace',
          pointerEvents: 'none',
          // Scale the revealed width so full text is visible at 2xl
          width: showLoomText ? `${620 * scale}px` : '0px',
          transition:
            'width 15s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease',
          textAlign: 'center',
        }}
      >
        That rhythmic sound you hear is the loom at work.
      </div>
    </div>
  );
}

export default SearchPage;