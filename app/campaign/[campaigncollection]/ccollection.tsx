"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Navbar from '@/app/Components/navbar';

interface campaigncollectionProps {
  campaign: string;
}

// 1. Created the Data Object
const lookbookData = [
  { id: 1, url: "https://images.pexels.com/photos/15792440/pexels-photo-15792440.jpeg", title: "Look 01" },
  { id: 2, url: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg", title: "Look 02" },
  { id: 3, url: "https://images.pexels.com/photos/27308646/pexels-photo-27308646.png", title: "Look 03" },
  { id: 4, url: "https://images.pexels.com/photos/14448247/pexels-photo-14448247.jpeg", title: "Look 04" },
  { id: 5, url: "https://images.pexels.com/photos/5665382/pexels-photo-5665382.jpeg", title: "Look 05" },
  { id: 6, url: "https://images.pexels.com/photos/27308635/pexels-photo-27308635.png", title: "Look 06" },
];

function CampaignCollection({ campaign }: campaigncollectionProps) {
  // Format the slug for the title
  const displayTitle = campaign.replace(/-/g, ' ').toUpperCase();

  return (
    <>
    <Navbar/>
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* HEADER SECTION */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-4">Lookbook</p>
        <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] text-[#004d43]">
          {displayTitle}
        </h1>
        <div className="h-[1px] w-20 bg-[#004d43]/20 mx-auto mt-8" />
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {lookbookData.map((item) => (
            <div key={item.id} className="group flex flex-col items-center">
              {/* Image Wrapper */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">
                <Image
                  src={item.url}
                  alt={`${displayTitle} - ${item.title}`}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* Caption */}
              <div className="mt-6 text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="mt-24 text-center">
        <Link href="/campaign">
        <button className="text-[11px] uppercase tracking-[0.4em] font-bold border-b border-black pb-2 hover:opacity-50 transition-opacity">
          Back to Campaigns
        </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default CampaignCollection;