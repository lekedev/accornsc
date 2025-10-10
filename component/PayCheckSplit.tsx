"use client";

import React from "react";
import { FaMoneyBillWave, FaPiggyBank, FaPercentage, FaChartPie } from "react-icons/fa";
import { FcCheckmark } from 'react-icons/fc';

export default function PaycheckSplit() {
  return (
    <section className="bg-green-700 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
      {/* Left Section — Icon Illustration */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 space-y-6 md:space-y-0 md:space-x-8 mb-10 md:mb-0">
        {/* Large central icon to replace stump/tree images */}
        <div className="bg-white/10 p-10 rounded-2xl shadow-lg flex items-center justify-center">
          <FaPiggyBank className="text-white text-[140px]" />
        </div>
        {/* Smaller decorative icons */}
        <div className="flex flex-col space-y-6">
          <FaChartPie className="text-white/70 text-[60px]" />
          <FaMoneyBillWave className="text-white/70 text-[60px]" />
          <FaPercentage className="text-white/70 text-[60px]" />
        </div>
      </div>

      {/* Right Section — Text */}
      <div className="max-w-xl w-full space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Invest with paycheck split
        </h2>

        <p className="text-lg text-white/90">
          Paycheck Split automatically invests a piece of your paycheck into your
          Acorns Later account. It&#39;s built into Acorns Checking, and comes
          included with your subscription.
        </p>

        <div className="space-y-4 mt-6">
          <div className="flex items-start space-x-3">
            <FcCheckmark className="text-blue-700 text-lg mt-1" />
            <span>Invest a piece of every paycheck automatically</span>
          </div>
          <div className="flex items-start space-x-3">
            <FcCheckmark className="text-white text-lg mt-1" />
            <span>Pick how much to invest, starting at 1%, and change it any time</span>
          </div>
          <div className="flex items-start space-x-3">
            <FcCheckmark className="text-white text-lg mt-1" />
            <span>
              Allocate specific percentages to your Invest, Later, and Early accounts
            </span>
          </div>
        </div>

        <a
          href="https://support.acorns.com/hc/en-us/articles/What-is-Paycheck-Split"
          className="inline-block mt-6 text-white underline font-medium hover:text-green-100 transition"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
