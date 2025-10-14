"use client";

import React from "react";
import Image from "next/image";
import DiversifiedImg from "@/public/image/Envoy-Home-Personal-Investing--1-.SJzHMRtj4el.avif";

export default function DiversifiedMix() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            A diversified mix of stocks and bonds
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Diversification means your investments are exposed to a broad range
            of stocks, bonds, or both — possibly over 7,000! This can help reduce
            your risk, compared to trading individual stocks.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md md:max-w-lg">
            <Image
              src={DiversifiedImg}
              alt="A diversified mix of stocks and bonds"
              className="rounded-2xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
