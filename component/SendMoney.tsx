"use client";

import Image from "next/image";
import React from "react";
import SendMoneyImg from "@/app/early/Cartoon.avif"; 

export default function SendMoney() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-16 py-16 bg-white gap-y-10 md:gap-x-16">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Gifts and celebrations
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Family and friends can send money straight to your kids&#39;
           cards with Giftlinks and Relatives accounts.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={SendMoneyImg}
          alt="Send money in a snap"
          width={600}
          height={500}
          className="object-contain w-full h-auto"
        />
      </div>
    </section>
  );
}
