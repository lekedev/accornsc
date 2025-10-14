"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "@/public/image/Closing-Signup.png"; // phone mockup
import treeRing from "@/public/image/Tree-Asset.png";  // background texture
import woman from "@/public/image/woman-cup.png";      // lifestyle photo

export default function ClosingSignup() {
  return (
    <section className="relative bg-[#4CAF50] overflow-hidden">
      {/* Background Tree Ring */}
      <div className="absolute inset-0">
        <Image
          src={treeRing}
          alt="Tree ring texture"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-20 md:py-28">
        {/* Left side - Phone mockup */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-10 md:mt-0">
          <Image
            src={phone}
            alt="Acorns app on phone"
            width={360}
            height={360}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Right side - Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <p className="uppercase text-white font-semibold tracking-widest text-sm">
            Join the movement
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            We’re changing the way Americans save & invest every day
          </h1>

          <Link
            href="https://signup.acorns.com/"
            target="_blank"
            className="inline-block bg-white text-[#4CAF50] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Sign up today
          </Link>
        </div>
      </div>

      {/* Right overlay image (woman holding phone) */}
      <div className="absolute hidden lg:block right-0 top-1/2 -translate-y-1/2 rounded-l-3xl overflow-hidden">
        <Image
          src={woman}
          alt="Woman holding phone and coffee"
          width={420}
          height={420}
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
