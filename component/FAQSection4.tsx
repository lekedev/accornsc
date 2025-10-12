"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What age is an Acorns Early debit card for?",
    answer:
      "Acorns Early (formerly GoHenry) is for kids ages 6–18. It helps them develop healthy earning, saving, budgeting, and spending habits that last a lifetime.",
  },
  {
    question: "How much is an Acorns Early kids debit card?",
    answer:
      "We charge one monthly subscription of just $5 per kid. For families with up to four kids, it's just $10 per month. You get access to all of the features, including chore tracking, automatic allowance, and parental controls.",
  },
  {
    question: "Where can you use Acorns Early debit cards?",
    answer:
      "Acorns Early debit cards can be used anywhere that Mastercard® is accepted — online, in stores, and at ATMs.",
  },
  {
    question:
      "Are kids' debit cards a good alternative to traditional bank cards and credit cards?",
    answer:
      "Yes! Acorns Early debit cards help kids under 18 learn about money before they’re eligible for traditional cards. They include real-time spend notifications, chore tracking, and parental controls for safety.",
  },
  {
    question: "Is Acorns Early included in an Acorns subscription?",
    answer:
      "Yes. Acorns Early is included in every Gold subscription, which also includes Acorns Invest, Later, and other exclusive features.",
  },
];

export default function FAQSection4() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Frequently Asked
        </h2>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-purple-700" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
