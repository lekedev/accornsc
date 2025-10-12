"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Import local brand icons
import kohls from "@/app/earn/kohls.webp";
import hotels from "@/app/earn/hotels.webp";
import apple from "@/app/earn/apple.webp";
import nike from "@/app/earn/nike.webp";
import hello from "@/app/earn/HelloFresh.webp";
import sams from "@/app/earn/sams.webp";
import expedia from "@/app/earn/expedia.webp";
import instacart from "@/app/earn/Instacart.webp";
import walmart from "@/app/earn/walmart.webp";
import groupon from "@/app/earn/groupon.webp";
import safeway from "@/app/earn/Safeway.webp";
import qvc from "@/app/earn/QVC.webp";

export default function BrandIcons() {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  const icons = [
    kohls,
    hotels,
    apple,
    nike,
    hello,
    sams,
    expedia,
    instacart,
    walmart,
    groupon,
    safeway,
    qvc,
  ];

  // Pause scrolling when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const row = entry.target as HTMLElement;
          row.style.animationPlayState = entry.isIntersecting
            ? "running"
            : "paused";
        });
      },
      { threshold: 0.2 }
    );

    if (topRowRef.current) observer.observe(topRowRef.current);
    if (bottomRowRef.current) observer.observe(bottomRowRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-20 overflow-hidden">
     
      {/* Scrolling Rows */}
      <div className="space-y-10">
        {/* Top Row (scrolls left) */}
        <div
          ref={topRowRef}
          className="flex animate-scroll-left whitespace-nowrap"
        >
          {[...icons, ...icons].map((icon, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-24 mx-6 md:w-28 md:h-28"
            >
              <Image
                src={icon}
                alt={`Brand icon ${index + 1}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row (scrolls right) */}
        <div
          ref={bottomRowRef}
          className="flex animate-scroll-right whitespace-nowrap"
        >
          {[...icons, ...icons].map((icon, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-24 mx-6 md:w-28 md:h-28"
            >
              <Image
                src={icon}
                alt={`Brand icon ${index + 1}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
