"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import img1 from "@/component/image/pic1.avif";
import img2 from "@/component/image/pic1.avif";
import img3 from "@/component/image/pic1.avif";
import img4 from "@/component/image/pic1.avif";

export default function HighlightedText() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative bg-[#1e293b] text-white overflow-hidden py-20 px-6 md:px-10 rounded-2xl"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto text-center space-y-4"
      >
        <p className="uppercase tracking-widest text-sm font-semibold text-gray-200">
          THE UP-AND-COMERS
        </p>
        <p className="text-lg md:text-xl font-medium text-gray-100">
          With Acorns, everyday Americans have invested over
        </p>

        {/* Animated Counter */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          $
          {inView ? (
            <CountUp end={25000000000} duration={3.5} separator="," />
          ) : (
            "0"
          )}
        </motion.h2>
      </motion.div>

      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={img1}
          alt="Woman holding phone"
          className="absolute top-10 left-4 w-32 md:w-44 opacity-80"
        />
        <Image
          src={img2}
          alt="Woman smiling"
          className="absolute bottom-10 left-12 w-32 md:w-44 opacity-80"
        />
        <Image
          src={img3}
          alt="Older couple embracing"
          className="absolute top-10 right-8 w-32 md:w-44 opacity-80"
        />
        <Image
          src={img4}
          alt="Man smiling with eyes closed"
          className="absolute bottom-8 right-16 w-32 md:w-44 opacity-80"
        />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
    </section>
  );
}
