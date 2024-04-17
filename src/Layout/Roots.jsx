import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.jsx/Navbar"
import Footer from "../components/Footer/Footer"

const Roots = () => {
    return (
        <div className=" font-latothin">
            <div className="mx-auto ">
                <Navbar />
            </div>
            <Outlet></Outlet>
            <div className=" mt-5 mx-auto text-center lg:text-left">
                <Footer/>
            </div>
        </div>
    )
}

export default Roots