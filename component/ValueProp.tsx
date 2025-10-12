"use client";

import React from "react";
import {
  FaTasks,
  FaPiggyBank,
  FaUserShield,
  FaBookOpen,
  FaGift,
} from "react-icons/fa";
import { motion } from "framer-motion";

const valueProps = [
  {
    icon: <FaTasks className="text-green-700 text-4xl mb-4" />,
    title: "Allowance & chores app",
    body: "Getting kids to do their chores couldn’t be easier. Just set up chores in the Acorns Early app, set a payment amount, and tick the chore off when it’s done!",
    link: "/allowance-chores/",
  },
  {
    icon: <FaPiggyBank className="text-green-700 text-4xl mb-4" />,
    title: "Savings account for kids",
    body: "Acorns Early makes saving a habit by putting your kids in charge. Kids can use their app to easily set savings goals with target dates and an optional autosave feature.",
    link: "/kids-saving/",
  },
  {
    icon: <FaUserShield className="text-green-700 text-4xl mb-4" />,
    title: "Parental controls",
    body: "Get peace of mind with real-time notifications when your kids spend, set spending limits, and instantly block lost or stolen cards.",
    link: "/parental-controls/",
  },
  {
    icon: <FaBookOpen className="text-green-700 text-4xl mb-4" />,
    title: "Financial literacy",
    body: "Help your kids grow their money skills with bite-sized financial lessons for kids and teens of all ages.",
    link: "/kids-learn/",
  },
  {
    icon: <FaGift className="text-green-700 text-4xl mb-4" />,
    title: "Giftlinks and Relative accounts",
    body: "Make birthdays and holidays easier on everyone by inviting friends and family to gift money to your kids.",
    link: "/gift-money-kids/",
  },
];

export default function ValuePropsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-12">
          Why choose Acorns Early for kids?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#F6F4EC] border border-gray-200 rounded-2xl shadow-sm p-8 hover:shadow-md hover:border-green-600 transition-all duration-300 flex flex-col items-center text-center"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {item.body}
              </p>
              <a
                href={item.link}
                className="text-green-700 font-semibold text-sm hover:underline"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
