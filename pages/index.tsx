import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Category from '../components/Category'
import DestinationCard from '../components/DestinationCard'
import TrailCard from '../components/TrailCard'
import Head from 'next/head'
import Bunner from '../components/Bunner'

import aldeia from '../assets/images/aldeia.jpg'
import piscina from '../assets/images/piscina.jpg'
import serra from '../assets/images/serra.jpg'
import CustomerSays from '../components/CustomerSays'
import Newsletter from '../components/Newsletter'


const says = [
  {
    id:1,
    username: "Bonnie Green",
    user_avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    city: "California",
    opion: "Interesting plataform to helps you find places in santiago north",

  },
  {
    id:2,
    username: "Bonnie Green",
    user_avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    city: "California",
    opion: "Interesting plataform to helps you find places in santiago north",

  },
  {
    id:3,
    username: "Bonnie Green",
    user_avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    city: "California",
    opion: "Interesting plataform to helps you find places in santiago north",

  },
  {
    id:4,
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

            


          <section >
            <h5 className="text-transparent text-center bg-clip-text mt-16 mb-3 text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl text-gray-700">
              Popular 
              <span className='text-green-900'> Destination</span>
            </h5>

            <p className="pb-4 text-gray-500 text-center sm:text-sm md:text-lg lg:text-xl dark:text-gray-600">
              Visite memorible places 
            </p>

            <div className='flex justify-start flex-col, items-center flex-wrap'>
              <DestinationCard/>
              <DestinationCard/>
              <DestinationCard/>
              <DestinationCard/>
              <DestinationCard/>
              <DestinationCard/>
              <DestinationCard/>
            </div>
            
              
              

          </section>


          <section className=' py-8'>
            <div className=' flex justify-center flex-col items-center'>
              <h5 className="text-transparent text-center bg-clip-text mt-16 mb-3 text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl text-gray-700">
                <span className='text-green-900'>About </span> Us
              </h5>
              <p className="pb-6 text-gray-500 text-center sm:text-sm md:text-lg lg:text-xl dark:text-gray-600">
                We planed beautiful destinations every weekend
              </p>

            </div>

            <div className='pb-4 flex justify-between flex-row items-center'>
              <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg'>
                <Image className='aboutImage' src={serra} alt={''}/>
              </div>

              <div className='m-4 max-w-sm rounded-2xl overflow-hidden shadow-lg'>
                <Image className='aboutImage' src={aldeia} alt={''}/>

              </div>

              <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg'>
                <Image className='aboutImage' src={piscina} alt={''}/>

              </div>


            </div>

            <div>
            <p className="text-gray-500 text-center text-xs sm:text-sm md:text-lg lg:text-xl">
                Arranging a healthy and beautiful vacations is our main gol. We <br/>
                consider our seccess to be able to offer our users the right <br/>
                journey and a enjoyable holiday
              </p>

            </div>



          </section>


          <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-700">What Our <span className='text-green-900'> Costumers Say?</span></h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">Custumers feedback is important to impruve our services</p>
                </div> 
                <div className="grid mb-8 border-l border-t border-r sm:border-r-0 md:boder-l lg:boder-l border-green-800 shadow-sm md:mb-12 md:grid-cols-2">

                    {says.map((say) => {
                      return(
                        <div key={say.id}>                 

                          <CustomerSays {...say}/>
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

        <Newsletter/>

        
      </main>

    
      <Footer />
      
    </div>
  )
   
}
