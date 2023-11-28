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
    to: '/dashboard',
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

export default function Applicant() {
  return (
      <div className="flex relative">
        <div className='w-1/4'>
          <Aside links={links} />
        </div>
        <div className='w-3/4 bg-gray-200'>
          <Header />
          <div className="px-6 z-0 snap-x h-full">
            <div className="px-10 mt-10 h-full">
              <div className="w-full bg-white p-10 shadow-card">
                <div className="flex items-center text-4xl">
                  <i className="fa-solid fa-users text-gray-700 py-4" />
                  <h1 className="ml-4 font-bold text-primary-05">Applicants</h1>
                </div>
                <hr className="border-slate-300" />
                <div className="flex justify-between items-center p-4 border-b border-b-slate-300">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img src="./assets/team/edet.jpg" alt className="w-20 h-20 rounded-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex">
                        <p className="text-slate-600 mr-4">Name:</p>
                        <h1 className="text-lg font-medium">Edet Oluwaseun</h1>
                      </div>
                      <div className="flex">
                        <p className="text-slate-600 mr-4">Applied for:</p>
                        <h1 className="text-lg font-medium">Full Stack Software Engineer</h1>
                      </div>
                    </div>
                  </div>
                  <div className="mr-4">
                    <button aria-label="View" type="button" className="bg-gray-300 w-10 h-10 rounded-full mr-2"><i className="fa-solid fa-eye" /></button>
                    <button aria-label="accept" type="button" className="bg-gray-300 w-10 h-10 rounded-full mr-2"><i className="fa-solid fa-check" /></button>
                    <button aria-label="delete" type="button" className="bg-gray-300 w-10 h-10 rounded-full"><i className="fa-solid fa-trash" /></button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-b-slate-300">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img src="./assets/team/ismail memeber.jpg" alt className="w-20 h-20 rounded-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex">
                        <p className="text-slate-600 mr-4">Name:</p>
                        <h1 className="text-lg font-medium">Ismail Abiodun</h1>
                      </div>
                      <div className="flex">
                        <p className="text-slate-600 mr-4">Applied for:</p>
                        <h1 className="text-lg font-medium">Full Stack Software Engineer</h1>
                      </div>
                    </div>
                  </div>
                  <div className="mr-4">
                    <button aria-label="View" type="button" className="bg-gray-300 w-10 h-10 rounded-full mr-2"><i className="fa-solid fa-eye" /></button>
                    <button aria-label="accept" type="button" className="bg-gray-300 w-10 h-10 rounded-full mr-2"><i className="fa-solid fa-check" /></button>
                    <button aria-label="delete" type="button" className="bg-gray-300 w-10 h-10 rounded-full"><i className="fa-solid fa-trash" /></button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border-b border-b-slate-300">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img src="./assets/team/som.jpg" alt className="w-20 h-20 rounded-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex">
                        <p className="text-slate-600 mr-4">Name:</p>
                        <h1 className="text-lg font-medium">Chisom Okechukwu</h1>
                      </div>
                      <div className="flex">
                        <p className="text-slate-600 mr-4">Applied for:</p>
                        <h1 className="text-lg font-medium">Full Stack Software Engineer</h1>
                      </div>
                    </div>
                  </div>
                  <div className="mr-4">
                    <button aria-label="View" type="button" className="bg-gray-300 w-10 h-10 rounded-full mr-2"><i className="fa-solid fa-eye" /></button>
                    <button aria-label="accept" type="button" className="bg-gray-300 w-10 h-10 rounded-full mr-2"><i className="fa-solid fa-check" /></button>
                    <button aria-label="delete" type="button" className="bg-gray-300 w-10 h-10 rounded-full"><i className="fa-solid fa-trash" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 my-10">
            <h1 className="text-center">© 2023 InnoConnect. All rights reserved.</h1>
          </div>
          <div>
          </div>

        </div>
        </div>
        )
}