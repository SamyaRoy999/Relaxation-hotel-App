import { Link } from "react-router-dom"

import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { singInUser, googleLogin, githubLogin, setLogin, } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data
        singInUser(email, password)
            .then((user) => {
                console.log(user);
                setLogin(true)
                toast.success('Login Successful!')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                toast.error(errorMessage)
            });
    }

    return (
        <section className="w-full h-[80vh]  bg-[#CED4DA]">
            <div className="h-full">
                <ToastContainer />
                <div
                    className="flex h-full flex-wrap  justify-center lg:justify-between">
                    <div
                        className="shrink-1 mb-12 relative  grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <div className="absolute inset-0 bg-green-800  opacity-50"></div>

                        <img
                            src="https://i.ibb.co/WtmF8wb/pexels-photo-1423600.jpg"
                            className="w-full h-[80vh]"
                            alt="Sample image" />
                    </div>

                    <div className="mb-12 md:mb-0 flex items-center md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <div>

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

                                <div className="relative mb-4  h-11 w-full min-w-[200px]">
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

                                <div className="mb-6 flex items-center justify-between">

                                    <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                                        <input
                                            className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                                            type="checkbox"
                                            value=""
                                            id="exampleCheck2" />
                                        <label
                                            className="inline-block ps-[0.15rem] hover:cursor-pointer"
                                        // for="exampleCheck2"
                                        >
                                            Remember me
                                        </label>
                                    </div>


                                    <a href="#!">Forgot password?</a>
                                </div>


                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light">
                                    Login
                                </button>

                            </form>
                            <button onClick={googleLogin} className=" btn btn-secondary">google</button>

                            <button onClick={githubLogin} className=" btn btn-secondary">Github</button>

                            <div className="text-center lg:text-left">
                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Do not have an account
                                    <Link to='/register' className="text-danger p-2 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
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
{/* <a href="https://ibb.co/ySH5v1w"><img src="https://i.ibb.co/WtmF8wb/pexels-photo-1423600.jpg" alt="pexels-photo-1423600" border="0"></a><br /><a target='_blank' href='https://freeonlinedice.com/'>roll dice online</a><br /> */ }