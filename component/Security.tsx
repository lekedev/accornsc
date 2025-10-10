"use client";

import React from "react";
import Image from "next/image";
import SecurityImg from "@/component/image/pic5.avif";

export default function SecurityProtection() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm md:max-w-md">
            <Image
              src={SecurityImg}
              alt="Security & Protection"
              className="rounded-2xl object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Security &amp; Protection
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Acorns Invest, Later &amp; Early accounts are SIPC-protected up to
            $500,000. SIPC does not protect against market risk, which is the
            risk inherent in a fluctuating market. For details, please visit{" "}
            <a
              href="https://www.sipc.org/"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800 transition-colors"
            >
              www.sipc.org
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
