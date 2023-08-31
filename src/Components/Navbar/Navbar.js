import React from 'react'
import Toggle from '../Toggle/Toggle'

import './Navbar.css'

function Navbar() {
  function link(e){
    // if (e.target.hash!==window.location.hash ) {
    e.preventDefault();
    window.location.hash="";
    window.location.hash=e.target.hash;
  
    // }
  
  }
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Emran</div>
        <Toggle/> 
        
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType:'none'}}>
                <li><a href='#intro'onClick={link} >Home</a></li>
                <li><a href='#service' onClick={link}>Services</a> </li>
                <li><a href='#experience' onClick={link}>Experience</a></li>
                <li><a href='#protfolio' onClick={link}>Protfolio</a></li>
                <li><a href='#testimonial' onClick={link}>Testimonials</a></li>
            </ul>
        </div>  
            <button className="button">Contact</button>
     </div>
    </div>
  )
}

export default Navbar
