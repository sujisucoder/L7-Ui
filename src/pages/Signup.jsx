import React from 'react'
import { Link } from 'react-router-dom';
import signupImage from '../assets/svg-image.png'


const Signup = () => {
  return (
    <>
      <section className="w-full h-auto relative grid justify-center mt-32">
        <div className='w-[90%] lg:w-[1332px] h-auto lg:h-[617px] m-16 rounded-3xl border border-slate-600 grid lg:grid-cols-3 overflow-hidden'>
          <div className="hidden lg:block overflow-hidden  rounded-3xl"
          style={{ backgroundImage: `url(${signupImage})`,backgroundSize:'cover'}}
          >
            {/* <img 
              src={signupImage}
              alt="Signup Illustration" 
              className="w-full h-full object-cover"
            /> */}
          </div>
          <div className="p-8 flex flex-col col-span-2 justify-center  items-center">
            <h1 className="text-3xl  font-bold mb-6">Get Started Now</h1>
            <h2 className="text-sm font-extralight mb-6">Enter your credentials to access your account</h2>
            <hr  />
            <form className="space-y-4 mt-5 p-5  md:w-3/4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirm-password" 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Confirm your password"
                />
              </div>
              <div className='  flex items-center justify-center '>
                <button 
                  type="submit" 
                  className=" w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#000117] hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                >
                  Register
                </button>
              </div>
              <div className="text-black text-sm flex justify-center items-center gap-1">
                  Already a Member ?
                  {/* <Link to="/login" className="text-blue-500">
                    Login
                  </Link> */}
                </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup
