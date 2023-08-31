import React from 'react'

import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { memo, useContext } from 'react'
import { theme } from '../../Context'
// var a=true
const Works = () => {
    const[toggle,setToggle,state]=useContext(theme);
 console.log("emon")
  return (
   <div className="w-wrapper">
    <div className="w-left">
    <span style={{color:toggle?'':'white'}}>Works for All these</span>
    <span>Brands & Clients</span>
    <span>
        Lorem ispum is simpley dummy text of printing of printing Lorem
        <br />
        ispum is simpley dummy text of printing.
        <br />
        ispum is simpley dummy text of printing.tetx of printing
        <br />
        ispum is simpley dummy text of printing.
    </span>
    <button className="button w-button">Hire me</button>
    <div className="blur w-blur1" style={{background:'#ABF1FF94'}}></div>
    </div>


    <div className="w-rigth">
        <div className="w-mainCircle" style={{ animation: state.work&& 'about-work-animation 1s ease-in-out forwards'}}>
        
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
    </div>
   </div>
  )
}

export default memo(Works)
