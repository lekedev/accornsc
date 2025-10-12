import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.section
      className={`w-full max-w-4xl mx-auto text-${align} px-6 py-12`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
        {title}
      </h2>
      <p className="text-base md:text-lg text-slate-700 leading-relaxed">
        {subtitle}
      </p>
    </motion.section>
  );
}
