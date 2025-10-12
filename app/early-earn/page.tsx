"use client"

import EarlyHeadline from "@/component/EarlyHeadLine";
import EarlyInvestSection from "@/component/EarlyInvestSection";
import FlexibleFundsSection from "@/component/FlexibleFund";
import HeroEarlyInvest from "@/component/HeroEarly";
import ReceiveGiftSection from "@/component/Receive";
import SmartDepositSection from "@/component/SmartDeposit";
import ValuePropSection from "@/component/ValuePropSection";
import BonusSavingsSection from "@/component/BonusSection";
import GrowKnowledgeSection from "@/component/GrowKnowlegde";
import FAQSection from "@/component/FAQSection";
import BottomSlider from "@/component/BottomSlider";
import ClosingSignup from "@/component/ClosingSignUp";


export default function EarlyEarn () {
    return (
        <div>
            <HeroEarlyInvest />
            <EarlyHeadline />
            <ValuePropSection />
            <EarlyInvestSection />
            <FlexibleFundsSection />
            <SmartDepositSection />
            <ReceiveGiftSection />
            <BonusSavingsSection />
            <GrowKnowledgeSection />
            <FAQSection />
            <BottomSlider />
            <ClosingSignup />
        </div>
    )
}