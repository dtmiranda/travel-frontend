import Link from 'next/link'
import Image from 'next/image'
import { categories } from '../constants'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

export default function Category() {

  const slideLeft = () => {
    var slider = document.getElementById('slider')

    if (slider)
      slider.scrollLeft -= 200
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')

    if (slider)
      slider.scrollLeft += 200
  }

  return (
    <div className="relative mt-4 flex justify-start items-center">
      <HiOutlineChevronLeft className='cursor-pointer opacity-50 hover:opacity-100' onClick={slideLeft} size={30} color='#E5E7EB' />
      <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {categories.map((category) => (
          <div className='inline-block'>
            <Link href={category.link} className="category">
              <Image src={category.icon} loading='lazy' alt={category.alt} />
              <p className="pt-1 pr-2 pl-2 text-lg font-medium text-gray-200 rounded ">{category.name}</p>
            </Link>
          </div>


        ))}
      </div>
      <HiOutlineChevronRight className='cursor-pointer opacity-50 hover:opacity-100' onClick={slideRight} size={30} color='#E5E7EB' />


    </div>

  )
} 