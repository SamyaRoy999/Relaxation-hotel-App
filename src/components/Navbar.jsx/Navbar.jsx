import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
const Navbar = () => {

    const { userSignOut, user} = useContext(AuthContext)

    const NabList = <>
        <NavLink to='/' className=' mr-3'><a>Home</a></NavLink>
        <NavLink to='/updateProfile' className=' mr-3'><a>UpdateProfile</a></NavLink>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NabList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NabList}
                </ul>
            </div>
            <div className="navbar-end">
                {user  ? <><a className="btn" onClick={() => userSignOut()}>Logout</a>
                    <div className="">
                        <div className="group relative cursor-pointer py-2">

                            <div className="flex items-center justify-between space-x-5 bg-white px-4">
                                <a className="menu-hover  " onClick="">
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                                <a className="my-2 block border-b  w-full border-gray-100  font-semibold text-gray-500 hover:text-black ">
                                    {user.displayName}
                                </a>
                               
                            </div>
                        </div>
                    </div></> : <Link to='./login'><button>Login</button></Link>}
            </div>
        </div>
    )
}

export default Navbar