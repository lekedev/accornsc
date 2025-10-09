"use client";

import Link from "next/link";

export default function FooterLegal() {
  return (
    <section className="bg-white border-t border-gray-200 py-10 text-neutral-500 text-xs leading-relaxed">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        {/* Legal Text */}
        <p>
          Investing involves risk, including loss of principal. Please consider your objectives,
          risk tolerance, and Acorns’ fees before investing. Investment products and services offered
          by Acorns Advisers, LLC (Acorns), an SEC Registered Investment Adviser. Brokerage products
          and services are provided by Acorns Securities, LLC, an SEC registered Broker Dealer,
          Member <Link href="#" className="text-green-600 underline hover:text-green-700">FINRA/SIPC</Link>. 
          Check the background of Acorns Securities. Investment products are{" "}
          <span className="font-semibold">NOT FDIC INSURED</span>,{" "}
          <span className="font-semibold">NOT BANK GUARANTEED</span>, and{" "}
          <span className="font-semibold">MAY LOSE VALUE</span>. View additional{" "}
          <Link href="#" className="text-green-600 underline hover:text-green-700">
            investing disclosures
          </Link>.
        </p>

        <p>
          Acorns is not a bank. Acorns Visa™ debit cards and banking services are issued and
          provided by Lincoln Savings Bank and nbkc bank, Members FDIC. Acorns Mighty Oak Visa™
          debit cards and banking services are issued and provided by nbkc bank, Member FDIC, to
          Acorns Mighty Oak checking account holders that are U.S. residents over the age of eighteen (18).
        </p>

        <p>
          Acorns Early is not a bank. The Acorns Early card is issued by nbkc Bank, Member FDIC,
          pursuant to license by Visa®, and Community Federal Savings Bank, Member FDIC, pursuant to
          license by Mastercard International. Cardholder Terms and limits apply.
        </p>

        <p>
          Acorns, GoHenry, Round-Ups® investments, Real-Time Round-Ups® investments, Invest the
          Change and the Acorns logo are registered trademarks of Acorns Grow Incorporated. All
          product and company names are trademarks™ or registered® trademarks of their respective
          holders. Use of them does not imply any affiliation with or endorsement by them.
        </p>

        {/* Legal Links */}
        <p className="text-gray-800">
          <Link href="#" className="text-green-600 underline hover:text-green-700 mr-4">
            Acorns Wrap Fee Brochure
          </Link>
          <Link href="#" className="text-green-600 underline hover:text-green-700 mr-4">
            Form CRS
          </Link>
          <Link href="#" className="text-green-600 underline hover:text-green-700">
            FINRA’s BrokerCheck
          </Link>
        </p>

        <p>
          For additional important risks, disclosures, and information, please visit{" "}
          <Link
            href="https://www.acorns.com/important-disclosures/"
            className="text-green-600 underline hover:text-green-700"
          >
            https://www.acorns.com/important-disclosures/
          </Link>.
        </p>

        {/* Copyright */}
        <p className="text-gray-600 text-sm">
          © 2025 Acorns Grow Incorporated |{" "}
          <Link href="#" className="text-green-600 underline hover:text-green-700">
            Accessibility
          </Link>
        </p>
      </div>
    </section>
  );
}
