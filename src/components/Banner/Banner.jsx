
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper text-center   "
            >

                <SwiperSlide className=' relative'>
                    <div className=' absolute bottom-0 text-white'>
                        <h3>Explore Timberland Estates</h3>
                        <p className="">Find expansive timberland properties offering sustainable forestry opportunities and natural beauty.</p>
                    </div>
                    <div className=''>
                        <img className='object-cover h-[600px] w-full rounded-xl' src='https://i.ibb.co/NCJ765D/1bg-min.jpg'></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' relative'>
                    <div className=' absolute bottom-0 text-white'>
                        <h3>Discover Serenity in the Woods</h3>
                        <p className="">Escape to tranquil forested landscapes, ideal for eco-friendly development or private retreats.</p>
                    </div>
                    <div className=''>
                        <img className='object-cover h-[600px] w-full rounded-xl' src='https://i.ibb.co/bXV899P/2bg-min.jpg'></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' relative'>
                    <div className=' absolute bottom-0 text-white'>
                        <h3>Embrace Nature s Beauty</h3>
                        <p className="">Discover sprawling forests with diverse ecosystems, perfect for conservation and outdoor recreation.</p>
                    </div>
                    <div className=''>
                        <img className='object-cover h-[600px] w-full rounded-xl' src='https://i.ibb.co/8br65sR/3bg-min.jpg'></img>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Banner
