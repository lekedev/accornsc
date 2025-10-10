"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClosingSignup() {
  return (
    <section className="relative bg-[#4CAF50] overflow-hidden text-white py-16 md:py-24">
      {/* Copy Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Text Content */}
        <div className="z-10 md:w-1/2 space-y-4">
          <p className="uppercase text-sm font-semibold tracking-wider">
            Join the Movement
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            We’re changing the way Americans save & invest every day
          </h2>

          <Link
            href="https://signup.acorns.com/"
            target="_blank"
            className="inline-block bg-white text-[#4CAF50] font-semibold px-6 py-3 rounded-full mt-4 hover:bg-gray-100 transition"
          >
            Sign up today
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center md:justify-end md:w-1/2">
          {/* Tree Image */}
          <div className="absolute -bottom-6 -left-10 hidden md:block">
            <Image
              src="/images/tree.png"
              alt="Tree stump"
              width={300}
              height={300}
              className="object-contain opacity-90"
            />
          </div>

          {/* Phone Image */}
          <Image
            src="/images/phone.png"
            alt="Phone image"
            width={400}
            height={300}
            className="object-contain z-20"
          />

          {/* Lifestyle Image (woman holding phone) */}
          <div className="absolute bottom-0 right-0 hidden lg:block">
            <Image
              src="/component/image/pic3.avif"
              alt="Woman holding phone"
              width={280}
              height={280}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
