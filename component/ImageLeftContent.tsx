"use client";

import Image from "next/image";
import cardmom from "@/app/early/cards-mom.avif";

export default function ContentLeftImage() {
  return (
    <main className="bg-white min-h-screen py-16">
      {/* Send Money in a Snap Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 max-w-7xl mx-auto">
        
        {/* Text Section */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Send money in a snap
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Set automatic allowance payments and transfer money in an instant.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src={cardmom}
            alt="Send money in a snap"
            width={600}
            height={500}
            className="object-contain w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
