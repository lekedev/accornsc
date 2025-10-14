"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import roundupsImg from "@/public/image/Home1.png";

export default function RoundUps() {
  return (
    <section className="w-full bg-white text-gray-900 py-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT CONTENT */}
        <div className="space-y-5">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
            Automatically save <br className="hidden sm:block" /> and invest with
            <br className="hidden sm:block" /> Round-Ups® feature
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-md">
            Every purchase you make means an opportunity to invest your spare
            change! So coffee for $3.25 becomes a $0.75 investment in your
            future.
          </p>
        </div>

        {/* RIGHT IMAGE CONTENT */}
        <div className="flex justify-center relative w-full max-w-lg mx-auto">
          <Image
            src={roundupsImg}
            alt="Round-Ups feature"
            className="w-full h-auto"
            priority
          />

          {/* Floating Animated Labels */}
          <motion.span
            className="absolute top-4 right-10 text-indigo-600 text-xl sm:text-2xl font-bold"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            +$0.90
          </motion.span>

          <motion.span
            className="absolute top-1/2 left-2 text-green-600 text-xl sm:text-2xl font-bold"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.3, repeat: Infinity }}
          >
            +$0.60
          </motion.span>

          <motion.span
            className="absolute bottom-6 right-8 text-green-500 text-xl sm:text-2xl font-bold"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            +$0.25
          </motion.span>
        </div>
      </div>
    </section>
  );
}
