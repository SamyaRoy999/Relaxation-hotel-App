

import { useForm } from "react-hook-form"

import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"


// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { updateUserProfile, user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, name, photoUrl } = data
        updateUserProfile(name, photoUrl)
        console.log(data);
        console.log(user);
    }

    return (
        <div className=" w-80">
            <Helmet>
                <title> Relaxation | UPDATEPROFILE</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className="flex flex-row items-center justify-center lg:justify-start">
                    <p className="mb-0 me-4 text-lg">Sign in with</p>
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
                        Name
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
                        email
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
                        Photo Url
                    </label>
                </div>

                <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Login
                </button>
                <div className="text-center lg:text-left">
                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                        Already have an account
                        {/* <Link to='/login' className="text-danger p-4 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                            Login here</Link> */}
                    </p>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile