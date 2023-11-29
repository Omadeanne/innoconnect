import React from 'react';
import Aside from '../../Components/molecules/mentee-dashboard/Aside';
import Header from '../../Components/molecules/mentee-dashboard/Header';
import {
  home,
  jobPosted,
  postJobs,
  applicants,
  messages,
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
    <div className='flex relative'>
      <div className=''>
        <Aside links={links} />
      </div>
      <div className='h-screen bg-gray-200 overflow-auto w-full flex flex-col justify-between'>
        <Header />
        <div className='px-10 z-0 mt-10 '>
          <div className='w-full bg-white p-10 shadow-card'>
            <div className='flex items-center text-4xl'>
              <i className='fa-solid fa-users text-gray-700 py-4' />
              <h1 className='ml-4 font-bold text-primary-05'>Applicants</h1>
            </div>
            <hr className='border-slate-300' />
            <div className='flex justify-between items-center p-4 border-b border-b-slate-300'>
              <div className='flex items-center'>
                <div className='mr-4'>
                  <a href="https://ibb.co/mTsNFWx"><img className='w-20 h-20 rounded-full object-cover' src="https://i.ibb.co/PjpDzHS/edet.jpg" alt="edet" border="0" /></a>

                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <p className='text-slate-600 mr-4'>Name:</p>
                    <h1 className='text-lg font-medium'>Edet Oluwaseun</h1>
                  </div>
                  <div className='flex'>
                    <p className='text-slate-600 mr-4'>Applied for:</p>
                    <h1 className='text-lg font-medium'>
                      Full Stack Software Engineer
                    </h1>
                  </div>
                </div>
              </div>
              <div className='mr-4'>
                <button
                  aria-label='View'
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                >
                  <i className='fa-solid fa-eye' />
                </button>
                <button
                  aria-label='accept'
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                >
                  <i className='fa-solid fa-check' />
                </button>
                <button
                  aria-label='delete'
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full'
                >
                  <i className='fa-solid fa-trash' />
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center p-4 border-b border-b-slate-300'>
              <div className='flex items-center'>
                <div className='mr-4'>
                  <a href="https://ibb.co/hc0yzks"><img className='w-20 h-20 rounded-full object-cover' src="https://i.ibb.co/jztTXdh/ismail-memeber.jpg" alt="ismail-memeber" border="0" /></a>

                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <p className='text-slate-600 mr-4'>Name:</p>
                    <h1 className='text-lg font-medium'>Ismail Abiodun</h1>
                  </div>
                  <div className='flex'>
                    <p className='text-slate-600 mr-4'>Applied for:</p>
                    <h1 className='text-lg font-medium'>
                      Full Stack Software Engineer
                    </h1>
                  </div>
                </div>
              </div>
              <div className='mr-4'>
                <button
                  aria-label='View'
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                >
                  <i className='fa-solid fa-eye' />
                </button>
                <button
                  aria-label='accept'
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                >
                  <i className='fa-solid fa-check' />
                </button>
                <button
                  aria-label='delete'
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full'
                >
                  <i className='fa-solid fa-trash' />
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center p-4 border-b border-b-slate-300'>
              <div className='flex items-center'>
                <div className='mr-4'>
                  {/* <img
                    src='./assets/team/som.jpg'
                    alt=''
                    className='w-20 h-20 rounded-full object-cover'
                  /> */}
                  <a href="https://ibb.co/QKq3TDc"><img className='w-20 h-20 rounded-full object-cover' src="https://i.ibb.co/JsbwG3d/som.jpg" alt="som" border="0" /></a>
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <p className='text-slate-600 mr-4'>Name:</p>
                    <h1 className='text-lg font-medium'>Chisom Okechukwu</h1>
                  </div>
                  <div className='flex'>
                    <p className='text-slate-600 mr-4'>Applied for:</p>
                    <h1 className='text-lg font-medium'>
                      Full Stack Software Engineer
                    </h1>
                  </div>
                </div>
              </div>
              <div className='mr-4'>
                <button
                  aria-label='View'
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                >
                  <i className='fa-solid fa-eye' />
                </button>
                <button
                  aria-label='accept'
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                >
                  <i className='fa-solid fa-check' />
                </button>
                <button
                  aria-label='delete'
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full'
                >
                  <i className='fa-solid fa-trash' />
                </button>
              </div>
            </div>
          </div>
        </div>
          <div className='border-t mt-auto py-4'>
            <h1 className='text-center'>
              © 2023 InnoConnect. All rights reserved.
            </h1>
          </div>
      </div>
    </div>
  );
}
