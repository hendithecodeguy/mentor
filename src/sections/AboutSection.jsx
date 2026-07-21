import React from 'react'
import { data } from '../datas/about'
import AboutItem from '../components/AboutItem'
function AboutSection() {
  return (
  <div id="about" className="about section">
    <div className="container">

                <div className="row gy-4">

          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
            <img src={data.aboutImg} class="img-fluid" alt=""></img>
          </div>

          <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
            <h3>{data.title}</h3>
            <p className="fst-italic">
              {data.description}
            </p>
            <ul>
              {data.aboutList.map((item)=>(              
                  <AboutItem item={item}></AboutItem>
              ))}
                </ul>
            <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>

        </div>

    </div>

 </div>

  )
}

export default AboutSection
