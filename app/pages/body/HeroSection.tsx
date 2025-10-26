"use client";
import Slider from "react-slick";
import Image from "next/image";
import crypto from "@/public/image/Home-Bitcoin_Desktop.avif";
import invest from "@/public/image/Revamp-Hero-Desktop.avif";
import future from "@/public/image/Hero-Carousel-destop.avif";
import kids from "@/public/image/Hero-Carousel-AE-Desk.avif";

const slides = [
  {
    id: 1,
    title: "Acorns helps you save & invest",
    body: "Invest spare change, invest while you bank, earn bonus investments, and more.",
    btnText: "Get started",
    link: "https://signup.acorns.com/",
    image: invest,
    tag: "",
  },
  {
    id: 2,
    title: "Invest in Bits of Bitcoin",
    body: "Ride Bitcoin’s highs and ride out its lows with a Bitcoin-linked ETF.",
    btnText: "Get started",
    link: "https://signup.acorns.com/",
    image: crypto,
  },
  {
    id: 3,
    title: "We’ll put our money into your future",
    body: "Get a 3% IRA match on new contributions you make to your Acorns Later retirement account.",
    btnText: "Get started",
    link: "https://signup.acorns.com/",
    image: future,
    tag: "Acorns Later",
  },
  {
    id: 4,
    title: "Smart money app and debit card for kids",
    body: "School your kids on the smart way to earn, save, and spend with Acorns Early.",
    btnText: "Get started",
    link: "https://signup.acorns.com/",
    image: kids,
    tag: "Acorns Early",
  },
];

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="relative w-full overflow-hidden font-sans">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[92vh]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                quality={100}
                className="object-cover object-center brightness-95"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-20 text-white max-w-[720px] leading-snug">
              {slide.tag && (
                <span className="uppercase tracking-[0.15em] text-sm font-semibold mb-3 opacity-90">
                  {slide.tag}
                </span>
              )}

              <h2 className="text-[2.8rem] md:text-[4rem] font-bold tracking-tight leading-[1.1]">
                {slide.title}
              </h2>

              <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
                {slide.body}
              </p>

              <a
                href={slide.link}
                className="mt-8 inline-block bg-[#00B863] text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all duration-200 hover:bg-[#00a25a] shadow-md"
              >
                {slide.btnText}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
