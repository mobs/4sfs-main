import React from 'react'
import HeroSection from './HeroSection'
import FeaturedProperties from './FeaturedProperties'
import AboutUs from './AboutUs'
import PropertyCategories from './PropertyCategories'
import PopularLocalities from './PopularLocalities'
import WhyChooseUs from './WhyChooseUs'
import LatestProperties from './LatestProperties'
import MarketInsights from './MarketInsights'

const Homepage = () => {
  return (
    <main className="">
      <HeroSection />
      <FeaturedProperties />
      <AboutUs />
      <PropertyCategories />
      <PopularLocalities />
      <WhyChooseUs />
      <LatestProperties />
      <MarketInsights />
    </main>
  )
}

export default Homepage