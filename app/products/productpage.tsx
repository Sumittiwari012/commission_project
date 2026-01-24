"use client";
import Link from "next/link";
import { useState,useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import app from "@/lib/app"

function ProductPage() {
  type Product = {
  productId: number;
  productName: string;
  price: number;
  productPageImageUrl: string;
  color: string;
  composition: string;
};
const [totalPages, setTotalPages] = useState(1);

  const [page, setPage] = useState(1);
const pageSize = 10; // or whatever your backend expects
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState(false);

  
  const fetchProducts = async (pageNumber: number) => {
  try {
    setLoading(true);

    const response = await app.get("/Product/allProduct", {
      params: {
        pageNumber,
        pageSize,
      },
    });

    setProducts(response.data.groupedProducts);        // ✅ product array
    setTotalPages(response.data.totalPages); // ✅ page count
    console.log(response.data);
  } catch (error) {
    console.error("Failed to fetch products", error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchProducts(page);
}, [page]);
  return (
    <>
    <div className="bg-[#E5E4E2]">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[20vh] bg-[#e4c798] overflow-hidden">
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
      
<div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 py-8 md:py-12">
  {/* Adjusted gap from 8 to 4 for a tighter, more premium look */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
    {products.map((item) => (
      <div
        key={item.productId}
        className="group cursor-pointer flex flex-col"
      >
        {/* Image Container: Fixed to 2/3 aspect ratio to match the tall saree shots */}
        <div className="relative aspect-[2/3] overflow-hidden bg-gray-50">
          <Link href={`/products/${item.productName.toLowerCase().replace(/\s+/g, '-')}-${item.productId}`}>
            <img
              src={item.productPageImageUrl}
              alt={item.productName}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </Link>
          {/* Optional: Add the wishlist heart icon here if needed */}
        </div>

        {/* Text Content: Refined typography and spacing */}
        <div className="mt-4 text-center">
          <h3 className="text-[13px] md:text-[14px] leading-tight text-gray-800 font-light mb-2 px-1">
            {item.productName}
          </h3>
          <p className="text-[12px] md:text-[14px] font-semibold text-gray-900">
            {/* Added Indian Rupee formatting style */}
            ₹ {Number(item.price).toLocaleString('en-IN')}.00
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
     
   
      
     <div className="flex justify-center mt-16 mb-12"><Pagination count={totalPages} color="secondary" onChange={(_, value) => {
      setPage(value);       // 👈 THIS IS THE CLICKED PAGE
      window.scrollTo({ top: 0, behavior: "smooth" });
    }} /></div>
      
      
    

    </div>
    
</>
  );
}

export default ProductPage;