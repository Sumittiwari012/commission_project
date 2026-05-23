"use client"
import React, { useEffect, useState } from 'react'
import Spdtdesignright from './spdtdesignright';
import app from "@/lib/app";
import { privateApi } from '@/lib/app';

interface inputprops {
  idval: number;
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
  const [incart, setincart] = useState<boolean>(false);

  useEffect(() => {
    if (!idval) return;
    const fetchData = async () => {
      try {
        const response1 = await app.get<ProductResponse>("/Product/productById", { params: { pid: idval } });
        const response2 = await privateApi.get<boolean>("/User/productExistsInCart", { params: { productId: idval } });
        setProducts(response1.data);
        setincart(response2.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, [idval]);

  return (
    <main className="flex flex-col md:flex-row min-h-screen pt-[14vh]">

      {/* LEFT: Image gallery — sticky, fills full column width */}
      <section className="
        w-full md:w-[45%]
        h-[50vh] md:h-[calc(100vh-14vh)]
        md:sticky md:top-[14vh]
        md:pl-10 md:pr-4
        overflow-y-auto bg-white
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
      ">
        <div className="flex flex-col gap-10 items-center px-4 md:px-6 lg:px-8">
          {[1, 2, 3, 4, 5].map((_, i) => (
            // Width is ~16vw so at 2560px it's ~410px, scales naturally at any resolution
            <div key={i} className="flex-shrink-0" style={{ width: 'clamp(260px, 27vw, 560px)', aspectRatio: '0.85' }}>
              <img
                src={products?.product.productPageImageUrl}
                sizes="16vw"
                className="w-full h-full object-cover object-top"
                alt={`${products?.product.productName} view ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </section>

      {/* RIGHT: Product details */}
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
        <div className="flex items-center justify-center w-full md:w-[55%] text-sm text-slate-400">
          Loading...
        </div>
      )}

    </main>
  );
}

export default Spdtdesign;