"use client"

import BottomSlider from '@/component/BottomSlider';
import BrandOffersHeadline from '@/component/BrandOffer';
import ClosingSignup from '@/component/ClosingSignUp';
import EarnExtensionSection from '@/component/EarnExtentsionSection';
import EarnReferralSection from '@/component/EarnRefarrelSection';
import EarnWhileShopping from '@/component/EarnWhileShopping';
import FAQSection3 from '@/component/FAQSection3';
import HeroEarn from '@/component/HeroEarn';
import HighlightedText from '@/component/HighLightText';
import ScorllingBrandIcons from '@/component/ScrollingBrand';
import React from 'react'

export default function EarnPage () {
    return (
        <div>
            <HeroEarn />
            <HighlightedText />
            <EarnWhileShopping />
            <BrandOffersHeadline />
            <ScorllingBrandIcons />
            <EarnExtensionSection />
            <EarnReferralSection />
            <FAQSection3 />
            <BottomSlider />
            <ClosingSignup />
        </div>
    )
}