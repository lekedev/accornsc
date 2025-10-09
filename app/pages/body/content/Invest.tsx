
"use client";

import React from "react";
import Image from "next/image";

export default function HeroInvest() {
  return (
    <section className="bg-white text-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Acorns helps you <br className="hidden sm:block"/> save & invest
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
            Invest spare change, invest while you bank, earn bonus investments,
            and more.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition">
            Get started
          </button>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          {/* Phone Mockup */}
          <Image
            src="/phone-invest.png"
            alt="Phone app preview"
            width={320}
            height={640}
            priority
            className="w-52 sm:w-64 md:w-80 drop-shadow-2xl h-auto"
          />

          {/* Trees / Decoration */}
          <Image
            src="/tree-left.png"
            alt="Tree"
            width={224}
            height={224}
            className="absolute bottom-0 left-0 w-28 sm:w-40 md:w-56 h-auto"
          />
          <Image
            src="/tree-right.png"
            alt="Tree"
            width={224}
            height={224}
            className="absolute bottom-0 right-0 w-28 sm:w-40 md:w-56 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
