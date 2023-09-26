import Image from 'next/image'
import { MdStar } from 'react-icons/md'
import user from '../assets/images/user.jpg'
import { TestimonialProps } from '../types'
import { testimonials } from '../constants'


interface testimonialCard{
  testimonial: TestimonialProps
}

const TestimonialCard = ({testimonial}: testimonialCard) => (
  <section >


      <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-green-800 md:border-r ">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
          <h3 className="text-3xl text-left font-semibold text-green-900">"</h3>
          <p className="my-1 font-light">{testimonial.message}</p>

        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img className="rounded-full w-9 h-9" src={testimonial.user_avatar} alt="profile picture" />
          <div className="space-y-0.5 font-medium text-left">
            <div>{testimonial.username}</div>
            <div className="text-sm font-light text-gray-500">{testimonial.city}</div>
          </div>
        </figcaption>
      </figure>


    </section>
)




export default function Testimonials() {
  return (

    


<section>
<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
  <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-700">What Our 
      <span className='text-green-900'> Costumers Say?</span>
    </h2>
    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">Custumers feedback is important to impruve our services</p>
  </div>
  <div className="grid mb-8 border-l border-t border-r sm:border-r-0 md:boder-l lg:boder-l border-green-800 shadow-sm md:mb-12 md:grid-cols-2">

    {testimonials.map((testimonial) => {
      return (
        <div key={testimonial.id}>

          <TestimonialCard testimonial={testimonial} />
        </div>
      )
    })}

  </div>
</div>
</section>




  )
}