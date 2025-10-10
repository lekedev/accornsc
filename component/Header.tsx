"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  PiggyBank,
  Banknote,
  Wallet,
  Gift,
  Baby,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import logo1 from "@/component/image/Logo1.png";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section: Logo + Menu */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Image
            src={logo1}
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-2 text-gray-700 font-medium relative">
            {/* For You dropdown */}
            <li
              className="relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setOpenDropdown("forYou")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span
                className={`hover:text-green-600 flex items-center ${
                  openDropdown === "forYou" ? "text-green-600" : ""
                }`}
              >
                For You
                <ChevronDown
                  size={15}
                  className={`ml-1 transition-transform duration-200 ${
                    openDropdown === "forYou"
                      ? "rotate-180 text-green-600"
                      : ""
                  }`}
                />
              </span>

              {openDropdown === "forYou" && (
                <div className="absolute left-1/2 -translate-x-1 top-full mt-2 w-[900px] bg-white border-t border-gray-100 shadow-md rounded-xl transition-all duration-3000 ease-in-out
">
                  <div className="flex justify-center py-6 space-x-16 text-gray-800">
                    <Link href="/invest" onClick={() => setOpenDropdown(null)} >
                      <div className="flex flex-col items-center text-center hover:text-green-600 transition">
                        <PiggyBank size={22} />
                        <p className="font-semibold mt-2">Invest for every day</p>
                        <p className="text-sm text-gray-500">Brokerage account</p>
                      </div>
                    </Link>
                    <Link href="/later" onClick={() => setOpenDropdown(null)} >
                      <div className="flex flex-col items-center text-center hover:text-green-600 transition">
                        <Banknote size={22} />
                        <p className="font-semibold mt-2">
                          Invest for retirement
                        </p>
                        <p className="text-sm text-gray-500">IRA accounts</p>
                      </div>
                    </Link>
                    <div className="flex flex-col items-center text-center hover:text-green-600 transition">
                      <Wallet size={22} />
                      <p className="font-semibold mt-2">Bank smarter</p>
                      <p className="text-sm text-gray-500">
                        Checking & savings
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center hover:text-green-600 transition">
                      <Gift size={22} />
                      <p className="font-semibold mt-2">
                        Earn bonus investments
                      </p>
                      <p className="text-sm text-gray-500">
                        Cashback invested
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* For Your Family dropdown */}
            <li
              className="relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setOpenDropdown("family")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span
                className={`hover:text-green-600 flex items-center ${
                  openDropdown === "family" ? "text-green-600" : ""
                }`}
              >
                For Your Family
                <ChevronDown
                  size={18}
                  className={`ml-1 transition-transform duration-200 ${
                    openDropdown === "family"
                      ? "rotate-180 text-green-600"
                      : ""
                  }`}
                />
              </span>

              {openDropdown === "family" && (
                <div className="absolute left-1/2 -translate-x-1 top-full mt-2 w-[900px] bg-white border-t border-gray-100 shadow-md rounded-xl transition-all duration-3000 ease-in-out
">
                  <div className="flex justify-center py-6 space-x-16 text-gray-800">
                    <div className="flex flex-col items-center text-center hover:text-green-600 transition">
                      <Baby size={28} />
                      <p className="font-semibold mt-2">
                        Invest for your kids
                      </p>
                      <p className="text-sm text-gray-500">UGMA / UTMA</p>
                    </div>
                    <div className="flex flex-col items-center text-center hover:text-green-600 transition">
                      <GraduationCap size={28} />
                      <p className="font-semibold mt-2">
                        Build kids’ money skills
                      </p>
                      <p className="text-sm text-gray-500">
                        Debit card & learning app
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Other links */}
            <li className="hover:text-green-600 cursor-pointer">
              Plans & Pricing
            </li>
            <li className="hover:text-green-600 cursor-pointer">
              How It Works
            </li>
            <li className="hover:text-green-600 cursor-pointer">Learn</li>
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-700 font-medium hover:text-green-600">
            Log in
          </button>
          <button className="bg-[#08CB00] text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition">
            Get started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg p-6 space-y-4">
          <details className="group">
            <summary className="cursor-pointer font-medium text-gray-700 flex items-center justify-between">
              For You
              <ChevronDown
                size={18}
                className="transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="pl-4 mt-2 space-y-3 text-gray-600">
              <p>Invest for every day</p>
              <p>Invest for retirement</p>
              <p>Bank smarter</p>
              <p>Earn bonus investments</p>
            </div>
          </details>

          <details className="group">
            <summary className="cursor-pointer font-medium text-gray-700 flex items-center justify-between">
              For Your Family
              <ChevronDown
                size={18}
                className="transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="pl-4 mt-2 space-y-3 text-gray-600">
              <p>Invest for your kids</p>
              <p>Build kids’ money skills</p>
            </div>
          </details>

          <p className="font-medium hover:text-green-600">Plans & Pricing</p>
          <p className="font-medium hover:text-green-600">How It Works</p>
          <p className="font-medium hover:text-green-600">Learn</p>

          <div className="flex flex-col space-y-3 pt-4 border-t">
            <button className="text-gray-700 font-medium hover:text-green-600">
              Log in
            </button>
            <button className="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700">
              Get started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
