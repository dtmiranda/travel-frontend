
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import EventCard from "../components/EventCard"
import {BiCalendarCheck} from "react-icons/bi"

const events = [


  {
    id: 1,
    name: 'Trilha de Serra Malagueta',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis dignissimos quos sint excepturi blanditiis labore dolore. Eligendi deserunt nulla dignissimos facilis quos. Impedit, excepturi est cum sit iusto quisquam.",
    event_thumbnails: 'https://hotelrouxinol.com.br/wp-content/uploads/2019/02/saiba-aqui-quais-sao-as-5-melhores-trilhas-em-santa-catarina-719x480.jpeg',
    price: '$35',
    start_date: "25-10-2023",
    end_date: "25-11-2023",
    star_range: "4.95",
    start_at: "9:00",
    end_at: "16:00",
    event_coordinate: "5345345345534",
    city: "Calheta",


   
    
  }
  
  // More products...
  ]

export default function Events(){
  return (
    <>
       <Head>
        <title>
          TravelNorth
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />


      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>


      <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-28 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200" role="alert">
            <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Festival de peixe</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">We invest in tradicional events</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">We try to give you the best experience that north can offer. The main goal of events is helps you interact with our people and our culture.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300">
                <p className="pr-2">Calendar</p> 
                <BiCalendarCheck size={22} color="0000"/>
            </a>
              
        </div>
            
      </section>

      
      
      <section>
        <div className="mx-auto max-w-2xl pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {events.map((event) => {
              return(
                <div key={event.id} className="group relative">

                  <EventCard {...event}/>

                </div>
              )
            }  
            )}
            
          </div>
        </div>
      </section>


      <Footer/>
    
    </>
    
  )

}
