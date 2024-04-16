import { Helmet } from "react-helmet-async"
import Banner from "../../components/Banner/Banner"
import EstateSection from "../../components/EstateSection/EstateSection"
import Testimonials from "../../components/Testimonials/Testimonials"



const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Relaxation | HOME</title>
      </Helmet>
      <Banner />
      <EstateSection />
      <Testimonials />
    </div>
  )
}

export default Home