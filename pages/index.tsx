import Image from 'next/image'

import { Navbar, Hero, Footer, Destination, AboutUs, TripPlanner, Testimonials } from '../src/components'
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
      <Testimonials />

      


      
      <Newsletter />


      <Footer />

    </div>
  )

}
