import React from "react";
import Image from "next/image";

function Welcome() {
  // Mobile Video Source
  const mobileVideoSrc = "https://www.pexels.com/download/video/3894725/"; 
  
  // Desktop Image Source (Using your WRII Studio branding style)
  const desktopImageSrc = "https://images.pexels.com/photos/34314126/pexels-photo-34314126.jpeg";

  return (
    <section id="welcome" className=" top-0 h-screen w-full overflow-hidden bg-black">
      
      {/* 1. MOBILE ONLY VIDEO: Visible only on small screens (md:hidden) */}
      <div className="block md:hidden absolute inset-0 w-full h-full z-0">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={mobileVideoSrc} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. DESKTOP ONLY IMAGE: Replaces the split video sections */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-10">
        <Image 
          src={desktopImageSrc}
          alt="Welcome Background"
          fill
          priority
          unoptimized // Allows external URL without config
          className="object-cover opacity-80" // object-cover ensures it fills the screen
        />
        {/* Subtle gradient overlay to ensure text stays sharp */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* 3. CONTENT OVERLAY: Stays centered on both Mobile and Desktop */}
      
      
    </section>
  );
}

export default Welcome;