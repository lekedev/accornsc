"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Acorns Later?",
    answer:
      "Acorns Later provides access to three types of Individual Retirement Accounts (IRAs) that offer customers an easy, automated way to save for retirement.",
  },
  {
    question: "How much money do I need to open an Acorns Later account?",
    answer:
      "Just as with our investment accounts, you can begin investing in your Acorns Later account with just $5!",
  },
  {
    question: "How is my Acorns Later portfolio selected?",
    answer:
      "Your Acorns Later portfolio is selected based on your age and time until age 69. Acorns automatically rebalances your portfolio over time.",
  },
  {
    question: "Why should I invest in an IRA?",
    answer:
      "An Acorns Later IRA helps you invest in yourself while receiving potential tax advantages such as tax deferrals or lower rates.",
  },
  {
    question:
      "Can I invest into Acorns Later if I’m contributing to a workplace retirement plan, like a 401(k)?",
    answer:
      "Yes! You can contribute to both a workplace retirement plan like a 401(k) and an IRA, or roll over an existing 401(k) to Acorns Later.",
  },
];

export default function FAQSection2() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <h4 className="text-gray-900 text-center text-lg font-semibold mb-6">
          Frequently asked
        </h4>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <p className="text-gray-800 font-medium">{faq.question}</p>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
