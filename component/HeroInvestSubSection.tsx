"use client";

import Image from "next/image";
import React from "react";

export default function HeroSubsection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-white text-gray-900 overflow-hidden py-16 px-6 md:px-16">
      {/* === Left Text Section === */}
      <div className="z-10 max-w-xl space-y-4">
        <p className="text-sm uppercase font-semibold tracking-wider text-gray-600">
          SAVE & INVEST EVERY DAY
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Smart{" "}
          <br className="block md:hidden" />
          investing made{" "}
          <span className="text-green-600">Acorns-easy</span>
        </h1>
      </div>

      {/* === Right Image Section === */}
      <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="https://sqy7rm.media.zestyio.com/Envoy-Invest-Hero-Updt4-Opt--2025-.png"
            alt="Group of images showing people investing"
            width={2880}
            height={1846}
            className="object-cover w-full"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="md:hidden">
          <Image
            src="https://sqy7rm.media.zestyio.com/Envoy-Invest-Hero-Updt4-Mob--2025-.png"
            alt="Group of images showing people investing"
            width={1125}
            height={2082}
            className="object-cover w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
