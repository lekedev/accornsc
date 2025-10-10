// app/page.tsx
import Hero from "./pages/body/HeroSection";
import Potential from "./pages/body/Potential";
import InvestmentCalculator from "./pages/body/InvestmentCal";
import RoundUps from "./pages/body/RoundsUp";
import Portfolio from "./pages/body/Portfolio";
import More from "./pages/body/More";
import Protection from "./pages/body/Protection";
import HeroCompounding from "./pages/body/HeroCompound";
import HighlightedText from "./pages/body/HighlightedText";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Potential />
      <InvestmentCalculator />
      <RoundUps />
      <Portfolio />
      <More />
      <Protection />
      <HeroCompounding />
      <HighlightedText />
    </>
  );
}
