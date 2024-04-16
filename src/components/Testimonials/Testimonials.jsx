import { useEffect, useState } from "react"


const Testimonials = () => {
    const [tastimonail, setTastimonail] = useState([])
    useEffect(() => {
        fetch('/Testimonials.json')
            .then(res => res.json())
            .then(data => setTastimonail(data))
    }, [])

    return (
        <div>

            <div className="container my-24 mx-auto md:px-6">
                <section className="mb-32 text-center">
                    <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

                    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                        {tastimonail.map(item => (
                            <div key={item.id} className="mb-12 md:mb-0">
                                <div className="mb-6 flex justify-center">
                                    <img src={item.image}
                                        className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                                </div>
                                <h5 className="mb-2 text-lg font-montserrat font-bold">{item.name}</h5>
                                <h6 className="mb-4 font-poppins text-[#4793AF] font-medium  dark:text-primary-400">
                                    {item.job}
                                </h6>
                                <p className="mb-4 font-poppins">
                                    {item.message}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                                        <path fill="currentColor"
                                            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                    </svg>
                                </p>
                                <ul className="mb-0 flex justify-center">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                            <path fill="currentColor"
                                                d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Testimonials