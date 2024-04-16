
const Footer = () => {
    return (
        <div>
            <div className=" bg-[#F3F4F6]">
                <div >
                    <div className="p-5 col-span-4 text-center ">
                        <div className="flex justify-center mb-3">
                            <div className='w-20'>
                                <img src="https://i.ibb.co/tYShWGR/depositphotos-183079166-stock-illustration-hotel-tourism-holiday-summer-beach.webp" alt="" />
                            </div>
                            <a className="text-3xl font-bold font-montserrat flex items-center"> Relaxa<span className=' text-[#4793AF]'>tion</span></a>
                        </div>
                        <p className=" text-sm font-poppins mb-3">Embark on a journey of luxury and elegance with our curated collection of exclusive resorts <br /> and unforgettable experiences. Plan your getaway today!</p>
                    </div>
                </div>
                <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-3 sm:grid-cols-2 mx-auto">
                    <div className="p-5">
                        <div className="text-sm uppercase text-[#4793AF] font-bold">Explore Destinations</div>
                        <a className="my-3 block" href="/#">Discover Luxury Resorts <span className="text-teal-600 text-xs p-1"></span></a>
                        <a className="my-3 block" href="/#">Exotic Destinations <span className="text-teal-600 text-xs p-1"></span></a>
                        <a className="my-3 block" href="/#">Plan Your Dream Vacation <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-[#4793AF] font-bold">Connect with Us</div>
                        <a className="my-3 block" href="/#">Follow Us on Social Media <span className="text-teal-600 text-xs p-1"></span></a>
                        <a className="my-3 block" href="/#">Subscribe to Our Newsletter <span className="text-teal-600 text-xs p-1"></span></a>
                        <a className="my-3 block" href="/#">Contact Our Team <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-[#4793AF] font-bold">About Us</div>
                        <a className="my-3 block" href="/#">Learn About Our Mission <span className="text-teal-600 text-xs p-1"></span></a>
                        <a className="my-3 block" href="/#">Meet Our Travel Experts <span className="text-teal-600 text-xs p-1"></span></a>
                        <a className="my-3 block" href="/#">Why Choose Us? <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>


                </div>
                <div
                    className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white">
                    <div className="container px-6 pt-6">

                        <div className="mb-6 flex justify-center space-x-2">
                            <a
                                href="#!"
                                type="button"
                                className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                <span className="[&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 320 512">

                                        <path
                                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                    </svg>
                                </span>
                            </a>

                            <a
                                href="#!"
                                type="button"
                                className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512">

                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </span>
                            </a>

                            <a
                                href="#!"
                                type="button"
                                className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512">

                                        <path
                                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                    </svg>
                                </span>
                            </a>

                            <a
                                href="#!"
                                type="button"
                                className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 496 512">

                                        <path
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                    </svg>
                                </span>
                            </a>
                        </div>


                        <div>
                            <form action="">
                                <div
                                    className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                                    <div className="md:mb-6 md:ms-auto">
                                        <p className=" text-[#4793AF]">
                                            <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </div>


                                    <div className="relative md:mb-6" data-twe-input-wrapper-init>
                                        <input
                                            type="email"
                                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-[#4793AF] data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                            id="exampleFormControlInputEmail"
                                            placeholder="Email address" />
                                        <label
                                            for="exampleFormControlInputEmail"
                                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                                        >Email address
                                        </label>
                                    </div>

                                    <div className="mb-6 md:me-auto">
                                        <button
                                            type="submit"
                                            className="inline-block text-white bg-[#4793AF] rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                                            data-twe-ripple-init
                                            data-twe-ripple-color="light">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="w-full bg-[#36809a] font-latothin opacity-70  text-white p-4 text-center">
                        © 2023 Copyright:
                        <a className="font-semibold" href="https://tw-elements.com/"
                        >Luxe Escapes Hub</a
                        >
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Footer