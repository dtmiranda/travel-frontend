import { MdNordicWalking, MdFestival, MdBed, MdRestaurant } from 'react-icons/md'
import { BsBank } from 'react-icons/bs'
import Link from 'next/link'


export default function Category(){
  return(
    <div className="my-4 flex justify-center flex-wrap">

      <Link href='/accomodation' className="categoryButton">
        <div className='p-2 bg-red-50 rounded-full'>
          <MdBed size={25} color='#ff8066'/>
        </div>
        <p className="pt-1 pr-2 pl-2 font-medium text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent">Accomodation</p>
      </Link>
      

      <Link href="/restaurants" className="categoryButton">
        <div className='p-2 bg-green-50 rounded-full'>
          <MdRestaurant size={25} color='#7dcea0'/>
        </div>
        <p className="pt-2 pr-2 pl-2 font-medium text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent">Food & Drink</p>
      </Link>

      <Link href="/history" className="categoryButton">
        <div className='p-2 bg-pink-50 rounded-full'>
          <BsBank size={25} color='#f945df'/>
        </div>
        <p className="pt-2 pr-2 pl-2 font-medium text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent">Arte & History</p>
      </Link>

      <Link href="/trails" className="categoryButton">
        <div className='p-2 bg-blue-50 rounded-full'>
          <MdNordicWalking size={25} color='#5dade2'/>
        </div>
        <p className="pt-2 pr-2 pl-2 font-medium text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent">Trails</p>
      </Link>

      <Link href="/events" className="categoryButton">
        <div className='p-2 bg-pink-50 rounded-full'>
          <MdFestival size={25} color=' #c39bd3 '/>
        </div>
        <p className="pt-2 pr-2 pl-2 font-medium text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent">Events</p>
      </Link>

    
    </div>
    
  )
} 