import { useEffect, useState } from "react";


const PrivateEvents = () => {
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('/events.json')
            .then(response => response.json())
            .then(data => setEventsData(data))
            .catch(error => console.error('Error fetching events data:', error));
    }, []);

    return (
        <div className=" container mx-auto font-montserrat">
            <h1 className="mb-4 text-center text-4xl py-8 font-bold text-gray-900 dark:text-white">Host Unforgettable Events: Luxury Venues for Every Occasion</h1>
            {eventsData.map(event => (
                <div key={event.id}>
                    <div className="flex justify-center">
                        <img src={event.image} alt={event.venue_name} />
                    </div>
                    <h2 className="mb-4 py-5 text-center text-xl font-bold text-gray-900 dark:text-white">{event.venue_name}</h2>
                    <p className=" pl-4 lg:px-36 text-center text-[#606060] text-lg pb-3 lg:pb-6 flex items-center gap-3">{event.description}</p>

                    <ul className="max-w-md pb-7 mx-auto  text-center space-y-1 pl-4 text-gray-500 list-inside dark:text-gray-400">
                        {event.amenities.map((item, index) => (

                            <li className="flex items-center" key={index}>
                                <svg className="w-3.5 h-3.5 me-2 text-gray-900 dark:text-gray-900  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                {item}
                            </li>

                        ))}

                    </ul>
                </div>
            ))}
        </div>
    )
}

export default PrivateEvents