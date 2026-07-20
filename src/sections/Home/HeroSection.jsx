import React from 'react'
import { data } from '../../datas/hero';

function HeroSection() {
  return (
    <div>
     <section id="hero" className="hero section dark-background">

      <img src={data.heroBg} />

      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100">{data.motto1}<br></br>{data.motto2}</h2>
        <p data-aos="fade-up" data-aos-delay="200">{data.note}</p>
        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
          <a href="courses.html" className="btn-get-started">Get Started</a>
        </div>
      </div>

    </section>
    </div>
  )
}

export default HeroSection
