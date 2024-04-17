import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EstateCard = ({ estateData }) => {
    const { id, image, estate_title, description, price, location, } = estateData

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div>

            <div
                data-aos="fade-up" className="flex   inset-0 z-50 outline-none focus:outline-none pb-10">
                <div className="block rounded-lg bg-white w-72 ">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                        <img className="rounded-lg  sm:m-h-64 md:h-64 w-full" src={image}
                            alt="" />
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                        <div className=" absolute bottom-0 rounded-lg bg-black opacity-70 p-1">
                            <div className=' flex gap-2 items-center font-bold text-[#78b7cd]'>
                                <FaLocationDot className=' font-extrabold font-poppins' />
                                <p className=' text-sm'>{location}</p>
                            </div>
                        </div>

                    </div>

                    <div className="p-2">
                        <h5 className='  font-montserrat text-xl font-bold mb-2'>{estate_title}</h5>
                        <p className=" text-sm font-normal font-poppins mb-1">{description}</p>
                        <div className=" font-poppins font-medium flex justify-between mt-5">

                            <span className=" text-[#4793AF] text-sm">{price}</span>

                            <Link to={`./estateDetails/${id}`}>
                                <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 flex justify-center items-center gap-3 mb-2">View <FaLongArrowAltRight /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstateCard

EstateCard.propTypes = {
    estateData: PropTypes.any
};