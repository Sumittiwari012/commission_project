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

function Craft() {
  const canvasRef = useRef(null);
  const faceImageRef = useRef(null);
  
  // Audio Refs
  const click1 = useRef(null);
  const click2 = useRef(null);

  const revealY = useRef(0);
  const revealX = useRef(0);
  const isGoingRight = useRef(true); 
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize Audio
    click1.current = new Audio('/audio/click1.mp3');
    click2.current = new Audio('/audio/click2.mp3');

    const faceImg = new Image();
    faceImg.src = "https://drive.google.com/thumbnail?id=1y51-zuXanXpsYze9P4Y_YvdYpmnhVxaY";
    faceImg.onload = () => { faceImageRef.current = faceImg; };

    const blackBarHeight = 4;
    const transparentGapHeight = 2;
    const step = blackBarHeight + transparentGapHeight;

    const playShuttleSounds = () => {
      if (!click1.current || !click2.current) return;
      click1.current.currentTime = 0;
      click1.current.play().catch(() => {});
      click1.current.onended = () => {
        if (!click2.current) return;
        click2.current.currentTime = 0;
        click2.current.play().catch(() => {});
      };
    };

    const drawShutterMask = () => {
      ctx.fillStyle = "#000000";
      for (let y = 0; y < canvas.height; y += step) {
        ctx.fillRect(0, y, canvas.width, blackBarHeight);
        if (y > revealY.current) {
        } else if (y < revealY.current) {
          ctx.fillRect(0, y + blackBarHeight, canvas.width, transparentGapHeight);
        } else {
          if (isGoingRight.current) {
            ctx.fillRect(revealX.current, y + blackBarHeight, canvas.width - revealX.current, transparentGapHeight);
          } else {
            ctx.fillRect(0, y + blackBarHeight, canvas.width - revealX.current, transparentGapHeight);
          }
        }
      }
    };

    const drawFaceImage = () => {
      if (!faceImageRef.current) return;
      const imgWidth = 160; 
      const imgHeight = 40;
      const currentX = isGoingRight.current ? revealX.current : (canvas.width - revealX.current);
      const gapCenterY = revealY.current + blackBarHeight + (transparentGapHeight / 2);

      ctx.save();
      ctx.translate(currentX, gapCenterY);
      if (!isGoingRight.current) ctx.scale(-1, 1);
      ctx.drawImage(faceImageRef.current, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
      ctx.restore();
    };

    const drawPetal = (x, y, w, h, color, rotation = 0) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(w * 0.5, -h * 0.2, w * 0.4, -h * 0.8, 0, -h);
      ctx.bezierCurveTo(-w * 0.4, -h * 0.8, -w * 0.5, -h * 0.2, 0, 0);
      ctx.closePath();
      ctx.globalAlpha = 1.0;
      ctx.fillStyle = color;
      ctx.fill();
      ctx.restore();
    };

    const drawCenter = (cx, cy, size) => {
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx, cy, size * 0.12, size * 0.06, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#d8a400";
      ctx.fill();
      ctx.restore();
    };

    const drawLotus = (cx, baseY, size) => {
      const flowerY = baseY - size * 0.18;
      const centerY = flowerY + 22;
      const pw = size * 0.45;
      const ph = size;

      // Layer 1: Outer Petals (Lavender/Purple)
      drawPetal(cx - size * 0.55, flowerY + 10, pw * 0.85, ph * 0.75, "#c39bf8", -0.75);
      drawPetal(cx + size * 0.55, flowerY + 10, pw * 0.85, ph * 0.75, "#c39bf8", 0.75);
      drawPetal(cx - size * 0.30, flowerY + 4,  pw * 0.9,  ph * 0.85, "#d4aaff", -0.42);
      drawPetal(cx + size * 0.30, flowerY + 4,  pw * 0.9,  ph * 0.85, "#d4aaff", 0.42);
      drawPetal(cx, flowerY, pw, ph, "#c39bf8", 0);

      // Layer 2: Middle Petals (Deepened from red-pink to Amethyst/Purple)
      drawPetal(cx - size * 0.42, flowerY + 6,  pw * 0.88, ph * 0.88, "#9b59b6", -0.55);
      drawPetal(cx + size * 0.42, flowerY + 6,  pw * 0.88, ph * 0.88, "#9b59b6", 0.55);
      drawPetal(cx - size * 0.22, flowerY + 8,  pw * 0.85, ph * 0.78, "#8e44ad", -0.28);
      drawPetal(cx + size * 0.22, flowerY + 8,  pw * 0.85, ph * 0.78, "#8e44ad", 0.28);
      drawPetal(cx, flowerY + 6,  pw * 0.92, ph * 0.82, "#a569bd", 0);

      // Layer 3: Inner Petals (Light Lavender)
      drawPetal(cx - size * 0.28, flowerY + 14, pw * 0.75, ph * 0.68, "#bb8fce", -0.38);
      drawPetal(cx + size * 0.28, flowerY + 14, pw * 0.75, ph * 0.68, "#bb8fce", 0.38);
      drawPetal(cx - size * 0.13, flowerY + 16, pw * 0.7,  ph * 0.62, "#d2b4de", -0.18);
      drawPetal(cx + size * 0.13, flowerY + 16, pw * 0.7,  ph * 0.62, "#d2b4de", 0.18);
      drawPetal(cx, flowerY + 18, pw * 0.78, ph * 0.65, "#bb8fce", 0);

      // Layer 4: Inner-mid tight petals (Pale Purple)
      drawPetal(cx - size * 0.08, flowerY + 22, pw * 0.6, ph * 0.55, "#e8daef", -0.12);
      drawPetal(cx + size * 0.08, flowerY + 22, pw * 0.6, ph * 0.55, "#e8daef", 0.12);
      drawPetal(cx, flowerY + 24, pw * 0.65, ph * 0.58, "#f4ecf7", 0);

      // Layer 5: Very tight center petals (Deep Blue-Purple/Violet)
      drawPetal(cx - size * 0.04, flowerY + 28, pw * 0.4, ph * 0.4, "#6c3483", -0.05);
      drawPetal(cx + size * 0.04, flowerY + 28, pw * 0.4, ph * 0.4, "#6c3483", 0.05);
      drawPetal(cx, flowerY + 30, pw * 0.45, ph * 0.42, "#884ea0", 0);

      drawCenter(cx, centerY, size);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "red"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const lotusSize = Math.min(canvas.height * 1.1, 140);
      drawLotus(canvas.width * 0.25, canvas.height, lotusSize);
      drawLotus(canvas.width * 0.50, canvas.height, lotusSize);
      drawLotus(canvas.width * 0.75, canvas.height, lotusSize);

      drawShutterMask();
      drawFaceImage(); 

      if (revealY.current >= -step) {
        if (revealX.current === 0) {
          playShuttleSounds();
        }

        revealX.current += 6; 
        
        if (revealX.current >= canvas.width) {
          revealX.current = 0;
          revealY.current -= step;
          isGoingRight.current = !isGoingRight.current;
        }
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        revealY.current = Math.floor((canvas.height - transparentGapHeight) / step) * step;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <main className="bg-[#f5f2ed] h-screen overflow-hidden flex flex-col gap-0 pt-[8vh] md:pt-[10vh]">
      <div className="flex-none">
        <div className="px-[clamp(1.5rem,4vw,4rem)] pt-[clamp(1.25rem,3vw,2.5rem)] pb-[clamp(1rem,2.5vw,2rem)]">
          <p className="uppercase tracking-[0.35em] text-[#1a1a1a]/60 font-light" style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.9rem)' }}>
            Craft and Techniques
          </p>
        </div>

        <div className="grid grid-cols-3">
          {crafts.map(({ label, src }) => (
            <div key={label} className="relative overflow-hidden group cursor-pointer" style={{ aspectRatio: '1.4' }}>
              <img
                src={src}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:blur-[3px] group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <span className="text-white font-semibold tracking-[0.3em] uppercase text-center px-4" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.35rem)' }}>
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden bg-black">
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>
    </main>
  )
}

export default Craft