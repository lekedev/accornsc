"use client";

import Image from "next/image";
import React from "react";
import portfolioImg from "@/public/image/home2.png";

export default function Portfolio() {
  return (
    <section className="w-full bg-white text-gray-900 py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT CONTENT */}
         <div className="flex justify-center relative">
          <div className="relative w-full max-w-lg">
            <Image
              src={portfolioImg}
              alt="Round-Ups feature"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

         
       

        {/* RIGHT IMAGE CONTENT */}
        <div className="space-y-5">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
            Expert-built portfolios, <br className="hidden sm:block" /> suggested for you
            {/* <br className="hidden sm:block" />  */}
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-md">
           Acorns diversified portfolios are built by experts and include 
           ETFs managed by pros at the world’s
            top investment firms like Vanguard and BlackRock.
          </p>
        </div>
      </div>
    </section>
  );
}
