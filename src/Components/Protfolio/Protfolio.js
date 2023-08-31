import React, { Component } from 'react'

import './Protfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import s from '../../img/sidebar.png'
import e from '../../img/ecommerce.png'
import h from '../../img/hoc.png'
import m from '../../img/musicapp.png'
 import 'swiper/css'
import { useContext } from 'react'
import { theme } from '../../Context'

 function Protfolio (){
  const[toggle,setToggle]=useContext(theme);
    return (
      <div className="p-wrapper" id='protfolio'>
        <span style={{color:toggle?"":"white"}}>Recent Project</span>
        <span>Protfolio</span>

      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='protfolio-slider'
      >
        <SwiperSlide>
            <img src={s} alt="" />
           
        </SwiperSlide>
        <SwiperSlide>
            
            <img src={e} alt="" />
           
        </SwiperSlide>
        <SwiperSlide>
            
            <img src={h} alt="" />
           
        </SwiperSlide>
        <SwiperSlide>
          
            <img src={m} alt="" />
           
        </SwiperSlide>
        
      </Swiper>

      </div>
    )
  }


export default Protfolio
