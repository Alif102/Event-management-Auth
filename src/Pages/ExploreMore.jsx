/* eslint-disable react/prop-types */
import {BiSolidPhoneCall} from 'react-icons/bi'

const ExploreMore = ({detail}) => {
    const { wed_desc1, ques2, ans2, details_img, wed_desc2, wed_desc3} = detail ;


  return (
    <div >
    <div className='flex mt-16 flex-col md:flex-row gap-6 justify-center items-center'>
      <div>
      <img className="rounded-md md:w-[500px]" src={details_img} alt="img" />

      </div>

       
       <div className=''>
       <h2 className="text-xl text-slate-600 w-[500px] mb-5">{wed_desc1}</h2>
        <h2 className=' w-[500px]  text-xl'>{wed_desc2}</h2>
        <h2 className=' w-[500px]  text-xl'>{wed_desc3}</h2>


        </div> 


    </div>

    
    <div className='mt-10 items-center flex justify-center flex-col mb-5 md:ml-10'>
       <h2 className="text-xl font-bold  text-slate-700 w-[500px] mb-5">{ques2}</h2>
        <h2 className='w-[500px] md:w-[800px]  text-xl'>{ans2}</h2>
        </div>

        <div className="flex gap-4 items-center justify-center mb-3 mt-3">
        <button type="button" className="text-blue bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex justify-center items-center gap-3"><BiSolidPhoneCall className='text-xl'/> Call Now</button>
        
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
  </svg>
  Get Best Price
</button>
        </div>


    </div>

    

  )
}

export default ExploreMore