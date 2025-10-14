"use client";

import Image from "next/image";
import React from "react";
import portfolioImg from "@/public/image/home3.png";


 
export default function More() {
  return (
    <section className="w-full bg-white text-gray-900 py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT CONTENT */}
        <div className="space-y-5">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
            Plus more ways to save, <br className="hidden sm:block" />invest and learn
            {/* <br className="hidden sm:block" />  */}
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-md">
           Along with your investment account, you get an easy, 
           automated retirement account, banking that saves and invests for you, bonus
            investments when you shop with thousands of brands and unique ways to grow your knowledge.
          </p>
        </div> 

         
       

        {/* RIGHT IMAGE CONTENT */}
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
        
      </div>
    </section>
  );
}
