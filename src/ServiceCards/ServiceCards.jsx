/* eslint-disable react/prop-types */
import Card from "./Card"

const ServiceCards = ({serviceCards}) => {
  return (
    <div className="mt-12">

<div className="flex flex-col justify-center items-center space-y-4 ">

      
<h2 className="font-serif text-gray-500 mt-14 text-2xl">Our Services</h2>
<h2 className="text-4xl w-[300px] md:w-[700px] font-sans">Welcome to PlanMyDay Event Agency!
</h2>

<p className="lg:w-[765px] w-[300px] font-serif text-gray-500">Event management services are professional services that help plan, organize, and execute various types of events, ranging from small gatherings to large-scale conferences and festivals.
Event managers or event planning companies offer their expertise to ensure that events run smoothly and successfully.</p>
</div>


    <div className="grid max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md mb-12 gap-4">
         {/* cards.map(card => <Card key={card.id} card={card} ><Card/>) */}
         {

         
         serviceCards.map(serviceCard => <Card key={serviceCard.id} serviceCard={serviceCard} ></Card>)
}
    </div>
    </div>
  )
}

export default ServiceCards