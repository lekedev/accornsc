"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import cryptoBg from "@/component/image/Acorns-LaterMatch.jpg";
import investBg from "@/component/image/Acorns-OIP.jpg";
import kids from "@/component/image/Acorns-OIP2.jpg";
import future from "@/component/image/Acorns-OIP3.jpg";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      bg: cryptoBg.src,
      title: "Invest your spare change",
      subtitle:
        "Grow your money automatically by investing your everyday purchases.",
      buttonText: "Get Started",
    },
    {
      id: 2,
      bg: investBg.src,
      title: "Crypto made simple",
      subtitle:
        "Easily invest in a curated selection of cryptocurrencies, built for beginners.",
      buttonText: "Explore Crypto",
    },
    {
      id: 3,
      bg: future.src,
      title: "Secure your future",
      subtitle:
        "Plan for retirement with automated tools designed to help you save.",
      buttonText: "Start Planning",
    },
    {
      id: 4,
      bg: kids.src,
      title: "Invest in your kids",
      subtitle:
        "Open an investment account for your children and build generational wealth.",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {/* Overlay */}
              <div className="bg-black/50 w-full h-full flex items-center justify-center px-6">
                <div className="text-center md:text-left max-w-2xl space-y-6 text-white">
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200">
                    {slide.subtitle}
                  </p>
                  <div>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
