"use client"
import React, { useEffect, useState } from 'react'
import Spdtdesignright from './spdtdesignright';
import suggestion from './suggestion';
import app from "@/lib/app";
import { privateApi } from '@/lib/app';
interface inputprops{
        idval:number;
      }
function Spdtdesign({ idval }: inputprops) {
 type ProductResponse = {
  product: {
    productId: number;
    productName: string;
    price: number;
    productPageImageUrl: string;
    color: string;
    description: string;
    composition: string;
    care: string;
    fit: string;
  };
  pdtimages: string[];
  cartitemexists: boolean;
};

  const [products, setProducts] = useState<ProductResponse | null>(null);
  const [incart,setincart]= useState<boolean>(false);
 
useEffect(() => {
  if (!idval) return;

  const fetchData = async () => {
    try {
      const response1=await app.get<ProductResponse>("/Product/productById", {
          params: { pid: idval }, // ✅ query param
        });
        
      const response2=await privateApi.get<boolean>("/User/productExistsInCart", {
          params: { productId: idval }, // ✅ query param
        });

      setProducts(response1.data);
      setincart(response2.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  fetchData();
}, [idval]);



     const data = [
        { id: 1, src: "https://www.hancockfashion.com/cdn/shop/files/5579BGREEN_1_M.jpg?v=1734411915", label: "Emerald Silk", price: "$240", luminosity: 0 },
        { id: 2, src: "https://thehouseofrare.com/cdn/shop/products/HERO_76c59c07-ac65-40f5-96e4-1de84fcdee92.jpg?v=1743587556", label: "Midnight Coat", price: "$310", luminosity: 0 },
        { id: 3, src: "https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP7047.jpg?v=1683819034", label: "Dove Polo", price: "$180", luminosity: 0 },
        { id: 4, src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500", label: "Alabaster Tee", price: "$120", luminosity: 0 },
        { id: 5, src: "https://rukminim2.flixcart.com/image/480/640/xif0q/shirt/d/z/7/m-plan-shirts-hems-trends-original-imagyvjx5mpdha9x.jpeg?q=90", label: "Onyx Shirt", price: "$195", luminosity: 0 },
        { id: 6, src: "https://www.blackdenim.in/cdn/shop/files/0A0A6024_1.jpg?v=1726837920", label: "Ivory Knit", price: "$150", luminosity: 0 },
        { id: 7, src: "https://trendoye.com/cdn/shop/files/black-designer-saree-TSNJ-SMA-AYSH-4004_1200x.jpg?v=1731305012", label: "Slate Overcoat", price: "$290", luminosity: 0 }
      ];
      
  return (
    <>
    {/* Main Container */}
<main className="flex flex-col md:flex-row min-h-screen pt-20 md:pt-0">
  
  {/* LEFT SECTION (Image Gallery)
      CHANGED: md:w-[47%] -> md:w-[40%] 
      This reduces the 'bulky' look on desktop while 'w-full' keeps it standard on phone.
  */}
    <section
  className="
    w-full
    md:w-[45%]
    h-[70vh]
    md:h-[calc(100vh)]
    md:sticky
    md:top-0
    md:pl-24
    overflow-hidden
    bg-[#f6f6f6]
  "
>
    <div
      className="h-full flex flex-row md:flex-col overflow-x-auto md:overflow-y-auto 
                 snap-x md:snap-y snap-mandatory scroll-smooth 
                 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] 
                 focus:outline-none"
    >
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div
          key={i}
          className="w-full min-w-full md:min-w-0 h-full snap-center relative flex items-center justify-center"
        >
          <img
            src={products?.product.productPageImageUrl}
            className="w-full h-full object-cover"
            alt={`Product view ${i + 1}`}
          />
        </div>
      ))}
    </div>

    {/* Pagination indicator for mobile carousel */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
        {[1, 2, 3, 4, 5].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-black/20" />
        ))}
    </div>
  </section>

  {/* RIGHT SECTION (Product Info) - Remember to ensure this section handles the extra space */}
  <section className="w-full md:flex-1">
      {/* Product details go here */}
  </section>


          {/* RIGHT SECTION: Product Details */}
         
    
   

{products ? (
  <Spdtdesignright
  productid={products.product.productId}
  productName={products.product.productName}
  price={products.product.price}
  color={products.product.color}
  description={products.product.description}
  composition={products.product.composition}
  care={products.product.care}
  fit={products.product.fit}
  cartItemExists={incart}
/>
) : (
  <div className="flex items-center justify-center">Loading...</div>
)}
    
  </main>

        
    </>
  )
}

export default Spdtdesign