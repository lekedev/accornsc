"use client";

import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

export default function FAQSection3() {
  const faqs = [
    {
      question: "What is Acorns Earn?",
      answer:
        "Acorns Earn helps you earn more money when you shop because when you earn more, you can save and invest more. We’re excited to be the financial wellness system that helps you earn more money.",
    },
    {
      question: "How do I earn rewards?",
      answer:
        "Most rewards are earned by shopping through the offers in the Earn section of the app. You can also install the Earn Chrome and iOS Safari Browser Extensions to earn rewards when you shop online.",
    },
    {
      question: "When will my Earn Rewards be invested?",
      answer:
        "You should receive a reward confirmation email within 3–7 days of making a purchase. The reward will be invested within 60–120 days. Check offer terms for more details.",
    },
    {
      question: "How do I earn rewards from the Acorns Earn Chrome Extension?",
      answer:
        "Download the Acorns Earn Chrome Extension from the Chrome store and log in. When you visit a participating merchant, activate the offer and earn your reward after completing your purchase.",
    },
    {
      question: "How do I earn rewards from the Acorns Earn Safari Extension?",
      answer:
        "With the Acorns app installed on your iPhone, follow the instructions for the Acorns Earn Safari Extension. Safari Extensions are available on iOS 15 or later.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Frequently asked
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "bg-white shadow-md" : "bg-gray-100"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <p className="text-gray-900 font-medium">{faq.question}</p>
                <FiChevronRight
                  className={`text-gray-500 text-2xl transition-transform duration-300 ${
                    activeIndex === index ? "rotate-90 text-green-600" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  activeIndex === index ? "max-h-40 px-5 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
