import Link from "next/link";
import React from "react";
interface ModelPanel {
  imgurl1: string;
  imgurl2: string;
  imgurl3: string;
  mobileImgUrl1: string;
  mobileImgUrl2: string;
  mobileImgUrl3: string;
}
function WomenShop({
  imgurl1,
  imgurl2,
  imgurl3,
  mobileImgUrl1,
  mobileImgUrl2,
  mobileImgUrl3,
}: ModelPanel) {
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
    <>
    <div
      id="shop"
      /* CHANGED: Changed py-20 to pt-20 pb-10 to reduce bottom gap */
      className="relative w-full min-h-screen bg-[#708090] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] pt-20 pb-10"
    >
      {/* Heading */}
      <div className="w-full text-center mb-12">
        <h2 className="font-['Instrument_Sans'] text-4xl md:text-[50px] font-normal text-[#f6eeee] tracking-widest uppercase">
          Shop By Styles
        </h2>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-[1600px] mx-auto px-4 md:px-8 gap-10 md:gap-0">
        {/* MAIN SECTION */}
        <div className="w-full md:w-[65%] h-[80vh] md:h-[85vh] flex items-center justify-center md:justify-end">
          <div className="relative h-full w-full md:w-[96%] shadow-2xl overflow-hidden border border-white/10 group rounded-sm">
            <Link href="/collections/kids" className="block w-full h-full relative">
              <img
                src={mobileImgUrl1}
                alt={`${panel.title} Mobile`}
                className="block md:hidden absolute inset-0 w-full h-full object-cover"
              />
              <img
                src={imgurl1}
                alt={`${panel.title} Desktop`}
                className="hidden md:block absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-bold tracking-wide uppercase">{panel.title}</h3>
                <p className="text-purple-200 text-sm mb-4">{panel.subtitle}</p>
                <span className="w-max px-6 py-2 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full text-[10px] uppercase tracking-[0.3em]">
                  Explore Lookbook
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* RIGHT SECTION */}
        {/* CHANGED: Removed pb-20 and reduced gap to gap-8 for a tighter fit */}
        <div className="w-full md:w-[35%] flex flex-col gap-8 md:pl-10">
          {/* Style 01 */}
          <div className="relative w-full h-[50vh] md:h-[40vh] shadow-xl overflow-hidden border border-white/10 group rounded-sm">
            <Link href="/collections/kids" className="block w-full h-full relative">
              <img src={mobileImgUrl2} alt="Style 01 Mobile" className="block md:hidden absolute inset-0 w-full h-full object-cover" />
              <img src={imgurl2} alt="Style 01 Desktop" className="hidden md:block absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-semibold tracking-wide uppercase">Style 01</h4>
                <p className="text-purple-200 text-xs">Lightweight Edit</p>
              </div>
            </Link>
          </div>

          {/* Style 02 */}
          <div className="relative w-full h-[50vh] md:h-[40vh] shadow-xl overflow-hidden border border-white/10 group rounded-sm">
            <Link href="/collections/kids" className="block w-full h-full relative">
              <img src={mobileImgUrl3} alt="Style 02 Mobile" className="block md:hidden absolute inset-0 w-full h-full object-cover" />
              <img src={imgurl3} alt="Style 02 Desktop" className="hidden md:block absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-semibold tracking-wide uppercase">Style 02</h4>
                <p className="text-purple-200 text-xs">Evening Look</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default WomenShop;
