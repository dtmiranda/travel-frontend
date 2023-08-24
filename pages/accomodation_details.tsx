import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/NavBar";
import Map from "../src/components/Index";
import { FaStar } from "react-icons/fa"


const product = {


  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',

  images: [
    {
      src: 'https://www.letsbookhotel.com/img/max300/182/18243457.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://www.letsbookhotel.com/img/max300/182/18244705.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://www.letsbookhotel.com/img/max300/182/18243456.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://www.letsbookhotel.com/img/max300/182/18243465.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],

  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }



export default function HotelDetails() {
  return (
    <>
      <Head>
        <title>
          TravelNorth
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>

        <section>
          <div className="pt-6">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div>
                  <h5 className="text-2xl font-semibold">Vila Morgana</h5>
                  <p className="text-gray-600">Santiago, Calheta São Miguel</p>

                </div>
              </ol>
            </nav>

            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <img
                    src={product.images[1].src}
                    alt={product.images[1].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <img
                    src={product.images[2].src}
                    alt={product.images[2].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                <img
                  src={product.images[3].src}
                  alt={product.images[3].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">

                <div className="p-4 shadow-2xl rounded-2xl border border-gray-200">

                  <div className="mt-6 flex justify-between items-center">
                    <h2 className="sr-only">Product information</h2>

                    <p className="text-3xl tracking-tight text-gray-900">{product.price} <span className="text-gray-500 text-xl font-light">night</span></p>

                    {/* Reviews */}
                    <div>
                      <h3 className="sr-only">Reviews</h3>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <FaStar size={16} color="#15803d" />
                          ))}
                        </div>
                        <p className="sr-only">{reviews.average} out of 5 stars</p>
                        <a href={reviews.href} className="ml-3 text-sm font-medium text-green-700 hover:text-green-800">
                          {reviews.totalCount} reviews
                        </a>
                      </div>
                    </div>

                  </div>


                  <form className="mt-10">
                    <div className="my-4 rounded-xl border border-gray-300">
                      <div className="flex justify-center flex-row">

                        <div className="w-full p-2 border-b border-gray-300">

                          <p className="pl-2 text-xs text-slate-800 font-medium ">CHECK-IN</p>
                          <input className="bg-inherit text-slate-400" type="date" name="" id="" />

                        </div>

                        <div className="w-full p-2 border-b border-l border-gray-300">

                          <p className="pl-2 text-xs text-slate-800 font-medium">CHECK-OUT</p>
                          <input className="bg-inherit text-slate-400" type="date" name="" id="" />

                        </div>
                      </div>

                      <div className="p-2">
                        <p className="pl-2 text-xs text-slate-800 font-medium ">GUESTS</p>
                        <input className="bg-inherit text-slate-400" placeholder="0" type="number" name="" id="" />
                      </div>

                    </div>

                    <button
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-700 py-3 px-8 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Reserve
                    </button>
                  </form>
                </div>

              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">{product.description}</p>
                  </div>
                </div>

                <div className="py-6 border-y border-gray-200 mt-10">
                  <h3 className="text-sm font-medium text-gray-900">What this place offer</h3>

                  <div className="mt-4">
                    <ul role="list" className="flex justify-between items-center list-disc pl-4 text-sm">
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">

                  <Map />
                </div>

              </div>


            </div>


          </div>

        </section>


      </main>

      <Footer />


    </>
  )
}