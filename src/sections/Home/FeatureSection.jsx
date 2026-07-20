import React from 'react'
import { data } from '../../datas/feature'
import FeatureItem from '../../components/FeatureItem'

function FeatureSection() {
  return (
     <section id="features" className="features section">

      <div className="container">

        <div className="row gy-4">        
               {data.map((item)=>(
                    <FeatureItem item={item} ></FeatureItem>
                ))}
        </div>
      </div>

    </section>
  )
}

export default FeatureSection
