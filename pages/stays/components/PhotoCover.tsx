import Image from "next/image";
import hotel3 from '../../../assets/images/hotel3.jpg'
import hotel1 from '../../../assets/images/hotel1.jpg'
import hotel2 from '../../../assets/images/hotel2.jpg'
import hotel4 from '../../../assets/images/hotel4.jpg'
import hotel5 from '../../../assets/images/hotel5.jpg'


export default function PhotoCover(){
  return(
    <>
      
      <Image className="max-w-lg h-auto rounded-lg" src={hotel3} alt="image description"/>


      <div>
      <Image className="max-w-lg h-auto rounded-lg" src={hotel1} alt="image description"/>
      <Image className="max-w-lg h-auto rounded-lg" src={hotel2} alt="image description"/>
      <Image className="max-w-lg h-auto rounded-lg" src={hotel4} alt="image description"/>
      <Image className="max-w-lg h-auto rounded-lg" src={hotel5} alt="image description"/>

      </div>
      
    </>
  )
}
