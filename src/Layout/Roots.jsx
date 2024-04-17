import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.jsx/Navbar"
import Footer from "../components/Footer/Footer"
   import AOS from 'aos';
    import 'aos/dist/aos.css';
import { useEffect } from "react";
const Roots = () => {
 
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div className=" font-latothin  min-h-[100vh] overflow-hidden">
            <div className="mx-auto ">
                <Navbar />
            </div>
            <Outlet></Outlet>
            <div data-aos="fade-left" className=" mt-5 mx-auto text-center lg:text-left">
                <Footer />
            </div>
        </div>
    )
}

export default Roots