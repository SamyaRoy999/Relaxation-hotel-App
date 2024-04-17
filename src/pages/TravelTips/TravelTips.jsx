import { Helmet } from "react-helmet-async"


const TravelTips = () => {
    return (
        <div
            className="w-full container font-poppins  mx-4  sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
            <Helmet>
                <title> Relaxation | TRAVELTIPS</title>
            </Helmet>
            <div className=' relative '>
                <div className="absolute inset-0 bg-[#091926] opacity-50"></div>
                <div className=' absolute bottom-[25%] text-white'>
                    <h3 className=' text-3xl md:text-5xl lg:text-6xl font-montserrat mx-4 lg:mx-16 font-normal  container mb-12'>Luxury Travel Hacks:  <br /> Enhancing Your Travel <br /> Experience</h3>

                </div>
                <div className=''>
                    <img className='object-cover h-[600px] w-full ' src='https://i.ibb.co/Lt2V0nW/neom-e-OWabm-CNEdg-unsplash.jpg'></img>
                </div>
            </div>

            <div className=" mt-2 mx-12 md:mx-24  lg:mx-32">

                <h2 className=" text-5xl py-3 lg:py-7 font-bold"></h2>
                <p className="text-[#606060] text-lg pb-3 lg:pb-6 "></p>

                <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">What Is Luxury Travel?</h2>
                <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3">Before we delve into the finer details, let’s define what luxury travel truly means. Luxury travel goes beyond the usual tourist experience. It’s about indulgence, exclusivity, and creating memories that last a lifetime. When you embark on a luxury journey, you can expect the following: </p>
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Exceptional Accommodations</h2>
                <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3">Luxury travel often includes stays at opulent hotels, private villas, or even lavish resorts. These accommodations offer top-notch amenities, personalized service, and breathtaking views. </p>
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Exquisite Dining</h2>
                <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3">Savor gourmet meals prepared by world-renowned chefs. Luxury travel is synonymous with fine dining experiences that tantalize your taste buds. </p>
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Unique Experiences</h2>
                <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3">Whether it’s a private helicopter tour over a tropical island or a champagne toast atop the Eiffel Tower, luxury travel is all about unique and exclusive experiences.</p>
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Impeccable Service</h2>
                <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3">Expect unparalleled service throughout your journey. Luxury travelers are pampered with attention to detail and a dedicated concierge at their disposal.</p>

                <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Choosing Your Luxury Destination</h2>
                <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3">The world is filled with enticing destinations for luxury travelers. Here are some top picks:</p>
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">The Maldives — Paradise on Earth</h2>
                <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3">The Maldives is a haven for luxury travelers. With its overwater bungalows, crystal-clear waters, and vibrant coral reefs, it’s the epitome of tropical luxury.</p>

                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Paris — The City of RomanceParis — The City of Romance</h2>
                <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3">The Maldives is a haven for luxury travelers. With its overwater bungalows, crystal-clear waters, and vibrant coral reefs, it’s the epitome of tropical luxury.</p>
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Santorini — The Greek Gem</h2>
                <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3">Santorini’s picturesque landscapes and stunning sunsets make it a must-visit destination for luxury seekers. Stay in a cave hotel and relish the tranquility.</p>
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">The Maldives — Paradise on Earth</h2>
                <p className=" pl-4 text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3">The Maldives is a haven for luxury travelers. With its overwater bungalows, crystal-clear waters, and vibrant coral reefs, it’s the epitome of tropical luxury.</p>

            </div>

            <div className="p-4 border-t mx-8 mt-2">
                <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">.</button>
            </div>
        </div>
    )
}

export default TravelTips

{/* <a href="https://ibb.co/XsvcWSg"><img src="https://i.ibb.co/Lt2V0nW/neom-e-OWabm-CNEdg-unsplash.jpg" alt="neom-e-OWabm-CNEdg-unsplash" border="0"></a> */ }