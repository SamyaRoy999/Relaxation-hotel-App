import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaChartArea } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";

const EstateDetails = () => {

    const { id } = useParams()

    const [estateDatials, setEstateDatials] = useState([])

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setEstateDatials(data))
    }, [])

    const datials = estateDatials.find((item) => item.id == parseInt(id))
    console.log(datials);
    return (
        <>

            <Helmet>
                <title> Relaxation | LUXURY-RETREATS-DETAILS</title>
            </Helmet>
            {datials && (
              
                <div
                    className="w-full container font-poppins  mx-4  sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
                    <div className="rounded-t-lg md:h-[400px]  lg:h-[400px] overflow-hidden">
                        <img className="object-cover object-top w-full" src={datials.image} alt='Mountain' />
                    </div>
                    <div className=" mt-2 md:mx-24 lg:mx-32">
                        <div className=" py-8">
                            <span className=" px-6  text-white bg-gray-900 p-2 rounded-lg ">{datials.segment_name}</span>
                        </div>
                        <h2 className=" text-5xl py-3 lg:py-7 font-bold">{datials.estate_title}</h2>
                        <p className="text-[#606060] text-lg pb-3 lg:pb-6 ">{datials.description}</p>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Facilities :</h2>
                        <ul className="max-w-md pb-7 space-y-1 pl-4 text-gray-500 list-inside dark:text-gray-400">
                            {datials.facilities.map((item, index) => (

                                <li className="flex items-center" key={index}>
                                    <svg className="w-3.5 h-3.5 me-2 text-gray-900 dark:text-gray-900  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    {item}
                                </li>

                            ))}

                        </ul>
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Area :</h2>
                        <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3"><FaChartArea /> {datials.area}</p>
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Price :</h2>
                        <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3"><HiMiniCurrencyDollar />  {datials.price}</p>
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Status :</h2>
                        <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3"><GrStatusGood /> {datials.status}</p>
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">location :</h2>
                        <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3"> <CiLocationOn />{datials.location}</p>

                    </div>

                    <div className="p-4 border-t mx-8 mt-2">
                        <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">.</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default EstateDetails