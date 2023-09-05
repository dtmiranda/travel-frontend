import Image from "next/image";
import { MdOutlineStarHalf } from 'react-icons/md'
import cardImage from '../assets/images/VilaMorgana3.jpeg'
import { destinations } from "../constants"
import { AccomodationProps } from "../types";

interface destinationCard {
  destination: AccomodationProps
}


const DestinationCard = ({ destination }: destinationCard) => (
  <div className="rounded-2xl shadow-xl">
    <a href="#" className="">
      <Image src={`${destination.photos}`} height={15} width={23} alt="product image" />
    </a>



    <div className="p-4">
      <div className="flex justify-between items-start flex-row">
        <a href="#">
          <h5 className="text- font-semibold tracking-tight text-gray-700 hover:text-gray-500 hover:underline">{destination.name}</h5>
        </a>

        <div className="flex justify-center items-center">
          <MdOutlineStarHalf size={18} color='ffff' />
          <p className="pl-2 text-base font-light text-gray-800">{destination.rating}</p>
        </div>


      </div>

      <p className="py-1 text-sm font-light text-gray-600">{destination.address}</p>


      <div className="flex justify-start items-center">
        <span className="text-base font-semibold text-gray-700">{destination.price}</span>
        <p className="pl-1 text-base font-light text-gray-700"> night</p>

      </div>
    </div>

  </div>

)



export default function Destination() {
  return (
    <>
      <h5 className="text-transparent text-center bg-clip-text mt-16 mb-3 text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl text-gray-700">
        Popular
        <span className='text-green-900'> Destination</span>
      </h5>

      <p className="pb-4 text-gray-500 text-center sm:text-sm md:text-lg lg:text-xl dark:text-gray-600">
        Visite memorible places
      </p>

      <div className='flex justify-start flex-col, items-center flex-wrap'>
        {destinations.map((destination) => {
          return (
            <div key={destination.id}>
              <DestinationCard destination={destination} />

            </div>
          )
        })

        }
      </div>
      <div className="w-full p-2 md:w-1/2 md:my-1.5 md:mb lg:float-left lg:w-1/4">

      </div>


    </>

  )
}