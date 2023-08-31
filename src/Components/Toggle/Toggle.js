import React, { useState } from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
 import './Toggle.css'

 import { useContext } from "react";
import { theme } from '../../Context';

function Toggle() {
  const [toggle,setToggle]=useContext(theme);
  
    function ligthHandle(e){
       
        setToggle(!toggle);
      
        
    }
   
   
  return (
    <div className="toggle" onClick={ligthHandle}>
        <Moon id="moon"  />
        <Sun  id="sun" />
         <div className={`t-button ${toggle?'left':''}`} ></div>
        
       
         
    </div>
  )
}

export default Toggle
