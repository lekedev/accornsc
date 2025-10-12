"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import growImage from "@/app/early-earn/Early-tree.avif";

export default function GrowKnowledgeCard() {
  return (
    <section className="bg-[#F6FAF8]  py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-12">

        {/* Top Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 text-center"
        >
          Grow your knowledge, together
        </motion.h2>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-[#53735E] rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-stretch transition-transform duration-300 ease-out"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center p-10 md:w-1/2 space-y-4">
            <p className="uppercase text-sm tracking-wide text-black-100 font-semibold">
              Our Children’s Book
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Grow your Oak
            </h3>

            <p className="text-base text-black-100 leading-relaxed">
              Get a free digital copy of our children’s book, <em>“Grow Your Oak”</em> when you sign up.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <Image
              src={growImage}
              alt="Grow your Oak"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
