import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";
import Link from 'next/link';
import Image from "next/image";
const Topsection=()=>{

return (
	<>  
<div style={{height:'88vh',width:"100%",paddingTop:'5rem'}}>    
<Swiper 
 pagination={true} 
 modules={[Autoplay,Pagination]} 
 loop={true} autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }} 
className="mySwiper">

<SwiperSlide>
   <Image alt="zerofestival" src="/images/mobilebanner.jpg" layout='fill'  objectFit='cover' objectPosition='center'/>
</SwiperSlide>

<SwiperSlide>
 <div className="slidertext font-bold text-white uppercase">WELCOME TO A MULTIVERSE..
  <div className="font-normal text-sm text-center md:text-left text-white" style={{maxWidth:"800px"}}>
  Ideal for those who wanna have a memorable time yet leave no carbon footprint.
  </div>
  <a href="#pakage" className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-8 text-gray-50 text-base uppercase md:self-start mt-4">Book Your Experience</a>
  </div>
   <Image alt="zerofestival" src="/images/swiper-image-1.jpg" layout='fill'  objectFit='cover'/>
</SwiperSlide>

<SwiperSlide>
 <div className="slidertext font-bold text-white uppercase">WHERE MUSIC MEETS SUSTAINABILITY..
    <div className="font-normal text-sm text-center md:text-left text-white" style={{maxWidth:"800px"}}>
    Step into to a multiverse of music, culture, joy and eco-friendly living at ZIRO, with Encamp.
    </div>
    <a href="#pakage" className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-8 text-gray-50 text-base uppercase md:self-start mt-4">Book Your Experience</a>
</div>
<Image alt="zerofestival" src="/images/swiper-image-2.jpg" layout='fill'  objectFit='cover'/>
</SwiperSlide>
        
<SwiperSlide>
<div className="slidertext font-bold text-white uppercase">LIVE ZIRO WITH ZERO IMPACT!
 <div className="font-normal text-sm text-center md:text-left text-white" style={{maxWidth:"800px"}}>
While the vibe absolutely transports you to a parallel universe of serenity, you
certainly don’t disrupt the physical ecosystem – thanks to our environment first
approach.
 </div>
 <a href="#pakage" className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-8 text-gray-50 text-base uppercase md:self-start mt-4">Book Your Experience</a>
</div>
<Image alt="zerofestival" src="/images/swiper-image-3.jpeg" layout='fill'  objectFit='cover'/>
</SwiperSlide>

</Swiper> 
</div>
	</>
	)
}
export default Topsection;