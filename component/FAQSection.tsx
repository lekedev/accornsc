"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Where is my money invested?",
    answer: (
      <>
        <p>
          There are five different Acorns Core portfolios, built by experts. Each
          portfolio is composed of exchange-traded funds — ETFs for short. An ETF
          is made of broad holdings of stocks and/or bonds. Depending on your
          portfolio, you’re invested in a mix of companies, markets, and
          bonds—and if you choose, a Bitcoin-linked ETF.
        </p>
        <br />
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://personal.vanguard.com/us/funds/snapshot?FundId=0968&FundIntExt=INT"
              className="text-blue-600 underline"
              target="_blank"
            >
              Large Company – VOO
            </a>
          </li>
          <li>
            <a
              href="https://www.blackrock.com/us/individual/products/239763/ishares-core-sp-midcap-etf"
              className="text-blue-600 underline"
              target="_blank"
            >
              Medium Company Stocks – IJH
            </a>
          </li>
          <li>
            <a
              href="https://www.blackrock.com/us/individual/products/239774/?referrer=tickerSearch"
              className="text-blue-600 underline"
              target="_blank"
            >
              Small Company Stocks – IJR
            </a>
          </li>
        </ul>
        <br />
        <p>
          If you have any other questions, feel free to reach out{" "}
          <a
            href="https://support.acorns.com/hc/en-us/requests/new"
            target="_blank"
            className="text-blue-600 underline"
          >
            here
          </a>
          .
        </p>
        <br />
        <div className="w-full flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/42wem0Y5s-U?modestbranding=1&rel=0"
            title="FAQ Video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
        </div>
      </>
    ),
  },
  {
    question: "How do I choose an Investment Portfolio?",
    answer: (
      <>
        <p>
          Acorns will recommend a portfolio for you based on your age, time
          horizon, income, goals, and risk tolerance. Our ETF portfolios range
          from aggressive (all stocks) to conservative (all bonds), with a mix in
          between.
        </p>
        <br />
        <p>
          You may switch portfolios after registration without a charge or
          penalty from Acorns. However, changing portfolios may cause a taxable
          event.
        </p>
      </>
    ),
  },
  {
    question: "What should I consider when the market is down?",
    answer: (
      <>
        <p>
          Your Acorns portfolio is designed to handle normal market ups and downs
          through diversification — a mix of different assets that balance each
          other out over time.
        </p>
        <br />
        <p>
          <em>Remember:</em> Every market downturn in U.S. history has ended in an
          upturn. Past performance doesn’t guarantee future results.
        </p>
        <br />
        <div>
          <a
            href="https://www.acorns.com/learn/investing/what-is-market-volatility"
            className="text-blue-600 underline block"
            target="_blank"
          >
            What is Market Volatility
          </a>
          <a
            href="https://www.acorns.com/learn/investing/how-to-invest-in-volatile-market"
            className="text-blue-600 underline block"
            target="_blank"
          >
            How to Invest in a Volatile Market
          </a>
          <a
            href="https://www.acorns.com/learn/investing/investing-in-a-recession"
            className="text-blue-600 underline block"
            target="_blank"
          >
            Investing in a Recession
          </a>
        </div>
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full text-center max-w-3xl mx-auto py-16 px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
        Frequently asked
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-5 py-4 bg-gray-50 hover:bg-gray-100 transition"
              onClick={() => toggle(index)}
            >
              <p className="text-lg font-medium text-gray-800 text-left">
                {faq.question}
              </p>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-700 text-base bg-white border-t border-gray-100 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
