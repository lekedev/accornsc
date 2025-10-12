"use client";

import React from "react";

export default function WhyChooseSection() {
  return (
    <section className="bg-[#F6F4EC] py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6">
          Why choose Acorns Early for kids?
        </h2>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-slate-700 leading-relaxed">
          From getting to grips with the digital economy to making their first budget,
          there are tons of reasons why parents choose <span className="font-semibold">Acorns Early</span> for their kids.
          With a custom debit card, allowance and chores in the app, savings accounts,
          and parental controls, Acorns Early helps families manage money responsibly — together.
        </p>
      </div>
    </section>
  );
}
