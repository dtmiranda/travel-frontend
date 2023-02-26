
import Head from "next/head"
import Header from "../components/Header"
import AccomodationCard from "../components/AccomodationCard"
import { CiSearch } from "react-icons/ci"



export default function Hotels(){
  return(
    <>
      <Head>
        <title>
          TravelNorth
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="my-4">
          <h3 className="text-3xl font-bold text-center">Hotels and Places to Stay</h3>
          <p className="my-4 text-center text-xl">Enter dates to find the best price</p>

            
            {/* <div className="">
              <div>
                <div className="py-1 flex justify-between items-center ">
                  <CiSearch size={24}/>
                  <input className="bg-inherit pl-4" type="search" placeholder="" name="" id="" />

                </div>

              </div>

              
              <div className="my-2 flex justify-between flex-row items-center border-t border-b border-gray-300 ">
                <div className="py-1">

                  <p className="pl-2 text-xs text-slate-800 font-medium ">CHECK-IN</p>
                  <input className="bg-inherit" type="date" name="" id="" />

                </div>
                
                <div className=" border-gray-300 py-1">

                  <p className="pl-2 text-xs text-slate-800 font-medium">CHECK-OUT</p>
                  <input className="bg-inherit" type="date" name="" id="" />

                </div>

              </div>
              <div className="py-1">
                <p className="pl-2 text-xs text-slate-800 font-medium ">GUESTS</p>
                <input type="number" name="" id="" />
              </div> 

              <input className="mt-4 bg-blue-700 cursor-pointer text-white rounded-none" type="submit" name="" id="" />

              
            </div> */}

        </section>

        <section>
          
            <div>
              <AccomodationCard/>
              <AccomodationCard/>
              <AccomodationCard/>
              <AccomodationCard/>
              <AccomodationCard/>
            </div>
          
        </section>
          
      </main>
    
    </>
  )
}


