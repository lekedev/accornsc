import React from "react";
import {
  FaPiggyBank,
  FaPercentage,
  FaSyncAlt,
  FaShieldAlt,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa"; // you can change icons to match your taste

export default function WhyAcornsLater() {
  const cards = [
    {
      icon: <FaPiggyBank className="text-4xl text-green-600" />,
      title: "Easy retirement investing",
      desc: "Easily manage your investments and Acorns Later account in one app.",
      color: "text-slate-800",
    },
    {
      icon: <FaPercentage className="text-4xl text-purple-600" />,
      title: "3% IRA match",
      desc: "Get a 3% IRA match on new contributions during your first year with Acorns Gold.",
      color: "text-purple-700",
    },
    {
      icon: <FaSyncAlt className="text-4xl text-green-600" />,
      title: "Automatic Recurring Contributions",
      desc: "Set up a daily, weekly, or monthly Recurring Contribution to make your investing automatic.",
      color: "text-slate-800",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "Security & Protection",
      desc: (
        <>
          Acorns Later accounts are SIPC-protected up to $500,000. SIPC does not protect
          against market risk. For details, visit{" "}
          <a
            href="https://www.sipc.org/"
            target="_blank"
            className="underline text-blue-600"
          >
            www.sipc.org
          </a>.
        </>
      ),
      color: "text-slate-800",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-green-700" />,
      title: "Recommended for you",
      desc: "Answer a few questions and we’ll recommend an IRA plan based on your current situation and long-term goals.",
      color: "text-slate-800",
    },
    {
      icon: <FaChartLine className="text-4xl text-purple-700" />,
      title: "Potential tax benefits",
      desc: "Take advantage of potential tax benefits by contributing to your Acorns Later account.",
      color: "text-slate-800",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="text-center mb-12">
        <p className="uppercase text-sm tracking-widest text-gray-500 font-semibold mb-2">
          Why Acorns Later?
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className={`font-semibold text-lg mb-2 ${card.color}`}>
              {card.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
