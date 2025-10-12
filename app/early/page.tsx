"use client"

import EarlyHeroSection from "@/component/EarlyHeroSection";
import TrustPilotSection from "@/component/TrustPilotSection";
import KidsDebitCardSection from "@/component/KidCardsSection";
import CardDesignCarousel from "@/component/CardSection";
import WhyChooseSection from "@/component/WhyChoose";
import ValuePropsSection from "@/component/ValueProp";
import SecurityFeaturesSection from "@/component/SecurityFeaturesSection";
import SectionHeader from "@/component/SectionHeaderProps";
import ImageLeftContentRight from "@/component/ImageLeftContent";
import SafeToSpend from "@/component/ContentLeftImageRight";
import GivingMadeEasy from "@/component/GivingEasy";
import FQASection4 from "@/component/FAQSection4";
import SendMoney from "@/component/SendMoney";
import AutomaticChores from "@/component/AutomaticChores";
import PricingSection from "@/component/PricingSection";

;

export default function early() {
    return (
        <div>
            <EarlyHeroSection />
            <TrustPilotSection />
            <KidsDebitCardSection />
            <CardDesignCarousel />
            <WhyChooseSection />
            <ValuePropsSection />
            <SecurityFeaturesSection />
            <div className="bg-white">
                <SectionHeader
                    title="Spending, sending, giving, and more"
                    subtitle="Acorns Early is designed to help families learn about money together. Featuring personalized experiences for both parents and kids, it’s easy to stay in control."
                    align="center"
                />
                <div>
                <SafeToSpend />
                <ImageLeftContentRight />
                <GivingMadeEasy /> 
                <SendMoney />
                </div>
                <AutomaticChores />
                <PricingSection />
                <FQASection4 />
            </div>
        </div>
    )
}