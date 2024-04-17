import { useContext, useEffect } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    console.log("bangla ", user);
     
    useEffect(() => {
        AOS.init({duration:1000});
    }, [])

    return (
        <div data-aos="fade-up" className="min-h-screen font-poppins dark:bg-slate-800 gap-6 flex items-center justify-center">
            <Helmet>
                <title> Relaxation | USERP-PROFILE</title>
            </Helmet>
            <div
                className="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                <div className="flex items-center gap-4">
                    <img src={user.photoURL}
                        className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                    />
                    <div className="w-fit transition-all transform duration-500">
                        <h1 className="text-gray-600 dark:text-gray-200 font-bold">
                            {user.displayName}
                        </h1>
                        <p className="text-gray-400">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile