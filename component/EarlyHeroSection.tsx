"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import earlyLogo from "@/app/early/Acorns-Early-Logo.svg";
import heroDesktop from "@/app/early/Kids-DC-Hero.avif";
import heroMobile from "@/app/early/Kids-DC-Hero.avif";

export default function EarlyHeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Hero Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-16 md:py-24 gap-10">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          {/* Logo (Mobile) */}
          <div className="flex justify-center md:hidden">
            <Image
              src={earlyLogo}
              alt="Acorns Early Logo"
              width={200}
              height={40}
              className="mx-auto"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            The smart money app and debit card for kids
          </h1>

          <h3 className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Grow your kids’ money skills with Acorns Early — a smart money app and debit card that teaches them the value of money.
          </h3>

          <a
            href="https://signup.gohenry.com/us/parent-details"
            className="inline-block bg-white text-[#5D4B8B] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Get Acorns Early
          </a>
        </motion.div>

        {/* Right Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={heroMobile.src}
              type="image/avif"
            />
            <Image
              src={heroDesktop}
              alt="The smart money app and debit card for kids"
              width={1125}
              height={1200}
              className="w-full h-auto object-contain"
              priority
            />
          </picture>
        </motion.div>
      </div>

      {/* Desktop Logo */}
      <div className="absolute top-10 left-10 hidden md:block">
        <Image src={earlyLogo} alt="Acorns Early Logo" width={200} height={40} />
      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#C41230] text-center py-2 font-medium text-white text-sm tracking-wide">
        Formerly GoHenry
      </div>
    </section>
  );
}
