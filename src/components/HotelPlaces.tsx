import { places } from "../constants"



export default function HotelPlaces() {
  return (

    <section className="mx-auto px-2 sm:px-6 lg:px-32">

      <div className='mt-16 flex justify-center flex-col items-center'>
        <h5 className="text-center bg-clip-text text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl text-gray-700">
          <span className='text-green-900'>Top Hotel &  </span>
          Places
        </h5>
        <p className=" text-gray-500 text-center sm:text-sm md:text-lg lg:text-xl dark:text-gray-600">
          We planed beautiful destinations every weekend
        </p>

      </div>

      <div className='pb-4 flex justify-center flex-row items-center'>
        {places.map((place) => {
          return (
            <div key={place.id} className='m-2 rounded-2xl overflow-hidden shadow-lg'>
              <img className='aboutImage' src={place.imgLink} alt={place.name} />
            </div>
          )
        })}

      </div>

    </section>


  )
}