"use client";

import Image from "next/image";
import chromeLogo from "@/app/earn/chrome.webp";
import safariLogo from "@/app/earn/safari.webp";
import earnDesktop from "@/app/earn/earn-acrons.avif";
import earnMobile from "@/app/earn/earn-acrons.avif";

export default function EarnExtensionSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden px-6 md:px-16 py-12">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Make earnings automatic with the Earn extension
        </h2>

        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Earn investments while you browse and shop from your desktop or
          smartphone.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
          {/* Chrome */}
          <a
            href="/chrome-extension/"
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-sm transition"
          >
            <Image
              src={chromeLogo}
              alt="Chrome Icon"
              width={24}
              height={24}
              className="object-contain"
            />
            <span>Earn for Chrome</span>
          </a>

          {/* Safari Mobile */}
          <a
            href="/ios-safari-extension/"
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-sm transition"
          >
            <Image
              src={safariLogo}
              alt="Safari Icon"
              width={24}
              height={24}
              className="object-contain"
            />
            <span>Earn for Safari on iPhones</span>
          </a>

          {/* Safari Desktop */}
          <a
            href="https://apps.apple.com/us/app/acorns-earn-for-safari/id6596727133"
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-sm transition"
          >
            <Image
              src={safariLogo}
              alt="Safari Icon"
              width={24}
              height={24}
              className="object-contain"
            />
            <span>Earn for Safari on Macs</span>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 mt-10 md:mt-0 relative w-full max-w-md md:max-w-lg">
        <Image
          src={earnDesktop}
          alt="Earn Extension"
          width={500}
          height={600}
          className="hidden md:block w-full h-auto object-contain"
        />
        <Image
          src={earnMobile}
          alt="Earn Extension Mobile"
          width={400}
          height={500}
          className="block md:hidden w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
