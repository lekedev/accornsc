"use client";

import React from "react";
import CountUp from "react-countup";

export default function HighlightedText() {
  return (
    <section className="bg-white py-20 text-center">
      <div className="max-w-3xl mx-auto px-6">
        {/* Topline Text */}
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Since 2016, Acorns Earn customers have earned &amp; invested over
        </p>

        {/* Count-Up Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
          $
          <CountUp
            end={48900000}
            duration={3}
            separator=","
          />
        </h2>
      </div>
    </section>
  );
}
