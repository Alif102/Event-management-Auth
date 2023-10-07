/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import ExploreMore from "./ExploreMore";

const Explore = () => {
    

    const [detail, setDetail] = useState({});
    // const [detail, setDetail] = useState({});

    const {id} = useParams();
    

    const details = useLoaderData();
   

    useEffect(() => {
        const idInt = parseInt(id)
        const findDetails = details.find(item => item.id === idInt  );
        
        setDetail(findDetails)
    }, [details,id])
    

    

  return (
    <div>
       
       <ExploreMore detail ={detail}></ExploreMore>
       

    </div>
  )
}

export default Explore