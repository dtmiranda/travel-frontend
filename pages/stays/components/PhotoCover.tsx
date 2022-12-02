import Image from "next/image";
import hotel3 from '../../../assets/images/hotel3.jpg'
import hotel1 from '../../../assets/images/hotel1.jpg'
import hotel2 from '../../../assets/images/hotel2.jpg'
import hotel4 from '../../../assets/images/hotel4.jpg'
import hotel5 from '../../../assets/images/hotel5.jpg'


export default function PhotoCover(){
  return(
    <>
      <Image src={hotel3} alt={""}/>

      <div>
        <Image src={hotel1} alt={""}/>
        <Image src={hotel2} alt={""}/>
        <Image src={hotel4} alt={""}/>
        <Image src={hotel5} alt={""}/>
      </div>
      
    </>
  )
}
