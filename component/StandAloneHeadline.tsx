"use client";

import { motion } from "framer-motion";

export default function StandaloneHeadline() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-semibold max-w-3xl mx-auto leading-tight"
      >
        Give your money a chance to work as hard as you do
      </motion.h2>
    </section>
  );
}
