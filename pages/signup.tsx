import Header from "../components/Header";
import Head from "next/head"
import { FcGoogle } from "react-icons/fc";

import { FaFacebookF } from "react-icons/fa";


export default function Signup() {

  return (
    <>
      <Head>
        <title>
          TravelNorth
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <div className="w-auto flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up
            </h2>
            <p className="mt-1 text-center font-normal text-sm text-gray-400">
              Create your account to enjoy more

            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex justify-between items-center">
            <a
              href="#"
              className="w-5/12 inline-flex justify-center items-center rounded-md  py-2 px-3 text-sm font-semibold border border-gray-200 shadow-sm hover:bg-gray-100 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              <FcGoogle size={22} className="mr-1" />

            </a>

            <a
              href="#"
              className="w-5/12 inline-flex justify-center items-center rounded-md  py-2 px-3 text-sm font-semibold border border-gray-200 shadow-sm hover:bg-gray-100 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              <FaFacebookF size={22} className="mr-1" color="#166fe5" />
            </a>

          </div>

          <div>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-gray-200 border-0"/>
                <span className="absolute px-3 font-normal text-gray-300 -translate-x-1/2 bg-[#faf7f7]  left-1/2">or</span>
            </div>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>

                <div className="mt-2">
                  <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    required
                  />
                </div>
              </div>

              <div>

                <div className="mt-2">
                  <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-xs text-gray-500">
              By signing up . I agree to Minimal{' '}
              <a href="#" className="font-medium leading-2 text-gray-600 underline hover:text-gray-800">
                Term of Services
              </a>
              <span> and </span>
              <a href="#" className="font-medium leading-2 text-gray-600 underline hover:text-gray-800">
                Privacy Policy
              </a>
            </p>

            <p className="mt-10 text-center font-semibold text-sm text-gray-500">
              Already have an account{' '}
              <a href="/login" className="font-semibold leading-2 text-green-700 hover:text-green-600">
                Login
              </a>

            </p>
          </div>
        </div>

      </main>


    </>
  )
}
