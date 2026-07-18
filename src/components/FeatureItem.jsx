import React from 'react'

function FeatureItem({item}) {
  return (
    <div key={item.id} className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="features-item">
              <i className={item.icon} style={{color:" #ffbb2c"}}></i>
              <h3><a href="" className="stretched-link">{item.name}</a></h3>
            </div>
          </div>
  )
}

export default FeatureItem
