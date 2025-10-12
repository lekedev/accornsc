"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import EarnDesktop from "@/app/earn/Earn-While-Shopping---Desktop_Updated.avif";
import EarnMobile from "@/app/earn/Earn-While-Shopping---Desktop_Updated.avif";

export default function EarnWhileShopping() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden py-16 px-6 md:px-16">
      {/* LEFT — Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        {/* Mobile version */}
        <div className="md:hidden relative w-full h-[450px]">
          <Image
            src={EarnMobile}
            alt="Earn investments while you shop"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Desktop version */}
        <div className="hidden md:block relative w-[90%] max-w-[600px] h-[600px]">
          <Image
            src={EarnDesktop}
            alt="Earn investments while you shop"
            fill
            className="object-contain rounded-2xl"
            priority
          />
        </div>
      </div>

      {/* RIGHT — Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Earn investments while you shop
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Automatically earn bonus investments when you buy what you need from
          brands you love. Want to get even more out of your money? Unlock a{" "}
          <span className="font-semibold">25% bonus investment match</span> when
          you sign up for <span className="font-semibold">Acorns Silver</span>{" "}
          and a <span className="font-semibold">50% bonus investment match</span>{" "}
          with <span className="font-semibold">Acorns Gold</span>.
        </p>

        <Link
          href="https://signup.acorns.com/signup/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
