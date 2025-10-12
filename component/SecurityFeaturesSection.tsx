"use client";

import Image from "next/image";
import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import cardImage from "@/app/early/Early-Stacked-Atm.avif"; // <-- replace with your local image

const features = [
  "Bank-level encryption",
  "Chip and PIN-protected transactions",
  "Acorns Early blocks unsafe spending categories",
  "Secure PIN recovery in the app",
  "FDIC-insured up to $250,000 through a partner bank",
  "Zero Liability Protection by Mastercard®",
  "Real-time spending notifications",
  "Easily block and unblock cards",
];

export default function SecurityFeaturesSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src={cardImage}
            alt="A kids' debit card built for their safety — and your confidence"
            className="w-full h-auto rounded-2xl shadow-lg object-contain"
            priority
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">
            A kids&#39; debit card built for their safety — and your confidence
          </h2>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base leading-snug">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
