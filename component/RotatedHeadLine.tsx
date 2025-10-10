"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function RotatingHeadline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // triggers as the element scrolls through view
  });

  // As you scroll, translate the text horizontally
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section
      ref={ref}
      className="bg-white py-16 overflow-hidden flex items-center"
    >
      <motion.h2
        style={{ x }}
        className="text-5xl md:text-7xl font-bold text-slate-800 uppercase whitespace-nowrap tracking-tight"
      >
        Automatic - Automatic - Automatic - Automatic - Automatic - Automatic -
        Automatic - Automatic - Automatic - Automatic - Automatic - Automatic -
      </motion.h2>
    </section>
  );
}
