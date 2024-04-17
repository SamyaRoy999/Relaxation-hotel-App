import { Link, useLocation, useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"
import { useContext,  } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { singInUser, googleLogin, githubLogin, } = useContext(AuthContext)

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
        const { email, password } = data
        singInUser(email, password)
            .then((user) => {
                
                if (user.user) {
                    toast.success('Login Successful!')
                    setTimeout(() => {    
                        navigate(from)
                    }, 2000);
                }

            })
            .catch(() => {
                toast.error('The email and password do not match our records. Please try again.')
            });
    }



    const hendelSocialLogin = socialLogin => {
        socialLogin()
            .then(result => {
                if (result.user) {
                    toast.success('Login Successful!')
                    setTimeout(() => {
                        navigate(from)
                    }, 2000);
                }
            })



    }
    return (
        <section className="w-full lg:h-screen">
            <Helmet>
                <title> Relaxation | LOGIN</title>
            </Helmet>
            <div className="lg:h-screen">
                <ToastContainer />
                <div
                    className="flex  flex-wrap justify-center flex-1">
                    <div
                        className="shrink-1 mb-12 relative  grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className=" absolute top-[40%] text-center right-[15%] md:right-[20%] lg:right-[20%] text-white ">
                            <h3 className=" text-6xl font-bold font-poppins mb-5">Welcome</h3>
                            <p className="text-xl "> to our Luxe Resort Hub! Dive into <br /> opulent escapes.</p>
                        </div>
                        <img
                            src="https://i.ibb.co/hDVHVJv/luxury-3115234-1280.jpg"
                            className="w-full h-96 lg:h-[87vh]"
                            alt="Sample image" />
                    </div>

                    <div className="mb-12 md:mb-0 flex justify-center items-center flex-1 ">
                        <div >

                            <form onSubmit={handleSubmit(onSubmit)} className="mb-5 ">
                                <div
                                    className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="mb-0 me-4 text-2xl font-poppins text-gray-600 font-bold">Sign in with</p>
                                </div>
                                <div
                                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                                    <p
                                        className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                        Or
                                    </p>
                                </div>


                                <div className="relative mb-4 h-11 w-full min-w-[350px]">
                                    <input placeholder="email"
                                        type="email"
                                        name="email"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                        {...register("email", { required: true })}
                                    />

                                    {errors.email && <span className=" text-red-400">This field is required</span>}
                                    {/* </input> */}
                                    <label
                                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        email
                                    </label>
                                </div>

                                <div className="relative mb-4  h-11 w-full min-w-[350px]">
                                    <input placeholder="password"

                                        type="password"
                                        name="password"
                                        className="peer h-full  w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                                        {...register("password", { required: true })}
                                    />
                                    {errors.password && <span className=" text-red-400">This field is required</span>}

                                    <label
                                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        password
                                    </label>
                                </div>


                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-[#4793AF] mb-5 px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light">
                                    Login
                                </button>

                            </form>
                            <div className="flex flex-col max-w-sm gap-5">

                                <button onClick={() => hendelSocialLogin(googleLogin)} type="button" className="py-2 px-4 flex justify-center items-center  bg-[#b2bfc3] font-bold hover:bg-gray-700 hover:text-white focus:ring-red-500 focus:ring-offset-red-200 text-gray-600 w-full transition ease-in duration-200 text-center text-base  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                                        </path>
                                    </svg>
                                    Sign in with Google
                                </button>

                                <button onClick={() => hendelSocialLogin(githubLogin)} type="button" className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-[#b2bfc3] hover:text-gray-600 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792">
                                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                        </path>
                                    </svg>
                                    Sign in with GitHub
                                </button>

                            </div>

                            <div className="text-center ">
                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Do not have an account
                                    <Link to='/register' className="text-[#4793AF] text-danger p-2 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                                        Register</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login

