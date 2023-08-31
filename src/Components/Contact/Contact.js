import React from 'react'
import { useContext } from 'react'
import { theme } from '../../Context'

import './Contact.css'
function Contact() {
  const[toggle,setToggle]=useContext(theme)
  return (
    <div className="c-form">
        <div className="c-left">
            <span style={{color:toggle?'':'white'}}>Get in Touch </span>
            <span>Contact me</span>
            <div className="blur c-blur1" style={{background:'#ABF1FF94'}}></div>
            
             

        </div>
        <div className="c-right">
           <form>
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name='user_email' className='user' placeholder='Email' />
            <textarea name="message" className='user' placeholder='Message'></textarea>
            <input type="submit" value="send" className='button' />
           </form>
           <div className="blur c-blur2" style={{background:'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Contact
