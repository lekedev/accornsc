import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Hero from "./pages/body/HeroSection";
import Potential from "./pages/body/Potential";
import InvestmentCalculator from "./pages/body/InvestmentCal";
// import HeroSubsection from "./pages/body/SubHeroSection";
import RoundUps from "./pages/body/RoundsUp";
import Portfolio from "./pages/body/Portfolio";
import More from "./pages/body/More";
import Protection from "./pages/body/Protection";
import HeroCompounding from "./pages/body/HeroCompound";
import HighlightedText from "./pages/body/HighlightedText";
import FooterLegal from "./pages/body/foot";

export const metadata = {
  title: "Acorns Clone",
  description: "Micro-investing app clone built with Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <Potential />
        <InvestmentCalculator />
        {/* <HeroSubsection /> */}
        <RoundUps />
        <Portfolio />
        <More />
        <Protection />
        <HeroCompounding />
        <HighlightedText />
        <Footer />
        <FooterLegal />
        {/* <HeroSubsection /> */}
        {/* <main className="flex-1">{children}</main> */}
        
      </body>
    </html>
  );
}
