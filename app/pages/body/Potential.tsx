"use client";

import Image from "next/image";
import forbesLogo from "@/public/image/Forbes-logo.svg";
import timeLogo from "@/public/image/Time-logo.svg";
import cnbcLogo from "@/public/image/CNBC-logo.svg";

export default function SocialProofBanner() {
  const logos = [
    {
      id: 1,
      tagline: "As seen in",
      logo: forbesLogo,
      alt: "Forbes logo",
    },
    {
      id: 2,
      tagline: "World’s Best Brands 2024",
      logo: timeLogo,
      alt: "Time logo",
    },
    {
      id: 3,
      tagline: "As seen in",
      logo: cnbcLogo,
      alt: "CNBC logo",
    },
  ];

  return (
    <>
       <section className="w-full bg-gray-50 py-2 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm leading-relaxed">
            Acorns is not a bank. Acorns Visa™ debit cards are issued by Lincoln Savings Bank or nbkc bank, Members FDIC for Acorns Checking account holders.
          </p>
        </div>
      </section>
      <section className="w-full bg-black py-10 border-t border-gray-100">
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-6">
          {logos.map((item) => (
            <a
              key={item.id}
              href="/press"
              className="flex flex-col items-center text-center space-y-2 group"
            >
              <span className="text-sm text-green-700 font-semibold uppercase tracking-wide">
                {item.tagline}
              </span>
              <div className="w-32 h-10 relative">
                <Image
                  src={item.logo}
                  alt={item.alt}
                  fill
                  className="object-contain group-hover:opacity-80 transition"
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
