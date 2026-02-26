"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/app/Components/navbar";
import axios from "axios";

interface CampaignData {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  color?: string;
}

function Campaigns() {
  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);
  const [loading, setLoading] = useState(true);

  const colorPalette = ["#a88c6e", "#b04b4b", "#8c2f5f", "#e5394c"];

  const formatTitle = (slug: string) => {
    if (!slug) return "";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(
          "https://wriistudio.runasp.net/api/Campaign/allCampaign"
        );
        const dataWithColors = response.data.map(
          (item: CampaignData, index: number) => ({
            ...item,
            color: colorPalette[index % colorPalette.length],
          })
        );
        setCampaigns(dataWithColors);
      } catch (error) {
        console.error("Failed to fetch campaigns:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Collections...
      </div>
    );

  return (
    <>
      <Navbar />

      <div className="bg-white min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-12 pt-24">
          <h1 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#004d43]">
            Campaigns
          </h1>
        </div>

        {/* ⭐ UPDATED GRID ⭐ */}
        <div className="grid grid-cols-2 md:grid-cols-4 min-h-[calc(100vh-100px)] w-full">
          {campaigns.map((campaign) => (
            <Link
              key={campaign.id}
              href={`/campaign/${campaign.name}`}
              className="group relative w-full h-[50vh] md:h-full overflow-hidden cursor-pointer block"
            >
              <Image
                src={campaign.imageUrl}
                alt={campaign.name}
                fill
                unoptimized
                priority
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col items-center justify-center px-6 text-center"
                style={{ backgroundColor: campaign.color }}
              >
                <span className="text-white text-[13px] tracking-[0.3em] font-bold drop-shadow-sm mb-2">
                  {formatTitle(campaign.name)}
                </span>
                <p className="text-white text-[10px] tracking-widest opacity-80">
                  {campaign.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* WhatsApp Floating Button (Original Icon Restored) */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 p-2 bg-[#004d43] rounded-full hover:opacity-90 transition-opacity"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.88 11.88 0 0012 0 11.88 11.88 0 000 12a11.84 11.84 0 001.63 6L0 24l6.17-1.62A11.88 11.88 0 0012 24a11.88 11.88 0 008.48-3.52A11.88 11.88 0 0024 12a11.88 11.88 0 00-3.48-8.52zM12 22a9.8 9.8 0 01-5-1.36l-.36-.21-3.67.97.98-3.58-.24-.37A9.89 9.89 0 012 12 10 10 0 0112 2a10 10 0 0110 10 9.93 9.93 0 01-10 10zm5.27-7.05c-.29-.14-1.71-.84-1.98-.94s-.46-.14-.65.14-.74.94-.9 1.13-.33.21-.62.07a8.12 8.12 0 01-2.4-1.47 9 9 0 01-1.62-2c-.17-.29 0-.45.13-.59s.29-.33.43-.5a.52.52 0 000-.51c-.07-.14-.65-1.56-.89-2.16s-.48-.49-.65-.5h-.56a1.1 1.1 0 00-.79.37 3.77 3.77 0 00-1.16 2.8 6.54 6.54 0 001.39 3.45A14.93 14.93 0 0012 17.5a4.6 4.6 0 003.11-.85 2.4 2.4 0 00.74-1.52c.06-.27 0-.44-.15-.58a1.47 1.47 0 00-.43-.6z" />
          </svg>
        </a>
      </div>
    </>
  );
}

export default Campaigns;