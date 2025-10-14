import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react"; 
import retireImg from "@/public/image/Envoy-Home-Personal-Investing--1-.SJzHMRtj4el.avif";

export default function RetirementFastEasy() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">

        {/* Left: Image */}
        <div className="flex-1">
          <Image
            src={retireImg}
            alt="A fast & easy retirement account"
            width={750}
            height={899}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
            A fast &amp; easy retirement account
          </h2>

          {/* Value Props */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-purple-600 w-6 h-6 flex-shrink-0" />
              <span className="text-slate-700 text-lg">Sign up in minutes</span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-purple-600 w-6 h-6 flex-shrink-0" />
              <span className="text-slate-700 text-lg">
                Set up an IRA portfolio recommended for your long-term goals
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-purple-600 w-6 h-6 flex-shrink-0" />
              <span className="text-slate-700 text-lg">
                Set easy, automatic Recurring Contributions
              </span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://signup.acorns.com/"
            target="_blank"
            className="inline-block bg-purple-700 text-white text-lg font-medium px-6 py-3 rounded-full hover:bg-purple-800 transition"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
