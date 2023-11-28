import React from 'react'
import Aside from '../../Components/molecules/mentee-dashboard/Aside'
import Header from '../../Components/molecules/mentee-dashboard/Header'
import {
  home,
  jobPosted,
  postJobs,
  applicants,
  messages
} from '../../Components/molecules/mentee-dashboard/icons';

const links = [
  {
    name: 'Dashboard',
    to: '/employers-dashboard',
    icon: home,
  },
  {
    name: 'My Jobs',
    to: '/job-posted',
    icon: postJobs,
    
  },
  {
    name: 'Post Job',
    to: '/post-jobs',
    icon: jobPosted,
    
  },
  {
    name: 'Messages',
    to: '/messages',
    icon: messages,
  },
  {
    name: 'Applicants',
    to: '/applicant',
    icon: applicants,
    
  },
];

export default function Dashboard() {
  return (
   <div>
  <main className="darkmode:bg-gray-900">
    <div className="flex relative">
      <div className='w-1/4'>
        <Aside links={links} />      
      </div>
      <div className='w-3/4 bg-gray-200'>
        <Header />
       <div>
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
</div>

      </div>
    </div>
  </main>
</div>

  )
}
