"use client";

import { useEffect } from "react";

export default function TrustPilotSection() {
  useEffect(() => {
    // Dynamically load the Trustpilot widget script
    const script = document.createElement("script");
    script.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="53aa8912dec7e10d38f59f36"
          data-businessunit-id="6731e0c39ecd53e30da42c31"
          data-style-height="128px"
          data-style-width="100%"
          data-tags="Early"
          data-stars="5"
          data-review-languages="en"
          data-font-family="Avenir Next">
        </div>
      </div>
    </section>
  );
}
