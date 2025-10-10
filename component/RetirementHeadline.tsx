import React from "react";

export default function RetirementHeadline() {
  return (
    <section className="text-center bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6">
        Start saving and investing for retirement
      </h2>
      <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
        In just a few minutes, get an IRA plan recommended for you and your long-term goals.
        Plus, take advantage of potential tax benefits, and get a 
        <span className="font-semibold text-acorns-purple"> 3% IRA match</span> 
        on new contributions during your first year with Acorns Gold.
      </p>
    </section>
  );
}
