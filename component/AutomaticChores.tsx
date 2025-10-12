"use client";

import Image from "next/image";
import React from "react";
import ChoresImg from "@/app/early/allowance-phone.avif"; 

export default function AutomaticChores() {
  return (
    <section className="flex flex-col  md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-16 py-16 bg-white gap-y-10 md:gap-x-16">
      {/* Left Content Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Automatic chores <br className="hidden md:block" /> and allowance
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          With Acorns Early, paying allowance is easy for you and fun for kids.
          Set an amount in the app, the day you want to pay, and their allowance
          arrives on their card weekly. Kids learn how to budget their money
          independently with cash on their card to spend, save, or gift.
          <br />
          <br />
          To help kids learn about the power of earning, parents can set paid
          tasks in the app. As soon as kids tick them off, they&#39;ll automatically
          receive cash on their card. You&#39;ll also have the option to check tasks
          have been completed in-app before your child receives their money.
        </p>

        <a
          href="https://signup.gohenry.com/us/parent-details"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
        >
          Get Acorns Early
        </a>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={ChoresImg}
          alt="Automatic chores and allowance"
          width={600}
          height={600}
          className="object-contain w-full h-auto"
        />
      </div>
    </section>
  );
}
