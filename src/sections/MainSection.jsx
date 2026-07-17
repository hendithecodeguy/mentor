import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import CountsSection from './CountsSection'

function MainSection() {
  return (
      <div className="main">
       <HeroSection></HeroSection>
       <AboutSection></AboutSection>
       <CountsSection></CountsSection>
      </div>
  )
}

export default MainSection
