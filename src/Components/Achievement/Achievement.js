import React from 'react'
import './Achievement.css'

function Achievement({value,title1,title2}) {
  return (
    <div className="achievement">
      <div className="circle">{value}</div>
      <span>{title1}</span>
      {title2 && <span>{title2}</span> }

    </div>
  )
}

export default Achievement
