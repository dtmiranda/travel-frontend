import Image from "next/image";
import { MdOutlineStarHalf } from 'react-icons/md'
import cardImage from '../assets/images/VilaMorgana3.jpeg'
import { accomodations } from "../constants"
import { AccomodationProps } from "../types";
import { useParams } from "react-router-dom";

const { id } = useParams()

interface destinationCard {
	destination: AccomodationProps
}


const DestinationCard = ({ destination }: destinationCard) => (
	<div className="">
		<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
			<a href={`accomodation_details/${id}`} className="">
				<img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src={`${destination.photos}`} alt="product image" />
			</a>
		</div>



		<div className="pt-1">
			<div className="flex justify-between items-center flex-row">

				<h5 className="text-lg font-semibold tracking-tight text-gray-700">{destination.name}</h5>


				<div className="flex justify-center items-center text-green-900">
					<MdOutlineStarHalf size={18} />
					<p className="pl-1 text-base font-light">{destination.rating}</p>
				</div>



			</div>

			<p className="text-sm font-light text-gray-900">{destination.city}</p>


			<div className="flex justify-start items-center">
				<span className="text-base font-semibold text-gray-700">{destination.price}</span>
				<p className="pl-1 text-sm font-light text-gray-700"> /night</p>

			</div>
		</div>

	</div>

)



export default function Destination() {
	return (

		<section className="mx-auto px-2 sm:px-6 lg:px-32">
			<h5 className="text-gray-700 text-center bg-clip-text mb-3 text-3xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl ">
				Popular
				<span className='text-green-900'> Destination</span>
			</h5>

			<p className="pb-4 text-xl text-gray-500 text-center  dark:text-gray-600">
				Visite memorible places
			</p>
			<div className="mx-auto max-w-2xl pb-16 px-1 lg:max-w-7xl">
				<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{accomodations.map((accomodation) => {
						return (
							<div key={accomodation.id} className="group relative">
								<a href="">
									<DestinationCard destination={accomodation} />
								</a>


							</div>
						)
					})

					}
				</div>
			</div>

		</section>

	)
}