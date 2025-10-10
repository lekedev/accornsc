"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const sliderData = [
  {
    title: "Acorns Later",
    headline: "Invest for retirement",
    href: "/later",
    img: "/component/image/Acorns-OIP.jpg",
  },
  {
    title: "Acorns Early Invest",
    headline: "Invest for Kids",
    href: "/early-invest",
    img: "/component/image/Acorns-OIP.jpg",
  },
  {
    title: "Acorns Checking",
    headline: "Personal checking & debit card",
    href: "/banking",
    img: "/component/image/Acorns-OIP.jpg",
  },
  {
    title: "Acorns Earn",
    headline: "Invest when you shop",
    href: "/earn",
    img: "/component/image/Acorns-OIP.jpg",
  },
];

export default function BottomSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header Section */}
        <div className="mb-8">
          <p className="uppercase text-gray-500 text-sm font-semibold tracking-wide">
            FINANCIAL WELLNESS SYSTEM
          </p>
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
            Acorns helps you save & invest for the long-term
          </h4>
        </div>

        {/* Slider Section */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
          whileTap={{ cursor: "grabbing" }}
        >
          {sliderData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="min-w-[280px] md:min-w-[340px] bg-gray-50 hover:bg-gray-100 rounded-2xl shadow-sm flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    {item.title}
                  </p>
                  <h5 className="text-xl md:text-2xl font-semibold text-gray-900 mt-2 leading-snug">
                    {item.headline}
                  </h5>
                </div>

                <div className="mt-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="rounded-xl object-contain w-full h-auto"
                  />
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
