/* eslint-disable react/prop-types */
import Card from "./Card"

const ServiceCards = ({serviceCards}) => {
  return (
    <div className="grid max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md mb-12 gap-4">
         {/* cards.map(card => <Card key={card.id} card={card} ><Card/>) */}
         {

         
         serviceCards.map(serviceCard => <Card key={serviceCard.id} serviceCard={serviceCard} ></Card>)
}
    </div>
  )
}

export default ServiceCards