import { useLoaderData } from "react-router-dom"
// import Banner from "../Pages/Banner"
import ServiceCards from "../ServiceCards/ServiceCards"
import Shop from "../Pages/Shop"
import Contact from "../Pages/Contact"

const Home = () => {
  const serviceCards = useLoaderData()
  
  return (
    <div>
      
      <ServiceCards serviceCards= {serviceCards}></ServiceCards>
      <Shop/>
      <Contact/>

      
    </div>
  )
}

export default Home