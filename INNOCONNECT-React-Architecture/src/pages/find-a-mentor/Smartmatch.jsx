import React from 'react'
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';

export default function Smartmatch() {
  return (
    <> 
    <Nav />
      <div className="m-auto">
    <div className="w-[75%] m-auto">
      <p className="font-font text-6xl font-bold text-primary-07 text-center my-[20px] p-[10px]">Discover Your
        Mentorship Match</p>
      <p className="font-font text-base font-medium text-primary-07 text-center my-[20px] max-w-3xl mx-auto">Explore the possibilities
        of mentorship with us! Whether you're seeking technical guidance or professional growth, we're here to
        connect you with the mentor who's perfectly suited to your unique needs and aspirations. Your journey to
        success starts with the right mentorship match!</p>
    </div>
    <div className="grid grid-cols-3 gap-10 w-[75%] m-auto pt-[30px]">
      <div>
        <div className="flex flex-col pl-7 items-center justify-center">
          <div>
            <img className="w-[120px] rounded-[50%] shadow-card" src="./assets/team/ismail memeber.jpg" alt="Mentor" />
          </div>
          <div className="pt-[15px]">
            <p className="text-primary-07 font-font font-bold text-3xl text-center">Ismail Abdulrahman</p>
            <p className="text-primary-06 font-font font-medium text-xl text-center">Frontend Developer</p>
            <p className="text-primary-06 font-font font-medium text-md text-center">Tiidelab</p>
            <div className="flex items-center justify-center m-auto text-2xl gap-3 pt-[10px] duration-300">
              <i className="fa-brands fa-linkedin transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-x-twitter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-facebook transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
            </div>
          </div>
          <div className="inline-flex justify-center items-center gap-4 mt-[30px]">
            <button className="px-[10px] py-[8px] rounded-lg border-primary-07 border-2 font-font text-primary-07 text-base font-bold">View
              Profile</button>
            <button className="rounded-lg bg-primary-07 font-font text-base font-md text-[#fff] px-[10px] py-[8px]">Select
              Mentor</button>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 shadow-card flex rounded-md flex-row w-[300px] h-[370px] m-auto gap-4 py-[10px]">
        <div className="flex flex-col pl-7 items-center justify-center">
          <div>
            <img className="w-[120px] rounded-[50%] shadow-card" src="./assets/team/dan.jpg" alt="Mentor" />
          </div>
          <div className="pt-[15px]">
            <p className="text-primary-07 font-font font-bold text-3xl text-center">Dan Smith</p>
            <p className="text-primary-06 font-font font-medium text-xl text-center">Frontend Developer</p>
            <p className="text-primary-06 font-font font-medium text-md text-center">Techspecialist</p>
            <div className="flex items-center justify-center m-auto text-2xl gap-3 pt-[10px] duration-300">
              <i className="fa-brands fa-linkedin transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-x-twitter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-facebook transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
            </div>
          </div>
          <div className="inline-flex justify-center items-center gap-4 mt-[30px]">
            <button className="px-[10px] py-[8px] rounded-lg border-primary-07 border-2 font-font text-primary-07 text-base font-bold">View
              Profile</button>
            <button className="rounded-lg bg-primary-07 font-font text-base font-md text-[#fff] px-[10px] py-[8px]">Select
              Mentor</button>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 shadow-card flex rounded-md flex-row w-[300px] h-[370px] m-auto gap-4 py-[10px]">
        <div className="flex flex-col pl-7 items-center justify-center">
          <div>
            <img className="w-[120px] rounded-[50%] shadow-card" src="./assets/team/edet.jpg" alt="Mentor" />
          </div>
          <div className="pt-[15px]">
            <p className="text-primary-07 font-font font-bold text-3xl text-center">Edet Ibrahima</p>
            <p className="text-primary-06 font-font font-medium text-xl text-center">Frontend Developer</p>
            <p className="text-primary-06 font-font font-medium text-md text-center">Freelance</p>
            <div className="flex items-center justify-center m-auto text-2xl gap-3 pt-[10px] duration-300">
              <i className="fa-brands fa-linkedin transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-x-twitter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-facebook transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
            </div>
          </div>
          <div className="inline-flex justify-center items-center gap-4 mt-[30px]">
            <button className="px-[10px] py-[8px] rounded-lg border-primary-07 border-2 font-font text-primary-07 text-base font-bold">View
              Profile</button>
            <button className="rounded-lg bg-primary-07 font-font text-base font-md text-[#fff] px-[10px] py-[8px]">Select
              Mentor</button>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 shadow-card flex rounded-md flex-row w-[300px] h-[370px] m-auto gap-4 py-[10px]">
        <div className="flex flex-col pl-7 items-center justify-center">
          <div>
            <img className="w-[120px] rounded-[50%] shadow-card" src="./assets/team/pat.jpg" alt="Mentor" />
          </div>
          <div className="pt-[15px]">
            <p className="text-primary-07 font-font font-bold text-3xl text-center">Patience Bassey</p>
            <p className="text-primary-06 font-font font-medium text-xl text-center">Frontend Developer</p>
            <p className="text-primary-06 font-font font-medium text-md text-center">Emirates</p>
            <div className="flex items-center justify-center m-auto text-2xl gap-3 pt-[10px] duration-300">
              <i className="fa-brands fa-linkedin transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-x-twitter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-facebook transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
            </div>
          </div>
          <div className="inline-flex justify-center items-center gap-4 mt-[30px]">
            <button className="px-[10px] py-[8px] rounded-lg border-primary-07 border-2 font-font text-primary-07 text-base font-bold">View
              Profile</button>
            <button className="rounded-lg bg-primary-07 font-font text-base font-md text-[#fff] px-[10px] py-[8px]">Select
              Mentor</button>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 shadow-card flex rounded-md flex-row w-[300px] h-[370px] m-auto gap-4 py-[10px]">
        <div className="flex flex-col pl-7 items-center justify-center">
          <div>
            <img className="w-[120px] rounded-full shadow-card" src="./assets/team/efe.jpg" alt="Mentor" />
          </div>
          <div className="pt-[15px]">
            <p className="text-primary-07 font-font font-bold text-3xl text-center">Efe Carter</p>
            <p className="text-primary-06 font-font font-medium text-xl text-center">Frontend Developer</p>
            <p className="text-primary-06 font-font font-medium text-md text-center">Google</p>
            <div className="flex items-center justify-center m-auto text-2xl gap-3 pt-[10px] duration-300">
              <i className="fa-brands fa-linkedin transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-x-twitter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-facebook transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
            </div>
          </div>
          <div className="inline-flex justify-center items-center gap-4 mt-[30px]">
            <button className="px-[10px] py-[8px] rounded-lg border-primary-07 border-2 font-font text-primary-07 text-base font-bold">View
              Profile</button>
            <button className="rounded-lg bg-primary-07 font-font text-base font-md text-[#fff] px-[10px] py-[8px]">Select
              Mentor</button>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 shadow-card flex rounded-md flex-row w-[300px] h-[370px] m-auto gap-4 py-[10px]">
        <div className="flex flex-col pl-7 items-center justify-center">
          <div>
            <img className="w-[120px] rounded-[50%] shadow-card" src="./assets/team/lizzy.jpg" alt="Mentor" />
          </div>
          <div className="pt-[15px]">
            <p className="text-primary-07 font-font font-bold text-3xl text-center">Okwong Elizabeth</p>
            <p className="text-primary-06 font-font font-medium text-xl text-center">Frontend Developer</p>
            <p className="text-primary-06 font-font font-medium text-md text-center">Amazon</p>
            <div className="flex items-center justify-center m-auto text-2xl gap-3 pt-[10px] duration-300">
              <i className="fa-brands fa-linkedin transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-x-twitter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
              <i className="fa-brands fa-facebook transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer" />
            </div>
          </div>
          <div className="inline-flex justify-center items-center gap-4 mt-[30px]">
            <button className="px-[10px] py-[8px] rounded-lg border-primary-07 border-2 font-font text-primary-07 text-base font-bold">View
              Profile</button>
            <button className="rounded-lg bg-primary-07 font-font text-base font-md text-[#fff] px-[10px] py-[8px]">Select
              Mentor</button>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-fit mx-auto my-20" aria-label="Page navigation">
      <ul className="inline-flex">
        <li><button className="h-10 px-5 text-black transition-colors duration-150 bg-white border border-r-0 border-secondary-05  focus:shadow-outline hover:bg-secondary-01">Prev</button>
        </li>
        <li><button className="h-10 px-5 text-black transition-colors duration-150 bg-white border border-r-0 border-secondary-05 focus:shadow-outline hover:bg-secondary-01">1</button>
        </li>
        <li><button className="h-10 px-5 text-black transition-colors duration-150 bg-white border border-r-0 border-secondary-05 focus:shadow-outline hover:bg-secondary-01">2</button>
        </li>
        <li><button className="h-10 px-5 text-white transition-colors duration-150 bg-primary-06 border border-r-0 border-secondary-05 focus:shadow-outline">3</button>
        </li>
        <li><button className="h-10 px-5 text-black transition-colors duration-150 bg-white border border-secondary-05 focus:shadow-outline hover:bg-secondary-01">Next</button>
        </li>
      </ul>
    </div>
  </div>
  <Footer />
  </>

  )
}
