"use client";

import Image from "next/image";
import React from "react";

import heroDesktopAvif from "@/public/image/Envoy-Home-Personal-Investing--1-.SJzHMRtj4el.avif";
import heroDesktopPng from "@/public/image/Envoy-Home-Personal-Investing--1-.SJzHMRtj4el.avif";
import heroMobileAvif from "@/public/image/Envoy-Home-Personal-Investing--1-.SJzHMRtj4el.avif";
import heroMobilePng from "@/public/image/Envoy-Home-Personal-Investing--1-.SJzHMRtj4el.avif";

export default function HeroInvestSubsection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden bg-white">
      {/* Text content */}
      <div className="absolute z-10 px-6 md:px-0 top-1/2 -translate-y-1/2 w-full">
        <div className="space-y-4">
          <div className="text-sm md:text-base font-semibold uppercase tracking-wide text-slate-600">
            SAVE &amp; INVEST EVERY DAY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            Smart <br className="block md:hidden" />
            investing made Acorns-easy
          </h2>
        </div>
      </div>

      {/* Responsive image */}
      <div className="relative w-full h-[550px] md:h-[700px]">
        {/* Mobile image */}
        <div className="block md:hidden">
          <Image
            src={heroMobileAvif || heroMobilePng}
            alt="Group of images showing people investing"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop image */}
        <div className="hidden md:block">
          <Image
            src={heroDesktopAvif || heroDesktopPng}
            alt="Group of images showing people investing"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
