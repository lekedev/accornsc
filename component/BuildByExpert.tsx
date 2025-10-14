"use client";

import React from "react";
import Image from "next/image";
import ExpertsImg from "@/public/image/pic3.png";

export default function BuiltByExperts() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Built by experts
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Acorns diversified portfolios are built by experts and include ETFs
            managed by pros at the world’s top investment firms like Vanguard
            and BlackRock.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm md:max-w-md">
            <Image
              src={ExpertsImg}
              alt="Built by experts"
              className="rounded-2xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
