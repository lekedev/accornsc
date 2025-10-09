"use client";

import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import AcornsLogo2 from "@/component/image/Acorns-Footer-Logo-2x-2022.webp";
import logo2 from "@/component/image/logo2.webp";



// acorns color: [#A7E399], button color: #08CB00

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 pt-16 pb-10 text-gray-800">
      {/* Top Flex Section */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* Left Side: Contact */}
        <div className="md:w-1/3">
          <h4 className="text-3xl font-semibold mb-4">Have any questions?</h4>
          <button className="bg-[#08CB00] text-white px-6 py-3 rounded-full font-medium hover:bg-[#45a277] transition">
            Contact support
          </button>
        </div>

        {/* Right Side: Links Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-10 text-left w-full">
          {/* PRODUCTS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 uppercase">Products</h3>
            <ul className="space-y-6 text-gray-600 text-sm">
              <li><a href="" className="hover:text-[#A7E399] "><b>Invest</b> for your future</a></li>
              <li><a href="" className="hover:text-[#A7E399] "><b>Later</b> starts today</a></li>
              <li><a href="" className="hover:text-[#A7E399]"><b>Earn</b> extra money</a></li>
              <li><a href="" className="hover:text-[#A7E399]"><b>Early</b> investors</a></li>
              <li><a href="" className="hover:text-[#A7E399]"><b>Bank </b>smarter</a></li>
            </ul>
          </div>

          {/* WHO WE ARE */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 uppercase">Who we are</h3>
            <ul className="space-y-6 text-gray-600 text-sm">
              <li><a href="" className="hover:text-[#A7E399]">About</a></li>
              <li><a href="" className="hover:text-[#A7E399]">Security</a></li>
              <li><a href="" className="hover:text-[#A7E399]">Careers</a></li>
              <li><a href="" className="hover:text-[#A7E399]">Press</a></li>
            </ul>
          </div>

          {/* WHY START NOW */}
          <div>
            <h6 className="font-semibold text-gray-900 mb-3 uppercase">Why start now</h6>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="" className="hover:text-[#A7E399]">Learn</a></li>
            </ul>
          </div>
        </div>
      </div>
s
      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={AcornsLogo2} alt="Acorns logo" width={120} height={24} />
          {/* <span className="text-lg font-semibold text-[#A7E399}">acorns</span> */}
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center  gap-8 text-xs text-[#000000]">
          <li><a href="" className="hover:text-[#A7E399]">Pricing</a></li>
          <li><a href="" className="hover:text-[#A7E399]">Store</a></li>
          <li><a href="" className="hover:text-[#A7E399]">Affiliates</a></li>
          <li><a href="" className="hover:text-[#A7E399]">Acorns Legal</a></li>
          <li><a href="" className="hover:text-[#A7E399]">Acorns Early Legal</a></li>
          <li><a href="" className="hover:text-[#A7E399]">Your Privacy Choices</a></li>
        </ul>

        {/* Socials */}
        <div className="flex space-x-4 text-[#08CB00] text-lg">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
          <FaTiktok />
          <FaYoutube />
          
        </div>
      </div>

      {/* Floating Popup Button */}
      <div className="fixed bottom-6 right-6 bg-black text-white px-4 py-3 rounded-2xl flex items-center shadow-lg space-x-3 cursor-pointer hover:opacity-90 transition">
        <div className=" p-2 rounded-full flex items-center justify-center ">
          <Image src={logo2} alt="Acorns logo" width={40} height={20} />
        </div>
        <div className="text-sm">
          <p className="font-medium leading-none">Acorns</p>
          <p className="text-gray-300 text-xs">Invest spare change</p>
        </div>
        <button className="bg-[#08CB00] text-white text-sm px-3 py-1 rounded-full font-medium">
          Get started
        </button>
      </div>
    </footer>
  );
}
