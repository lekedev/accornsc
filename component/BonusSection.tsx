"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bonusImage from "@/app/early-earn/early-disney.avif";

export default function BonusSavingsSection() {
  return (
    <section className="bg-gradient-to-r from-[#EAF4EE] to-[#F5FAF7] py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-16">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src={bonusImage}
            alt="Unlock exclusive bonus savings and investments"
            width={600}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Unlock exclusive bonus savings &amp; investments
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover exclusive offers and earn even more bonus investments when
            you shop with family-friendly brands like Disney+, ABC Mouse, and The Honest Company.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
