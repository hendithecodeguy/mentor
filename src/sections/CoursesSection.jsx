import React from 'react'
import { data } from '../datas/courses'
import CoursesItem from '../components/CoursesItem'

function CoursesSection() {
  return (
        <div id="courses" className="courses section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Courses</h2>
                <p>Popular Courses</p>
            </div>

            <div className="container">

                <div className="row">
                { data.map((item)=>(
                    <CoursesItem item={item}></CoursesItem>
                ))}

                </div>

            </div>
        </div>

  )
}

export default CoursesSection
