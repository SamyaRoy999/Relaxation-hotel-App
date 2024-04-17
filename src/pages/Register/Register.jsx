import { Link, useLocation, useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser, setName, setPhoto, updateUserProfile } = useContext(AuthContext)

    const [passwordIcon, setPasswordIcon] = useState(false)
    //navigation system

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || "/"

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, photoUrl, name } = data
        setName(name)
        setPhoto(photoUrl)
        if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
            toast.error('Password must have at least 6 characters, including uppercase and lowercase letters.')
            return;
        }

        createUser(email, password)

            .then((userCredential) => {
                updateUserProfile(name, photoUrl).then(() => {
                    if (userCredential.user) {
                        toast.success("Registration Successful!")
                        setTimeout(() => {
                            navigate(from)
                        }, 2000);
                    }
                })
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
                toast.error("User is Alrady Exgist")
            });

    }
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <section className="w-full lg:h-screen ">
            <Helmet>
                <title> Relaxation | REGISTER</title>
            </Helmet>
            <div className="lg:h-screen">
                <ToastContainer />
                <div 
                 data-aos="fade-right"
                    className="flex  flex-wrap justify-center flex-1">
                    <div
                        className="shrink-1 mb-12 relative  grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className=" absolute top-[40%] text-center right-[15%] md:right-[20%] lg:right-[20%] text-white">
                            <h3 className=" text-6xl font-bold font-poppins mb-5">Join our </h3>
                            <p className="text-xl ">Luxe Community! Register to unlock  <br /> exclusive resort deals.</p>
                        </div>
                        <img
                            src="https://i.ibb.co/hDVHVJv/luxury-3115234-1280.jpg"
                            className="w-full h-96  lg:h-[90vh]"
                            alt="Sample image" />
                    </div>

                    <div data-aos="fade-left" className="mb-12 md:mb-0 flex items-center justify-center flex-1">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div
                                className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="mb-0 me-4 text-2xl font-poppins text-gray-600 font-bold">Register</p>
                            </div>
                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                    Or
                                </p>
                            </div>


                            <div className="relative mb-4 h-11 w-full min-w-[350px]">
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

                            <div className="relative mb-4 h-11 w-full min-w-[350px]">
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

                            <div className="relative mb-4  h-11 w-full min-w-[350px]">
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

                            <div className=" mb-4 relative   h-11 w-full min-w-[200px]">
                                <input placeholder="Password"

                                    type={passwordIcon ? "text" : "password"}
                                    name="password"
                                    className="peer h-full  w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className=" text-red-400">This field is required</span>}
                                <div onClick={() => setPasswordIcon(!passwordIcon)} className=" absolute right-0 top-4">
                                    {passwordIcon ? <FaEye /> : <FaEyeSlash />}
                                </div>
                                <label
                                    className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    password
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="inline-block w-full rounded bg-[#4793AF] px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                Register
                            </button>
                            <div className="text-center ">
                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Already have an account
                                    <Link to='/login' className="text-danger text-[#4793AF] p-2 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                                        Login here</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register