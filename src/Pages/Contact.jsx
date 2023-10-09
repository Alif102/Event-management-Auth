import {BsEnvelopeOpenHeart,BsArrowThroughHeart} from 'react-icons/bs'
import {FaMobileAlt} from 'react-icons/fa';
import {BiDonateHeart} from 'react-icons/bi';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect( ()=> {
    Aos.init({duration: 3000});
  },[])
  return (
    <div>
        <div className="flex flex-col justify-center items-center space-y-4 ">

      
<h2 className="font-serif text-gray-500 mt-14 text-2xl" data-aos="fade-up">Contact Details</h2>
<h2 className="text-4xl w-[300px] md:w-[700px] font-sans"data-aos="fade-up"> If you would like to know more about my work or process feel free to get in touch
</h2>
</div>

<div className='grid max-w-[1000px] mx-auto md:grid-cols-4 mt-16 mb-9 gap-6' >
    <div className='flex justify-center items-center flex-col space-y-7 text-center'>
    <h2 className='text-8xl  text-pink-600'><FaMobileAlt /></h2>
    <h2 className='text-3xl font-serif mb-9 mt-8'>Phone</h2>
    <div>
    <h2 className='text-pink-600 text-xl'>+1(800)123-4567</h2>
    <h2 className='text-pink-600 text-xl'>+1(800)123-4567</h2>
    </div>
    </div>
    
    <div className='flex justify-center items-center flex-col space-y-7 text-center'>
    <h2 className='text-8xl  text-pink-600'><BiDonateHeart /></h2>
    <h2 className='text-3xl font-serif mb-9 mt-8'>Hours</h2>
    <div>
    <h2 className=' text-xl'>Monday – Saturday</h2>
    <h2 className=' text-xl'>9AM – 8PM</h2>
    </div>
    </div>  


    <div className='flex justify-center items-center flex-col space-y-7 text-center'>
    <h2 className='text-8xl  text-pink-600'><BsEnvelopeOpenHeart /></h2>
    <h2 className='text-3xl font-serif mb-9 mt-8'>E-Mail</h2>
    <div>
    <h2 className='text-pink-600 text-xl'>info@planmyday.com</h2>
    <h2 className='text-pink-600 text-xl'>www.planmyday.com</h2>
    </div>
    </div> 


    <div className='flex justify-center items-center flex-col space-y-7 text-center'>
    <h2 className='text-8xl  text-pink-600'><BsArrowThroughHeart /></h2>
    <h2 className='text-3xl font-thin font-serif mb-9 mt-8'>Address</h2>
    <div>
    <h2 className=' text-xl'>37 Park Avenue,Suite 26</h2>
    <h2 className=' text-xl'>New York, NY 10152</h2>
    </div>
    </div> 
</div>
    </div>
  )
}

export default Contact