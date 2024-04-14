import { useEffect, useState } from "react"
import EstateCard from "./EstateCard/EstateCard"


const EstateSection = () => {
    const [estateData, setEstateData] = useState()

    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setEstateData(data))
    }, [])

    return (
        <div className=" container mx-auto">

            <div className="text-center mx-auto container py-10 lg:py-20">
                <h1 className=" text-4xl font-latothin font-bold ">Luxury Retreats</h1>
                <p className="  mx-6 lg:mx-12 text-gray-600 font-poppins text-base mt-6">Indulge in unparalleled luxury with our collection of exquisite resorts. Each property offers a unique blend of opulence and tranquility, promising an unforgettable escape for discerning travelers.</p>
            </div>

            <div className="  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {estateData.map(item => <EstateCard key={item.id} estateData={item}/>)}

            </div>
        </div>
    )
}

export default EstateSection