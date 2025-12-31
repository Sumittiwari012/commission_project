import React from "react";

function Welcome() {
  const videoLeftSrc = "https://www.pexels.com/download/video/4919748/";
  const videoRightSrc = "https://www.pexels.com/download/video/3403228/";
  const mobileVideoSrc = "https://www.pexels.com/download/video/3894725/"; // Using left video for mobile

  return (
    <section id="welcome" className="sticky top-0 h-screen w-full overflow-hidden bg-black">
      
      {/* 1. MOBILE ONLY VIDEO: Visible only on small screens, hidden on laptop (md:hidden) */}
      <div className="block md:hidden absolute inset-0 w-full h-full z-0">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          {/* Using the Left video as the primary mobile focus */}
          <source src={mobileVideoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. LAPTOP ONLY: LEFT VIDEO SECTION (Hidden on mobile) */}
      <div className="hidden md:block group/left absolute inset-0 w-full h-full z-20 hover:z-50 transition-all duration-700
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

      {/* 3. LAPTOP ONLY: RIGHT VIDEO SECTION (Hidden on mobile) */}
      <div className="hidden md:block group/right absolute inset-0 w-full h-full z-10 hover:z-50 transition-all duration-700
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

      {/* CONTENT OVERLAY: Centers automatically on both Mobile and Laptop */}
      <div className="relative z-[60] flex flex-col items-center justify-center h-full pointer-events-none text-center px-6">
        {/* Responsive text size: smaller on phone, original text-8xl on laptop */}
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight drop-shadow-2xl">
            WELCOME
        </h1>
        {/* Instruction text hidden on mobile because hover doesn't exist on phones */}
        <p className="hidden md:block mt-4 text-xl text-white/90 font-medium">
            Hover over the videos to expand.
        </p>
      </div>
      
    </section>
  );
}

export default Welcome;