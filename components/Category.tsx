import { RiHotelLine, RiRestaurant2Line} from 'react-icons/ri'
import { MdNordicWalking, MdFestival } from 'react-icons/md'
import Link from 'next/link'


export default function Category(){
  return(
    <div className="my-4 flex justify-center flex-wrap">

      <Link href='/' className="w-36 p-2 m-2 max-w-sm flex justify-center flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
        <RiHotelLine size={30} color='#ff8066'/>
        <p className="pt-1 pr-2 pl-2 font-medium text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent">Stays</p>
      </Link>
      

      <Link href="#" className="w-36 p-2 m-2 max-w-sm flex justify-center flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
        <RiRestaurant2Line size={30} color='#7dcea0'/>
        <p className="pt-2 pr-2 pl-2 font-medium text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent">Restaurant</p>
      </Link>

      <Link href="#" className="w-36 p-2 m-2 max-w-sm flex justify-center flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
        <MdNordicWalking size={30} color='#5dade2'/>
        <p className="pt-2 pr-2 pl-2 font-medium text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent">Trails</p>
      </Link>

      <Link href="#" className="w-36 p-2 m-2 max-w-sm flex justify-center flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
        <MdFestival size={30} color=' #c39bd3 '/>
        <p className="pt-2 pr-2 pl-2 font-medium text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent">Events</p>
      </Link>

    
    </div>
    
  )
} 