import React from 'react'

function AboutItem({item}) {
  return (
     <li key={item.id}><i className="bi bi-check-circle"></i> <span>{item.description}</span></li>
  )
}

export default AboutItem
