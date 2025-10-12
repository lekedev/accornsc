"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import giftImage from "@/app/early-earn/early-rylynn.avif";

export default function ReceiveGiftSection() {
  return (
    <section className="bg-gradient-to-r from-[#F5FAF7] to-[#EAF4EE] py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6 md:px-16">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Receive gifts from anyone
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Invite friends and family to give a gift that can grow. Simply share
            a link and allow anyone to easily contribute directly to your Acorns
            Early Invest account.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src={giftImage}
            alt="Receive gifts from anyone"
            width={600}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
