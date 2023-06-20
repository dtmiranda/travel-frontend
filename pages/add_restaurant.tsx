import Head from "next/head";
import { MdAddCircle, MdBedroomParent, MdCancel, MdComputer, MdDeleteForever, MdSave } from "react-icons/md";
import { TbBeach, TbParking, TbPool, TbSnowflake, TbWifi } from "react-icons/tb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Map from "../components/Index";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import api from "../providers/Api";

import { City, Island } from "../utils/typings";



export default function AddRestaurant() {

  const [islands, setIslands] = useState<Island[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  



  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [amenities, setAmenities] = useState<string[]>([]);
  const [coordinate, setCoordinate] = useState("14.8583029,-23.3627246");
  const [cuisine, setCuisine] = useState("Traditional");

  const [selectIsland, setSelectIsland] = useState('0')
  const [selectCity, setSelectCity] = useState('0')
  const [selectAmenities, setSelectAmenities] = useState<number[]>([])


  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZDIxOGIwYS05NmM1LTQ0MGMtOTZjMS0wNDM3ZmNkNjA0YzUiLCJlbWFpbCI6ImNhcmxvc0BtYWlsLmNvbSIsImlhdCI6MTY4NzI3MDQyMiwiZXhwIjoxNjg3MzU2ODIyfQ.I_rCZ3Iupyh0kUlst6ageohAPkzbuxJ8wzk_kGaoj2A"


  useEffect(() => {
    const fetchIslands = async () => {
      try {

        const response = await api.get<Island[]>('/islands');
        setIslands(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchIslands();
  }, []);

  function handleSelectIsland( event: ChangeEvent<HTMLSelectElement>){
    const island = event.target.value;

    setSelectIsland(island);
  }


  useEffect(() => {
    if(selectIsland == '0'){

      return

    }

    const fetchCity = async () => {
      try {

        const response = await api.get<City[]>(`/cities/i/${selectIsland}`)
        setCities(response.data)

      } catch (error) {
        console.error(error)
      }
    };

    fetchCity();
  })

  function handleSelectCity( event : ChangeEvent<HTMLSelectElement>){
    const city = event.target.value;

    setSelectCity(city)
  }




  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();



      try {

        const response = await api.post("restaurants", {

          name,
          description,
          address,
          whatsapp,
          email,
          website,
          amenities,
          coordinate,
          cuisine,
          cityId : selectCity,
          

        }, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }
        })


        console.log("Restaurant data: ", response.data)


      } catch (error) {
        console.error(error)

      }

    },

    [name, description, address, whatsapp, email, website, amenities, coordinate, cuisine]

  )




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
                Add Restaurant
              </h3>

            </div>





            {/* <!-- Modal body --> */}
            <form onSubmit={handleSubmit} method="post">

              <section className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full py-5"
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.currentTarget?.value || "")}

                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium text-gray-900">Whatsapp</label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full py-5"
                    type="text"
                    name="whatsapp"
                    id="whatsapp"
                    required
                    placeholder="Whatsapp number"
                    value={whatsapp}
                    onChange={(event) => setWhatsapp(event.currentTarget?.value || "")}
                  />
                </div>

                <div>
                  <label htmlFor="island" className="block mb-2 text-sm font-medium text-gray-900">Island</label>
                  <select
                    name="island"
                    id="island"
                    value={selectIsland}
                    onChange={handleSelectIsland}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5">

                    <option selected></option>

                    {islands.map((island) => (
                      <option key={island.id} value={island.id.toString()}>{island.name}</option>
                    ))}
                  </select>


                </div>


                <div>
                  <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>

                  <select
                    name="city"
                    id="city"
                    value={selectCity}
                    onChange={handleSelectCity}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5">

                    <option selected></option>

                    {cities.map((city) => (
                      <option key={city.id} value={city.id.toString()}>{city.name}</option>
                    ))}
                  </select>
                  
                </div>

                <div>

                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full py-5"
                    type="text"
                    name="address"
                    id="address"
                    required
                    placeholder="Address"
                    value={address}
                    onChange={(event) => setAddress(event.currentTarget?.value || "")}
                  />

                </div>

                <div>

                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full py-5"
                    type="text"
                    name="email"
                    id="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget?.value || "")}

                  />

                </div>

                <div>

                  <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">Website</label>
                  <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full py-5"
                    type="text"
                    name="website"
                    id="website"
                    placeholder="Website"
                    value={website}
                    onChange={(event) => setWebsite(event.currentTarget?.value || "")}

                  />

                </div>

                <div>
                  <label htmlFor="cuisine" className="block mb-2 text-sm font-medium text-gray-900">Cuisine</label>
                  <select id="cuisine" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5">

                    <option selected></option>
                    <option value="Japanese">Japanese</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Italian">Italian</option>
                    <option value="Not Apply">Not Apply</option>


                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                  <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
                    id="description"
                    name="description"
                    value={description}
                    placeholder="Write Restaurant description here"
                    onChange={(event) => setDescription(event.currentTarget?.value || "")}

                  >

                  </textarea>
                </div>
              </section>

              <section className="mt-10">
                <p className="block mb-4 text-sm font-medium text-gray-900">Restaurant Amenities</p>
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

                <p className="block text-sm font-medium text-gray-900">Restaurant Images</p>

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
                <p className="block mb-4 text-sm font-medium text-gray-900">Restaurant Coordinates</p>
                <Map />


              </section>

              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>

              <section className="flex items-center space-x-4">

                <button className="flex justify-center items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  type="submit"
                >
                  <MdSave className="mr-1" size={22} />
                  Save
                </button>

                <a href="/signup" className="text-amber-600 inline-flex items-center hover:text-white border border-amber-600 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  <MdCancel size={22} className="mr-1" />
                  Cancel
                </a>
              </section>

            </form>


            <div />
          </div>
        </div>

      </div>

      <Footer />


    </>

  )
}


