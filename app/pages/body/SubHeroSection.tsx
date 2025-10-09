"use client";

import { useState } from "react";
import Image from "next/image";

type Slide = {
  id: string;
  title: string;
  icon: string;
  image: string;
  heading: string;
  description: string;
  buttonText: string;
  bgColor: string;
};

const slides: Slide[] = [
  {
    id: "invest",
    title: "INVEST",
    icon: "https://sqy7rm.media.zestyio.com/Envoy-Home-Hero-Subs-Carousel-Icon-1.svg",
    image: "https://sqy7rm.media.zestyio.com/Envoy-Home-Hero-Invest.webp",
    heading: "Easy, automated investing",
    description:
      "Give your money a chance to work towards your financial goals with Round-Ups®, expert-built diversified portfolios, Recurring Investments, and more.",
    buttonText: "Get started",
    bgColor: "bg-[#e6e2d8]",
  },
  {
    id: "later",
    title: "LATER",
    icon: "https://sqy7rm.media.zestyio.com/Envoy-Home-Hero-Subs-Carousel-Icon-2.svg",
    image: "https://sqy7rm.media.zestyio.com/Envoy-Home-Hero-Later.webp",
    heading: "Prepare for your future",
    description:
      "Plan ahead with automated retirement savings designed to grow your wealth over time.",
    buttonText: "Start saving",
    bgColor: "bg-[#f3efe7]",
  },
  {
    id: "early",
    title: "EARLY",
    icon: "https://sqy7rm.media.zestyio.com/Envoy-Home-Hero-Subs-Carousel-Icon-3.svg",
    image: "https://sqy7rm.media.zestyio.com/Envoy-Home-Hero-Early.webp",
    heading: "Invest in your kids’ future",
    description:
      "Start investing for your children early with flexible, tax-advantaged accounts built to grow.",
    buttonText: "Learn more",
    bgColor: "bg-[#ede8df]",
  },
  {
    id: "banking",
    title: "BANKING",
    icon: "https://sqy7rm.media.zestyio.com/Envoy-Home-Hero-Subs-Carousel-Icon-4.png",
    image: "https://sqy7rm.media.zestyio.com/Envoy-Home-Hero-Banking.webp",
    heading: "Smart banking with Acorns",
    description:
      "Spend smarter with Acorns Checking, designed to automatically save and invest as you go.",
    buttonText: "Explore banking",
    bgColor: "bg-[#f0ede8]",
  },
];

export default function HeroSubsection() {
  const [active, setActive] = useState("invest");

  const currentSlide = slides.find((s) => s.id === active)!;

  return (
    <section className={`w-full ${currentSlide.bgColor} py-16 transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 gap-10">
        {/* Left Navigation */}
        <div className="flex lg:flex-col items-center justify-center gap-6 lg:gap-8">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => setActive(slide.id)}
              className={`flex flex-col items-center justify-center w-20 h-20 rounded-full transition-all duration-300 ${
                active === slide.id
                  ? "bg-green-600 text-white scale-110 shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:scale-105"
              }`}
            >
              <Image
                src={slide.icon}
                alt={slide.title}
                width={30}
                height={30}
                className={`mb-1 ${active === slide.id ? "invert brightness-0" : ""}`}
              />
              <span className="text-xs font-semibold">{slide.title}</span>
            </button>
          ))}
        </div>

        {/* Center Phone */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[260px] sm:w-[280px] md:w-[320px] h-[550px]">
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              className="object-contain transition-all duration-500"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="max-w-md text-center lg:text-left">
          <p className="uppercase text-sm font-semibold tracking-widest text-gray-600">
            PERSONAL {currentSlide.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {currentSlide.heading}
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            {currentSlide.description}
          </p>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition">
            {currentSlide.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
