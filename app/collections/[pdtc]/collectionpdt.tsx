"use client"
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import Pagination from '@mui/material/Pagination';
import app from "@/lib/app"

interface CollectionPdtProps {
  category: string;
}

function CollectionPdt({ category }: CollectionPdtProps) {
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
  const pageSize = 8; 
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  
  // State for sorting preference
  const [sortOrder, setSortOrder] = useState<string>("default");

  const fetchProducts = async (pageNumber: number) => {
    try {
      setLoading(true);
      const response = await app.get("/Product/pdtByCategory", {
        params: {
          category,
          pageNumber,
          pageSize,
        },
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page, category]); // Added category to dependency to reset on nav changes

  /**
   * ARRANGEMENT LOGIC
   * This hook runs before the return statement, ensuring the 'sortedProducts'
   * are always in the correct order before the UI renders.
   */
  const arrangedProducts = useMemo(() => {
    // 1. Create a shallow copy to avoid mutating the original state
    const currentList = [...products];

    // 2. Arrange based on the current filter/sort selection
    switch (sortOrder) {
      case "lowToHigh":
        return currentList.sort((a, b) => a.price - b.price);
      case "highToLow":
        return currentList.sort((a, b) => b.price - a.price);
      default:
        // Returns the original order from the API
        return currentList;
    }
  }, [products, sortOrder]);

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative w-full h-[30vh] md:h-[25vh] bg-[#e4c798] overflow-hidden">
          <img
            src="https://www.pacificplace.com.hk/-/media/images/pacificplace2/thestylesheet_article/italy-shoot-q3-25/pacific-place-lake-shoot-2.ashx?rev=0e1cc1df717346f49cc9ccd819e44407&hash=908BDE90616D841C90C21877B2A48868"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/5">
            <h2 className="text-3xl md:text-5xl font-serif italic tracking-widest uppercase mb-4">
              {category.replace(/-/g, ' ')}
            </h2>
            <div className="h-[1px] w-16 bg-white/70" />
          </div>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-16 md:top-[80px] z-[40] h-[10vh] flex items-center justify-center px-4">
          <div className="flex items-center gap-4 bg-white px-6 py-2 rounded-full border  shadow-sm">
            <label className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Sort By:</label>
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-transparent text-[10px] md:text-xs text-black font-bold uppercase tracking-widest focus:outline-none cursor-pointer"
            >
              <option value="default">New Arrivals</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid Section */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-10">
          {loading && products.length === 0 ? (
            <div className="flex justify-center items-center h-[40vh]">
               <div className="animate-pulse text-gray-300 uppercase tracking-[0.3em] text-xs">Loading Collection...</div>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-10 md:gap-y-16">
              {arrangedProducts.map((item) => (
                <div key={item.productId} className="group cursor-pointer flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                    <Link href={`/products/${item.productName.toLowerCase().replace(/\s+/g, '-')}-${item.productId}`}>
                      <img
                        src={item.productPageImageUrl}
                        alt={item.productName}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </Link>
                  </div>

                  {/* Text Content */}
                  <div className="mt-5 text-center px-2">
                    <h3 className="text-[12px] md:text-[13px] uppercase tracking-widest text-gray-800 font-medium mb-1">
                      {item.productName.replace(/-/g, ' ')}
                    </h3>
                    <p className="text-[13px] md:text-[14px] font-semibold text-gray-900">
                      ₹ {Number(item.price).toLocaleString('en-IN')}.00
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pagination Container */}
      <div className="flex justify-center mt-8 mb-20">
        <Pagination 
          count={totalPages} 
          page={page}
          color="standard" 
          onChange={(_, value) => {
            setPage(value);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }} 
          sx={{
            '& .MuiPaginationItem-root': {
              fontSize: '0.75rem',
              fontFamily: 'inherit',
              letterSpacing: '0.1em'
            }
          }}
        />
      </div>
    </>
  );
}

export default CollectionPdt;