"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSubsection() {
  const slides = [
    {
      id: 1,
      title: "Easy, automated investing",
      subtitle: "PERSONAL INVESTING",
      description:
        "Give your money a chance to work towards your financial goals with Round-Ups®, expert-built, diversified portfolios, Recurring Investments, and more.",
      image: "/hero-icons/invest.png",
      link: "/invest",
    },
    {
      id: 2,
      title: "Later starts today",
      subtitle: "INVESTING FOR RETIREMENT",
      description:
        "Invest for retirement with our easy Individual Retirement Accounts (IRAs) and get potential tax advantages.",
      image: "/hero-icons/later.png",
      link: "/later",
    },
    {
      id: 3,
      title: "Early for kids",
      subtitle: "INVESTING FOR KIDS",
      description:
        "Time goes fast. Invest in the kids you love now. Start with $5 and give your kids an easy, automated head start.",
      image: "/hero-icons/early.png",
      link: "/early-invest",
    },
    {
      id: 4,
      title: "Banking that saves & invests for you",
      subtitle: "BANKING",
      description:
        "Save with no hidden fees, invest spare change in real-time with every swipe of your Acorns debit card, and invest automatically from every paycheck.",
      image: "/hero-icons/banking.png",
      link: "/banking",
    },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase">
          Say Hello to Acorns
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Save, invest and learn from one easy app
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="md:w-1/2">
                  <Image
                    src={slide.image}
                    alt={slide.subtitle}
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                </div>

                <div className="md:w-1/2 text-left">
                  <p className="text-sm text-gray-500 font-semibold uppercase">
                    {slide.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{slide.description}</p>
                  <a
                    href={slide.link}
                    className="inline-block bg-green-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-700 transition-all"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
