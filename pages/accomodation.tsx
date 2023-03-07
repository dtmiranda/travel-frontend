
import Head from "next/head"
import Header from "../components/Header"
import AccomodationCard from "../components/AccomodationCard"
import { CiSearch } from "react-icons/ci"
import Footer from "../components/Footer"



export default function Accomodations(){
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
        <section className="my-4">
          <h3 className="text-3xl font-bold text-center">Accomodations</h3>
          <p className="mb-2 text-center md:text-xl">Here's the best places you can rest </p>

        </section>

        <section>
          
            <div>
              <AccomodationCard/>
              <AccomodationCard/>
              <AccomodationCard/>
              <AccomodationCard/>
              <AccomodationCard/>
            </div>
          
        </section>

          
      </main>

      <Footer/>

    
    </>
  )
}


