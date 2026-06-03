"use client"
import React, { useEffect, useRef } from 'react'

const crafts = [
  {
    label: 'BLOCK PRINTING',
    src: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80',
  },
  {
    label: 'EMBROIDERY',
    src: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80',
  },
  {
    label: 'WEAVING',
    src: 'https://images.pexels.com/photos/6121916/pexels-photo-6121916.jpeg',
  },
]

const IMG_SRC = 'https://cdn.phototourl.com/free/2026-06-02-3cf6e83f-347b-4861-b57b-21011186e493.png'

function Craft() {
  const shuttleRef = useRef<HTMLImageElement>(null)
  const lastTriggerRef = useRef("")

  useEffect(() => {
    const audio1 = new Audio("/audio/click1.mp3")
    const audio2 = new Audio("/audio/click2.mp3")

    const playSequence = async () => {
      try {
        audio1.currentTime = 0
        audio2.currentTime = 0

        await audio1.play()

        audio1.onended = () => {
          audio2.play().catch(() => {})
        }
      } catch {}
    }

    const interval = setInterval(() => {
      const el = shuttleRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()

      const leftEdge = rect.left <= 20
      const rightEdge = rect.right >= window.innerWidth - 20

      if (leftEdge && lastTriggerRef.current !== "left") {
        lastTriggerRef.current = "left"
        playSequence()
      }

      if (rightEdge && lastTriggerRef.current !== "right") {
        lastTriggerRef.current = "right"
        playSequence()
      }
    }, 50) 

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="bg-[#f5f2ed] min-h-screen flex flex-col pt-[10vh] md:pt-[12vh] overflow-x-hidden">
      <style>{`
        .shuttle-container {
          --shuttle-w: clamp(86px, 1.5vw, 144px);
          --shuttle-h: calc(var(--shuttle-w) * 0.22); 
          
          --half-w: calc(var(--shuttle-w) / 2);
          --half-h: calc(var(--shuttle-h) / 2);
          
          --trace-thickness: 2px;
          --trace-half: 3px; /* Hardcoded integer to prevent layout thrashing */

          /* 1. Raw percentages for the vertical distribution */
          --max-h: calc(100% - var(--shuttle-h)); 
          --t1-raw: var(--max-h);
          --t2-raw: calc(var(--max-h) * 0.91666);
          --t3-raw: calc(var(--max-h) * 0.83333);
          --t4-raw: calc(var(--max-h) * 0.75);
          --t5-raw: calc(var(--max-h) * 0.66666);
          --t6-raw: calc(var(--max-h) * 0.58333);
          --t7-raw: calc(var(--max-h) * 0.5);
          --t8-raw: calc(var(--max-h) * 0.41666);
          --t9-raw: calc(var(--max-h) * 0.33333);
          --t10-raw: calc(var(--max-h) * 0.25);
          --t11-raw: calc(var(--max-h) * 0.16666);
          --t12-raw: calc(var(--max-h) * 0.08333);
          --t13-raw: 0%;

          /* 2. PERFECTLY ROUNDED pixel centers for the track grid.
             This forces the lines to render exactly on physical pixels, completely 
             eliminating the sub-pixel rendering blur that causes uneven line thickness. */
          --cy1: round(nearest, calc(var(--t1-raw) + var(--half-h)), 1px);
          --cy2: round(nearest, calc(var(--t2-raw) + var(--half-h)), 1px);
          --cy3: round(nearest, calc(var(--t3-raw) + var(--half-h)), 1px);
          --cy4: round(nearest, calc(var(--t4-raw) + var(--half-h)), 1px);
          --cy5: round(nearest, calc(var(--t5-raw) + var(--half-h)), 1px);
          --cy6: round(nearest, calc(var(--t6-raw) + var(--half-h)), 1px);
          --cy7: round(nearest, calc(var(--t7-raw) + var(--half-h)), 1px);
          --cy8: round(nearest, calc(var(--t8-raw) + var(--half-h)), 1px);
          --cy9: round(nearest, calc(var(--t9-raw) + var(--half-h)), 1px);
          --cy10: round(nearest, calc(var(--t10-raw) + var(--half-h)), 1px);
          --cy11: round(nearest, calc(var(--t11-raw) + var(--half-h)), 1px);
          --cy12: round(nearest, calc(var(--t12-raw) + var(--half-h)), 1px);
          --cy13: round(nearest, calc(var(--t13-raw) + var(--half-h)), 1px);

          /* 3. Re-calculate the shuttle's positions to perfectly track the rounded lines */
          --t1: calc(var(--cy1) - var(--half-h));
          --t2: calc(var(--cy2) - var(--half-h));
          --t3: calc(var(--cy3) - var(--half-h));
          --t4: calc(var(--cy4) - var(--half-h));
          --t5: calc(var(--cy5) - var(--half-h));
          --t6: calc(var(--cy6) - var(--half-h));
          --t7: calc(var(--cy7) - var(--half-h));
          --t8: calc(var(--cy8) - var(--half-h));
          --t9: calc(var(--cy9) - var(--half-h));
          --t10: calc(var(--cy10) - var(--half-h));
          --t11: calc(var(--cy11) - var(--half-h));
          --t12: calc(var(--cy12) - var(--half-h));
          --t13: calc(var(--cy13) - var(--half-h));

          /* Rounded X-axis inset to prevent vertical lines from smearing horizontally */
          --anchor-inset: round(nearest, calc(var(--half-w) - var(--trace-half)), 1px);

          /* Vertical line distances */
          --v-dist-1: calc(var(--cy1) - var(--cy2) + var(--trace-thickness));
          --v-dist-2: calc(var(--cy2) - var(--cy3) + var(--trace-thickness));
          --v-dist-3: calc(var(--cy3) - var(--cy4) + var(--trace-thickness));
          --v-dist-4: calc(var(--cy4) - var(--cy5) + var(--trace-thickness));
          --v-dist-5: calc(var(--cy5) - var(--cy6) + var(--trace-thickness));
          --v-dist-6: calc(var(--cy6) - var(--cy7) + var(--trace-thickness));
          --v-dist-7: calc(var(--cy7) - var(--cy8) + var(--trace-thickness));
          --v-dist-8: calc(var(--cy8) - var(--cy9) + var(--trace-thickness));
          --v-dist-9: calc(var(--cy9) - var(--cy10) + var(--trace-thickness));
          --v-dist-10: calc(var(--cy10) - var(--cy11) + var(--trace-thickness));
          --v-dist-11: calc(var(--cy11) - var(--cy12) + var(--trace-thickness));
          --v-dist-12: calc(var(--cy12) - var(--cy13) + var(--trace-thickness));

          /* Horizontal line distances */
          --h-dist: calc(100% - var(--shuttle-w) + var(--trace-thickness));
          --h-dist-full: calc(100% - var(--half-w) + var(--trace-half));

          position: relative;
          width: calc(100% + var(--shuttle-w) * 0.8);
          margin-left: calc(-1 * var(--shuttle-w) * 0.4);
          
          overflow: hidden;
          background-color: #f5f2ed;

          /* Height explicitly rounded so 100% inside vertical lines evaluates to an exact pixel */
          height: round(nearest, calc(var(--shuttle-w) * 1.1), 1px);
        }

        /* --- TRACE LINES --- */
        .trace-line {
          position: absolute;
          background-color: #000000;
          animation-duration: 60s; 
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          z-index: 10;
          will-change: width, height;
          transform: translateZ(0); 
        }

        /* Row 1 (Right to Left) */
        .trace-h1 { right: 0; top: calc(var(--cy1) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h1; }
        @keyframes draw-h1 { 0% { width: 0; } 0.5% { width: var(--half-w); } 7%, 99.9% { width: var(--h-dist-full); } 100% { width: 0; } }
        .trace-v1 { left: var(--anchor-inset); bottom: calc(100% - var(--cy1) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v1; }
        @keyframes draw-v1 { 0%, 6.9% { height: 0; } 7.5%, 99.9% { height: var(--v-dist-1); } 100% { height: 0; } }

        /* Row 2 (Left to Right) */
        .trace-h2 { left: var(--anchor-inset); top: calc(var(--cy2) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h2; }
        @keyframes draw-h2 { 0%, 7.5% { width: 0; } 14.5%, 99.9% { width: var(--h-dist); } 100% { width: 0; } }
        .trace-v2 { right: var(--anchor-inset); bottom: calc(100% - var(--cy2) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v2; }
        @keyframes draw-v2 { 0%, 14.4% { height: 0; } 15%, 99.9% { height: var(--v-dist-2); } 100% { height: 0; } }

        /* Row 3 (Right to Left) */
        .trace-h3 { right: var(--anchor-inset); top: calc(var(--cy3) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h3; }
        @keyframes draw-h3 { 0%, 15% { width: 0; } 22%, 99.9% { width: var(--h-dist); } 100% { width: 0; } }
        .trace-v3 { left: var(--anchor-inset); bottom: calc(100% - var(--cy3) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v3; }
        @keyframes draw-v3 { 0%, 21.9% { height: 0; } 22.5%, 99.9% { height: var(--v-dist-3); } 100% { height: 0; } }

        /* Row 4 (Left to Right) */
        .trace-h4 { left: var(--anchor-inset); top: calc(var(--cy4) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h4; }
        @keyframes draw-h4 { 0%, 22.5% { width: 0; } 29.5%, 99.9% { width: var(--h-dist); } 100% { width: 0; } }
        .trace-v4 { right: var(--anchor-inset); bottom: calc(100% - var(--cy4) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v4; }
        @keyframes draw-v4 { 0%, 29.4% { height: 0; } 30%, 99.9% { height: var(--v-dist-4); } 100% { height: 0; } }

        /* Row 5 (Right to Left) */
        .trace-h5 { right: var(--anchor-inset); top: calc(var(--cy5) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h5; }
        @keyframes draw-h5 { 0%, 30% { width: 0; } 37%, 99.9% { width: var(--h-dist); } 100% { width: 0; } }
        .trace-v5 { left: var(--anchor-inset); bottom: calc(100% - var(--cy5) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v5; }
        @keyframes draw-v5 { 0%, 36.9% { height: 0; } 37.5%, 99.9% { height: var(--v-dist-5); } 100% { height: 0; } }

        /* Row 6 (Left to Right) */
        .trace-h6 { left: var(--anchor-inset); top: calc(var(--cy6) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h6; }
        @keyframes draw-h6 { 0%, 37.5% { width: 0; } 44.5%, 99.9% { width: var(--h-dist); } 100% { width: 0; } }
        .trace-v6 { right: var(--anchor-inset); bottom: calc(100% - var(--cy6) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v6; }
        @keyframes draw-v6 { 0%, 44.4% { height: 0; } 45%, 99.9% { height: var(--v-dist-6); } 100% { height: 0; } }

        /* Row 7 (Right to Left) */
        .trace-h7 { right: var(--anchor-inset); top: calc(var(--cy7) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h7; }
        @keyframes draw-h7 { 0%, 45% { width: 0; } 52%, 99.9% { width: var(--h-dist); } 100% { width: 0; } }
        .trace-v7 { left: var(--anchor-inset); bottom: calc(100% - var(--cy7) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v7; }
        @keyframes draw-v7 { 0%, 51.9% { height: 0; } 52.5%, 99.9% { height: var(--v-dist-7); } 100% { height: 0; } }

        /* Row 8 (Left to Right) */
        .trace-h8 { left: var(--anchor-inset); top: calc(var(--cy8) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h8; }
        @keyframes draw-h8 { 0%, 52.5% { width: 0; } 59.5%, 99.9% { width: var(--h-dist); } 100% { width: 0; } }
        .trace-v8 { right: var(--anchor-inset); bottom: calc(100% - var(--cy8) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v8; }
        @keyframes draw-v8 { 0%, 59.4% { height: 0; } 60%, 99.9% { height: var(--v-dist-8); } 100% { height: 0; } }

        /* Row 9 (Right to Left) */
        .trace-h9 { right: var(--anchor-inset); top: calc(var(--cy9) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h9; }
        @keyframes draw-h9 { 0%, 60% { width: 0; } 67%, 99.9% { width: var(--h-dist); } 100% { width: 0; } }
        .trace-v9 { left: var(--anchor-inset); bottom: calc(100% - var(--cy9) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v9; }
        @keyframes draw-v9 { 0%, 66.9% { height: 0; } 67.5%, 99.9% { height: var(--v-dist-9); } 100% { height: 0; } }

        /* Row 10 (Left to Right) */
        .trace-h10 { left: var(--anchor-inset); top: calc(var(--cy10) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h10; }
        @keyframes draw-h10 { 0%, 67.5% { width: 0; } 74.5%, 99.9% { width: var(--h-dist); } 100% { width: 0; } }
        .trace-v10 { right: var(--anchor-inset); bottom: calc(100% - var(--cy10) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v10; }
        @keyframes draw-v10 { 0%, 74.4% { height: 0; } 75%, 99.9% { height: var(--v-dist-10); } 100% { height: 0; } }

        /* Row 11 (Right to Left) */
        .trace-h11 { right: var(--anchor-inset); top: calc(var(--cy11) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h11; }
        @keyframes draw-h11 { 0%, 75% { width: 0; } 82%, 99.9% { width: var(--h-dist); } 100% { width: 0; } }
        .trace-v11 { left: var(--anchor-inset); bottom: calc(100% - var(--cy11) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v11; }
        @keyframes draw-v11 { 0%, 81.9% { height: 0; } 82.5%, 99.9% { height: var(--v-dist-11); } 100% { height: 0; } }

        /* Row 12 (Left to Right) */
        .trace-h12 { left: var(--anchor-inset); top: calc(var(--cy12) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h12; }
        @keyframes draw-h12 { 0%, 82.5% { width: 0; } 89.5%, 99.9% { width: var(--h-dist); } 100% { width: 0; } }
        .trace-v12 { right: var(--anchor-inset); bottom: calc(100% - var(--cy12) - var(--trace-half)); width: var(--trace-thickness); animation-name: draw-v12; }
        @keyframes draw-v12 { 0%, 89.4% { height: 0; } 90%, 99.9% { height: var(--v-dist-12); } 100% { height: 0; } }

        /* Row 13 (Right to Left - Exit off-screen) */
        .trace-h13 { right: var(--anchor-inset); top: calc(var(--cy13) - var(--trace-half)); height: var(--trace-thickness); animation-name: draw-h13; }
        @keyframes draw-h13 { 
          0%, 90% { width: 0; } 
          97.5% { width: var(--h-dist); } 
          98%, 99.9% { width: 100%; } 
          100% { width: 0; } 
        }

        /* --- SHUTTLE MOVEMENT (13 LAPS) --- */
        @keyframes shuttle {
          0%    { left: 100%; top: var(--t1); transform: scaleX(1) rotate(0deg); }
          0.5%  { left: calc(100% - var(--shuttle-w)); top: var(--t1); transform: scaleX(1) rotate(0deg); }
          7%    { left: 0%; top: var(--t1); transform: scaleX(1) rotate(0deg); }
          7.1%  { left: 0%; top: var(--t1); transform: scaleX(1) rotate(-90deg); }
          7.5%  { left: 0%; top: var(--t2); transform: scaleX(1) rotate(-90deg); }

          7.6%  { left: 0%; top: var(--t2); transform: scaleX(-1) rotate(0deg); }
          14.5% { left: calc(100% - var(--shuttle-w)); top: var(--t2); transform: scaleX(-1) rotate(0deg); }
          14.6% { left: calc(100% - var(--shuttle-w)); top: var(--t2); transform: scaleX(-1) rotate(-90deg); }
          15%   { left: calc(100% - var(--shuttle-w)); top: var(--t3); transform: scaleX(-1) rotate(-90deg); }

          15.1% { left: calc(100% - var(--shuttle-w)); top: var(--t3); transform: scaleX(1) rotate(0deg); }
          22%   { left: 0%; top: var(--t3); transform: scaleX(1) rotate(0deg); }
          22.1% { left: 0%; top: var(--t3); transform: scaleX(1) rotate(-90deg); }
          22.5% { left: 0%; top: var(--t4); transform: scaleX(1) rotate(-90deg); }

          22.6% { left: 0%; top: var(--t4); transform: scaleX(-1) rotate(0deg); }
          29.5% { left: calc(100% - var(--shuttle-w)); top: var(--t4); transform: scaleX(-1) rotate(0deg); }
          29.6% { left: calc(100% - var(--shuttle-w)); top: var(--t4); transform: scaleX(-1) rotate(-90deg); }
          30%   { left: calc(100% - var(--shuttle-w)); top: var(--t5); transform: scaleX(-1) rotate(-90deg); }

          30.1% { left: calc(100% - var(--shuttle-w)); top: var(--t5); transform: scaleX(1) rotate(0deg); }
          37%   { left: 0%; top: var(--t5); transform: scaleX(1) rotate(0deg); }
          37.1% { left: 0%; top: var(--t5); transform: scaleX(1) rotate(-90deg); }
          37.5% { left: 0%; top: var(--t6); transform: scaleX(1) rotate(-90deg); }

          37.6% { left: 0%; top: var(--t6); transform: scaleX(-1) rotate(0deg); }
          44.5% { left: calc(100% - var(--shuttle-w)); top: var(--t6); transform: scaleX(-1) rotate(0deg); }
          44.6% { left: calc(100% - var(--shuttle-w)); top: var(--t6); transform: scaleX(-1) rotate(-90deg); }
          45%   { left: calc(100% - var(--shuttle-w)); top: var(--t7); transform: scaleX(-1) rotate(-90deg); }

          45.1% { left: calc(100% - var(--shuttle-w)); top: var(--t7); transform: scaleX(1) rotate(0deg); }
          52%   { left: 0%; top: var(--t7); transform: scaleX(1) rotate(0deg); }
          52.1% { left: 0%; top: var(--t7); transform: scaleX(1) rotate(-90deg); }
          52.5% { left: 0%; top: var(--t8); transform: scaleX(1) rotate(-90deg); }

          52.6% { left: 0%; top: var(--t8); transform: scaleX(-1) rotate(0deg); }
          59.5% { left: calc(100% - var(--shuttle-w)); top: var(--t8); transform: scaleX(-1) rotate(0deg); }
          59.6% { left: calc(100% - var(--shuttle-w)); top: var(--t8); transform: scaleX(-1) rotate(-90deg); }
          60%   { left: calc(100% - var(--shuttle-w)); top: var(--t9); transform: scaleX(-1) rotate(-90deg); }

          60.1% { left: calc(100% - var(--shuttle-w)); top: var(--t9); transform: scaleX(1) rotate(0deg); }
          67%   { left: 0%; top: var(--t9); transform: scaleX(1) rotate(0deg); }
          67.1% { left: 0%; top: var(--t9); transform: scaleX(1) rotate(-90deg); }
          67.5% { left: 0%; top: var(--t10); transform: scaleX(1) rotate(-90deg); }

          67.6% { left: 0%; top: var(--t10); transform: scaleX(-1) rotate(0deg); }
          74.5% { left: calc(100% - var(--shuttle-w)); top: var(--t10); transform: scaleX(-1) rotate(0deg); }
          74.6% { left: calc(100% - var(--shuttle-w)); top: var(--t10); transform: scaleX(-1) rotate(-90deg); }
          75%   { left: calc(100% - var(--shuttle-w)); top: var(--t11); transform: scaleX(-1) rotate(-90deg); }

          75.1% { left: calc(100% - var(--shuttle-w)); top: var(--t11); transform: scaleX(1) rotate(0deg); }
          82%   { left: 0%; top: var(--t11); transform: scaleX(1) rotate(0deg); }
          82.1% { left: 0%; top: var(--t11); transform: scaleX(1) rotate(-90deg); }
          82.5% { left: 0%; top: var(--t12); transform: scaleX(1) rotate(-90deg); }

          82.6% { left: 0%; top: var(--t12); transform: scaleX(-1) rotate(0deg); }
          89.5% { left: calc(100% - var(--shuttle-w)); top: var(--t12); transform: scaleX(-1) rotate(0deg); }
          89.6% { left: calc(100% - var(--shuttle-w)); top: var(--t12); transform: scaleX(-1) rotate(-90deg); }
          90%   { left: calc(100% - var(--shuttle-w)); top: var(--t13); transform: scaleX(-1) rotate(-90deg); }

          90.1% { left: calc(100% - var(--shuttle-w)); top: var(--t13); transform: scaleX(1) rotate(0deg); }
          97.5% { left: 0%; top: var(--t13); transform: scaleX(1) rotate(0deg); }
          98.5% { left: calc(-1 * var(--shuttle-w)); top: var(--t13); transform: scaleX(1) rotate(0deg); }
          100%  { left: calc(-1 * var(--shuttle-w)); top: var(--t13); transform: scaleX(1) rotate(0deg); }
        }

        .shuttle-img {
          position: absolute;
          width: var(--shuttle-w);
          height: var(--shuttle-h); 
          object-fit: contain;      
          transform-origin: center center;
          animation: shuttle 60s linear infinite;
          pointer-events: none;
          user-select: none;
          z-index: 20;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.12));
        }
      `}</style>

      <div>
        <div className="px-[clamp(1.5rem,4vw,4rem)] pt-[clamp(1.25rem,3vw,2.5rem)] pb-[clamp(1rem,2.5vw,2rem)]">
          <p
            className="uppercase tracking-[0.35em] text-[#1a1a1a]/60 font-light"
            style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.9rem)' }}
          >
            Craft and Techniques
          </p>
        </div>

        <div className="grid grid-cols-3">
          {crafts.map(({ label, src }) => (
            <div
              key={label}
              className="relative overflow-hidden group cursor-pointer"
              style={{ aspectRatio: '1.1' }} 
            >
              <img
                src={src}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover grayscale
                           transition-all duration-700 ease-in-out
                           group-hover:scale-105 group-hover:blur-[3px] group-hover:brightness-50"
              />
              <div
                className="absolute inset-0 flex items-center justify-center z-20
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-500 ease-in-out"
              >
                <span
                  className="text-white font-semibold tracking-[0.3em] uppercase text-center px-4"
                  style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.35rem)' }}
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shuttle-container mt-auto">
        <div className="trace-line trace-h1" />
        <div className="trace-line trace-v1" />
        <div className="trace-line trace-h2" />
        <div className="trace-line trace-v2" />
        <div className="trace-line trace-h3" />
        <div className="trace-line trace-v3" />
        <div className="trace-line trace-h4" />
        <div className="trace-line trace-v4" />
        <div className="trace-line trace-h5" />
        <div className="trace-line trace-v5" />
        <div className="trace-line trace-h6" />
        <div className="trace-line trace-v6" />
        <div className="trace-line trace-h7" />
        <div className="trace-line trace-v7" />
        <div className="trace-line trace-h8" />
        <div className="trace-line trace-v8" />
        <div className="trace-line trace-h9" />
        <div className="trace-line trace-v9" />
        <div className="trace-line trace-h10" />
        <div className="trace-line trace-v10" />
        <div className="trace-line trace-h11" />
        <div className="trace-line trace-v11" />
        <div className="trace-line trace-h12" />
        <div className="trace-line trace-v12" />
        <div className="trace-line trace-h13" />

        <img
          ref={shuttleRef}
          src={IMG_SRC}
          alt=""
          className="shuttle-img"
        />
      </div>
    </main>
  )
}

export default Craft