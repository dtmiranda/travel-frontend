import Image from 'next/image'

import { Navbar, Hero, Footer, Destination, AboutUs, TripPlanner } from '../src/components'
import Header from '../src/components/NavBar'
import Category from '../src/components/Category'
import DestinationCard from '../src/components/Destination'
import TrailCard from '../src/components/TrailCard'
import Head from 'next/head'
import Bunner from '../src/components/Hero'

import CustomerSays from '../src/components/Testimonials'
import Newsletter from '../src/components/Newsletter'


const says = [
  {
    id: 1,
    username: "Bonnie Green",
    user_avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    city: "California",
    opion: "Interesting plataform to helps you find places in santiago north",

  },
  {
    id: 2,
    username: "Bonnie Green",
    user_avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    city: "California",
    opion: "Interesting plataform to helps you find places in santiago north",

  },
  {
    id: 3,
    username: "Bonnie Green",
    user_avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    city: "California",
    opion: "Interesting plataform to helps you find places in santiago north",

  },
  {
    id: 4,
    username: "Bonnie Green",
    user_avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    city: "California",
    opion: "Interesting plataform to helps you find places in santiago north",

  },

]


export default function Home() {
  return (
    <div >
      <Head>
        <title>
          Travel
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Destination />
      <TripPlanner />
      <AboutUs />
      


      <main>


        <section className=" mt-52 md:mt-56">
         
          


          
          <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
              <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-700">What Our <span className='text-green-900'> Costumers Say?</span></h2>
                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">Custumers feedback is important to impruve our services</p>
              </div>
              <div className="grid mb-8 border-l border-t border-r sm:border-r-0 md:boder-l lg:boder-l border-green-800 shadow-sm md:mb-12 md:grid-cols-2">

                {says.map((say) => {
                  return (
                    <div key={say.id}>

                      <CustomerSays {...say} />
                    </div>
                  )
                })}

              </div>
            </div>
          </section>


          {/* <section >
            <h5 className="text-transparent text-center bg-clip-text mt-16 mb-4 text-xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl text-gray-700">
              What Our 
              <span className='text-green-900'> Costumers Say?</span> 
            </h5>
            <p className="text-gray-500 text-center sm:text-sm md:text-lg lg:text-xl dark:text-gray-600">
              Custumers feedback is important to impruve aur services
            </p>
            
          </section> */}

        </section>


      </main>
      <Newsletter />


      <Footer />

    </div>
  )

}
