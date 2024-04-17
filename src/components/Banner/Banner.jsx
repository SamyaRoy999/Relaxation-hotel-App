
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
const Banner = () => {
    // import AOS from 'aos';
    // import 'aos/dist/aos.css';
    useEffect(() => {
        AOS.init({duration:1000});
    }, [])
    
    return (
        <>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper text-center z-0 "
            >


                <SwiperSlide className=' relative  '>
                <div className="absolute inset-0 bg-[#091926] opacity-50"></div>
                    <div className=' absolute bottom-[25%] text-white'>
                        <h3 className=' text-4xl md:text-5xl lg:text-6xl font-montserrat font-normal mx-auto container mb-6 lg:mb-12'  data-aos="fade-up">Discover Luxurious Escapes</h3>
                        <p className="  mx-10 md:mx-16 lg:mx-20 mb-8 text-base font-normal font-poppins"  data-aos="fade-up">Embark on a journey to extraordinary destinations where luxury meets unparalleled hospitality. Immerse yourself in opulent accommodations, breathtaking landscapes, and unforgettable experiences that redefine indulgence.</p>
                       
                        <div className="flex gap-4 justify-center "  data-aos="fade-up">

                            <a className="px-6 py-2 min-w-[120px] text-center text-white bg-[#4793AF] border border-[#4793AF] rounded active:text-[#4793AF] hover:bg-transparent hover:text-[#4793AF] focus:outline-none focus:ring"
                               >
                                Book Now
                            </a>

                            <a className="px-6 py-2 min-w-[120px] text-center text-white border border-[#4793AF] rounded hover:bg-[#4793AF] hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                              >
                                Learn More
                            </a>

                        </div>
                    </div>
                    <div className=''>
                        <img className='object-cover h-[600px] w-full ' src='https://i.ibb.co/WsWX5sf/pexels-darrell-fraser-2259226.jpg'></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' relative '>
                <div className="absolute inset-0 bg-[#091926] opacity-50"></div>
                    <div className=' absolute bottom-[25%] text-white'>
                        <h3 className='text-4xl md:text-5xl lg:text-6xl font-montserrat font-normal mx-auto container mb-6 lg:mb-12' data-aos="fade-up">Experience Timeless Elegance</h3>
                        <p className=" mx-10 md:mx-16 lg:mx-20 mb-8 text-base font-normal font-poppins" data-aos="fade-up">Embark on a journey to extraordinary destinations where luxury meets unparalleled hospitality. Immerse yourself in opulent accommodations, breathtaking landscapes, and unforgettable experiences that redefine indulgence.</p>
                       
                        <div className="flex gap-4 justify-center" data-aos="fade-up">

                            <a className="px-6 py-2 min-w-[120px] text-center text-white bg-[#4793AF] border border-[#4793AF] rounded active:text-[#4793AF] hover:bg-transparent hover:text-[#4793AF] focus:outline-none focus:ring"
                               >
                                Book Now
                            </a>

                            <a className="px-6 py-2 min-w-[120px] text-center text-white border border-[#4793AF] rounded hover:bg-[#4793AF] hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                                >
                                Learn More
                            </a>

                        </div>
                    </div>
                    <div className=''>
                        <img className='object-cover h-[600px] w-full ' src='https://i.ibb.co/3f0q9Q5/pexels-boonkong-boonpeng-1134176.jpg'></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' relative '>
                <div className="absolute inset-0 bg-[#091926] opacity-50"></div>
                    <div className=' absolute bottom-[25%] text-white'>
                        <h3 className=' text-4xl md:text-5xl lg:text-6xl font-montserrat font-normal mx-auto container mb-6 lg:mb-12' data-aos="fade-up">Unwind in Ultimate Comfort</h3>
                        <p className="  mx-10 md:mx-16 lg:mx-20 mb-8 text-base font-normal font-poppins" data-aos="fade-up">Escape to secluded retreats where relaxation and rejuvenation await. Immerse yourself in the tranquility of lush landscapes, rejuvenating spa treatments, and unparalleled service that promises an unforgettable getaway.</p>
                       
                        <div className="flex gap-4 justify-center" data-aos="fade-up">

                            <a className="px-6 py-2 min-w-[120px] text-center text-white bg-[#4793AF] border border-[#4793AF] rounded active:text-[#4793AF] hover:bg-transparent hover:text-[#4793AF] focus:outline-none focus:ring"
                                >
                                Book Now
                            </a>

                            <a className="px-6 py-2 min-w-[120px] text-center text-white border border-[#4793AF] rounded hover:bg-[#4793AF] hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                            >
                                Learn More
                            </a>

                        </div>
                    </div>
                    <div className=''>
                        <img className='object-cover h-[600px] w-full ' src='https://i.ibb.co/Tw2spJW/pexels-pixabay-261169.jpg'></img>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Banner

