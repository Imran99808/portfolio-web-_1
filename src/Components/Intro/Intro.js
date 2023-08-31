import React, { useRef } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { useContext } from 'react'
import { theme } from '../../Context'


function Intro() {
  const[toggle,setToggle,state]=useContext(theme)
 
  const refElement=useRef();
  
 
  return (
   <div className="i-wrapper" id='intro'  ref={refElement}>
    <div className="i-left">
      <div className="i-name">
        <span style={{color:toggle?"":"white"}}>Hy! I Am</span>
        <span>Emran Reza</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed itaque possimus saepe sequi veritatis obcaecati voluptatum fugit earum in, rerum, at corrupti nesciunt provident molestias, nostrum </span>

        </div>
      <button className="button i-button">Hire me</button>
     <div className="i-icons">
        <img src={Github} alt="" />
        <img src={Linkedin} alt="" /> 
       <img src={Instagram} alt="" /> 
       
     </div>
    </div>
    <div className="i-right">
   <img src={Vector1} alt="" /> 
   <img src={Vector2} alt="" /> 
  <img src={Boy} alt="" /> 
 <img src={Glassesimoji} alt="" style={{ animation: state.floatingDiv1?"about-imoji-animation 1s ease-in-out forwards":""}} /> 
  <div className='i-f-1' style={{ animation: state.floatingDiv1?"about-fl1-animation 1s ease-in-out forwards":""}} >
    <FloatingDiv img={Crown} text1="Web" text2="Developer" toggle={toggle}/>
   
  </div>
<div className='i-f-2' style={{ animation:state.floatingDiv2?"about-fl2-animation 1s ease-in-out forwards":""}}>
    <FloatingDiv img={Thumbup} text1="Best design" text2="Award" toggle={toggle}/>
  </div>
  {/* blur div */}
  <div className="blur" style={{background:'rgb(238,210,255)'}}></div>
  <div className="blur" style={{background:'#C1F5FF',
                                top:'17rem',
                                width:'21rem',
                                height:'11rem',
                                left:'-9rem' }}></div>
    </div>
  </div>
  
  )
}

export default Intro
