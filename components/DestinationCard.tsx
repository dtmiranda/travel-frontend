import Image from "next/image";
import { MdOutlineStarHalf } from 'react-icons/md'
import cardImage from '../assets/images/VilaMorgana3.jpeg'

export default function DestinationCard(){
  return(

    <section className="w-full p-2 md:w-1/2 md:my-1.5 md:mb lg:float-left lg:w-1/4">
        <div className="rounded-2xl shadow-xl">
            <a href="#" className="">
                <Image className="w-full h-auto rounded-t-2xl" src={cardImage} alt="product image" /> 
            </a>

            
            
            <div className="p-4">
                <div className="flex justify-between items-start flex-row">
                    <a href="#">
                        <h5 className="text- font-semibold tracking-tight text-gray-700 hover:text-gray-500 hover:underline">Vila Morgana</h5>
                    </a>

                    <div className="flex justify-center items-center">
                        <MdOutlineStarHalf size={18} color='ffff'/>
                        <p className="pl-2 text-base font-light text-gray-800">4.95</p>
                    </div> 

                    
                </div>

                <p className="py-1 text-sm font-light text-gray-600">Calheta São Miguel</p>
                

                <div className="flex justify-start items-center">
                    <span className="text-base font-semibold text-gray-700">$80 </span>
                    <p className="pl-1 text-base font-light text-gray-700">night</p>
                    
                </div>
            </div>

        </div>
    </section>

    

  )
}