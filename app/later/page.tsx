"use client"

import React from 'react'
import HeroLater from '@/component/HeroLater';
import RetirementHeadline from '@/component/RetirementHeadline';
import WhyAcornsLater from '@/component/WhyAcornsLater';
import MoneyFutureSection from '@/component/MoneyFutureSection';
import RetirementFastEasy from '@/component/RetirementFast';
import RetirementPlanning from '@/component/RetirementPlan';
import PotentialTaxBenefits from '@/component/PotentialTax';
import AgeBasedPortfolio from '@/component/AgebasedPortfolio';
import PaycheckSplit from '@/component/PayCheckSplit';
import FAQSection2 from '@/component/FAQSection2';
import BottomSlider from '@/component/BottomSlider';
import ClosingSignup from '@/component/ClosingSignUp';

export default function RetirementPage ()  {
  return (
    <div>
        <HeroLater />
        <RetirementHeadline />
        <WhyAcornsLater />
        <MoneyFutureSection />
        <RetirementFastEasy />
        <RetirementPlanning />
        <PotentialTaxBenefits />
        <AgeBasedPortfolio />
        <PaycheckSplit />
        <FAQSection2 />
        <BottomSlider />
        <ClosingSignup />
    </div>
  )
}
