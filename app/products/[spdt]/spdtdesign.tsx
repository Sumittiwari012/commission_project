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
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
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
  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (fullscreenIndex === null) return;

    const totalSlides = 6; // 5 images + 1 video

    if (e.key === "Escape") {
      setFullscreenIndex(null);
    }

    if (e.key === "ArrowRight") {
      setFullscreenIndex((prev) =>
        prev === null ? 0 : (prev + 1) % totalSlides
      );
    }

    if (e.key === "ArrowLeft") {
      setFullscreenIndex((prev) =>
        prev === null
          ? 0
          : (prev - 1 + totalSlides) % totalSlides
      );
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [fullscreenIndex]);
  return (
    
    <>
      <main className="flex flex-col md:flex-row min-h-screen pt-[14vh]">

      {/* LEFT: Image gallery — sticky, fills full column width */}
      <section
  className="
    w-full md:w-[45%]
    h-[50vh] md:h-[calc(100vh-14vh)]
    md:sticky md:top-[14vh]
    md:pl-10 md:pr-4
    overflow-y-auto bg-white
    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
  "
>
  <div className="flex flex-col gap-10 items-center px-4 md:px-6 lg:px-8">

    {[1, 2, 3, 4, 5].map((_, i) => (
      <div
        key={i}
        onClick={() => setFullscreenIndex(i)}
        className="flex-shrink-0 cursor-zoom-in"
        style={{
          width: 'clamp(260px, 27vw, 560px)',
          aspectRatio: '0.85'
        }}
      >
        <img
          src={products?.product.productPageImageUrl}
          sizes="16vw"
          className="w-full h-full object-cover object-top"
          alt={`${products?.product.productName} view ${i + 1}`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      </div>
    ))}

    {/* VIDEO SECTION */}
    <div
      className="flex-shrink-0 overflow-hidden"
      style={{
        width: 'clamp(260px, 27vw, 560px)',
        aspectRatio: '0.85'
      }}
    >
      <video
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source
          src="https://www.pexels.com/download/video/8402436/"
          type="video/mp4"
        />
      </video>
    </div>

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
      {/* FULLSCREEN VIEWER */}
{fullscreenIndex !== null && (
  <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">

    {/* CLOSE */}
    <button
      onClick={() => setFullscreenIndex(null)}
      className="absolute top-6 right-6 text-white text-4xl z-20"
    >
      ×
    </button>

    {/* LEFT */}
    <button
      onClick={() =>
        setFullscreenIndex((prev) =>
          prev === null ? 0 : (prev - 1 + 6) % 6
        )
      }
      className="absolute left-6 text-white text-5xl z-20"
    >
      ‹
    </button>

    {/* RIGHT */}
    <button
      onClick={() =>
        setFullscreenIndex((prev) =>
          prev === null ? 0 : (prev + 1) % 6
        )
      }
      className="absolute right-6 text-white text-5xl z-20"
    >
      ›
    </button>

    {/* CONTENT */}
    <div className="w-full h-full flex items-center justify-center p-10">

      {fullscreenIndex < 5 ? (
        <img
          src={products?.product.productPageImageUrl}
          alt="Fullscreen"
          className="max-w-full max-h-full object-contain"
        />
      ) : (
        <video
          muted
          autoPlay
          loop
          controls
          playsInline
          className="max-w-full max-h-full object-contain"
        >
          <source
            src="https://www.pexels.com/download/video/8402436/"
            type="video/mp4"
          />
        </video>
      )}

    </div>
  </div>
)}
    </main>
    </>
    
  );
}

export default Spdtdesign;