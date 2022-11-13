import Image from "next/image"
import coverMontain from "../assets/images/cover-montain.jpg"
import coverPool from "../assets/images/cover-poll.jpg"

export default function Cover(){
  return(
    <>
      <section className=" bg-slate-100 py-10">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl px-4 md:px-4">
          <div >
            <h1 className="mb-4 text-4xl py-4 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6x">Visit and enjoy 
              <span className="text-blue-600 dark:text-blue-500"> Beautiful </span> places in North.
            </h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Thinking of tacking a break from every day's busy life? <br /> Don't worry, we take care of your trip.</p>
          </div>

          <div className="sm: none">
            <Image className="max-w-full h-auto mx-auto rounded-tl-full rounded-br-full rounded-tr-full " src={coverMontain} alt="image description"/>
          </div>
        </div>
        
      </section>    
    </>
  )
}