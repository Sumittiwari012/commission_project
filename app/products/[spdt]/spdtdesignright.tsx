"use client";
import { privateApi } from '@/lib/app';
import Link from 'next/link';
import { useEffect, useState } from 'react'

interface inputprops {
  productid: number;
  productName: string;
  price: number;
  color: string;
  description: string;
  composition: string;
  care: string;
  fit: string;
  cartItemExists: boolean;
  breadcrumb?: { label: string; href: string }[];
}

const t = {
  xs:   'clamp(11px, 0.55vw, 16px)',
  sm:   'clamp(13px, 0.65vw, 18px)',
  base: 'clamp(15px, 0.8vw,  22px)',
  btn:  'clamp(11px, 0.55vw, 16px)',
};

function SpdtDesignRight({ productid, productName, price, color, description, composition, care, fit, cartItemExists, breadcrumb }: inputprops) {
  const [isAdded, setIsAdded] = useState<boolean>(cartItemExists);
  const [selectedSize, setSelectedSize] = useState<string>('XS');
  const [quantity, setQuantity] = useState<number>(1);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleAddToBag = async () => {
    if (isAdded) return;
    try {
      await privateApi.post('/User/addToCart', null, { params: { productId: productid } });
      setIsAdded(true);
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  useEffect(() => { setIsAdded(cartItemExists); }, [cartItemExists]);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const accordionSections = [
    { label: "DESCRIPTION", content: description },
    { label: "SIZE AND FIT", content: fit },
    { label: "PRODUCT CARE", content: care },
    { label: "SHIPPING AND DELIVERIES", content: "Standard delivery 5-7 business days. Express delivery available at checkout." },
    { label: "RETURNS AND EXCHANGES", content: "Returns accepted within 14 days of delivery. Items must be unworn and in original condition." },
  ];

  return (
    <section className="w-full md:w-[53%] bg-white pt-8 md:pt-12 pb-16 overflow-y-auto"
      style={{ padding: 'clamp(2rem, 3vw, 5rem) clamp(2rem, 4vw, 7rem) 4rem' }}>
      <div className="w-full pr-4">

        {/* 0. Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 mb-4">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span style={{ fontSize: t.xs }} className="text-slate-300">/</span>}
                <Link href={crumb.href}
                  style={{ fontSize: t.xs }}
                  className="uppercase tracking-widest text-slate-400 hover:text-slate-700 transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        {/* 1. Name + Price row */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <div>
            <h1 style={{ fontSize: t.base }} className="font-normal tracking-wide text-slate-900">
              {productName}
            </h1>
            <p style={{ fontSize: t.sm }} className="text-slate-500 mt-0.5">Wrii Studio</p>
          </div>
          <div className="text-right shrink-0">
            <p style={{ fontSize: t.base }} className="font-normal text-slate-900">
              ₹ {Number(price).toLocaleString('en-IN')}
            </p>
            <p style={{ fontSize: t.xs }} className="text-slate-400 mt-0.5 leading-tight">
              (MRP Inclusive Of GST<br />And Any Applicable Taxes)
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[0.5px] bg-gray-200 my-5" />

        {/* 2. Color swatch */}
        {color && (
          <div className="mb-6">
            <p style={{ fontSize: t.xs }} className="text-slate-700 mb-3 uppercase tracking-widest">
              Color: <span className="font-normal">{color}</span>
            </p>
            <div className="flex gap-2">
              <button aria-label={color} title={color}
                className="w-9 h-9 border-2 border-black rounded-sm bg-white focus:outline-none" />
            </div>
          </div>
        )}

        {/* 3. Size Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <p style={{ fontSize: t.xs }} className="text-slate-700 uppercase tracking-widest">Select Size</p>
            <Link href="/size-guide"
              style={{ fontSize: t.xs }}
              className="uppercase tracking-widest text-slate-400 hover:text-slate-700 underline underline-offset-2 transition-colors">
              Size Guide
            </Link>
          </div>
          <div className="flex gap-2 flex-wrap">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <button key={size} onClick={() => setSelectedSize(size)}
                style={{ fontSize: t.xs }}
                className={`w-12 h-10 border transition-all duration-200
                  ${selectedSize === size
                    ? 'border-black bg-white text-black'
                    : 'border-gray-200 text-slate-600 hover:border-gray-400'}`}>
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Quantity */}
        <div className="flex items-center gap-4 mb-6">
          <p style={{ fontSize: t.xs }} className="text-slate-700">Quantity</p>
          <div className="flex items-center border border-gray-200">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}
              style={{ fontSize: t.sm }}
              className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-gray-50">−</button>
            <span style={{ fontSize: t.sm }}
              className="w-8 h-8 flex items-center justify-center border-x border-gray-200">
              {quantity}
            </span>
            <button onClick={() => setQuantity(q => q + 1)}
              style={{ fontSize: t.sm }}
              className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-gray-50">+</button>
          </div>
        </div>

        {/* 5. Add to Bag + Wishlist row */}
        <div className="flex items-center gap-3 mb-3 w-[45%]">
          <button disabled={isAdded} onClick={handleAddToBag}
            style={{ fontSize: t.btn }}
            className={`flex-1 py-2 uppercase tracking-[0.25em] font-medium transition-colors duration-300
              ${isAdded
                ? 'bg-gray-800 text-white cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800 cursor-pointer'}`}>
            {isAdded ? "Added to Bag" : "Add to Bag"}
          </button>
          <button aria-label="Add to wishlist"
            className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors shrink-0">
            <span style={{ fontSize: t.base }} className="text-gray-400">☆</span>
          </button>
        </div>

        {/* 6. Buy it Now — same width as the bag button (excluding the star) */}
        <div className="mb-8 w-[45%]">
          <Link href={`/checkout/${productid}`}>
            <button style={{ fontSize: t.btn }}
              className="w-full py-2 border border-black text-black uppercase tracking-[0.25em] font-medium hover:bg-black hover:text-white transition-colors duration-300">
              Buy it Now
            </button>
          </Link>
        </div>

        {/* 7. Product Code */}
        <div className="mb-8">
          <p style={{ fontSize: t.xs }} className="text-slate-400 uppercase tracking-widest mb-1">Product Code</p>
          <p style={{ fontSize: t.sm }} className="text-slate-700">{productid}</p>
        </div>

        {/* 8. Composition / Care / Fit inline rows */}
        <div className="mb-8 space-y-3">
          {[
            { label: 'Composition', value: composition },
            { label: 'Care',        value: care },
            { label: 'Fit',         value: fit },
          ].map(({ label, value }) => value && (
            <div key={label} className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span style={{ fontSize: t.xs }} className="uppercase tracking-widest text-slate-400">{label}</span>
              <span style={{ fontSize: t.xs }} className="text-slate-700">{value}</span>
            </div>
          ))}
        </div>

        {/* 9. Accordion sections */}
        <div className="divide-y divide-gray-100">
          {accordionSections.map(({ label, content }) => (
            <div key={label}>
              <button onClick={() => toggleSection(label)}
                className="w-full flex items-center justify-between py-4 text-left">
                <span style={{ fontSize: t.xs }} className="uppercase tracking-[0.25em] text-slate-700">
                  {label}
                </span>
                <span style={{ fontSize: t.sm }} className="text-slate-400 ml-2">
                  {openSection === label ? '−' : '+'}
                </span>
              </button>
              {openSection === label && (
                <div className="pb-5">
                  <p style={{ fontSize: t.sm }} className="leading-relaxed text-slate-500">
                    {content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 10. Can we help */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <p style={{ fontSize: t.xs }} className="uppercase tracking-[0.25em] text-slate-700 mb-4">Can We Help?</p>
          <div className="space-y-2">
            <p style={{ fontSize: t.sm }} className="text-slate-500">📱 +91 98100 28572 / +91 8448719422</p>
            <p style={{ fontSize: t.sm }} className="text-slate-500">✉ support@wriistudio.com</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SpdtDesignRight;