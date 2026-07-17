import React from 'react'
import heroBg from '/src/assets/img/hero-bg.jpg';

function HeroSection() {
  return (
    <div>
     <section id="hero" className="hero section dark-background">

      <img src={heroBg} />

      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100">Learning Today,<br></br>Leading Tomorrow</h2>
        <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p>
        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
          <a href="courses.html" className="btn-get-started">Get Started</a>
        </div>
      </div>

    </section>
    </div>
  )
}

export default HeroSection
