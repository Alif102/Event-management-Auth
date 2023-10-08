/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({serviceCard}) => {
    const {image_url, name, id,  short_description, price} = serviceCard ;
  return (
    <div >
     

<div className="card w-72 bg-base-100 mt-16 shadow-xl">
  <figure><img className="px-3 pt-3" src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-serif">{name}</h2>
    <p className=" text-gray-800"> {short_description}</p>
    
            <span className="text-[18px] font-mono text-gray-500 dark:text-white">Package Start at $<span className="text-[20px] font-bold text-purple-500">{price}</span> </span>
<Link to={`/details/${id}`}>

<button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Explore More</button>

  </Link>
       
  </div>
</div>


    </div>
  )
}

export default Card