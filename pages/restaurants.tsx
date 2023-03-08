import Header from '../components/Header'
import Footer from '../components/Footer'
import RestaurantCard from '../components/RestaurantCard'


import Head from "next/head"

const restaurants = [
  {
    id: 1,
    name: "Restaurante Cuza de Terra",
    coordinate: "251589758239",
    thumbnails_restaurant:"https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg",
    base_price:"10",
    star_range: "4.8",
    city: "Tarrafal"

  },
  {
    id: 1,
    name: "Restaurante Cuza de Terra",
    coordinate: "251589758239",
    thumbnails_restaurant:"https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg",
    base_price:"10",
    star_range: "4.8",
    city: "Tarrafal"

  },
  {
    id: 1,
    name: "Restaurante Cuza de Terra",
    coordinate: "251589758239",
    thumbnails_restaurant:"https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg",
    base_price:"10",
    star_range: "4.8",
    city: "Tarrafal"

  },
  {
    id: 1,
    name: "Restaurante Cuza de Terra",
    coordinate: "251589758239",
    thumbnails_restaurant:"https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg",
    base_price:"10",
    star_range: "4.8",
    city: "Tarrafal"

  },
  {
    id: 1,
    name: "Restaurante Cuza de Terra",
    coordinate: "251589758239",
    thumbnails_restaurant:"https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg",
    base_price:"10",
    star_range: "4.8",
    city: "Tarrafal"

  },
  {
    id: 1,
    name: "Restaurante Cuza de Terra",
    coordinate: "251589758239",
    thumbnails_restaurant:"https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg",
    base_price:"10",
    star_range: "4.8",
    city: "Tarrafal"

  },

]

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



      <section className="mt-8">
      <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Food & <span className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">Drink</span> 
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Come and taste the best that aour land can provide.
          </p>
        </div>
      
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-2xl pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {restaurants.map((restaurant) => {
              return(
                <div key={restaurant.id} className="group relative">

                  <RestaurantCard {...restaurant}/>

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