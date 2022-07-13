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
          delay: 2500,
          disableOnInteraction: false,
        }} 
className="mySwiper">
<SwiperSlide>
 <div className="slidertext text-gray-900">Welcome to a multiverse!
  <div className="text-base text-left text-gray-800 font-bold" style={{maxWidth:"600px"}}>
  Ideal for those who wanna have a memorable time yet leave no carbon footprint.
  </div>
  <a href="#pakage" className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-8 text-gray-50 text-base uppercase md:self-start mt-4">Book Now</a>
  </div>
   <Image alt="zerofestival" src="https://encamp-media-files.s3.ap-south-1.amazonaws.com/dawki44.jpeg" layout='fill'  objectFit='cover'/>
</SwiperSlide>

<SwiperSlide>
 <div className="slidertext text-gray-900">Where music meets sustainability.
    <div className="text-base text-left text-gray-800 font-bold" style={{maxWidth:"600px"}}>
    Step into to a multiverse of music, culture, joy and eco-friendly living at ZIRO, with Encamp.
    </div>
    <a href="#pakage" className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-8 text-gray-50 text-base uppercase md:self-start mt-4">Book Now</a>
</div>
<Image alt="zerofestival" src="https://encamp-media-files.s3.ap-south-1.amazonaws.com/krem-chympe.jpeg" layout='fill'  objectFit='cover'/>
</SwiperSlide>
        
<SwiperSlide>
<div className="slidertext text-gray-900">Live ZIRO with ZERO impact!
 <div className="text-base text-left text-gray-800 font-bold" style={{maxWidth:"600px"}}>
While the vibe absolutely transports you to a parallel universe of serenity, you
certainly don’t disrupt the physical ecosystem – thanks to our environment first
approach.
 </div>
 <a href="#pakage" className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-8 text-gray-50 text-base uppercase md:self-start mt-4">Book Now</a>
</div>
<Image alt="zerofestival" src="https://encamp-media-files.s3.ap-south-1.amazonaws.com/khanapara33.jpeg" layout='fill'  objectFit='cover'/>
</SwiperSlide>

</Swiper> 
</div>
	</>
	)
}
export default Topsection;