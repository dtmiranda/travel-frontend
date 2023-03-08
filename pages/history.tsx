
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HistoryCard from "../components/HistoryCard"

const history_places = [


  {
    id: 1,
    name: 'Campo de Concentração',
    description:"description",
    coordinate: "5345345345534",
    star_range: "4.95",
    thumbnails_hotels: 'https://m2s5m8t8.rocketcdn.me/wp-content/uploads/campo-tarrafal-1024x682.jpg',
    city: "Tarrafal",
    price: '$35',
    
  }, {
    id: 2,
    name: 'Campo de Concentração',
    description:"description",
    coordinate: "5345345345534",
    star_range: "4.95",
    thumbnails_hotels: 'https://m2s5m8t8.rocketcdn.me/wp-content/uploads/campo-tarrafal-1024x682.jpg',
    city: "Tarrafal",
    price: '$35',
    
  }, {
    id: 3,
    name: 'Campo de Concentração',
    description:"description",
    coordinate: "5345345345534",
    star_range: "4.95",
    thumbnails_hotels: 'https://m2s5m8t8.rocketcdn.me/wp-content/uploads/campo-tarrafal-1024x682.jpg',
    city: "Tarrafal",
    price: '$35',
    
  }, {
    id: 4,
    name: 'Campo de Concentração',
    description:"description",
    coordinate: "5345345345534",
    star_range: "4.95",
    thumbnails_hotels: 'https://m2s5m8t8.rocketcdn.me/wp-content/uploads/campo-tarrafal-1024x682.jpg',
    city: "Tarrafal",
    price: '$35',
    
  },
  // More products...
  ]

export default function Accomodations(){
  return (
    <>
       <Head>
        <title>
          TravelNorth
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="mt-8">
      <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">Art</span> & History
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Come and learn a little about our history and appreciate what our artists do.
          </p>
        </div>
      
      </section>

      <section >
        <div className="mx-auto max-w-2xl pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {history_places.map((history_place) => {
              return(
                <div key={history_place.id} className="group relative">

                  <HistoryCard {...history_place}/>

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
