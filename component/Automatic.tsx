"use client";

import React from "react";
import { FaCalendarCheck, FaBalanceScale, FaCoins } from "react-icons/fa"; // example icons

export default function AutomaticValueProps() {
  const features = [
    {
      icon: <FaCalendarCheck className="text-green-400 text-5xl" />,
      title: "Automatic Recurring Investments",
      description:
        "Set your recurring investments and make a habit out of investing. Try $5 a day.",
    },
    {
      icon: <FaBalanceScale className="text-green-400 text-5xl" />,
      title: "Automatic Portfolio Rebalancing",
      description:
        "We'll adjust your Base portfolio as needed to help keep your allocations on track with your long-term money goals.",
    },
    {
      icon: <FaCoins className="text-green-400 text-5xl" />,
      title: "Automatic Dividend Reinvesting",
      description:
        "If you receive dividends (payouts) from your investments, they are automatically reinvested.",
    },
  ];

  return (
    <section className="bg-slate-900 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-white">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start space-y-4 p-6 rounded-2xl bg-slate-800/60 hover:bg-slate-800 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-700">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
