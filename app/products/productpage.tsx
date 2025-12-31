"use client";
import Link from "next/link";
import { useState } from "react";

function ProductPage() {
  type Product = {
    id: number;
    src: string;
    label: string;
    price: string;
    luminosity: number;
  };

  const [products] = useState<Product[]>([
    { id: 1, src: "https://www.hancockfashion.com/cdn/shop/files/5579BGREEN_1_M.jpg?v=1734411915", label: "Emerald Silk", price: "$240", luminosity: 0 },
    { id: 2, src: "https://thehouseofrare.com/cdn/shop/products/HERO_76c59c07-ac65-40f5-96e4-1de84fcdee92.jpg?v=1743587556", label: "Midnight Coat", price: "$310", luminosity: 0 },
    { id: 3, src: "https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP7047.jpg?v=1683819034", label: "Dove Polo", price: "$180", luminosity: 0 },
    { id: 4, src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500", label: "Alabaster Tee", price: "$120", luminosity: 0 },
    { id: 5, src: "https://rukminim2.flixcart.com/image/480/640/xif0q/shirt/d/z/7/m-plan-shirts-hems-trends-original-imagyvjx5mpdha9x.jpeg?q=90", label: "Onyx Shirt", price: "$195", luminosity: 0 },
    { id: 6, src: "https://www.blackdenim.in/cdn/shop/files/0A0A6024_1.jpg?v=1726837920", label: "Ivory Knit", price: "$150", luminosity: 0 },
    { id: 7, src: "https://assets0.mirraw.com/images/11273381/ACW2457_zoom.jpg?1677742262", label: "Slate Overcoat", price: "$290", luminosity: 0 }
  ]);

  return (
    <div className="bg-[#E5E4E2]">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[70vh] bg-[#e4c798] overflow-hidden">
        <img
          src="https://www.pacificplace.com.hk/-/media/images/pacificplace2/thestylesheet_article/italy-shoot-q3-25/pacific-place-lake-shoot-2.ashx?rev=0e1cc1df717346f49cc9ccd819e44407&hash=908BDE90616D841C90C21877B2A48868"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sticky Filter */}
      <div className="sticky top-16 md:top-[88px] z-[50] h-[8vh] flex items-center justify-center px-4">
        <div className="flex gap-4 bg-white/80 md:bg-white/10 px-6 py-2 md:py-3 rounded-full border backdrop-blur-xl border-white/20 shadow-sm">
          <select className="bg-transparent text-[10px] md:text-xs text-black font-bold uppercase tracking-widest focus:outline-none cursor-pointer">
            <option>Newest</option>
            <option>Price: Low to High</option>
          </select>
          <div className="w-[1px] h-4 bg-black/10 md:bg-white/20" />
          <select className="bg-transparent text-[10px] md:text-xs text-black font-bold uppercase tracking-widest focus:outline-none cursor-pointer">
            <option>Filter</option>
            <option>Outerwear</option>
            <option>Essentials</option>
          </select>
        </div>
      </div>

      {/* Product Grid: 2 columns on mobile, 4 on desktop */}
      
<div className="w-full md:max-w-7xl md:mx-auto md:px-8 py-8 md:py-16">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8">
    {products.map((item) => (
      <div
        key={item.id}
        className="group cursor-pointer border-b border-r border-gray-100 md:border-none last:border-r-0"
      >
        {/*
           NEW WRAPPER DIV:
           - p-1: Adds very slight (4px) padding around the image on mobile.
           - md:p-0: Removes the padding on desktop to maintain your original design.
        */}
        <div className="p-1 md:p-0">
          <div className="aspect-[2/3] md:aspect-[3/4] overflow-hidden bg-gray-100 md:rounded-sm">
            <Link href={`/products/${item.label.toLowerCase().replace(/\s+/g, '-')}-${item.id}`}>
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
              />
            </Link>
          </div>
        </div>

        <div className="mt-3 md:mt-6 text-center py-4 md:py-0">
          <h3 className="text-xs md:text-[15px] tracking-tight text-gray-600 font-light mb-1 px-2 line-clamp-2 min-h-[32px] flex items-center justify-center">
            {item.label}
          </h3>
          <p className="text-[11px] md:text-[13px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-gray-900">
            {item.price}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}

export default ProductPage;