"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CardDesignCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Optional continuous scroll animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  // ✅ Local images from /public/images/cards
  const cards = [
    "/",
    "/early/Kid-atm.webp",
    "/early/Kid-atm2.webp",
    "/early/Kid-atm3.webp",
    "/early/Kid-atm4.webp",
    "/early/Kid-atm5.webp",
    "/early/Kid-atm6.webp",
  ];

  return (
    <section className="w-full py-16 bg-[#F6F4EC] overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Choose from 35+ customizable debit card designs
        </h2>
      </div>

      {/* Carousel container */}
      <div ref={scrollRef} className="flex gap-6 w-[200%] animate-scroll-left">
        {[...cards, ...cards].map((card, i) => (
          <div
            key={i}
            className="min-w-[250px] md:min-w-[300px] flex-shrink-0 border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Image
              src={card}
              alt={`Card ${i + 1}`}
              width={400}
              height={250}
              className="w-full h-auto"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}
