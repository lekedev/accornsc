"use client";

import Image from "next/image";
import React from "react";
import portfolioImg from "@/component/image/Envoy-Home-CLIR-2.B1zBG0YjEee.avif";

export default function Protection() {
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
            Security & Protection
            {/* <br className="hidden sm:block" />  */}
            {/* <br className="hidden sm:block" />  */}
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-md">
             Acorns Invest, Later & Early accounts are SIPC-protected up to $500,000. 
             SIPC does not protect against market risk, which is the risk inherent in a fluctuating market. 
             For details, please visit <a href="https://www.sipc.org/" className="text-black-500 underline">www.sipc.org</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
