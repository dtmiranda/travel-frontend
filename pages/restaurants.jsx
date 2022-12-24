import Header from '../components/Header'
import Footer from '../components/Footer'
import RestaurantCard from '../components/RestaurantCard'


import Head from "next/head"

export default function Restaurants(){
  return(
    <>
      <Head>
        <title>
          TravelNorth
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />



      <main>
        <h4 className='flex justify-center items-center'>Foods&Drinks</h4>
        
        <section className='mb-5 flex justify-between flex-col, items-center  flex-wrap'>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>


        </section>
        
        
      </main>  

      <Footer/>  
    </>
  ) 
  } 