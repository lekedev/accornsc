"use client";

import Image from "next/image";
import React from "react";
import PricingImg from "@/app/early/Pricing.webp"; // ✅ replace with your local image

export default function PricingSection() {
  return (
    <section className="w-full bg-purple-700 text-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Pricing</h2>
      </div>

      {/* Main Pricing Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Pricing Text Columns */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* First Column */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold leading-snug mb-4">
              $5/mo for <br className="hidden md:block" /> 1 kid
            </h3>
            <a
              href="https://signup.gohenry.com/us/parent-details"
              className="inline-block bg-white text-purple-700 font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-purple-100 transition duration-300"
            >
              Get started
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[2px] h-24 bg-green-400 mx-6"></div>

          {/* Second Column */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold leading-snug mb-4">
              $10/mo for <br /> 2–4 kids
            </h3>
            <a
              href="https://signup.gohenry.com/us/parent-details"
              className="inline-block bg-white text-purple-700 font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-purple-100 transition duration-300"
            >
              Get started
            </a>
          </div>
        </div>

        {/* Pricing Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <Image
            src={PricingImg}
            alt="Image of phone with Acorns Early on it"
            width={400}
            height={200}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
