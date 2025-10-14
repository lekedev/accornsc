"use client";

import Image from "next/image";
import React from "react";
import { Banknote, BarChart3 } from "lucide-react"; 

import bluePerformance from "@/public/image/Hero-subs-carousel.webp"; 
import greenInvest from "@/public/image/Envoy-Home-Personal-Investing--1-.SJzHMRtj4el.avif"; 

export default function TwoColumnContent() {
  return (
    <section className="flex flex-col  gap-x-6 md:flex-row w-full">
      {/* --- Column 1 --- */}
      <div className="flex flex-col rounded-4xl justify-between bg-[#4DA1EF] text-white md:w-1/2 p-8 md:p-16">
        <div>
          <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" /> {/* React icon */}
            View your performance in real time
          </h3>
          <p className="text-base leading-relaxed mb-6">
            See how your portfolio is doing today or over time, and view your
            account value breakdown.
          </p>
        </div>

        <div className="relative w-full h-64 md:h-80 mt-4">
          <Image
            src={bluePerformance}
            alt="View your performance in real time"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* --- Column 2 --- */}
      <div className="flex flex-col rounded-4xl justify-between bg-[#74C947] text-white md:w-1/2 p-8 md:p-16">
        <div>
          <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Banknote className="w-6 h-6" /> {/* React icon */}
            Banking + investing all in one app
          </h3>
          <p className="text-base leading-relaxed mb-6">
            Claim a checking account with a debit card that automatically saves
            and invests for you.
          </p>
          <a
            href="/round-ups"
            className="underline hover:text-gray-100 transition-colors"
          >
            Learn More
          </a>
        </div>

        <div className="relative w-full h-64 md:h-80 mt-4">
          <Image
            src={greenInvest}
            alt="Banking + investing all in one app"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
