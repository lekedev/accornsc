"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroLater() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-white text-gray-900 overflow-hidden pt-24 md:pt-32">
      {/* === Left Copy Section === */}
      <div className="z-10 px-6 md:px-16 max-w-2xl md:w-1/2 space-y-4">
        <h1 className="text-sm uppercase font-semibold text-gray-700 tracking-wide">
          Retirement Account
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold text-black">
          Acorns Later
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Automatically invest for retirement, and get potential tax benefits.
        </p>

        <Link
          href="https://signup.acorns.com/"
          target="_blank"
          className="inline-block bg-[#6A0DAD] text-white font-semibold px-8 py-3 rounded-full mt-4 hover:bg-[#580b91] transition"
        >
          Get started
        </Link>
      </div>

      {/* === Right Image Section === */}
      <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/component/image/Acorns-LaterMatch.jpg"
            alt="Acorns Later"
            width={1500}
            height={948}
            className="object-cover w-full"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="md:hidden">
          <Image
            src="/images/Acorns-LaterMatch-Hero-Mob.png"
            alt="Acorns Later Mobile"
            width={647}
            height={1167}
            className="object-cover w-full"
            priority
          />
        </div>
      </div>

      {/* === Tagline Banner === */}
      <div className="absolute bottom-0 left-0 w-full bg-[#6A0DAD] text-white text-center py-3 font-medium text-sm md:text-base">
        3% IRA match included in Gold subscription
      </div>
    </section>
  );
}
