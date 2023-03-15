import Image from "next/image";
import Link from "next/link";
import { MdLocationPin } from 'react-icons/md'
import cardImage from '../assets/images/cover-poll.jpg'

import { MdOutlineStarHalf } from 'react-icons/md'


export default function AccomodationCard(props: {
    name: string,
    coordinate: string,
    thumbnails_hotels: string,
    star_range: string,
    city: string,
    price: string,
    

}){
  return(

    <>
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <a href="/accomodation_details">
               <img
                src={props.thumbnails_hotels}
                ///«alt={props.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            /> 
            </a>
            
        </div>
        <div className="mt-4 flex justify-between items-start">
            <div>
                <h3 className="text-sm text-gray-700">
                    <a href="/accomodation_details">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {props.name}
                    </a>
                </h3>
                <p className="mt-1 text-sm font-light text-gray-500">{props.city}</p>
                <p className="text-base font-medium text-green-900">{props.price}  <span className="pl-1 text-base font-light text-gray-700">night</span></p>

            </div>
            <div className="flex justify-center items-center">
                <MdOutlineStarHalf size={18} color='#14532d'/>
                <p className="text-sm font-medium text-green-900">{props.star_range}</p>
            </div>
            
        </div>
    </>  

  )
}