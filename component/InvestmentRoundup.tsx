"use client";

import Image from "next/image";
import React from "react";
import roundsupimage from "@/component/image/Acorns-OIP2.jpg";

export default function InvestRoundUps() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* --- LEFT CONTENT --- */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Invest your spare change with Round-Ups®
          </h2>

          <div className="space-y-4 mb-8">
            {[
              "Link all of your credit or debit cards",
              "We’ll set aside your spare change from every purchase",
              "And invest the change once it reaches at least $5",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-slate-700 text-lg"
              >
                <Image
                  src= {roundsupimage}
                  alt="Purple Checkmark"
                  width={24}
                  height={24}
                />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <a
            href="/round-ups"
            className="text-purple-700 font-semibold hover:underline text-lg"
          >
            Learn More →
          </a>
        </div>

        {/* --- RIGHT IMAGE --- */}
        <div className="flex-1 flex justify-center">
          <Image
            src={roundsupimage}
            alt="Invest your spare change with Round-Ups®"
            width={548}
            height={734}
            className="rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
