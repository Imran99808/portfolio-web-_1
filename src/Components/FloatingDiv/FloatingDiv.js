import React from 'react'

import './FloatingDiv.css'
function FloatingDiv({img,text1,text2,toggle}) {
  return (
    <div className="floatingDiv">
        <img src={img} alt="" />
        <span >{text1}
            <br />
            {text2}
        </span>
        
    </div>
  )
}

export default FloatingDiv
