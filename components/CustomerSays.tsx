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

      <section className="items-center rounded-lg shadow sm:flex ">                 
        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.user_avatar} alt="Bonnie Avatar"/>
        
        <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-gray-900">{props.username}</h3>
            <span className="text-gray-500">{props.city}</span>
            <p className="mt-3 mb-4 font-light text-gray-500">{props.opion}</p>
        </div>
      
    </section>
    
    
    
    
  )
}