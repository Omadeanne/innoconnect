import React from 'react'
import { Link } from 'react-router-dom'

const MenteeRegister = () => {
  return (
    <form action className="bg-[#F6F9FA] px-10 pb-10 pt-4 max-w-3xl mx-auto rounded-b-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 tabContent" id="tab1">
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="fname">
              First Name
            </label>
            <input className="rounded border border-primary-03 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="fname" type="text" placeholder="John" />
          </div>
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="lname">
              Last Name
            </label>
            <input className="rounded border border-primary-03 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="lname" type="text" placeholder="Doe" />
          </div>
          <div className="col-span-full">
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="email">
              Email
            </label>
            <input className="rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="email" type="email" placeholder="johndoe@gmail.com" />
            <p className="hidden " id="error-email">Email has already been taken</p>
          </div>
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="password">
              Password
            </label>
            <input className="rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="password" type="password" placeholder="Password" />
          </div>
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input className="rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="confirm-password" type="password" placeholder="Confirm Password" />
            <p className="hidden   " id="error">Password does not match</p>
          </div>
          <label htmlFor="remember" className="col-span-full">
            <input type="checkbox" name="remember" id="remember" className="mr-2" />
            you accept our Terms and Conditions and Privacy Policy
          </label>
          <div className="flex">
            <button type="submit" className="bg-[#234270] text-white font-semibold w-full rounded py-2 hover:bg-[#0d304c] transition duration-300">
              Submit
            </button>
          </div>
          <p className="text-base my-auto">Already have an account? <span className="text-[#234270] font-medium">
          <Link to="/login">Login</Link></span>
          </p>
        </form>
  )
}

export default MenteeRegister
