"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import EarlyBg from "@/app/early-earn/Acorns-Early.avif"; // local background image

export default function HeroEarlyInvest() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-[#f8f6ef]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={EarlyBg}
          alt="Acorns Early Invest Background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
      </div>

      {/* Overlay (optional slight tint for readability) */}
      <div className="absolute inset-0 bg-[#f8f6ef]/90"></div>

      {/* Centered Text Content */}
      <div className="relative text-center z-10 px-6 max-w-3xl">
        <h3 className="uppercase text-gray-700 tracking-widest text-sm font-semibold mb-4">
          Custodial Account
        </h3>

        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Acorns Early Invest
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Invest for the kids in your life now, because time goes fast.
        </p>

        <Link
          href="https://signup.acorns.com/"
          className="inline-block bg-[#00b46e] hover:bg-[#009c5f] text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
        >
          Get started
        </Link>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 left-0 w-full bg-blue-700 text-white text-center py-3 text-sm font-medium">
        Included with Gold subscription
      </div>
    </section>
  );
}
