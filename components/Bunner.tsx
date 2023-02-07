import Image from "next/image"

import bunner from '../assets/images/bunner.jpg'


export default function Bunner(){
  return(
    <>
    <main>
      
    </main>
      <section className="flex flex-col pt-10 space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
          <Image
            layout="fill"
            src={bunner}
            objectFit="cover"
            alt=''
          />
        </div>
        <div className="flex justify-center items-center">
          <div >
            <h1 className="mt-48 text-center text-4xl pb-4 font-extrabold tracking-tight leading-none text-gray-50 md:text-5xl lg:text-6xl">Visit and enjoy 
              <span className="text-gray-900"> Beautiful </span> places in North.
            </h1>
            <p className="text-center text-lg font-normal text-gray-50 lg:text-xl">Don't worry, we take care of your trip.</p>
          </div>

         
        </div>
        
      </section>    
    </>
  )
}