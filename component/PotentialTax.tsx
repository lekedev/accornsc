"use client";

import React from "react";
import { FaPiggyBank } from "react-icons/fa"; 

export default function PotentialTaxBenefits() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white text-slate-800">
      {/* Left Icon (replaces image) */}
      <div className="flex justify-center items-center w-full md:w-1/2 mb-10 md:mb-0">
        <div className="bg-green-100 p-10 rounded-2xl shadow-sm">
          <FaPiggyBank className="text-green-600 text-[120px] md:text-[160px]" />
        </div>
      </div>

      {/* Right Text Content */}
      <div className="max-w-lg space-y-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Potential tax benefits
        </h2>

        <p className="text-base md:text-lg text-slate-700">
          Retirement planning doesn’t just benefit your life later. Every
          contribution you make towards your Acorns Later retirement account can
          mean potential tax benefits today.
        </p>
      </div>
    </section>
  );
}
