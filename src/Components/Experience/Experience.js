import React from 'react'
import Achievement from '../Achievement/Achievement'

import './Experience.css'
function Experience() {
  return (
    <div className="experience" id='experience'>
        <Achievement value={"8+"} title1={"years"} title2={"Experience"}/>
        <Achievement value={"20+"} title1={"completed"} title2={"Projct"}/>
        <Achievement value={"5+"} title1={"companies"} title2="Works"/>
    </div>
  )
}

export default Experience
