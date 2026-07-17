import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import CountsSection from './CountsSection'
import WhyUsSection from './WhyUsSection'

function MainSection() {
  return (
      <div className="main">
       <HeroSection></HeroSection>
       <AboutSection></AboutSection>
       <CountsSection></CountsSection>
       <WhyUsSection></WhyUsSection>
      </div>
  )
}

export default MainSection
