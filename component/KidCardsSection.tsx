"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import kidsDebit from "@/app/early/Kids-Debit-Card.webp";

export default function KidsDebitCardSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12">
        
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 w-full"
        >
          <Image
            src={kidsDebit}
            alt="Grow their money skills as they grow up"
            width={600}
            height={600}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
            Grow their money skills as they grow up
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
            No matter what stage of their money journey your kids are on, Acorns Early is designed 
            to grow with them. Younger ones start off with chores, allowance, and interactive 
            learning courses. As they grow older, Acorns Early helps track their spending, budgeting, 
            saving, and more — all with support and guidance from you along the way.
          </p>

          <a
            href="https://signup.gohenry.com/us/parent-details"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-black font-semibold px-6 py-3 rounded-full transition-all"
          >
            Get Acorns Early
          </a>
        </motion.div>
      </div>
    </section>
  );
}
