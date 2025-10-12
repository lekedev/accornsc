"use client";

import Image from "next/image";
import earnReferralDesktop from "@/app/earn/Earn-Referral_Desktop-updated.avif";
import earnReferralMobile from "@/app/earn/Earn-Referral_Desktop-updated.avif";

export default function EarnReferralSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-16 py-12 overflow-hidden">
      {/* Left Image */}
      <div className="flex-1 relative w-full max-w-md md:max-w-lg">
        <Image
          src={earnReferralDesktop}
          alt="Earn by inviting friends"
          width={600}
          height={600}
          className="hidden md:block w-full h-auto object-contain"
        />
        <Image
          src={earnReferralMobile}
          alt="Earn by inviting friends mobile"
          width={400}
          height={500}
          className="block md:hidden w-full h-auto object-contain"
        />
      </div>

      {/* Right Text */}
      <div className="flex-1 mt-10 md:mt-0 md:ml-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
          Earn by <br className="block md:hidden" /> inviting friends
        </h2>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-lg">
          Simply tap <span className="font-medium">“Invite a friend”</span> from your Acorns
          profile and find out how much you can earn for inviting friends to
          grow their oak.
        </p>
      </div>
    </section>
  );
}
