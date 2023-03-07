import Image from "next/image";
import Link from "next/link";
import { MdLocationPin } from 'react-icons/md'
import cardImage from '../assets/images/cover-poll.jpg'

export default function AccomodationCard(){
  return(

    <section className="w-full p-2 md:w-1/2 md:my-1.5 md:mb lg:float-left lg:w-1/4">
        <div className="rounded-2xl shadow-xl">
            <a href="/accomodation_details" >
                <Image src={cardImage} alt="product image" className="w-full h-auto rounded-t-2xl"/>

            </a>
            
            
            <div className="p-4">
                <div className="flex justify-between items-center mt-2.5 mb-5">
                    <a href="/accomodation_details">
                        <h5 className="text-lg font-normal tracking-tight text-gray-700">Odjo D'ago</h5>
                    </a>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                </div>
                <div className="flex items-center flex-row">
                    <MdLocationPin size={20} color='#1565c0'/>
                    <p className="ml-1  text-gray-500">Santiago, Calheta São Miguel</p>
                </div>
                <div className="flex justify-start items-center">
                    <span className="pt-2 text-lg font-semibold text-blue-600">$599 </span>
                    <p className="pt-2 text-base font-light text-gray-700"> /Person</p>
                    
                </div>
            </div>
        </div>

    </section>

  )
}