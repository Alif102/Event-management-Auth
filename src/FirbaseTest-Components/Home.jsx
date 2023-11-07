import { useLoaderData } from "react-router-dom"
// import Banner from "../Pages/Banner"
import ServiceCards from "../ServiceCards/ServiceCards"
import Shop from "../Pages/Shop"
import Contact from "../Pages/Contact"
import EventBanner from "./EventBanner"
import Footer from "./Footer"

const Home = () => {
  const serviceCards = useLoaderData()
  
  return (
    <div>
      <EventBanner/>
      <ServiceCards serviceCards= {serviceCards}></ServiceCards>
      <Shop/>
      <Contact/>
      <Footer/>
      

      
    </div>
  )
}

export default Home