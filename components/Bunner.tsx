import Image from "next/image"
import coverMontain from "../assets/images/cover-montain.jpg"
import coverPool from "../assets/images/cover-poll.jpg"
import bunner from '../assets/images/bunner.jpg'


export default function Bunner(){
  return(
    <>
      <section className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
          <Image
            layout="fill"
            src={bunner}
            objectFit="cover"
            alt=''
          />
        </div>
        <div className="flex justify-between items-start mx-auto max-w-screen-xl px-4 md:px-4">
          <div >
            <h1 className="mb-4 text-4xl py-4 font-extrabold tracking-tight leading-none text-gray-50 md:text-5xl lg:text-6xl">Visit and enjoy 
              <span className="text-gray-900"> Beautiful </span> places in North.
            </h1>
            <p className="text-lg font-normal text-gray-50 lg:text-xl">Thinking of tacking a break from every day's busy life? <br /> Don't worry, we take care of your trip.</p>
          </div>

         
        </div>
        
      </section>    
    </>
  )
}