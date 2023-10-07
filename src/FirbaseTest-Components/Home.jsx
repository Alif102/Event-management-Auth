import { useLoaderData } from "react-router-dom"
import Banner from "../Pages/Banner"
import ServiceCards from "../ServiceCards/ServiceCards"

const Home = () => {
  const serviceCards = useLoaderData()
  return (
    <div>
      <Banner/>
      <ServiceCards serviceCards= {serviceCards}></ServiceCards>

      
    </div>
  )
}

export default Home