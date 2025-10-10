"use client";

import React from "react";
import envoimage from "@/app/pages/body/Navbar-page/bg-images/Envoy-Invest-Hero.avif";
import envoimagemobile from "@/app/pages/body/Navbar-page/bg-images/Envoy-Invest-Hero-Mobile.avif";

export default function HeroInvest() {
  return (
    <section
      className="relative flex items-center justify-center text-center px-6 md:px-16 h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${envoimagemobile.src})`,
      }}
    >
      {/* Desktop background override */}
      <style jsx>{`
        @media (min-width: 768px) {
          section {
            background-image: url(${envoimage.src});
          }
        }
      `}</style>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered content */}
      <div className="relative z-10 max-w-2xl text-white space-y-6">
        <h1 className="text-sm font-semibold uppercase tracking-wide text-green-300">
          Investment Account
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold">
          Acorns Invest
        </h2>

        <h3 className="text-lg md:text-xl">
          Easy, automated investing, starting with spare change.
        </h3>

        <a
          href="https://app.adjust.com/1nu9jwqa_1nvi94lw?label=Invest&engagement_type=fallback_click&fallback=https%3A%2F%2Fsignup.acorns.com%2F&redirect_macos=https%3A%2F%2Fsignup.acorns.com%2F"
          className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300"
        >
          Get started
        </a>
      </div>
    </section>
  );
}
