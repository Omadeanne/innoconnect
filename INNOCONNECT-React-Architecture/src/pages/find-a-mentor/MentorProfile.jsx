import React from 'react'
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import {mentor02} from '../../assets'

export default function MentorProfile(){
  return(
    <div>
      <Nav />
      <div className='flex justify-center mt-3'>
      <div className='flex flex-1 justify-center items-center'>
        <img src={mentor02} alt="mentor's pic" className ="" />
      </div>
      <div className='text-left flex-1 py-5 px-10'>
        <h1 className='text-3xl font-bold'>Edet Ibrahima</h1>
        <p>Senior Frontend Developer</p>
        <div className="flex   text-2xl gap-5 ">
              <button><i className="fa-brands fa-sm fa-linkedin   hover:cursor-pointer" /></button>
              <button><i className="fa-brands fa-sm fa-x-twitter   hover:cursor-pointer" /></button>
              <button><i className="fa-brands fa-sm fa-facebook   hover:cursor-pointer" /></button>
            </div>
        <div className='mt-8'>
          <p className='text-xl font-bold'>About</p> <hr />
          Edet is a seasoned frontend developer with over 10 years of experience. 
          He's collaborated on a lot of projects which stood him out in his career journey. 
        </div>
        <div className='my-5'>
          <p className='text-xl font-bold'>Experience</p> <hr />
          <ul>
            <li className='my-3 '><h3 className='text-xl font-semi-bold'>Software Engineer</h3>
              <p>Microsoft</p>
              <small>May 2021 - Present</small>
            </li>
            <hr />
            <li><h3 className='text-xl font-semi-bold'>Software Engineer</h3>
              <p>Interswitch</p>
              <small>August 2019- April 2021</small>
            </li>
          </ul>
        </div>
        <div className='text-center'><button className="rounded-lg bg-primary-05 my-3 font-font text-base font-md text-[#fff] px-8 py-[8px]">Connect +</button></div>
      </div>
      </div>
      <Footer />
    </div>
  )
}