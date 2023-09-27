import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/NavBar";

import { FaStar } from "react-icons/fa"
import { AccomodationProps } from "../src/types";


interface accomodationDetails {
  accomodation: AccomodationProps
}

export default function AccomodationDetails(props: accomodationDetails) {
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
                  <h5 className="text-2xl font-semibold">{props.name}</h5>
                  <p className="text-gray-600">{`${accomodation.city}`}</p>

                </div>
              </ol>
            </nav>

            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                {accomodation.photos?.map((photo) => {
                  return (
                    <img
                      src={photo}
                      alt={photo}
                      className="h-full w-full object-cover object-center"
                    />
                  )
                })}

              </div>
              
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{accomodation.name}</h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">

                <div className="p-4 shadow-2xl rounded-2xl border border-gray-200">

                  <div className="mt-6 flex justify-between items-center">
                    <h2 className="sr-only">Product information</h2>

                    <p className="text-3xl tracking-tight text-gray-900">{accomodation.price} <span className="text-gray-500 text-xl font-light">night</span></p>

                    {/* Reviews */}
                    <div>
                      <h3 className="sr-only">Reviews</h3>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <FaStar size={16} color="#15803d" />
                          ))}
                        </div>
                        <p className="sr-only">{accomodation.reviews} out of 5 stars</p>
                        <a href="#" className="ml-3 text-sm font-medium text-green-700 hover:text-green-800">
                          {accomodation.reviews} reviews
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
                    <p className="text-base text-gray-900">{accomodation.description}</p>
                  </div>
                </div>

                <div className="py-6 border-y border-gray-200 mt-10">
                  <h3 className="text-sm font-medium text-gray-900">What this place offer</h3>

                  <div className="mt-4">
                    <ul role="list" className="flex justify-between items-center list-disc pl-4 text-sm">
                      {accomodation.amenities?.map((amenitie) => (
                        <li key={amenitie} className="text-gray-400">
                          <span className="text-gray-600">{amenitie}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">


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