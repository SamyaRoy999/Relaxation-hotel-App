

import { useForm } from "react-hook-form"

import { useContext, useEffect } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"

  import AOS from 'aos';
    import 'aos/dist/aos.css';

import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const { updateUserProfile, user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const nevigate = useNavigate()
    const onSubmit = (data) => {
        const { name, photoUrl } = data
        updateUserProfile(name, photoUrl)
            .then(() => {

                nevigate('/')
            })

    }
  
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className=" w-80 mx-auto container my-24"  data-aos="fade-up">
            <Helmet>
                <title> Relaxation | UPDATEPROFILE</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className="flex flex-row items-center justify-center lg:justify-start">
                    <p className="mb-0 me-4 text-lg">UpdateProfile</p>
                </div>
                <div
                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                    <p
                        className="mx-4 mb-0 text-center font-semibold dark:text-white">
                        Or
                    </p>
                </div>


                <div className="relative mb-4 h-11 w-full min-w-[200px]">
                    <input placeholder="Name"
                        type="text"
                        name="name"
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        {...register("name", { required: true })}
                    />

                    {errors.name && <span className=" text-red-400">This field is required</span>}

                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        {user.displayName}
                    </label>
                </div>

                <div className="relative mb-4 h-11 w-full min-w-[200px]">
                    <input placeholder="Email"
                        type="email"
                        name="email"
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        {...register("email", { required: true })}
                    />

                    {errors.email && <span className=" text-red-400">This field is required</span>}

                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        {user.email}
                    </label>
                </div>

                <div className="relative mb-4  h-11 w-full min-w-[200px]">
                    <input placeholder="Photo Url"

                        type="photoUrl"
                        name="photoUrl"
                        className="peer h-full  w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        {...register("photoUrl", { required: true })}
                    />
                    {errors.photoUrl && <span className=" text-red-400">This field is required</span>}

                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        {user.photoURL}
                    </label>
                </div>

                <button
                    type="submit"
                    className="inline-block w-full rounded bg-[#4793AF] px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Save
                </button>

            </form>
        </div>
    )
}

export default UpdateProfile