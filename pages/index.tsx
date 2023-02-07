import Header from '../components/Header'
import Footer from '../components/Footer'
import Category from '../components/Category'
import DestinationCard from '../components/DestinationCard'
import TrailCard from '../components/TrailCard'
import Head from 'next/head'
import Bunner from '../components/Bunner'

export default function Home() {
  return (
    <div >
      <Head>
        <title>
          TravelNorth
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Bunner/>


      <main>


        <section className=" mt-52 md:mt-56">
          {/* <Category/> */}
          <Category/>

            <h5 className="mt-16 mb-8 text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl text-gray-700">
              Popular Destination
            </h5>


          <section className='flex justify-between flex-col, items-center flex-wrap'>
            
              <DestinationCard/>
              <DestinationCard/>
              <DestinationCard/>
              <DestinationCard/>
              <DestinationCard/>
              <DestinationCard/>
              <DestinationCard/>
              

          </section>

          

          <div className='flex justify-center'>
            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">See more</button>

          </div>


          <div className=' pt-16 flex justify-center flex-col items-center'>
            <h5 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-gray-700">
              Explore some <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">awesome</mark> trails
            </h5>
            <p className="text-gray-500 text-center sm:text-sm md:text-base lg:text-lg dark:text-gray-400">Explore somewhere interesting and enjoy the vibes.</p>

          </div>


          <div className='flex justify-center flex-col, items-center flex-wrap'>
            <TrailCard/>
            <TrailCard/>
            <TrailCard/>
            <TrailCard/>
          </div>

          

        </section>

        
      </main>
      
              
      <Footer />
      
    </div>
  )
   
}
