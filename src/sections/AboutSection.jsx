import React from 'react'
import AboutItem from '../components/AboutItem'
import aboutImg from '../assets/img/about/about-1.webp'
import { data } from '../datas/about'
function AboutSection() {
  return (
        <section id="about-us" className="section about-us">
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
            <img src={aboutImg} className="img-fluid" alt="About Us"/>
          </div>

          <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
            <h3>{data.purpose}</h3>
            <p className="fst-italic">
             {data.description}
            </p>
            <ul>
                           {data.aboutList.map((item)=>(              
                  <AboutItem item={item}></AboutItem>
              ))}
            </ul>
          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutSection
