import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
  return (
    <div className='' >

<Carousel autoPlay showStatus={false}>
<div className="w-full h-[400px] md:h-[600px]" style={{ backgroundImage: "url('/images/slide1.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}>
</div>
<div className="w-full h-[400px] md:h-[600px]" style={{ backgroundImage: "url('/images/slide2.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
</div>
<div className="w-full h-[400px] md:h-[600px]" style={{ backgroundImage: "url('/images/slide3.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
</div>
            </Carousel>

{/* 
<Swiper navigation={true} modules={[Navigation]} effect="fade" className="flex justify-center items-center h-[600px] bottom-15" >
        <SwiperSlide>
          <div className="w-full h-[400px] md:h-[600px]" style={{ backgroundImage: "url('/images/slide1.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[400px] md:h-[600px]" style={{ backgroundImage: "url('/images/slide2.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[400px] md:h-[600px]" style={{ backgroundImage: "url('/images/slide3.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
          </div>
        </SwiperSlide>
      </Swiper> */}
   

      
      
    </div>
  )
}

export default Banner
