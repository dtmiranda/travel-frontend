import Head from "next/head";
import { MdAddCircle, MdBedroomParent, MdCancel, MdComputer, MdDeleteForever, MdSave } from "react-icons/md";
import { TbBeach, TbParking, TbPool, TbSnowflake, TbWifi } from "react-icons/tb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Map from "../components/Index";



interface AddCompanyModalProps {
  onClose: () => void;
}

const category = [
  {
    id: 1,
    name: "Hotel",

  },

  {
    id: 2,
    name: "Restaurant",

  },

]


export default function AddCompany(props: AddCompanyModalProps) {


  return (
    <>
      <Head>
        <title>
          TravelNorth
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="  w-100vw h-100vh flex justify-center items-center">

        <div className="relative p-4 w-full max-w-4xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow  sm:p-5">
            {/*  <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Add Hotel
              </h3>
              {/* <button onClick={props.onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                  </button> */}
            </div>





            {/* <!-- Modal body --> */}
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full py-5" placeholder="Name" />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium text-gray-900">Whatsapp</label>
                <input type="text" name="whatsapp" id="whatsapp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full py-5" placeholder="Whatsapp number" />
              </div>

              <div>
                <label htmlFor="island" className="block mb-2 text-sm font-medium text-gray-900">Island</label>
                <select id="island" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5">

                  <option selected></option>
                  <option value="Santo Antão">Santo Antão</option>
                  <option value="São Vicente">São Vicente</option>
                  <option value="Santa Luzia">Santa Luzia</option>
                  <option value="São Nicolau">São Nicolau</option>
                  <option value="Sal">Sal</option>
                  <option value="Boavista">Boavista</option>
                  <option value="Maio">Maio</option>
                  <option value="Santiago">Santiago</option>
                  <option value="Fogo">Fogo</option>
                  <option value="Brava">Brava</option>


                </select>
              </div>


              <div>
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
                <select id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5">

                  <option selected></option>
                  <option value="Assomada">Assomada</option>
                  <option value="João Teves">João Teves</option>
                  <option value="Mindelo">Mindelo</option>
                  <option value="Mosteiros">Mosteiros</option>
                  <option value="Nova Sintra">Nova Sintra</option>
                  <option value="Pedra Badejo">Pedra Badejo</option>
                  <option value="Picos">Picos</option>
                  <option value="Porto Novo">Porto Novo</option>
                  <option value="Praia">Praia</option>
                  <option value="Ribeira Brava">Ribeira Brava</option>
                  <option value="Ribeira Grande">Ribeira Grande</option>
                  <option value="Sal Rei">Sal Rei</option>
                  <option value="Santa Catarina do Fogo">Santa Catarina do Fogo</option>
                  <option value="Santa Maria">Santa Maria</option>
                  <option value="São Domingos">São Domingos</option>
                  <option value="São Filipe">São Filipe</option>
                  <option value="São Miguel">São Miguel</option>
                  <option value="Tarrafal">Tarrafal</option>
                  <option value="Tarrafal do São Nicolau">Tarrafal do São Nicolau</option>
                  <option value="Porto Inglés">Porto Inglés</option>

                </select>
              </div>

              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                <input type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full py-5" placeholder="Address" />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full py-5" placeholder="Email" />
              </div>

              <div>
                <label htmlFor="site" className="block mb-2 text-sm font-medium text-gray-900">Website</label>
                <input type="text" name="site" id="site" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full py-5" placeholder="Email" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                <textarea id="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder="Write hotel description here"></textarea>
              </div>
            </div>

            <section className="mt-10">
              <p className="block mb-4 text-sm font-medium text-gray-900">Hotel Amenities</p>
              <div>
                <ul className="flex flex-wrap">

                  <li className="mr-2 mb-2">
                    <input type="checkbox" id="wifi-option" value="" className="hidden peer" />
                    <label
                      htmlFor="wifi-option"
                      className="inline-flex items-center justify-between p-1 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-green-700 peer-checked:bg-green-100 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50"
                    >

                      <div className="inline-flex items-center">
                        <TbWifi size={20} className="mr-2" />
                        <div className=" text-sm font-normal">Wifi</div>
                      </div>

                    </label>
                  </li>

                  <li className="mr-2 mb-2">
                    <input type="checkbox" id="pool-option" value="" className="hidden peer" />
                    <label
                      htmlFor="pool-option"
                      className="inline-flex items-center justify-between p-1 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-green-700 peer-checked:bg-green-100 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50"
                    >
                      <div className="inline-flex items-center">
                        <TbPool size={20} className="mr-2" />
                        <div className=" text-sm font-normal">Pool - infinity</div>
                      </div>
                    </label>
                  </li>

                  <li className="mr-2 mb-2">
                    <input type="checkbox" id="beach-option" value="" className="hidden peer" />
                    <label
                      htmlFor="beach-option"
                      className="inline-flex items-center justify-between p-1 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-green-700 peer-checked:bg-green-100 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                      <div className="inline-flex items-center">
                        <TbBeach size={20} className="mr-2" />
                        <div className="w-full text-sm font-normal">Beach access - Beachfront</div>
                      </div>
                    </label>
                  </li>

                  <li className="mr-2 mb-2">
                    <input type="checkbox" id="work-option" value="" className="hidden peer" />
                    <label
                      htmlFor="work-option"
                      className="inline-flex items-center justify-between p-1 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-green-700 peer-checked:bg-green-100 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                      <div className="inline-flex items-center">
                        <MdComputer size={20} className="mr-2" />
                        <div className="w-full text-sm font-normal">Dedicated workspace</div>
                      </div>
                    </label>
                  </li>

                  <li className="mr-2 mb-2">
                    <input type="checkbox" id="park-option" value="" className="hidden peer" />
                    <label
                      htmlFor="park-option"
                      className="inline-flex items-center justify-between p-1 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-green-700 peer-checked:bg-green-100 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                      <div className="inline-flex items-center">
                        <TbParking size={20} className="mr-2" />
                        <div className="w-full text-sm font-normal">Free parking on premises</div>
                      </div>
                    </label>
                  </li>

                  <li className="mr-2 mb-2">
                    <input type="checkbox" id="snow-option" value="" className="hidden peer" />
                    <label
                      htmlFor="snow-option"
                      className="inline-flex items-center justify-between p-1 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-green-700 peer-checked:bg-green-100 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                      <div className="inline-flex items-center">
                        <TbSnowflake size={20} className="mr-2" />
                        <div className="w-full text-sm font-normal">Air conditioning</div>
                      </div>
                    </label>
                  </li>

                </ul>

              </div>
            </section>

            <section className="mt-10">

              <p className="block text-sm font-medium text-gray-900">Hotel Images</p>

              <div className="my-2 flex justify-between" >

                <div className="flex w-1/4 justify-between items-center">
                  <div className="mx-1 max-w-sm p-2 hover:bg-gray-100 hover:border hover:border-gray-200 hover:rounded-lg hover:shadow">
                    <img className="rounded-lg" src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg" alt="" />

                    <div className="mt-4 flex justify-between items-center">
                      <MdAddCircle size={24} color="#16a34a" />
                      <MdDeleteForever size={24} color="#dc2626" />
                    </div>
                  </div>
                </div>

                <div className="flex w-1/4 justify-between items-center">
                  <div className="mx-1 max-w-sm p-2 hover:bg-gray-100 hover:border hover:border-gray-200 hover:rounded-lg hover:shadow">
                    <img className="rounded-lg" src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg" alt="" />

                    <div className="mt-4 flex justify-between items-center">
                      <MdAddCircle size={24} color="#16a34a" />
                      <MdDeleteForever size={24} color="#dc2626" />
                    </div>
                  </div>
                </div>

                <div className="flex w-1/4 justify-between items-center">
                  <div className="mx-1 max-w-sm p-2 hover:bg-gray-100 hover:border hover:border-gray-200 hover:rounded-lg hover:shadow">
                    <img className="rounded-lg" src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg" alt="" />

                    <div className="mt-4 flex justify-between items-center">
                      <MdAddCircle size={24} color="#16a34a" />
                      <MdDeleteForever size={24} color="#dc2626" />
                    </div>
                  </div>
                </div>

                <div className="flex w-1/4 justify-between items-center">
                  <div className="mx-1 max-w-sm p-2 hover:bg-gray-100 hover:border hover:border-gray-200 hover:rounded-lg hover:shadow">
                    <img className="rounded-lg" src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg" alt="" />

                    <div className="mt-4 flex justify-between items-center">
                      <MdAddCircle size={24} color="#16a34a" />
                      <MdDeleteForever size={24} color="#dc2626" />
                    </div>
                  </div>
                </div>




              </div>

            </section>

            <section className="mt-10">
              <p className="block mb-4 text-sm font-medium text-gray-900">Hotel Rooms</p>

              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="h-96 overflow-hidden shadow  sm:rounded-md">
                  <div className="bg-gray-50 px-4 py-3 text-left border-b border-gray-100 sm:px-6">
                    <button type="submit" className="flex justify-center items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                      <MdBedroomParent size={22} />
                      <span className="ml-2">Add room</span>
                    </button>

                  </div>

                </div>
              </div>


            </section>


            <section className="mt-10">
              <p className="block mb-4 text-sm font-medium text-gray-900">Hotel Coordinates</p>
              <Map />


            </section>

            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200" />
              </div>
            </div>

            <section className="flex items-center space-x-4">

              <button type="submit" className="flex justify-center items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                <MdSave className="mr-1" size={22} />
                Save
              </button>

              <a href="/signup" className="text-amber-600 inline-flex items-center hover:text-white border border-amber-600 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <MdCancel size={22} className="mr-1" />
                Cancel
              </a>
            </section>

            <div />
          </div>
        </div>

      </div>

      <Footer />


    </>

  )
}


