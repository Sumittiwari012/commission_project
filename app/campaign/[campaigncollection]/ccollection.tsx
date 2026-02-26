"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Components/navbar";
import app from "@/lib/app";

interface campaigncollectionProps {
  campaign: string;
}

interface Product {
  productId: number;
  productPageImageUrl: string;
}

function CampaignCollection({ campaign }: campaigncollectionProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Converts slug → readable title
  const formatTitle = (slug: string) => {
    if (!slug) return "";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    const fetchCampaignProducts = async () => {
      try {
        setLoading(true);
        const response = await app.get("/Campaign/productsByCampaignSlug", {
          params: { slug: campaign },
        });
        setProducts(response.data.products);
      } catch (error) {
        console.error("Failed to fetch campaign products", error);
      } finally {
        setLoading(false);
      }
    };

    if (campaign) fetchCampaignProducts();
  }, [campaign]);

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-24 pb-20">
        
        {/* HEADER */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-4">
            Campaign Collection
          </p>

          <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] text-[#004d43]">
            {formatTitle(campaign)}
          </h1>

          <div className="h-[1px] w-20 bg-[#004d43]/20 mx-auto mt-8" />
        </div>

        {/* IMAGE GRID - Updated */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          {loading ? (
            <div className="text-center py-20 text-gray-400 tracking-widest uppercase text-xs">
              Loading Collection...
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-8 md:gap-y-16">
              {products.map((item) => (
                <div
                  key={item.productId}
                  className="group flex flex-col items-center"
                >
                  <Link
                    href={`/products/look-${item.productId}`}
                    className="relative w-full aspect-[2/3] overflow-hidden bg-gray-50 block"
                  >
                    <Image
                      src={item.productPageImageUrl}
                      alt="Campaign Look"
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </Link>

                  {/* Label */}
                  
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER BUTTON */}
        <div className="mt-24 text-center">
          <Link href="/campaign">
            <button className="text-[11px] uppercase tracking-[0.4em] font-bold border-b border-black pb-2 hover:opacity-50 transition-opacity">
              Back to All Campaigns
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CampaignCollection;