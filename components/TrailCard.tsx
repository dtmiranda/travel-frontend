import Image from "next/image";

import cardImage from '../assets/images/cover-poll.jpg'

export default function NavBar(){
  return(

    <div className="mx-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
        <a href="#">
            <Image className="rounded-t-lg" src={cardImage} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-600">Noteworthy technology acquisitions 2021</h5>
            </a>
            
        </div>
    </div>


  )
}
