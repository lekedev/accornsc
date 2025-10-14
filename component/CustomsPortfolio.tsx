"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import slide1 from "@/public/image/Acorns-OIP.jpg";
import slide2 from "@/public/image/Acorns-OIP.jpg";
import slide3 from "@/public/image/Acorns-OIP.jpg";
import slide4 from "@/public/image/Acorns-OIP.jpg";

export default function CustomPortfolios() {
  const slides = [
    {
      id: 1,
      title: "Diversified by us. Customized by you.",
      text: "Custom Portfolios is our newest investing tool that lets you add individual stocks and ETFs to your already diversified portfolio. Use it to gain more control over your investing, and level up your knowledge with in-app guidance every step of the way.",
      image: slide1,
    },
    {
      id: 2,
      title: "How Custom Portfolios work",
      text: "When you create a Custom Portfolio, your overall Acorns Invest portfolio gets split in two: your Base Portfolio and your Custom Portfolio.",
      image: slide2,
    },
    {
      id: 3,
      title: "Diversified by us.",
      text: "Your Base Portfolio is built by Acorns experts and designed for long-term investing — a strong foundation to balance your custom choices.",
      image: slide3,
    },
    {
      id: 4,
      title: "Customized by you.",
      text: "Choose the companies or ETFs you’d like to invest in, and decide how much of your portfolio each should make up. Learn by doing and gain hands-on investing experience.",
      image: slide4,
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Rotating Headline */}
      <motion.div
        className="overflow-hidden whitespace-nowrap mb-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold inline-block">
          Diversified by us • Customized by you • Diversified by us • Customized
          by you • Diversified by us • Customized by you •
        </h2>
      </motion.div>

      {/* Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={40}
        className="max-w-6xl mx-auto"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Text */}
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold">{slide.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {slide.text}
                </p>
              </div>

              {/* Image */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-2xl object-contain"
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
