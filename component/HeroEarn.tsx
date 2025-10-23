"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import EarnMobile from "@/app/earn/Earn-Mobile-Opt.webp";
import EarnDesktop from "@/public/image/Earn-Desktop.avif";

export default function HeroEarn() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* MOBILE VIEW — Text Over Background Image */}
      <div className="relative md:hidden w-full h-[90vh]">
        <Image
          src={EarnMobile}
          alt="Acorns Earn Mobile"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Over Image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 space-y-5 z-10">
          <h1 className="uppercase text-sm font-semibold tracking-wide">
            Bonus investments
          </h1>

          <h2 className="text-4xl font-bold">Acorns Earn</h2>

          <h3 className="text-lg max-w-md">
            Earn bonus investments from thousands of top brands.
          </h3>

          <Link
            href="https://signup.acorns.com/signup/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            Get started
          </Link>
        </div>
      </div>

      {/* DESKTOP VIEW — Full Background with Centered Content */}
      <div className="hidden md:block relative w-full h-[100vh]">
        {/* Background Image */}
        <Image
          src={EarnDesktop}
          alt="Acorns Earn Desktop"
          fill
          className="object-cover"
          priority
        />

        {/* Optional Overlay for Contrast */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

        {/* Centered Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-900 px-8 space-y-6 z-10">
          <h1 className="uppercase text-gray-700 text-sm font-semibold tracking-wide">
            Bonus investments
          </h1>

          <h2 className="text-6xl font-bold leading-tight">
            Acorns Earn
          </h2>

          <h3 className="text-xl text-gray-800 max-w-md">
            Earn bonus investments from thousands of top brands.
          </h3>

          <Link
            href="https://signup.acorns.com/signup/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            Get started
          </Link>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-0 left-0 w-full bg-purple-800 text-white text-center py-3 text-sm font-medium z-20">
        Included with all Acorns subscriptions
      </div>
    </section>
  );
}
