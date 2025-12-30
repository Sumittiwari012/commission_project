
import React from "react";

function Welcome() {
  const videoLeftSrc = "https://www.w3schools.com/html/mov_bbb.mp4";
  const videoRightSrc = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

  return (
    <section id="welcome" className="sticky top-0 h-screen w-full overflow-hidden bg-black">
      
      {/* LEFT VIDEO SECTION */}
      <div className="group/left absolute inset-0 w-full h-full z-20 hover:z-50 transition-all duration-700
        [clip-path:polygon(0_0,65%_0,35%_100%,0_100%)] 
        hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
        
        <div className="absolute inset-0 w-full h-full bg-[#1e1b4b]">
          <video 
            className="w-full h-full object-cover opacity-100" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={videoLeftSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* RIGHT VIDEO SECTION */}
      <div className="group/right absolute inset-0 w-full h-full z-10 hover:z-50 transition-all duration-700
        [clip-path:polygon(65%_0,100%_0,100%_100%,35%_100%)] 
        hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
        
        <div className="absolute inset-0 w-full h-full bg-[#1e293b]">
          <video 
            className="w-full h-full object-cover opacity-100" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={videoRightSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* CONTENT OVERLAY */}
      <div className="relative z-[60] flex flex-col items-center justify-center h-full pointer-events-none text-center">
        <h1 className="text-8xl font-black text-white tracking-tight drop-shadow-2xl">WELCOME</h1>
        <p className="mt-4 text-xl text-white/90 font-medium">Hover over the videos to expand.</p>
      </div>
      
    </section>
  );
}

export default Welcome;