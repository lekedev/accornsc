// app/page.tsx
import Hero from "./pages/body/HeroSection";
import InvestmentCalculator from "./pages/body/InvestmentCal";
import RoundUps from "./pages/body/RoundsUp";
import Portfolio from "./pages/body/Portfolio";
import More from "./pages/body/More";
import Protection from "./pages/body/Protection";
import HeroCompounding from "./pages/body/HeroCompound";
import HighlightedText from "./pages/body/HighlightedText";
import SocialProofBanner from "./pages/body/Potential";
import HeroSubsection from "./pages/body/SubHeroSection";
import PressQuotes from "./pages/body/PressQuote";
import ClosingSignup from "@/component/ClosingSignUp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBanner />
      {/* <Potential /> */}
      <InvestmentCalculator />
      <HeroSubsection />
      <RoundUps />
      <Portfolio />
      <More />
      <Protection />
      <HeroCompounding />
      <HighlightedText />
      <PressQuotes />
      <ClosingSignup />
    </>
  );
}
