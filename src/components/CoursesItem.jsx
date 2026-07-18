import React from 'react'

function CoursesItem({item}) {
  return (
            <div key={item.id} className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="course-item">
            <img src={item.thumbnail} className="img-fluid" alt="..."/>
            <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="category">{item.category}</p>
                <p className="price">${item.price}</p>
                </div>

                <h3><a href="course-details.html">{item.title}</a></h3>
                <p className="description">{item.desciption}</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                    <img src={item.instructorImg} className="img-fluid" alt=""/>
                    <a href="" className="trainer-link">{item.name}</a>
                </div>
                <div className="trainer-rank d-flex align-items-center">
                    <i className="bi bi-person user-icon"></i>&nbsp;{item.students}
                    &nbsp;&nbsp;
                    <i className="bi bi-heart heart-icon"></i>&nbsp;{item.likes}
                </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default CoursesItem
