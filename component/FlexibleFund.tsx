"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// ✅ Local image (save this in /public/early/ or adjust import path)
import flexibilityImg from "@/app/early-earn/Early-kids.avif";

export default function FlexibleFundsSection() {
  return (
    <section className="relative bg-[#16476A] text-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-24 gap-16">
        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-8"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Less restrictions. More flexibility.
          </h2>

          {/* Paragraph */}
          <p className="text-lg  leading-relaxed">
            Acorns Early Invest is a UTMA/UGMA custodial account (Uniform
            Transfer to Minors/Uniform Gift to Minors). Unlike other accounts
            intended for educational expenses only (like a 529), Early Invest
            funds can be used in various ways when it directly benefits the
            child — like a first car or extra-curricular activities.
          </p>

          {/* Value Props with Animated Checkmarks */}
          <div className="space-y-4">
            {[
              "Use the funds in ways that directly benefit the child",
              "Easily transfer the funds over to an Acorns Invest account for the child when they are grown",
              "Potential tax advantages along the way",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <Image
            src={flexibilityImg}
            alt="Less restrictions, more flexibility"
            className="rounded-2xl object-cover w-full max-w-md shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
