"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import home5 from "@/public/image/home5.png"

export default function HeroCompounding() {
  return (
    <section className="bg-white text-gray-900 py-20 overflow-hidden">
      {/* Top Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center mb-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-snug">
          Give your money the chance to work as hard as you do
        </h1>
      </motion.div>

      {/* Main Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Phone Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center md:justify-end items-center md:items-end relative order-1 md:order-1"
        >
          <div className="relative w-[260px] sm:w-[300px] md:w-[380px] drop-shadow-xl">
            <Image
              src={home5}
              alt="Acorns Compounding Example"
              width={400}
              height={700}
              className="rounded-3xl object-contain"
              priority
            />
          </div>

          {/* Paragraph appears here ONLY on mobile */}
          <p className="mt-8 text-sm text-gray-500 leading-relaxed text-center md:hidden max-w-sm">
            Potential is a hypothetical tool that illustrates how factors such as
            Recurring Investments (amount and frequency), Round-Ups® investments,
            Smart Deposit investments, and compound returns may impact the long-term
            value of an Acorns Account. The tool uses an 8% hypothetical annual rate
            of return and hypothetical age range dependent on age band selected by
            the user. Compounding is the process in which an asset’s earnings are
            reinvested to generate additional earnings over time. Acorns clients may
            not experience compound returns and investment results will vary based on
            market volatility and fluctuating prices.
          </p>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-lg order-2 md:order-2"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Harness the power of compounding
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            Money doesn’t grow on trees. But with compound returns, money can grow
            on itself. It’s a long-term investing principle foundational to how
            Acorns can work for you.
          </p>

          {/* Paragraph visible only on desktop */}
          <p className="hidden md:block text-sm text-gray-500 leading-relaxed">
            Potential is a hypothetical tool that illustrates how factors such as
            Recurring Investments (amount and frequency), Round-Ups® investments,
            Smart Deposit investments, and compound returns may impact the long-term
            value of an Acorns Account. The tool uses an 8% hypothetical annual rate
            of return and hypothetical age range dependent on age band selected by
            the user. Compounding is the process in which an asset’s earnings are
            reinvested to generate additional earnings over time. Acorns clients may
            not experience compound returns and investment results will vary based on
            market volatility and fluctuating prices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
