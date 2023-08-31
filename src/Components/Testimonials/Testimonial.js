import React from 'react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import {data} from'./data.js'
import Move from '../../dragable/Move';

import './Testimonial.css'
function Testimonial() {

  const settings={
     
      
       dots:1,
       iShow:1,
       circle:true
      
      

   }
   
//  console.log(data) 






  // <Swiper modules={[Pagination]} slidesPerView={1} pagination={{clickable: true}}>
 function alldata(){
    let count=[];
    for(let i=0;i<data.length;i++){
         count.push( <SwiperSlide key={i}>
               <div className="testimonial">
             <img src={data[i].img} alt="" />
             <span>{data[i].review}</span>
             </div>
          </SwiperSlide>)
    }
    return count;


 }
  return (
    <div className="t-wrapper" id='testimonial'>
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
             <div className="blur t-blur2" style={{background:'#ABF1FF94'}}></div> 
        </div>
       <Move {...settings} >
          {  alldata() }
       </Move>
    </div>
  )
}

export default Testimonial
