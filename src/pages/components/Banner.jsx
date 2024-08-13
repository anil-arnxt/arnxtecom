import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const Banner = () => {
  return (
    <div>

<Swiper navigation= {true} modules={[Navigation]} effect="fade" className="flex justify-center items-center" style={{height:'600px'}}>
        <SwiperSlide >
          <div className="w-100 h-[600px]" style={{ backgroundImage: "url('/images/slide1.jpg')", backgroundRepeat:'no-repeat', backgroundSize:'100%'}}>
            {/* <div className="container absolute left-40 top-40">
              <div className="">
                <h2 className='text-4xl font-bold text-white-400'>Sale of the summer collection</h2>
                <a href="#"  className='text-xl font-semibold text-black-400'>Shop now </a>
              </div>
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-100 h-[600px]" style={{ backgroundImage: "url('/images/slide2.jpg')",  backgroundRepeat:'no-repeat', backgroundSize:'100%'}}>
            {/* <div className="container absolute left-40 top-40">
              <div className="page-intro__slide__content">
                <h2 className='text-4xl font-bold text-white-400'>Make your house into a home</h2>
                <a href="#" className='text-xl font-semibold text-black-400'><i className="icon-right"></i>Shop now</a>
              </div>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 h-[600px]" style={{ backgroundImage: "url('/images/slide3.jpg')",  backgroundRepeat:'no-repeat', backgroundSize:'100%'}}>
            {/* <div className="container absolute left-40 top-40">
              <div className="page-intro__slide__content">
                <h2 className='text-4xl font-bold text-white-400'>Make your house into a home</h2>
                <a href="#" className='text-xl font-semibold text-black-400'><i className="icon-right"></i>Shop now</a>
              </div>
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default Banner
