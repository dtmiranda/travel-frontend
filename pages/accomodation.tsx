
import Head from "next/head"
import Header from "../src/components/Header"
import AccomodationCard from "../src/components/AccomodationCard"
import { CiSearch } from "react-icons/ci"
import Footer from "../src/components/Footer"

const products = [


  {
    id: 1,
    name: 'Hotel Edu Horizonte',
    coordinate: "5345345345534",
    star_range: "4.95",
    thumbnails_hotels: 'https://hoteleduhorizonte.cv/images/booking.png',
    city: "Calheta",
    price: '$35',

  }, {
    id: 2,
    name: 'Hotel Edu Horizonte',
    coordinate: "5345345345534",
    star_range: "4.95",
    thumbnails_hotels: 'https://hoteleduhorizonte.cv/images/booking.png',
    city: "Calheta",
    price: '$35',

  }, {
    id: 3,
    name: 'Hotel Edu Horizonte',
    coordinate: "5345345345534",
    star_range: "4.95",
    thumbnails_hotels: 'https://hoteleduhorizonte.cv/images/booking.png',
    city: "Calheta",
    price: '$35',

  }, {
    id: 4,
    name: 'Hotel Edu Horizonte',
    coordinate: "5345345345534",
    star_range: "4.95",
    thumbnails_hotels: 'https://hoteleduhorizonte.cv/images/booking.png',
    city: "Calheta",
    price: '$35',

  }, {
    id: 5,
    name: 'Hotel Edu Horizonte',
    coordinate: "5345345345534",
    star_range: "4.95",
    thumbnails_hotels: 'https://hoteleduhorizonte.cv/images/booking.png',
    city: "Calheta",
    price: '$35',

  }, {
    id: 6,
    name: 'Hotel Edu Horizonte',
    coordinate: "5345345345534",
    star_range: "4.95",
    thumbnails_hotels: 'https://hoteleduhorizonte.cv/images/booking.png',
    city: "Calheta",
    price: '$35',

  },

  // More products...
]

export default function Accomodations() {
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
        <div className="mx-auto text-center max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The best <span className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">accomations</span> for you are here
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From a hotel in the city center to inns in the countryside, everything for you to have better experiences.
          </p>
        </div>

      </section>

      <section>
        <div className="mx-auto max-w-2xl pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
              return (
                <div key={product.id} className="group relative">

                  <AccomodationCard {...product} />

                </div>
              )
            }
            )}

          </div>
        </div>
      </section>


      <Footer />

    </>

  )

}
