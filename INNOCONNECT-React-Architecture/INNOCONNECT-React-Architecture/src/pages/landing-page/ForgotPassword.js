import React from 'react';
import { logo, registerpageimage } from '../../assets';

const ForgotPassword = () => {
  return (
   <div>
  <div className="flex flex-col md:flex-row min-h-screen">
    <a href="index.html" className="md:absolute h-20 left-4 top-4 p-4 bg-[#112034]">
    <img
          className
          src={logo}
          alt='logo'
        />
    </a>
    <div className="hidden md:flex  bg-[#112034] flex-1 justify-center items-center p-10">
    <img
          src={registerpageimage}
          alt='signup img'
          className='w-full max-w-md'
        />
    </div>
    <div className="container-content flex-1 flex justify-center items-center bg-[#fff] p-5 ">
      <div className="w-full max-w-md">
        <h1 className="text-center font-bold text-3xl md:text-4xl mt-3 mb-4 text-[#234270]">Forgot Password</h1>
        <form action className="bg-[#F6F9FA] p-8 rounded-2xl" id="forgot-form">
          <p className="text-lg my-4">Enter your email to recover your password</p>
          <div className="my-4">
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="email">
              Email
            </label>
            <input className="rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="email" type="email" placeholder="johndoe@gmail.com" />
          </div>
          <button type="submit" className="bg-[#234270] text-white w-full font-semibold rounded py-2 mt-5 hover:bg-[#0d304c] transition duration-300">Request
            reset link</button>
          <p className=" text-center text-[#234270] my-2"> <a href="./login">Back to Login</a></p>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default ForgotPassword