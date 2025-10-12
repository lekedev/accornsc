"use client";

import Image from "next/image";
import React from "react";
import GivingImg from "@/app/early/Giving.avif"; 

export default function GivingMadeEasy() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-16 py-16 bg-white gap-y-10 md:gap-x-16">
      {/* Left Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={GivingImg}
          alt="Giving made easy"
          width={600}
          height={500}
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Right Text Section */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Giving made easy
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Set up donations to the Boys &amp; Girls Club of America, or create a
          savings goal for a chosen charity.
        </p>
      </div>
    </section>
  );
}
