import React, { useContext } from 'react'

import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { theme } from '../../Context'

function Services() {
 
  const[toggle,setToggle,state]=useContext(theme)
  // console.log(state.card2)
  return (
    <div className="s-wrapper" id='service'>
        <div className="s-left">
              <span style={{color:toggle?'':'white'}}>My Awesome</span>
              <span>services</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing, elit.Tempore iste minima
                <br /> elit. Tempore iste minima a tenetur</span>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className="s-right">
            <div className={`card1 ${state.card1?'card1-right':''}`}>
                <Card img={HeartEmoji}
                      heading="Design" 
                      details={"Figma,Sketch,Photoshop, Addove, Adobe xd"}/>
                  
            </div>
            <div   className='card2' style={{left:state.card2?'-10rem':''}} >
                <Card img={Glasses}
                      heading="Devloper" 
                      details={"Html, Css, JavaScript, React"}/>
                  
            </div>
            <div    style={{top:'19rem',left:'12rem',  transition: 'left .9s', transitionDelay:'0.1s',left:state.card3?'18rem':'12rem'}}>
                <Card img={Humble}
                      heading="UI/UX" 
                      details={"Figma,Sketch,Photoshop, Addove, Adobe xd"}/>
                  
            </div>
            <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
        </div>
      
    </div>
  )
}

export default Services
