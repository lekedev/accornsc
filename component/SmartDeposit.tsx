"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import smartdeposit from "@/app/early-earn/Smart-Deposit.webp";

export default function SmartDepositSection() {
  return (
    <section className="bg-gradient-to-r from-[#0B3D2E] to-[#154734] text-black py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-16">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <Image
            src={smartdeposit}
            alt="Invest with Smart Deposit"
            width={590}
            height={899}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Invest with Smart Deposit
          </h2>

          <p className="text-lg leading-relaxed">
            Acorns Smart Deposit automatically invests a piece of your paycheck
            into your Acorns Early Invest account. It’s built into Acorns
            Checking and comes included with your subscription.
          </p>

          <div className="space-y-4">
            {[
              "Invest a piece of every paycheck automatically",
              "Pick how much to invest, starting at 1%, and change it anytime",
              "Allocate a percentage to your Invest, Later, and Early Invest accounts",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="text-green-400 w-6 h-6 mt-1" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
