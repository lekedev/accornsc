"use client";

import React from "react";
import { FaChartLine } from "react-icons/fa"; //replace with image

export default function AgeBasedPortfolio() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white text-slate-800">
      {/* Left Content */}
      <div className="max-w-lg space-y-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Age-based portfolios
        </h2>

        <p className="text-base md:text-lg text-slate-700">
          Your Acorns Later portfolio is automatically selected based on your
          age and timeline to retirement and automatically adjusts as you age.
        </p>
      </div>

      {/* Right Icon (replaces image) */}
      <div className="flex justify-center items-center w-full md:w-1/2 mt-10 md:mt-0">
        <div className="bg-green-100 p-10 rounded-2xl shadow-sm">
          <FaChartLine className="text-green-600 text-[120px] md:text-[160px]" />
        </div>
      </div>
    </section>
  );
}
