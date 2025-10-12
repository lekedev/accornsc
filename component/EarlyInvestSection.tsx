"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import investImg from "@/app/early-earn/Early-Phone.avif"; // ✅ replace with your local image
import squirrelImg from "@/app/early-earn/Early-Squirrel.avif"; // ✅ replace with your local image

export default function EarlyInvestSection() {
  return (
    <section className="bg-[#e88263] text-black py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center w-full lg:w-1/2"
        >
          <Image
            src={investImg}
            alt="A fast & easy investment account for kids"
            className="rounded-3xl object-cover w-full max-w-md"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-start space-y-8 w-full lg:w-1/2"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            A fast & easy investment account for kids
          </h2>

          {/* Value Props */}
          <div className="space-y-4">
            {[
              "Sign up in minutes",
              "Just add a name, birthday, and SSN",
              "Simple, automatic recurring contributions",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="text-green-400 w-6 h-6" />
                <span className="text-lg">{text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://signup.acorns.com/"
            target="_blank"
            className="bg-white text-[#004f32] font-semibold px-8 py-3 rounded-full shadow hover:bg-green-100 transition-all duration-300"
          >
            Get started
          </a>

          {/* Squirrel Image (decorative) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <Image
              src={squirrelImg}
              alt="Clip art of a squirrel"
              width={100}
              height={100}
              className="w-20 h-20"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
