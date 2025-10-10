"use client";

import React from "react";
import Image from "next/image";
import InvestImage from "@/component/image/Acorns-OIP3.jpg";

export default function InvestTopCompanies() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm md:max-w-md">
            <Image
              src={InvestImage}
              alt="Invest in today’s top companies"
              className="rounded-2xl object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Invest in today’s top companies
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            When you invest in Acorns ETF portfolios, there’s a good chance a
            portion of your investment is in some of the world’s largest and
            most successful companies, including names like Apple, Amazon,
            Google, and Berkshire Hathaway.
          </p>
          <p className="text-sm text-slate-500 leading-snug">
            Mentions of individual top companies in reference to possible ETF
            holdings only, not as a recommendation to buy or sell any specific
            security.
          </p>
        </div>
      </div>
    </section>
  );
}
