"use client";

import Image from "next/image";
import compoundingImage from "@/public/image/Acorns-LaterMatch.png";
import { motion } from "framer-motion";

export default function CompoundingSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white text-slate-900 py-20 px-6 md:px-16">
      
      {/* Left Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={compoundingImage}
          alt="Harness the power of compounding"
          className="w-full h-auto object-contain rounded-2xl shadow-md"
          priority
        />
      </div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 flex flex-col gap-6"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          Harness the power of compounding
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-slate-700">
          Money doesn’t grow on trees. But with compound returns, money can grow on itself.
          It’s a long-term investing principle foundational to how Acorns can work for you.
        </p>

        {/* Disclosure */}
        <p className="text-sm text-gray-500 mt-4 border-l-4 border-slate-300 pl-4 italic">
          Potential is a hypothetical tool that illustrates how factors such as Recurring
          Investments (amount and frequency), Round-Ups® investments, Smart Deposit
          investments, and compound returns may impact the long-term value of an Acorns
          Account. The tool uses an 8% hypothetical annual rate of return and hypothetical
          age range dependent on age band selected by the user. Compounding is the process
          in which an asset’s earnings are reinvested to generate additional earnings over
          time. Acorns clients may not experience compound returns and investment results
          will vary based on market volatility and fluctuating prices.
        </p>
      </motion.div>
    </section>
  );
}
