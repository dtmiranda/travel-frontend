import Image from 'next/image'
import { MdStar } from 'react-icons/md'
import user from '../assets/images/user.jpg'

export default function CustomerSays(props: {
    username: string,
    user_avatar:string,
    city: string,
    opion: string,
}){
  return(

    <section >                 
      {/* <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.user_avatar} alt="Bonnie Avatar"/>
      
      <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900">{props.username}</h3>
          <span className="text-gray-500">{props.city}</span>
          <p className="mt-3 mb-4 font-light text-gray-500">{props.opion}</p>
      </div> */}



          <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-green-800 md:border-r ">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                  <h3 className="text-3xl text-left font-semibold text-green-900">"</h3>
                  <p className="my-1 font-light">{props.opion}</p>

              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                  <img className="rounded-full w-9 h-9" src={props.user_avatar} alt="profile picture"/>
                  <div className="space-y-0.5 font-medium text-left">
                      <div>{props.username}</div>
                      <div className="text-sm font-light text-gray-500">{props.city}</div>
                  </div>
              </figcaption>    
          </figure>

      
    </section>
    
    
    
    
  )
}