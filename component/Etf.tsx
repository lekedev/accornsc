"use client";

import React from "react";

export default function InvestInETFs() {
  return (
    <section className="bg-white py-20 px-6 md:px-16 text-slate-800">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Tagline */}
        <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          What am I investing in?
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Highly-rated ETFs
        </h2>

        {/* Subheadline / description */}
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
          Acorns expert-built portfolios contain Exchange Traded Funds, or ETFs. 
          They&#39;re like baskets of different investments, including stocks and/or bonds, 
          and come with benefits like diversification, lower costs, and potential tax efficiency.
        </p>

        {/* CTA Button */}
        <a
          href="https://www.acorns.com/disclosures/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 underline underline-offset-2 font-medium hover:text-blue-700 transition-colors duration-300"
        >
          Read our ETF prospectuses 
        </a>
      </div>
    </section>
  );
}
