"use client";

import HeroInvest from "@/component/Bg-page";
import InvestmentCalculator from "../pages/body/InvestmentCal";
import Potential from "../pages/body/Potential";
import HeroInvestSubsection from "@/component/HeroInvestSubSection";
import HighlightText from "@/component/HighlightedText";
import RotatingHeadline from "@/component/RotatedHeadLine";
import InvestRoundUps from "@/component/InvestmentRoundup";
import AutomaticValueProps from "@/component/Automatic";
import InvestInETFs from "@/component/Etf";
import DiversifiedMix from "@/component/Diversity";
import InvestTopCompanies from "@/component/InvestTopCompany";
import BuildByExperts from "@/component/BuildByExpert";
import SecurityProtection from "@/component/Security";
import CustomPortfolios from "@/component/CustomsPortfolio";
import StandaloneHeadline from "@/component/StandAloneHeadline";
import CompoundingSection from "@/component/CompoundingSection";
import TwoColumnContent from "@/component/TwoColumn";
import FAQSection from "@/component/FAQSection";
import BottomSlider from "@/component/BottomSlider";
import ClosingSignup from "@/component/ClosingSignUp";

export default function InvestPage() {
  return (
    <div>
      <HeroInvest />
      <Potential />
      <InvestmentCalculator />
      <HeroInvestSubsection />
      <HighlightText />
      <RotatingHeadline />
      <InvestRoundUps />
      <AutomaticValueProps />
      <InvestInETFs />
      <DiversifiedMix />
      <InvestTopCompanies />
      <BuildByExperts />
      <SecurityProtection />
      <CustomPortfolios />
      <StandaloneHeadline />
      <CompoundingSection />
      <TwoColumnContent />
      <FAQSection />
      <BottomSlider />
      <ClosingSignup />
    </div>
  );
}
