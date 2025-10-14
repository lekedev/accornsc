"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import home6 from "@/public/image/home6.png";
import home7 from "@/public/image/home7.png";
import Image from "next/image";

export default function PressQuotes() {
  const quotes = [
    { text: "This simple investment app has millions of millennials saving every day", source: "Fast Company" },
    { text: "Whether you are building a small play portfolio with spare change or have the ability to go big...", source: "Business Insider" },
    { text: "You think you need thousands of dollars to invest, it's for the rich folks...not the case anymore because there's Acorns.", source: "Good Morning America" },
    { text: "Now that you have a new budget...Meet the Acorns app.", source: "Yahoo Finance" },
    { text: "In a world saturated with trading apps and robo-advisors… Acorns is a threat.", source: "Forbes" },
    { text: "Acorns is one of the top 25 tech companies to watch", source: "WSJ" },
    { text: "Investing is one of the most effective ways to build wealth...", source: "CNBC" },
  ];

  return (
    <section className="relative bg-[#4B2E83] text-white py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          loop
          className="press-quote-carousel"
        >
          {quotes.map((q, i) => (
            <SwiperSlide key={i}>
              <div className="px-6">
                <p className="text-xl md:text-2xl font-semibold mb-4">“{q.text}”</p>
                <p className="text-sm md:text-base opacity-80">- {q.source}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Decorative images */}
      <Image
        src={home6}
        alt="Hands holding phone with Acorns app"
        className="absolute bottom-0 left-10 w-40 opacity-80"
        width={160}
        height={160}
        priority
      />
      <Image
        src={home7}
        alt="Plus shape"
        className="absolute top-10 right-10 w-24 opacity-70"
        width={96}
        height={96}
        priority
      />
    
    </section>
  );
}
