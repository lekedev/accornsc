"use client";
import Slider from "react-slick";
import Image from "next/image";
import crypto from "@/public/image/Home-Bitcoin_Desktop.avif";
import invest from "@/public/image/Revamp-Hero-Desktop.avif";
import future from "@/public/image/Acorns-LaterMatch.png";
import kids from "@/public/image/Hero-Carousel-AE-Desk.avif";
import { CustomArrowProps } from "react-slick";

const slides = [
  {
    id: 1,
    title: "Acorns helps you save & invest",
    body: "Invest spare change, invest while you bank, earn bonus investments, and more.",
    btnText: "Get started",
    link: "https://signup.acorns.com/",
    image: invest,
    // theme: "white", // ✅ White button
  },
  {
    id: 2,
    title: "Invest in Bits of Bitcoin",
    body: "Ride Bitcoin’s highs and ride out its lows by allocating up to 5% of your already made diversified portfolio towards a Bitcoin-linked ETF.",
    btnText: "Get started",
    link: "https://signup.acorns.com/",
    image: crypto,
  },
  {
    id: 3,
    title: "We’ll put our money into your future",
    body: "Get a 3% IRA match on new contributions you make to your Acorns Later retirement account during your first year with Acorns Gold.",
    btnText: "Get started",
    link: "https://signup.acorns.com/",
    image: future,
    tag: "Acorns Later",
  },
  {
    id: 4,
    title: "Smart money app and debit card for kids",
    body: "School your kids on the smart way to earn, save, and spend with Acorns Early.",
    btnText: "Learn More",
    link: "https://signup.acorns.com/",
    image: kids,
    tag: "Acorns Early",
    theme: "white", // ✅ White button
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="relative w-full overflow-hidden font-sans">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`relative w-full h-[92vh] ${
              slide.id === 1 ? "flex items-center justify-center" : ""
            }`} // ✅ Center content for slide 1
          >
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                quality={100}
                className="object-cover object-center brightness-95"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Text */}
            <div
              className={`relative z-20 flex ${
                slide.id === 1
                  ? "flex-col items-center text-center px-6 md:px-10" // ✅ centered layout for slide 1
                  : "items-center px-6 md:px-20"
              } h-full`}
            >
              <div
                className={`text-white ${
                  slide.id === 1
                    ? "max-w-3xl"
                    : "max-w-[720px] w-full text-left"
                }`}
              >
                {slide.tag && (
                  <span className="uppercase tracking-[0.15em] text-sm font-semibold mb-3 opacity-90 block">
                    {slide.tag}
                  </span>
                )}

                <h2
                  className={`font-bold tracking-tight leading-[1.1] ${
                    slide.id === 1
                      ? "text-[2.8rem] md:text-[4rem]"
                      : "text-[2.6rem] md:text-[3.6rem]"
                  }`}
                >
                  {slide.title}
                </h2>

                <p
                  className={`mt-4 text-base md:text-lg text-white/90 leading-relaxed ${
                    slide.id === 1 ? "mx-auto max-w-xl" : "max-w-xl"
                  }`}
                >
                  {slide.body}
                </p>

                {/* Button */}
                <div
                  className={`mt-6 ${
                    slide.id === 1 ? "flex justify-center" : ""
                  }`}
                >
                  <a
                    href={slide.link}
                    className={`inline-flex items-center justify-center rounded-full text-xl font-semibold tracking-wide transition-all duration-200 shadow-sm
                      ${
                        slide.theme === "white"
                          ? "border border-white text-white px-5 py-2.5 hover:bg-white/10"
                          : "bg-[#00B863] text-white px-5 py-2.5 hover:bg-[#00a25a]"
                      }`}
                  >
                    {slide.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

/* ---------- Custom Arrows ---------- */
function NextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-6 top-1/2 -translate-y-1/2 z-30 cursor-pointer p-3 rounded-full bg-black/20 hover:bg-black/40 transition"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.2}
        stroke="white"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-6 top-1/2 -translate-y-1/2 z-30 cursor-pointer p-3 rounded-full bg-black/20 hover:bg-black/40 transition"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.2}
        stroke="white"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}
