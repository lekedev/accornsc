"use client";

import React from "react";
import { FaRegLightbulb } from "react-icons/fa"; 

export default function RetirementPlanning() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white text-slate-800">
      {/* Left content */}
      <div className="max-w-lg space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Retirement planning, automated
        </h2>

        <p className="text-base md:text-lg text-slate-700">
          With your answers to a few simple questions, we&#39;ll recommend the
          retirement account that&#39;s right for you — Roth, Traditional or SEP.
        </p>

        <div className="space-y-2">
          <a
            href="https://www.acorns.com/money-basics/investing/what-is-a-roth-ira-/"
            className="text-blue-700 underline"
          >
            What&#39;s a Roth IRA?
          </a>
          <p>
            <a
              href="https://www.acorns.com/money-basics/retirement/what-is-a-traditional-ira-/"
              className="text-blue-700 underline"
            >
              What&#39;s a Traditional IRA?
            </a>
          </p>
          <p>
            <a
              href="https://www.acorns.com/money-basics/retirement/what-is-a-sep-ira-/"
              className="text-blue-700 underline"
            >
              What&#39;s a SEP IRA?
            </a>
          </p>
        </div>
      </div>

      {/* Right icon (replaces image) */}
      <div className="mt-10 md:mt-0 flex justify-center items-center w-full md:w-1/2">
        <FaRegLightbulb className="text-green-600 text-[120px] md:text-[160px]" />
      </div>
    </section>
  );
}
