import React from 'react'
import { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs';
import { data } from '../../datas/count';
function CountsSection() {
 useEffect(() => {
    new PureCounter();
  }, []);

    return (
    <section id="counts" class="section counts light-background">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end={data.students} data-purecounter-duration="1" className="purecounter"></span>
              <p>Students</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end={data.courses} data-purecounter-duration="1" className="purecounter"></span>
              <p>Courses</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end={data.events} data-purecounter-duration="1"  className="purecounter"></span>
              <p>Events</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end={data.trainers} data-purecounter-duration="1" class="purecounter"></span>
              <p>Trainers</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default CountsSection
