"use client";
import Slider from "react-slick";
import Image from "next/image";
import crypto from "@/public/image/Acorns-LaterMatch.png";
import invest from "@/public/image/Acorns-OIP.png";
import future from "@/public/image/Acorns-OIP2.png"
import kids from "@/public/image/Acorns-OIP3.png";

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
    title: "Smart money and Debit cards for children",
    body: "School your kids’  on the smart way to earn, save, spend with the Acorns Early.",
    btnText: "Get starte",
    link: "https://signup.acorns.com/",
    image: kids,
    tag: "Acorns Early",
  }
];

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <Image
              src={slide.image}
              alt={slide.title}
              width={1440}
              height={821}
              className="w-full h-[600px] object-cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white z-20">
              {slide.tag && (
                <span className="uppercase text-sm font-semibold tracking-widest mb-2">
                  {slide.tag}
                </span>
              )}
              <h2 className="text-4xl md:text-6xl font-bold max-w-2xl">
                {slide.title}
              </h2>
              <p className="mt-4 max-w-lg text-lg">{slide.body}</p>
              <a
                href={slide.link}
                className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
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
