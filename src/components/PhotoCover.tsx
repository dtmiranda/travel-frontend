import Image from "next/image";
import hotel3 from '../assets/images/hotel3.jpg'
import hotel1 from '../assets/images/hotel1.jpg'
import hotel2 from '../assets/images/hotel2.jpg'
import hotel4 from '../assets/images/hotel4.jpg'
import hotel5 from '../assets/images/hotel5.jpg'


export default function PhotoCover(){
  return(
    <>
      <div className="pt-6 flex justify-between">
        
        <div className="w-1/2 mr-1 flex grow">
          <Image className="mr-1 rounded-tl-3xl rounded-bl-3xl" src={hotel3} alt="image description"/>
        </div>


        <div className="h-auto w-1/2 ml-1 mr-1 flex justify-center">
          
          <div className="w-1/2 mr-1 flex justify-between flex-col">
            <Image className="mb-1" src={hotel1} alt="image description"/>
            <Image className="mt-1" src={hotel2} alt="image description"/>
          </div>

          <div className="h-auto w-1/2 ml-1 justify-between flex-col">
            <Image className="mb-1 rounded-tr-3xl" src={hotel4} alt="image description"/>
            <Image className="mt-1 rounded-br-3xl" src={hotel5} alt="image description"/>

          </div>
          
        </div>
      
      </div>
      
      
    </>
  )
}
