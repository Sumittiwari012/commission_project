"use client";


import React, { useEffect, useRef, useState } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae",
];

function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
  if (paused) return;

  const timer = setInterval(() => {
    setIndex((prev) => {
  if (prev === galleryImages.length - 1) {
    setAnimate(false);

    setTimeout(() => {
      setIndex(0);

      requestAnimationFrame(() => {
        setAnimate(true);
      });
    }, 50);

    return prev;
  }

  return prev + 1;
});
  }, 6000);

  return () => clearInterval(timer);
}, [paused]);

  return (
    <section className="py-24">
      <div
        className="max-w-[2200px] mx-auto px-4 2xl:px-0"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: animate
  ? "transform 2s cubic-bezier(0.22,1,0.36,1)"
  : "none",
            }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="min-w-full flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`Slide ${i}`}
                  className="w-full object-cover"
                  style={{
                    height: "clamp(500px,80vh,1200px)"
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-500 rounded-full ${
                index === i
                  ? "w-8 h-3 bg-black"
                  : "w-3 h-3 bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <main className="bg-[#f7f3ec] text-[#1a1a1a] overflow-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-8 md:px-16 xl:px-24 2xl:px-32">
  <div className="
      w-full
      max-w-[2400px]
      grid
      md:grid-cols-2
      gap-16
      xl:gap-24
      2xl:gap-32
      items-center
  ">

          <div>
            <p className="uppercase tracking-[0.45em] text-sm xl:text-base mb-6 xl:mb-8 text-zinc-500">
              Our Story
            </p>

            <h1
              className="font-light leading-[1.05] tracking-wide"
              style={{ fontSize: "clamp(3rem, 6vw, 7rem)" }}
            >
              Pure.
              <br />
              Rare.
              <br />
              Freedom.
            </h1>

            <div className="w-24 xl:w-32 h-[1px] bg-black/30 my-10 xl:my-14" />

            <p
              className="leading-[2] text-zinc-700 max-w-xl xl:max-w-2xl"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.6rem)" }}
            >
              Rooted in craft and shaped by contemporary design,
              our work exists at the intersection of heritage,
              innovation and timeless expression.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
              alt=""
              className="w-full object-cover"
              style={{ height: "clamp(60vh, 80vh, 92vh)" }}
            />
          </div>
        </div>
      </section>

      {/* STORY */}
     {/* STORY */}
<section
  className="
    py-16
    xl:py-20
    2xl:py-24
    px-8
    md:px-16
    xl:px-24
    2xl:px-32
  "
>
  <div className="max-w-[1900px] mx-auto">

    <p
      className="
        uppercase
        tracking-[0.55em]
        text-zinc-500
        mb-12
      "
      style={{
        fontSize: "clamp(0.9rem,0.7vw,1.4rem)"
      }}
    >
      Philosophy
    </p>

    <div
      className="
        max-w-[1700px]
        space-y-12
        xl:space-y-14
      "
      style={{
        fontSize: "clamp(1.4rem,1.25vw,2.1rem)",
        lineHeight: 1.85,
        fontWeight: 300,
        letterSpacing: "-0.01em",
      }}
    >
      <p>
        Since inception, our approach has remained centered around thoughtful craftsmanship,
        understated luxury and an obsessive attention to detail.
      </p>

      <p>
        Every collection begins with a conversation between material, structure and movement.
        Traditional techniques are reimagined through a modern lens, creating garments that feel
        both familiar and unexpected.
      </p>

      <p>
        We believe simplicity is not the absence of complexity but the result of refinement.
        Behind every silhouette lies a process of experimentation, reduction and precision.
      </p>
    </div>

  </div>
</section>
      {/* IMAGE BREAK */}
      <ImageCarousel />

      {/* CRAFT */}
      {/* CRAFT */}
<section
  className="
    py-20
    xl:py-24
    2xl:py-32
    px-8
    md:px-16
    xl:px-24
    2xl:px-32
  "
>
  <div
    className="
      max-w-[2200px]
      mx-auto
      grid
      md:grid-cols-[0.9fr_1.1fr]
      2xl:grid-cols-[1fr_1.2fr]
      gap-16
      xl:gap-24
      2xl:gap-40
      items-start
    "
  >
    <div>
      <p
        className="
          uppercase
          tracking-[0.55em]
          text-zinc-500
          mb-8
        "
        style={{
          fontSize: "clamp(0.9rem,0.7vw,1.3rem)",
        }}
      >
        Craft
      </p>

      <h2
        className="
          font-extralight
          tracking-[-0.04em]
          leading-[1.05]
        "
        style={{
          fontSize: "clamp(4rem,4vw,7rem)",
        }}
      >
        Technology
        <br />
        and Tradition
      </h2>
    </div>

    <div
      className="space-y-10"
      style={{
        fontSize: "clamp(1.4rem,1.2vw,2rem)",
        lineHeight: 1.85,
        fontWeight: 300,
      }}
    >
      <p>
        We work closely with artisans, textile innovators and makers
        across India to preserve techniques while continuously
        exploring new possibilities.
      </p>

      <p>
        Handcrafted processes coexist with modern construction,
        allowing us to create products that carry both emotion and
        precision.
      </p>

      <p>
        The result is a language that feels contemporary while
        remaining deeply connected to its roots.
      </p>
    </div>
  </div>
</section>

      {/* VALUES */}
      {/* VALUES */}
<section
  className="
    bg-[#ece5d8]
    py-24
    xl:py-28
    2xl:py-36
    px-8
    md:px-16
    xl:px-24
    2xl:px-32
  "
>
  <div className="max-w-[2400px] mx-auto">

    <p
      className="
        uppercase
        tracking-[0.55em]
        text-zinc-500
        mb-20
      "
      style={{
        fontSize: "clamp(0.9rem,0.7vw,1.4rem)",
      }}
    >
      Principles
    </p>

    <div
      className="
        grid
        md:grid-cols-3
        gap-20
        xl:gap-28
        2xl:gap-40
      "
    >
      <div>
        <h3
          className="
            font-extralight
            tracking-[-0.03em]
            mb-8
          "
          style={{
            fontSize: "clamp(2.5rem,2.2vw,4.5rem)",
          }}
        >
          Design
        </h3>

        <p
          style={{
            fontSize: "clamp(1.4rem,1.1vw,2rem)",
            lineHeight: 1.9,
            fontWeight: 300,
          }}
        >
          Every detail is intentional.
          Every line serves a purpose.
        </p>
      </div>

      <div>
        <h3
          className="
            font-extralight
            tracking-[-0.03em]
            mb-8
          "
          style={{
            fontSize: "clamp(2.5rem,2.2vw,4.5rem)",
          }}
        >
          Craftsmanship
        </h3>

        <p
          style={{
            fontSize: "clamp(1.4rem,1.1vw,2rem)",
            lineHeight: 1.9,
            fontWeight: 300,
          }}
        >
          Human skill remains at the heart
          of everything we create.
        </p>
      </div>

      <div>
        <h3
          className="
            font-extralight
            tracking-[-0.03em]
            mb-8
          "
          style={{
            fontSize: "clamp(2.5rem,2.2vw,4.5rem)",
          }}
        >
          Longevity
        </h3>

        <p
          style={{
            fontSize: "clamp(1.4rem,1.1vw,2rem)",
            lineHeight: 1.9,
            fontWeight: 300,
          }}
        >
          Designed to transcend seasons
          and remain relevant over time.
        </p>
      </div>
    </div>

  </div>
</section>
      {/* QUOTE */}
      <section className="py-40 xl:py-56 2xl:py-72 px-8 xl:px-20">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center">
          <p
            className="font-light leading-[1.4]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 5.5rem)" }}
          >
            "The beauty of a garment lies not only in how it looks,
            but in the story woven into its making."
          </p>
        </div>
      </section>

    </main>
  );
}

export default About;