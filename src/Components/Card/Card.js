import React from 'react'

import './Card.css'

function Card({img,heading,details}) {
  return (
    <div className="card" >
        <img src={img} alt="" />
        <span>{heading}</span>
        <span>{details}</span>   
       
       
        <button className="c-button">Learn More</button>
       
     
    </div>
  )
}

export default Card
