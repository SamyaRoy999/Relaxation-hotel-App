import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.jsx/Navbar"
const Roots = () => {
    return (
        <div className=" mx-auto container">
            <Navbar/>
            <Outlet></Outlet>
        </div>
    )
}

export default Roots