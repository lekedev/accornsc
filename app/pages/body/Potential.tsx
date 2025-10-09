// src/components/Potential.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Potential() {
  return (
    <section className="bg-white text-gray-900 py-16">
      <div className="container mx-auto px-6 text-center">
        
        {/* Logos Row */}
        <div className="flex justify-center md:justify-end gap-8 mb-10 flex-wrap">
          <span className="text-sm text-gray-600 flex items-center gap-2">
            <Image
              src="/forbes.png"
              alt="Forbes"
              width={100}
              height={24}
              className="h-6 w-auto"
            />
            <span>As seen in Forbes</span>
          </span>

          <span className="text-sm text-gray-600 flex items-center gap-2">
            <Image
              src="/time.png"
              alt="Time"
              width={100}
              height={24}
              className="h-6 w-auto"
            />
            <span>Best Brands 2024</span>
          </span>

          <span className="text-sm text-gray-600 flex items-center gap-2">
            <Image
              src="/cnbc.png"
              alt="CNBC"
              width={100}
              height={24}
              className="h-6 w-auto"
            />
            <span>As seen in CNBC</span>
          </span>
        </div>

        {/* Heading */}
        <p className="uppercase tracking-wide text-green-600 font-semibold mb-6">
          Calculate your estimate
        </p>
        
        <h1 className="text-3xl sm:text-4xl font-medium mb-2">
          See your potential
        </h1>
 
        {/* Supporting Text */}
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Check out our compound interest calculator to see just how much the
          power of time and compound interest can help your money grow.
        </p>
      </div>
    </section>
  );
}
