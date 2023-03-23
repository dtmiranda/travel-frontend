
export default function Header(){
  return(
    <nav className="bg-transparent border-gray-200 py-6">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-4">
      <a href="/" className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900">TravelNorth</span>
      </a>
      <div className="flex items-center md:order-2">
        <a href="/login" className="text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2  focus:outline-none">Login</a>
        <button data-collapse-toggle="mega-menu-icons" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
          
          <li>
            <a href="/" className="headerLink">Home</a>
          </li>

          <li>
            <a href="about" className="headerLink">About Us</a>
          </li>

          <li>
            <a href="contact" className="headerLink">Contact</a>
          </li>

        </ul>
      </div>
      </div>
    </nav>
  )
}

