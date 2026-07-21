import React from 'react'
import HeaderSection from '../sections/HeaderSection'
import HeroSection from '../sections/HeroSection'
import HomeAboutSection from '../sections/HomeAboutSection'
import CountsSection from '../sections/CountsSection'
import WhyUsSection from '../sections/WhyUsSection'
import FeatureSection from '../sections/featureSection'
import CoursesSection from '../sections/CoursesSection'


function HomePage() {
  return (
    <>
    <HeaderSection></HeaderSection>
     <HomeAboutSection></HomeAboutSection>
       <CountsSection></CountsSection>
       <WhyUsSection></WhyUsSection>
       <FeatureSection></FeatureSection>
       <CoursesSection></CoursesSection>
    </>
  )
}

export default HomePage
