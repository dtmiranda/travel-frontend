import Image from "next/image";
import { MdOutlineStarHalf } from 'react-icons/md'
import cardImage from '../assets/images/VilaMorgana3.jpeg'

export default function DestinationCard(){
  return(

    <div className="p-2 rounded-2xl mb-10 w-full max-w-xs">
        <a href="#" className="hover:opacity-5">
           <Image className="w-full rounded-2xl hover:opacity-10" src={cardImage} alt="product image" /> 
        </a>

        
        
        <div >
            <div className="mt-2 flex justify-between items-start flex-row">
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

  )
}