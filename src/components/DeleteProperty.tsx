import { MdAddCircle, MdDeleteForever } from "react-icons/md";
import Map from "./Index";



interface AddCompanyModalProps {
  onClose: () => void;
}


export default function AddCompany(props: AddCompanyModalProps) {


  return (
    <>
      <div className="  w-100vw h-100vh fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">

        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              {/* <!-- Modal content --> */}
              <div className="relative p-4 bg-white rounded-lg shadow  sm:p-5">
               {/*  <!-- Modal header --> */}
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
                  <h3 className="text-lg font-semibold text-gray-900 ">
                    Add Accomodation
                  </h3>
                  <button onClick={props.onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                    <div className="grid gap-4 mb-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" placeholder="Type product name" />
                      </div>
                      <div>
                        <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Brand</label>
                        <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" placeholder="Product brand" />
                      </div>
                      <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                        <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" placeholder="$2999" />
                      </div>
                      <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                          <option selected>Select category</option>
                          <option value="TV">TV/Monitors</option>
                          <option value="PC">PC</option>
                          <option value="GA">Gaming/Console</option>
                          <option value="PH">Phones</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <textarea id="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder="Write product description here"></textarea>
                      </div>
                    </div>

                    <section>

                      <p className="block mb-2 text-sm font-medium text-gray-900">Accomodation Images</p>
                      
                      <div className="my-6 flex justify-between" >
                        
                      <div className="flex w-1/5 justify-between items-center">
                          <div className="max-w-sm p-2 bg-gray-100 border border-gray-200 rounded-lg shadow">
                            <img className="rounded-lg" src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg" alt="" />
                            
                            <div className="mt-4 flex justify-between items-center">
                              <MdAddCircle  size={24} color="#16a34a"/>
                              <MdDeleteForever size={24} color="#dc2626"/>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex w-1/5 justify-between items-center">
                          <div className="max-w-sm p-2 bg-gray-100 border border-gray-200 rounded-lg shadow">
                            <img className="rounded-lg" src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg" alt="" />
                            
                            <div className="mt-4 flex justify-between items-center">
                              <MdAddCircle  size={24} color="#16a34a"/>
                              <MdDeleteForever size={24} color="#dc2626"/>
                            </div>
                          </div>
                        </div>

                        <div className="flex w-1/5 justify-between items-center">
                          <div className="max-w-sm p-2 bg-gray-100 border border-gray-200 rounded-lg shadow">
                            <img className="rounded-lg" src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg" alt="" />
                            
                            <div className="mt-4 flex justify-between items-center">
                              <MdAddCircle  size={24} color="#16a34a"/>
                              <MdDeleteForever size={24} color="#dc2626"/>
                            </div>
                          </div>
                        </div>

                        <div className="flex w-1/5 justify-between items-center">
                          <div className="max-w-sm p-2 bg-gray-100 border border-gray-200 rounded-lg shadow">
                            <img className="rounded-lg" src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/7/3/4fb3-8d51-442c-827c-bb1b0f6221b8.jpg" alt="" />
                            
                            <div className="mt-4 flex justify-between items-center">
                              <MdAddCircle  size={24} color="#16a34a"/>
                              <MdDeleteForever size={24} color="#dc2626"/>
                            </div>
                          </div>
                        </div>

                        


                      </div>



                    </section>
                      <p className="block mb-2 text-sm font-medium text-gray-900">Map Coordinates</p>
                      <Map />




                    <section>

                    </section>

                    <section className="flex items-center space-x-4">

                      <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                          Add Accomodation
                      </button>
                      <button type="button" className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        <svg className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        Delete
                      </button>
                    </section>

                  <div/>
              </div>
            </div>
          
        </div>




    </>

  )
}


