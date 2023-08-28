import Image from "next/image"
import { hero_bg } from '../assets'
import { Category } from '../components'



const Hero = () => {
  return (
    <>

      <section className="space-y-2 py-6 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">

        <Image
          className="absolute top-0 -z-10 h-[95vh] w-screen contrast-125 brightness-75"
          src={hero_bg}
          alt='hero background'
        />

        
        <div className="relative isolate max-w-7xl px-2 sm:px-6 lg:px-20">
          <div >
            <h1 className="text-left lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] pb-4 font-bold text-gray-100">
              Discover your next <br /> adventure.
            </h1>
          </div>

          <form className="flex items-center mt-10">
            

            <div className="relative p-1 w-2/3 border-2 rounded-lg border-green-700">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                </svg>
              </div>
              <input type="text" id="voice-search" className="bg-transparent border-none text-gray-200 text-base rounded-lg block w-full pl-10 p-2.5 " placeholder="Search Accomodation, Events, Trails..." required />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="w-4 h-4 text-gray-200 hover:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                </svg>
              </button>
            </div>
            <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <svg className="w-4 h-4 mr-2 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>Search
            </button>
          </form>

          <h3 className="mt-16 text-gray-100 text-2xl font-bold">Top categories</h3>
          
          <Category />

        </div>

      </section>
    </>
  )
}

export default Hero