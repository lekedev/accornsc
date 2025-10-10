import React from "react";
import Image from "next/image";
import matchImage from "@/component/image/Acorns-LaterMatch.jpg"; // replace with your local image if preferred

export default function MoneyFutureSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
        
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
            We’ll put our money into your future
          </h2>
          <p className="text-slate-700 text-base md:text-lg mb-4 leading-relaxed">
            We&#39;ll boost your retirement with a <span className="text-green-600 font-semibold">3% IRA match</span> 
            on new contributions during your first year with Acorns Gold. Max out your annual contribution, 
            and that&#39;s an extra $210 investment — on us!
          </p>
          <p className="text-sm text-stone-500 italic">
            3% or 1% IRA match included in Acorns Gold or Silver, respectively. Contributions must be kept in 
            Later account for 4 years to earn its IRA match.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
          <Image
            src={matchImage}
            alt="We’ll put our money into your future"
            width={764}
            height={828}
            className="rounded-full object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
