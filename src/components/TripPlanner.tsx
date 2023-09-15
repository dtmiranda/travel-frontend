import { tripPlanners } from "../constants"
import { TripPlannerProps } from "../types"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'



interface tripPlannerCard {
  tripPlanner: TripPlannerProps
}


const TripPlannerCard = ({ tripPlanner }: tripPlannerCard) => (

  <div className="mx-2">
    <img className="rounded-lg w-[260px] h-[160px] object-cover" src={tripPlanner.imgUrl} alt={tripPlanner.imgAlt} />
    <h5 className="my-2 text-base font-semibold tracking-tight text-gray-900 ">{tripPlanner.name}</h5>

  </div>

)

export default function TripPlanner() {
  
  const slideLeft = () => {
    var slider = document.getElementById('slider')

    if (slider)
      slider.scrollLeft -= 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')

    if (slider)
      slider.scrollLeft += 500
  }

  return (
    <section className="max-w-full px-2 sm:px-6 lg:px-32">
      <h5 className="text-gray-700 text-center bg-clip-text mb-3 text-3xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl ">
        Trip
        <span className='text-green-900'> Planner</span>
      </h5>

      <p className="pb-4 text-xl text-gray-500 text-center">
        Pick a vibe and explore the top destinations in Santigo North
      </p>

      <div className="relative mt-4 flex justify-start items-center">
        <HiOutlineChevronLeft 
          className=' bg-green-600 rounded-full  cursor-pointer opacity-50 hover:opacity-100' 
          onClick={slideLeft} size={30} color='#000' 
        />
          <div id='slider' className='w-full h-full  flex-none overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {tripPlanners.map((tripPlanner) => (
              <div key={tripPlanner.id} className="inline-block">
                <a href="">
                  <TripPlannerCard tripPlanner={tripPlanner} />
                </a>
              </div>
            ))}
          </div>
        <HiOutlineChevronRight 
          className='bg-green-600 rounded-full cursor-pointer opacity-50 hover:opacity-100' 
          onClick={slideRight} size={30} color='#000' 
        />

      </div>


    </section>
  )

}

