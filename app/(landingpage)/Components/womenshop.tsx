import React from "react";

function WomenShop() {
  const modelPanels = [
    {
      id: 1,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/800f0e90873809.5e229ab8afba8.jpg",
      title: "Editorial Vol. 1",
      subtitle: "Summer Collection 2024",
    },
  ];

  const panel = modelPanels[0]; // ✅ extract item safely

  return (
    <div
      id="shop"
      className="sticky top-0 w-full min-h-screen bg-[#603732]
                 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]
                 overflow-hidden"
    >
      {/* Heading (Centered Horizontally) */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <h2 className="font-['Instrument_Sans'] text-[50px] font-normal text-[#f6eeee]">
          SHOP BY STYLES
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex w-full h-screen pt-28 px-8">
        {/* Left Section (65%) */}
        <div className="w-[65%] h-full flex items-start justify-end">
          <div className="relative aspect-square h-[98%] w-[98%]
                          shadow-2xl overflow-hidden border border-white/10">
            
            {/* Image */}
            <img
              src={panel.src}
              alt={panel.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t
                            from-black/90 via-black/20 to-transparent
                            opacity-0 hover:opacity-100
                            transition-opacity duration-500
                            flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold tracking-wide">
                {panel.title}
              </h3>
              <p className="text-purple-200 text-sm mb-4">
                {panel.subtitle}
              </p>
              <button className="w-max px-6 py-2 bg-white/20 backdrop-blur-md
                                 text-white border border-white/30 rounded-full
                                 text-xs uppercase tracking-widest
                                 hover:bg-white hover:text-purple-900
                                 transition-colors">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (35%) */}
        {/* Right Section (35%) */}
<div className="w-[35%] h-full flex flex-col gap-6 items-start pl-8 pb-24">

  {/* Style 01 */}
  <div className="relative w-[90%] h-[45%]
                  shadow-xl overflow-hidden border border-white/10 group">
    
    <img
      src="https://mir-s3-cdn-cf.behance.net/projects/404/3ae68a197512361.Y3JvcCw0MzE0LDMzNzUsOTYsMA.jpg"
      alt="Style 01"
      className="absolute inset-0 w-full h-full object-cover
                 transition-transform duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t
                    from-black/80 via-black/20 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    flex flex-col justify-end p-5">
      <h4 className="text-white text-lg font-semibold tracking-wide">
        Style 01
      </h4>
      <p className="text-purple-200 text-xs">
        Lightweight Edit
      </p>
    </div>
  </div>

  {/* Style 02 */}
  <div className="relative w-[90%] h-[45%]
                  shadow-xl overflow-hidden border border-white/10 group">
    
    <img
      src="https://t4.ftcdn.net/jpg/01/67/25/37/360_F_167253732_FVaF7PyA5vat3JVPvP4F5AsCoZkYAnZF.jpg"
      alt="Style 02"
      className="absolute inset-0 w-full h-full object-cover
                 transition-transform duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t
                    from-black/80 via-black/20 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    flex flex-col justify-end p-5">
      <h4 className="text-white text-lg font-semibold tracking-wide">
        Style 02
      </h4>
      <p className="text-purple-200 text-xs">
        Evening Look
      </p>
    </div>
  </div>

</div>



      </div>
    </div>
  );
}

export default WomenShop;
