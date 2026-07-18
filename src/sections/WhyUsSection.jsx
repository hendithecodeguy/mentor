import React from 'react'
import { data } from '../datas/whyData'

function WhyUsSection() {
  return (
    <section id="why-us" class="section why-us">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="why-box">
              <h3>{data.title}</h3>
              <p>
                {data.description}
              </p>
              <div className="text-center">
                <a href="#" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
              </div>
            </div>
          </div>

          <div  className="col-lg-8 d-flex align-items-stretch">
            <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
              {data.list.map((item)=>(              
              <div key={item.id} className="col-xl-4">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className={item.icon}></i>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
                ))}

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default WhyUsSection
