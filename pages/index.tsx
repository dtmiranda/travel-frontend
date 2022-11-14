import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Cover from '../components/Cover'
import Category from '../components/Category'
import DestinationCard from '../components/DestinationCard'

export default function Home() {
  return (
    <>
      <NavBar />

      <Cover/>
      <Category/>
      
      <div className=' pt-16 pb-8 flex justify-center flex-col items-center'>
        <h5 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-gray-700">
          Find the <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">destination</mark> you want
        </h5>
        <p className="text-gray-500 text-center sm:text-sm md:text-base lg:text-lg dark:text-gray-400">We provite travel and vacation services with the best destinations.</p>

      </div>

      <section className='mb-10 flex justify-center flex-col, items-center flex-wrap'>
        <DestinationCard/>
        <DestinationCard/>
        <DestinationCard/>
      </section>
      


      
                
      <Footer />
      
    </>
  )
   
}
