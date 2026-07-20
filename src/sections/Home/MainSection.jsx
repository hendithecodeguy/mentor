import React from 'react'
import HeroSection from '../Home/HeroSection'
import AboutSection from '../Home/AboutSection'
import CountsSection from '../Home/CountsSection'
import WhyUsSection from '../Home/WhyUsSection'
import FeatureSection from '../Home/FeatureSection'
import CoursesSection from '../Home/CoursesSection'
import HeaderSection from '../Home/HeaderSection'

function MainSection() {
  return (
      <div className="main">
        <HeaderSection></HeaderSection>
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
