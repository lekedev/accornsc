"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AcornsLater from "@/public/image/Acorns-LaterMatch.png";

export default function HeroLater() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white">
      {/* === Background Image === */}
      <Image
        src={AcornsLater}
        alt="Acorns Later"
        fill
        className="object-cover object-center absolute inset-0 z-0"
        priority
      />

      {/* === Overlay (optional dark tint for readability) === */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* === Content === */}
      <div className="relative z-20 text-center px-6 max-w-2xl">
        <h1 className="text-sm uppercase font-semibold tracking-wide text-gray-200">
          Retirement Account
        </h1>

        <h2 className="text-5xl md:text-7xl font-bold mt-2">Acorns Later</h2>

        <p className="text-lg md:text-xl mt-4 text-gray-100 leading-relaxed">
          Automatically invest for retirement, and get potential tax benefits.
        </p>

        <Link
          href="https://signup.acorns.com/"
          target="_blank"
          className="inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded-full mt-6 hover:bg-[#580b91] transition"
        >
          Get started
        </Link>
      </div>

      {/* === Tagline Banner === */}
      <div className="absolute bottom-0 left-0 w-full bg-[#6A0DAD]/90 text-white text-center py-3 font-medium text-sm md:text-base z-30">
        3% IRA match included in Gold subscription
      </div>
    </section>
  );
}
