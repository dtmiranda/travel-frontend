import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PhotoCover from "../components/PhotoCover";

export default function StaysPage(){
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
        <section>
        <h5>Vila Morgana</h5>
            <p>Calheta de São Miguel, Ponta Calhetona</p>

          <PhotoCover/>

        </section>

        <section className="mt-10 flex justify-between">
          <div className="w-3/5 mr-8 flex justify-start flex-col">

            <h5>Description</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta modi voluptatum voluptas fugiat est. Modi aliquam laudantium perferendis officia corporis, beatae laborum magnam voluptate. Iste ea exercitationem sapiente itaque molestiae.</p>

          </div>

          <div className="p-4 flex justify-start flex-col rounded-xl border border-gray-300">

            <div className=" flex justify-between items-center flex-row"> 
              <div>
                <p className="text-2xl text-blue-600 font-semibold">$50.00 
                <span className="text-base text-gray-600 font-normal"> /night</span> </p>
              </div>

              <div className="flex">
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                <a className="cursor-pointer">90 reviews</a>
              </div>


            </div>

            <div className="my-4 rounded-xl border border-gray-300">
              <div className="flex justify-between flex-row">
                
                <div className="p-2 border-b border-gray-300">

                  <p className="pl-2 text-xs text-slate-800 font-medium ">CHECK-IN</p>
                  <input className="bg-inherit" type="date" name="" id="" />

                </div>
                
                <div className="p-2 border-b border-l border-gray-300">

                  <p className="pl-2 text-xs text-slate-800 font-medium">CHECK-OUT</p>
                  <input className="bg-inherit" type="date" name="" id="" />

                </div>
              </div>
              
              <div className="p-2">
                <p className="pl-2 text-xs text-slate-800 font-medium ">GUESTS</p>
                <input type="number" name="" id="" />
              </div>

            </div>      


            <a href="login" className="w-full text-white text-center bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2  focus:outline-none">Reservar</a>


          </div>
        </section>
      </main>
          


      <Footer/> 
    
    
    </>
  )
}