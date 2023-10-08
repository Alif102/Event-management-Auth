
const About = () => {
  return (

    <div>
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 mb-16 md:w-[1000px] mx-auto gap-5">
        <div className="">
            <h2 className="text-3xl font-serif text-center text-pink-600 mb-8  ">About Us</h2>
            <h2 className="text-gray-500 w-[400px] mx-auto"> It all started with the desire to mark love stories with a “different wedding”, a non-conformist event, unforgettable for you, the bride and groom</h2>
            <h2 className="text-gray-500 w-[400px] mx-auto" >Plan My Day Agency is a cool vibe that breaks away from the idea of traditional weddings and challenges you to experience the “new”, the feeling of being with your loved one in a very special place, of joining your destinies in a unique way.

            </h2>
        </div>
        <div>
            <img className="rounded-md" src="https://media.istockphoto.com/id/1380516073/photo/female-party-planner-arranging-decorations-for-a-child-birthday-party.jpg?s=612x612&w=0&k=20&c=7LWTCxgrl-8VmX8J0YToQU69_HJeBhj47ufevbxQtFU=" alt="img" />
        </div>
    </div>



<h2 className=" text-center text-3xl font-mono text-pink-600 mb-10 ">How are we different?</h2>
    <div className="grid mb-24 md:max-w-[1200px] mx-auto grid-cols-1 md:grid-cols-3 gap-9">
        <div className=" col-span-1">
            <img className="rounded-md" src="https://weddo.agency/wp-content/uploads/2021/01/3-15-1144x763.png" alt="img" />
        </div>
        <div  className=" col-span-1">
            <h2 className="text-2xl font-mono lg:text-center  mb-5">Customized TOP services</h2>
            <h2 className="text-gray-500 font-medium">
            The key of planning a dream wedding is adaptation, and WedDo Agency offers customized services, from planning, coordinating and organizing a complete wedding to any other type of ceremony or specific aspects. We differentiate ourselves from the competition by planning real weddings, not just symbolic ones. In addition, the suppliers we work with are to be tested and certified and the consultancy we offer is unlimited.

            </h2>
        </div>
        <div  className=" col-span-1">
            <img className="rounded-md" src="https://weddo.agency/wp-content/uploads/2020/12/PhotoDaniel-2018-IoanaMarius-6-1144x817.jpg" alt="img" />
        </div> 
    </div>
    </div>
  )
}

export default About