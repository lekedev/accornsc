"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Percent,
  Repeat,
  Wallet,
  Users,
  FileBarChart,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

const valueProps = [
  {
    icon: Smartphone,
    title: "All-in-one",
    desc: "Get investing, checking, retirement, and kids' investing all in one easy app.",
  },
  {
    icon: Percent,
    title: "1% Acorns Early Invest match",
    desc: "Get a 1% match when you invest for your kids' futures with a Gold subscription.",
  },
  {
    icon: Repeat,
    title: "Automatic Recurring Investments",
    desc: "Start at just $5 a day, week, or whatever works for you!",
  },
  {
    icon: Wallet,
    title: "Flexible funds",
    desc: "With a UTMA/UGMA account, funds can be used in ways that directly benefit the child.",
  },
  {
    icon: Users,
    title: "Multiple kids accounts",
    desc: "Create Early Invest accounts for each of the kids in your life at no extra cost.",
  },
  {
    icon: FileBarChart,
    title: "Potential tax advantages",
    desc: "Get potential tax advantages while you invest in the kids you love.",
  },
  {
    icon: BookOpen,
    title: "Grow your knowledge, together",
    desc: "Education and financial literacy content for families from Acorns.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Protection",
    desc: (
      <>
        Acorns Early Invest accounts are SIPC-insured up to $500,000. SIPC does
        not protect against market risk. For details, visit{" "}
        <a
          href="https://www.sipc.org/"
          target="_blank"
          className="text-green-600 underline hover:text-green-700"
        >
          www.sipc.org
        </a>
        .
      </>
    ),
  },
];

export default function ValuePropSection() {
  return (
    <section className="bg-[#f8f6ef] py-24 px-6">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="uppercase text-sm tracking-widest text-gray-700 mb-3">
          Why Acorns Early Invest?
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 max-w-7xl mx-auto">
        {valueProps.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 border border-gray-200 rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e7f2ec]">
                <Icon size={32} className="text-green-700" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
