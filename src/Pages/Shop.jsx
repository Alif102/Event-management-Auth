import Aos from 'aos';
import { useEffect } from 'react';
import {FaGift} from 'react-icons/fa'
import 'aos/dist/aos.css';


const Shop = () => {
  useEffect( ()=> {
    Aos.init({duration: 3000});
  },[])
  return (
    <div>
      <div className="flex text-center flex-col justify-center items-center space-y-4 ">

      
        <h2 className="font-serif text-gray-500 mt-14 text-xl">Our Shop</h2>
       
        <h2 className="text-4xl w-[300px] md:w-[700px] font-sans">Discover Elegant Solutions for Your Big Day</h2>
       
        {/* <p className="lg:w-[800px] w-[400px] font-serif text-gray-500">An Event Planner, or Event Manager, is responsible for organizing corporate or private events for companies or individuals. Their duties include meeting with clients to discuss their needs, maintaining partnerships with vendors and caterers and overseeing the set-up, execution and cleanup of events.</p> */}
        <h2 className='flex justify-center items-center'>_________ <FaGift className='text-xl mx-4 text-pink-600' />  _________ </h2>
        </div>

        <div data-aos="fade-up" className="grid md:max-w-[1000px] items-center mx-auto mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card w-72 h-80  bg-base-100 ">
  <figure className="px-10 pt-10">
    <img src="https://i.etsystatic.com/27749334/r/il/f250f3/3752832757/il_fullxfull.3752832757_f4so.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Zinc Bucket with Chalkboard Label</h2>
    <h2>$50.00</h2>
    
  </div>
</div>



<div className="card w-72  h-80  bg-base-100 ">
  <figure className="px-10 pt-10">
    <img src="https://m.media-amazon.com/images/I/61ZYBMBp-fL._AC_UF1000,1000_QL80_.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Marquee Letter White LED Lights</h2>
    <h2>$180.00</h2>
    
  </div>
</div>



<div className="card w-72  h-80  bg-base-100 ">
  <figure className="px-10 pt-10">
    <img src="https://cdn.shopify.com/s/files/1/0516/6363/4605/files/Bouquet-with-green-fillers-1024x683.jpg?v=1610524369" alt="Shoes" className="rounded-xl h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Housewarming New Home Flower</h2>
    <h2>$50.00</h2>
    
  </div>
</div>




<div className="card w-72  h-80  bg-base-100 ">
  <figure className="px-10 pt-10">
    <img src="https://m.media-amazon.com/images/I/61EDkixrrkL.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Eat Drink and Be Married Wooden Sign</h2>
    <h2>$50.00</h2>
    
  </div>
</div>



        </div>
    </div>
  )
}

export default Shop