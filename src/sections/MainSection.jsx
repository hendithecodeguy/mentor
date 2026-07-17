import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import CountsSection from './CountsSection'
import WhyUsSection from './WhyUsSection'
import FeatureSection from './FeatureSection'
import CoursesSection from './CoursesSection'

function MainSection() {
  return (
      <div className="main">
       <HeroSection></HeroSection>
       <AboutSection></AboutSection>
       <CountsSection></CountsSection>
       <WhyUsSection></WhyUsSection>
       <FeatureSection></FeatureSection>
       <CoursesSection></CoursesSection>
      </div>
  )
}

export default MainSection
