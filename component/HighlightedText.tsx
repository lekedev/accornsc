"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HighlightText() {
  const parent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const child = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-white px-6 md:px-20 py-16">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 text-center md:text-left"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={parent}
      >
        <motion.h2
          variants={child}
          className="md:w-1/2 text-3xl md:text-5xl font-bold text-slate-800 leading-tight"
        >
          Save and invest in the background of life
        </motion.h2>

        <motion.p
          variants={child}
          className="md:w-1/2 text-lg md:text-xl text-slate-600 leading-relaxed"
        >
          Acorns puts investing on autopilot. Sign up in minutes, we’ll recommend an
          investment portfolio for your money goals, and you can set automated
          investments starting with spare change.
        </motion.p>
      </motion.div>
    </section>
  );
}
