import React from 'react'
// import Aside from '../../Components/molecules/mentee-dashboard/Aside'
// import Header from '../../Components/molecules/mentee-dashboard/Header'

export default function Dashboard() {
  return (
   <div>
  <main className="darkmode:bg-gray-900">
    <div className="flex relative">
      {/* <Aside /> */}
      <aside className="sticky top-0 left-0 w-1/5 z-10 bg-[#1c2434] h-screen text-[#d2d8e2] items-center justify-around p-4 hidden lg:block">
        {/* brand logo */}
        <div className=" my-3">
          <div className="m-1 p-2">
            <span className>
              <a href="index.html">
                <img src="./assets/inno-connect-1.svg" alt="brand-logo" />
              </a>
            </span>
          </div>
        </div>
        {/* side buttons */}
        <div className="mt-7 p-3">
          <div>
            <ul>
              <li className="p-2 m-2 mb-3 text-white hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2">
                <a href="#">
                  <i className="fa-solid fa-house pr-2 text-xl" />
                  <span className="font-semibold text-xl">Dashboard</span>
                </a>
              </li>
              <li className="p-2 m-2 my-7 text-white justify-center items-center hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2">
                <a href="myJobs.html" className="flex">
                  <i className="fa-solid fa-book-open pr-3 text-xl" />
                  <span className="font-semibold text-xl">My jobs</span>
                </a>
              </li>
              <li className="p-2 m-2 my-7  text-white hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2">
                <a href="postJob.html">
                  <i className="fa-regular fa-comments pr-2 text-xl" />
                  <span className="font-semibold text-xl">Post a job</span>
                </a>
              </li>
              <li className="p-2 m-2 my-7  text-white hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2">
                <a href="message.html">
                  <i className="fa-solid fa-graduation-cap pr-2 text-xl" />
                  <span className="font-semibold text-xl">Messages</span>
                </a>
              </li>
              <li className="p-2 m-2 my-7  text-white hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2">
                <a href="applicants.html">
                  <i className="fa-solid fa-user-group pr-2 text-xl" />
                  <span className="font-semibold text-xl">Applicants</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* subscription box */}
        <div className="m-2 p-7 bg-[#2c3850] text-center">
          <div className="justify-center">
            <h3 className="text-xl font-bold ">Go Premium</h3>
            <p className="text-slate-100 font-thin text-sm max-w-lg py-1">Get all recent courses and personalized
              mentorship</p>
            <a href="./pricing.html">
              <button className="mt-3 py-2 m-auto px-12 items-center rounded-md bg-[#3c50e0] lg:text-[1rem] md:text-[1.2rem] font-semibold ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300">
                PURCHASE NOW
              </button>
            </a>
          </div>
        </div>
        {/* sign out button */}
        <div>
          <button className="p-2 m-2 text-center justify-center  text-white hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2 hover:pr-9">
            <a href>
              <i className="fa-regular fa-circle-left pr-3 text-xl" />
              <span className="font-semibold text-xl">Logout</span>
            </a>
          </button>
        </div>
      </aside>
      {/* dashbaord body */}
      <main className="relative w-full md:flex md:flex-col lg:w-4/5 bg-zinc-100">
        <header className="sticky top-0 right-0 z-50 py-2 items-center justify-between drop-shadow-sm bg-[#ffffff] flex">
          <div className="lg:hidden flex text-2xl ml-4" id="open-menu">
            <i className="fa-solid fa-bars-staggered" />
          </div>
          {/* user greeting */}
          <div className="flex-col ml-2 pl-9">
            <div className>
              <h3 className="font-bold">
                Hi,
                <span>MTN</span>
              </h3>
              <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-100 text-red-700 rounded-full mt-2">
                Account not verified
              </div>
            </div>
          </div>
          {/* search bar */}
          {/* <div class="mb-4 md:flex items-center justify-center mt-1 ml-[35px] hidden">
                  <div class="flex border-2 border-gray-300 rounded-xl px-2 py-1 lg:w-80 md:w-60">
                      <i class="fas fa-search text-xl text-slate-500 align-center p-1"></i>
                      <input type="text" class="text-gray-500  py-1 pr-2 w-72 focus:outline-none"
                          placeholder="Search for courses" />
                  </div>
              </div> */}
          {/* darknode toggle button */}
          {/* <div>
                  <label for="darkModeToggle" class="flex items-center cursor-pointer">
                      <input type="checkbox" id="darkModeToggle" class="sr-only">
                      <div class="relative w-10 h-4 bg-gray-400 dark-mode:bg-gray-600 rounded-full shadow-inner"></div>
                      <div class="dot absolute w-6 h-6 bg-white dark-mode:bg-gray-900 rounded-full shadow -left-1 -top-1 transition"></div>
                      <div class="ml-3 text-gray-700 darkText font-medium">Dark Mode</div>
                  </label>
              </div> */}
          {/* notification bell and profile  */}
          <div className="flex items-center">
            {/* bell */}
            <div className="px-2 hidden lg:block">
              <a href className="w-5 text-xl sm:w-3">
                <i className="fa-solid fa-bell text-gray-700" />
              </a>
            </div>
            {/* drop down menu */}
            <div className="dropdown group item relative z-50">
              <div href="#" className="dropdownbtn flex items-center cursor-pointer font-medium text-lg text-[#1D3557] px-4 py-2">
                <img className="w-14" src="./assets/mtn.png" alt />
                <i className="ml-3 text-xs transition-all duration-100 fa-solid fa-angle-down" />
              </div>
              <div className="menu hidden absolute right-2 bg-white w-52 mt-4 rounded-b transition ease-linear duration-100 divide-y divide-slate-300">
                <a href="dashboard.html" className="text-gray-800 px-4  py-2 block hover:bg-slate-200 ">Dashboard</a>
                <a href="profile.html" className="text-gray-800 px-4  py-2 block hover:bg-slate-200">My
                  Profile</a>
                <a href="settings.html" className="text-gray-800 px-4  py-2 block hover:bg-slate-200">Account
                  Settingsr</a>
              </div>
            </div>
          </div>
        </header>
        {/* responsive menu */}
        <div className="side-menu absolute top-0 left-0 z-50 hidden transition duration-700 ease-in-out">
          <aside className="fixed bg-[#1c2434] h-full sm:w-[40%] w-60  text-[#d2d8e2] items-center justify-around ">
            {/* brand logo */}
            <div className="flex items-center justify-around">
              <div className="mx-1">
                <span className="p-2">
                  <a href="#">
                    <img src="./assets/logo.png" alt="brand-logo" />
                  </a>
                </span>
              </div>
              <div className="ml-1 text-3xl sm:xl" id="menu-close">
                <i className="fa-solid fa-xmark" />
              </div>
            </div>
            {/* side buttons */}
            <div className="mt-3 p-3">
              <div>
                <ul>
                  <li className="p-2 m-2 mb-3 text-white hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2">
                    <a href="#">
                      <i className="fa-solid fa-house pr-2 text-xl" />
                      <span className="font-semibold text-xl">Dashboard</span>
                    </a>
                  </li>
                  <li className="p-2 m-2 my-7 text-white justify-center items-center hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2">
                    <a href="myJobs.html" className="flex">
                      <i className="fa-solid fa-book-open pr-3 text-xl" />
                      <span className="font-semibold text-xl">My jobs</span>
                    </a>
                  </li>
                  <li className="p-2 m-2 my-7  text-white hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2">
                    <a href="postJob.html">
                      <i className="fa-regular fa-comments pr-2 text-xl" />
                      <span className="font-semibold text-xl">Post a job</span>
                    </a>
                  </li>
                  <li className="p-2 m-2 my-7  text-white hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2">
                    <a href="message.html">
                      <i className="fa-solid fa-graduation-cap pr-2 text-xl" />
                      <span className="font-semibold text-xl">Messages</span>
                    </a>
                  </li>
                  <li className="p-2 m-2 my-7  text-white hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2">
                    <a href="applicants.html">
                      <i className="fa-solid fa-user-group pr-2 text-xl" />
                      <span className="font-semibold text-xl">Applicants</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* subcribtion box */}
            <div className="m-4 p-7 bg-[#2c3850] text-center">
              <div>
                <h3 className="text-xl font-bold ">Go Premium</h3>
                <p className="text-slate-100 font-thin text-sm max-w-lg py-1">Get all recent courses and
                  personalized mentorship</p>
              </div>
              <div className="justify-center text-center items-center mx-auto">
                <a href="./subscription.html">
                  <button className="mt-3 py-3 px-12 items-center rounded-md bg-[#3c50e0] text-lg font-semibold ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300">
                    PURCHASE NOW
                  </button>
                </a>
              </div>
            </div>
            {/* sign out button */}
            <div>
              <button className="p-2 m-2 text-center justify-center  text-white hover:bg-white hover:text-blue-950 hover:rounded-lg hover:p-2 hover:pr-9">
                <a href>
                  <i className="fa-regular fa-circle-left pr-3 text-xl" />
                  <span className="font-semibold text-xl">Logout</span>
                </a>
              </button>
            </div>
          </aside>
        </div>
        {/* main body */}
        <div className="px-6 mb-4 z-0 snap-x tabContent" id="dashbaord">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 my-4 py-2 text-center snap-x">
            <div className="bg-[#ffffff] rounded-lg py-10 h-40 pr-10 pl-10 hover:bg-[#1C2434] hover:text-white snap-center flex justify-evenly items-center shadow-md">
              <i className="fa-solid fa-graduation-cap text-4xl" />
              <div>
                <h2 className="rounded-full text-2xl text-center font-bold ">100</h2>
                <p className="font-semibold">Jobs posted</p>
              </div>
            </div>
            <div className="bg-[#ffffff] rounded-lg py-10 h-40 pr-10 pl-10 hover:bg-[#1C2434] hover:text-white snap-center flex justify-evenly items-center shadow-md">
              <i className="fa-solid fa-user-group text-4xl" />
              <div>
                <h2 className="rounded-full text-2xl text-center font-bold ">100</h2>
                <p className="font-semibold">Applicants</p>
              </div>
            </div>
            <div className="bg-[#ffffff] rounded-lg py-10 h-40 pr-10 pl-10 hover:bg-[#1C2434] hover:text-white snap-center flex justify-evenly items-center shadow-md">
              <i className="fa-solid fa-eye text-4xl" />
              <div>
                <h2 className="rounded-full text-2xl text-center font-bold ">200</h2>
                <p className="font-semibold">Profile view</p>
              </div>
            </div>
          </div>
          <div className="rounded-sm flex-col md:flex-row flex gap-6 ">
            {/* chart */}
            <div className=" w-full md:w-3/5 bg-white shadow-md">
              <div className="flex items-center p-4">
                <i className="fa-solid fa-eye text-gray-700" />
                <h2 className="text-primary-05 font-bold ml-2">Profile views</h2>
              </div>
              <hr className="border-slate-300" />
              <canvas id="myChart" className="w-full p-4" />
            </div>
            {/* notifications */}
            <div className="w-full md:w-2/5 bg-white flex flex-col shadow-md">
              <div className="flex items-center p-4">
                <i className="fa-solid fa-bell text-gray-700" />
                <h2 className="text-primary-05 font-bold ml-2">Notifications</h2>
              </div>
              <hr className="border-slate-300" />
              <div className="p-4 border-b border-b-slate-300">
                <div className="flex items-center">
                  <i className="fa-regular fa-bell bg-gray-300 p-3 rounded-full" />
                  <p className="ml-3 text-sm">Your job listing <a href="#" className="font-medium text-secondary-04">job
                      Full Stack Software
                      Engineer</a> is expiring
                  </p>
                </div>
              </div>
              <div className="p-4 border-b border-b-slate-300">
                <div className="flex items-center">
                  <i className="fa-regular fa-user bg-gray-300 p-3 rounded-full" />
                  <p className="ml-3 text-sm"><span className="font-medium">Elizabeth Okwong</span> applied for a
                    <a href="#" className="font-medium text-secondary-04">job Full Stack Software
                      Engineer</a>
                  </p>
                </div>
              </div>
              <div className="p-4 border-b border-b-slate-300">
                <div className="flex items-center">
                  <i className="fa-regular fa-comment bg-gray-300 p-3 rounded-full" />
                  <p className="ml-3 text-sm"><span className="font-medium">Edet Effiong</span> sent
                    you a message
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full my-4 shadow-md pt-2">
            <div className="w-full bg-white">
              <div className="flex items-center p-4">
                <i className="fa-solid fa-briefcase text-gray-700" />
                <h2 className="text-primary-05 font-bold ml-2">My Job listings</h2>
              </div>
              <hr className="border-slate-300" />
              <div className="flex justify-between items-center p-4 border-b border-b-slate-300">
                <div>
                  <h1 className="text-lg font-medium">Full Stack Software Engineer</h1>
                  <div className="text-gray-500 my-2">
                    <i className="fa-solid fa-location-dot text-primary-05" />
                    <span className="ml-2">Lagos, Nigeria</span>
                  </div>
                  <div className="flex gap-x-3 my-2">
                    <div className="text-gray-500">
                      <i className="fa-regular fa-calendar text-primary-05" />
                      <span className="ml-2">Posted 5 days ago</span>
                    </div>
                    <div className="text-gray-500">
                      <i className="fa-regular fa-calendar text-primary-05" />
                      <span className="ml-2">Expiring on 15th December 2023</span>
                    </div>
                  </div>
                </div>
                <div className="mr-4 flex flex-col md:flex-row gap-2 ">
                  <button type="button" className="bg-gray-300 w-10 h-10 rounded-full"><i className="fa-solid fa-pen-to-square" /></button>
                  <button type="button" className="bg-gray-300 w-10 h-10 rounded-full"><i className="fa-solid fa-trash" /></button>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border-b border-b-slate-300">
                <div>
                  <h1 className="text-lg font-medium">Full Stack Software Engineer</h1>
                  <div className="text-gray-500 my-2">
                    <i className="fa-solid fa-location-dot text-primary-05" />
                    <span className="ml-2">Lagos, Nigeria</span>
                  </div>
                  <div className="flex gap-x-3 my-2">
                    <div className="text-gray-500">
                      <i className="fa-regular fa-calendar text-primary-05" />
                      <span className="ml-2">Posted 5 days ago</span>
                    </div>
                    <div className="text-gray-500">
                      <i className="fa-regular fa-calendar text-primary-05" />
                      <span className="ml-2">Expiring on 15th December 2023</span>
                    </div>
                  </div>
                </div>
                <div className="mr-4 flex flex-col md:flex-row gap-2">
                  <button type="button" className="bg-gray-300 w-10 h-10 rounded-full"><i className="fa-solid fa-pen-to-square" /></button>
                  <button type="button" className="bg-gray-300 w-10 h-10 rounded-full"><i className="fa-solid fa-trash" /></button>
                </div>
              </div>
              <div className="flex justify-between items-center p-4">
                <div>
                  <h1 className="text-lg font-medium">Full Stack Software Engineer</h1>
                  <div className="text-gray-500 my-2">
                    <i className="fa-solid fa-location-dot text-primary-05" />
                    <span className="ml-2">Lagos, Nigeria</span>
                  </div>
                  <div className="flex gap-x-3 my-2">
                    <div className="text-gray-500">
                      <i className="fa-regular fa-calendar text-primary-05" />
                      <span className="ml-2">Posted 5 days ago</span>
                    </div>
                    <div className="text-gray-500">
                      <i className="fa-regular fa-calendar text-primary-05" />
                      <span className="ml-2">Expiring on 15th December 2023</span>
                    </div>
                  </div>
                </div>
                <div className="mr-4 flex flex-col md:flex-row gap-2">
                  <button type="button" className="bg-gray-300 w-10 h-10 rounded-full"><i className="fa-solid fa-pen-to-square" /></button>
                  <button type="button" className="bg-gray-300 w-10 h-10 rounded-full"><i className="fa-solid fa-trash" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-4">
          <h1 className="text-center">© 2023 InnoConnect. All rights reserved.</h1>
        </div>
      </main>
    </div>
  </main>
</div>

  )
}
