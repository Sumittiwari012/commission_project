"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function ProductPage() {
    type Product = {
  id: number;
  src: string;
  label: string;
  price: string;
  luminosity: number;
};
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

    
  const [products, setProducts] = useState<Product[]>([
    { id: 1, src: "https://www.hancockfashion.com/cdn/shop/files/5579BGREEN_1_M.jpg?v=1734411915", label: "Emerald Silk", price: "$240", luminosity: 0 },
    { id: 2, src: "https://thehouseofrare.com/cdn/shop/products/HERO_76c59c07-ac65-40f5-96e4-1de84fcdee92.jpg?v=1743587556", label: "Midnight Coat", price: "$310", luminosity: 0 },
    { id: 3, src: "https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP7047.jpg?v=1683819034", label: "Dove Polo", price: "$180", luminosity: 0 },
    { id: 4, src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500", label: "Alabaster Tee", price: "$120", luminosity: 0 },
    { id: 5, src: "https://rukminim2.flixcart.com/image/480/640/xif0q/shirt/d/z/7/m-plan-shirts-hems-trends-original-imagyvjx5mpdha9x.jpeg?q=90", label: "Onyx Shirt", price: "$195", luminosity: 0 },
    { id: 6, src: "https://www.blackdenim.in/cdn/shop/files/0A0A6024_1.jpg?v=1726837920", label: "Ivory Knit", price: "$150", luminosity: 0 },
    { id: 7, src: "https://trendoye.com/cdn/shop/files/black-designer-saree-TSNJ-SMA-AYSH-4004_1200x.jpg?v=1731305012", label: "Slate Overcoat", price: "$290", luminosity: 0 }
  ]);

  /* 🔹 Image luminosity analyzer */
  const analyzeImage = (product: Product): Promise<Product> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = product.src;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        resolve({ ...product, luminosity: 0 });
        return;
      }

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) {
        resolve({ ...product, luminosity: 0 });
        return;
      }

      const width = img.naturalWidth;
      const height = img.naturalHeight;

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0);

      // 🔥 CROP TO CENTER (focus on clothing)
      const cropX = Math.floor(width * 0.25);
      const cropY = Math.floor(height * 0.2);
      const cropW = Math.floor(width * 0.5);
      const cropH = Math.floor(height * 0.6);

      const imageData = ctx.getImageData(cropX, cropY, cropW, cropH).data;

      let totalLuminosity = 0;
      let count = 0;

      const STEP = 10; // smaller step = more accuracy

      for (let y = 0; y < cropH; y += STEP) {
        for (let x = 0; x < cropW; x += STEP) {
          const index = (y * cropW + x) * 4;
          const r = imageData[index];
          const g = imageData[index + 1];
          const b = imageData[index + 2];

          const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          totalLuminosity += luminance;
          count++;
        }
      }

      resolve({
        ...product,
        luminosity: Math.round(totalLuminosity / count),
      });
    };
  });
};

  /* 🔹 Auto initialize (upper logic integrated) */
  useEffect(() => {
  const processImages = async () => {
    const analyzed = await Promise.all(products.map(analyzeImage));

    analyzed.sort((a, b) => b.luminosity - a.luminosity);

    setProducts(analyzed);
  };

  processImages();
}, []);
    
  return (
    <>
      {/* Hidden canvas */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Hero */}
      <div className="bg-[#E5E4E2]">
      <div className="relative w-full h-[70vh] bg-[#e4c798]">
        <img
                  src="https://www.pacificplace.com.hk/-/media/images/pacificplace2/thestylesheet_article/italy-shoot-q3-25/pacific-place-lake-shoot-2.ashx?rev=0e1cc1df717346f49cc9ccd819e44407&hash=908BDE90616D841C90C21877B2A48868"
                  alt="Hero Image"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
      </div>

      {/* Sticky Filter */}
      <div className="sticky top-[88px] z-[50] h-[7vh] flex items-center justify-center">
        <div className="flex gap-4 bg-white/10 px-6 py-3 rounded-full border backdrop-blur-xl border-white/10">
          <select className="bg-transparent text-xs text-black font-bold uppercase tracking-widest focus:outline-none">
            <option>Newest</option>
            <option>Price: Low to High</option>
          </select>
          <div className="w-[1px] h-4 bg-white/20" />
          <select className="bg-transparent text-xs text-black font-bold uppercase tracking-widest focus:outline-none">
            <option>Filter</option>
            <option>Outerwear</option>
            <option>Essentials</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
  {/* Grid container with standard gaps */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
    {products.map((item) => (
      <div key={item.id} className="group cursor-pointer">
        {/* Image Container: Full-bleed within the card, no border */}
        <div className="aspect-[3/4] overflow-hidden bg-gray-100">
          <Link href={`/products/${item.label.toLowerCase().replace(/\s+/g, '-')}-${item.id}`}>
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Text Content: Centered, no background, specific typography */}
        <div className="mt-6 text-center">
          <h3 className="text-[15px] tracking-tight text-gray-600 font-light mb-1">
            {item.label}
          </h3>
          <p className="text-[13px] font-bold tracking-widest uppercase text-gray-900">
            {item.price}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </>
  );
}

export default ProductPage;
