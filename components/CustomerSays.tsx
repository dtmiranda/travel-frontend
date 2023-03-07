import Image from 'next/image'
import { MdStar } from 'react-icons/md'
import user from '../assets/images/user.jpg'

export default function CustomerSays(){
  return(

    <section className='w-full p-2 md:w-1/2 md:my-1.5 md:mb lg:float-left lg:w-1/4'>
      <div className='my-8 p-4 shadow-2xl max-w-sm rounded-xl flex flex-col'>
            
        <div className='pb-4 flex items-center'>
          <div className='pr-4'>
            <Image className='h-20 w-20 rounded-full' src={user} alt={''} />
          </div>
        
          <div>
            <h6 className='font-light text-lg'>Cristine Tomas</h6>
            
            <div className='flex justify-between items-center'>
              
              <p className='pr-2 text-xs text-gray-600'>California, USA</p>
              <MdStar size={14} color=''/>
              <p className='text-xs font-bold text-green-900'>4.9</p>

            </div>
            

          </div>
          
        </div>

        <p>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Repellat, ea! Eveniet 
          neque esse, dolor ipsa doloremque unde ullam 
          laboriosam perspiciatis nemo laudantium mollitia 
          laborum, aliquam iure repellat vero sapiente. Nam!
        </p>
        

      </div>
    </section>
    
    
    
    
  )
}