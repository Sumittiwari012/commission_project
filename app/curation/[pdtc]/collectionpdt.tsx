"use client"
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import Pagination from '@mui/material/Pagination';
import { privateApi } from '@/lib/app';
import app from "@/lib/app"
import { ShoppingBag } from "lucide-react";
import { useAuth } from '@/context/AuthContext'; // ← ADD THIS
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
const { isRestoring } = useAuth();
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const pageSize = 8; 
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<string>("default");

  const fetchProducts = async (pageNumber: number) => {
    try {
      setLoading(true);
      const response = await app.get("/Product/pdtByConcept", {
        params: { concept: category, pageNumber, pageSize },
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCartCount = async () => {
  try {
    const response = await privateApi.post("/User/cartItemCount");
    const count = typeof response.data === "number"
      ? response.data
      : response.data?.count ?? response.data?.cartItemCount ?? 0;
    setCartCount(count);
  } catch (err) {
    console.error("Cart count fetch failed", err);
    setCartCount(0);
  }
};

  useEffect(() => {
  fetchProducts(page);
}, [page, category]);

useEffect(() => {
  if (!isRestoring) {
    fetchCartCount();
  }
}, [isRestoring]); // waits for token to be ready

useEffect(() => {
  const handleFocus = () => {
    if (!isRestoring) fetchCartCount();
  };
  window.addEventListener("focus", handleFocus);
  return () => window.removeEventListener("focus", handleFocus);
}, [isRestoring]);

  const arrangedProducts = useMemo(() => {
    const currentList = [...products];
    switch (sortOrder) {
      case "lowToHigh": return currentList.sort((a, b) => a.price - b.price);
      case "highToLow": return currentList.sort((a, b) => b.price - a.price);
      default: return currentList;
    }
  }, [products, sortOrder]);

  return (
    <>
      <div className="bg-white">
        {/* Hero Section — consistent height across breakpoints */}
        <div className="relative w-full h-[30vh] overflow-hidden bg-[#FAEBD7]">
          <img
            src="https://drive.google.com/thumbnail?id=1w59aoJuv8LYUaauMp4drXrxb-ZFHW0z8"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center pb-4 2xl:pb-5 px-4 bg-black/5">
           <h2 className="text-xl md:text-3xl 2xl:text-6xl font-serif italic tracking-[0.18em] uppercase mb-2">
              {category.replace(/-/g, ' ')}
            </h2>
            <div className="h-[1px] w-10 2xl:w-12 bg-white/70" />
          </div>
        </div>

        {/* Sticky Filter Bar */}
        {/*<div className="sticky top-16 md:top-[80px] z-[40] h-[10vh] flex items-center justify-center px-4">
          <div className="flex items-center gap-4 bg-white px-6 py-2 rounded-full border shadow-sm">
            <label className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Sort By:</label>
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-transparent text-[10px] md:text-xs 2xl:text-lg text-black font-bold uppercase tracking-widest focus:outline-none cursor-pointer"
            >
              <option value="default">New Arrivals</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>*/}

        {/* Product Grid — full-width with proportional padding at all sizes */}
        <div className="w-full px-4 md:px-8 xl:px-16 2xl:px-24 py-10">
          {loading && products.length === 0 ? (
            <div className="flex justify-center items-center h-[40vh]">
              <div className="animate-pulse text-gray-300 uppercase tracking-[0.3em] text-xs 2xl:text-lg">Loading Collection...</div>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
              {arrangedProducts.map((item) => (
                <div key={item.productId} className="group cursor-pointer flex flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#FAEBD7] group">
  <Link
    href={`/products/${item.productName.toLowerCase().replace(/\s+/g, '-')}-${item.productId}`}
    className="block w-full h-full"
  >

    {/* IMAGE */}
    <img
      src={item.productPageImageUrl}
      alt={item.productName}
      className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 group-hover:opacity-0"
    />

    {/* VIDEO */}
    <video
  muted
  loop
  autoPlay
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover z-0"
>
  <source
    src="https://www.pexels.com/download/video/8402436/"
    type="video/mp4"
  />
</video>

  </Link>
</div>
                  {/* Product card text */}
<div className="mt-5 2xl:mt-7 text-center px-2">
  <h3 className="text-[13px] md:text-[15px] uppercase tracking-widest text-gray-800 font-medium mb-1">
    {item.productName.replace(/-/g, ' ')}
  </h3>
  <p className="text-[14px] md:text-[16px] font-semibold text-gray-900">
    ₹ {Number(item.price).toLocaleString('en-IN')}.00
  </p>
</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Cart Button */}
      {/* Floating Cart Button */}

      {/* Pagination */}
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

'@media (min-width:1536px)': {
  fontSize: '1.1rem',
},
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