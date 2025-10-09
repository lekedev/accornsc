"use client";

import React from "react";
import envoimage from "@/app/pages/body/Navbar-page/bg-images/Envoy-Invest-Hero.avif";
import envoimagemobile from "@/app/pages/body/Navbar-page/bg-images/Envoy-Invest-Hero-Mobile.avif";

export default function HeroInvest() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-16 py-16 md:py-24 envoy-hero-wrapper">
      {/* Left Text Section */}
      <div className="max-w-lg space-y-6 text-center md:text-left copy-wrapper">
        <h1 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
          Investment Account
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold text-black">
          Acorns Invest
        </h2>

        <h3 className="text-lg md:text-xl text-gray-800">
          Easy, automated investing, starting with spare change.
        </h3>

        <a
          href="https://app.adjust.com/1nu9jwqa_1nvi94lw?label=Invest&engagement_type=fallback_click&fallback=https%3A%2F%2Fsignup.acorns.com%2F&redirect_macos=https%3A%2F%2Fsignup.acorns.com%2F"
          className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300"
        >
          Get started
        </a>
      </div>

      {/* Right Background Image Section */}
      <div
        className="relative mt-10 md:mt-0 w-full md:w-1/2 h-[400px] md:h-[550px] rounded-2xl bg-cover bg-center bg-no-repeat image-wrapper"
        style={{
          backgroundImage: `url(${envoimagemobile.src})`,
        }}
      >
        {/* Desktop background override */}
        <style jsx>{`
          @media (min-width: 768px) {
            .image-wrapper {
              background-image: url(${envoimage.src});
            }
          }
        `}</style>
      </div>
    </section>
  );
}
