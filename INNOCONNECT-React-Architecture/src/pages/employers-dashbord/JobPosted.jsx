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

export default function JobPosted() {
  return (
    <div>
      <div className='flex relative'>
        <div className=''>
          <Aside links={links} />
        </div>
        <div className= 'h-screen bg-gray-200 overflow-auto w-full flex flex-col justify-between'>
          <Header />
          <div className='md:px-10 z-0 mt-10 h-full'>
            <div className='w-full bg-white p-5 md:p-10 shadow-card'>
              <div className='flex items-center text-2xl md:text-4xl'>
                <i className='fa-solid fa-briefcase text-gray-700 py-4' />
                <h1 className='ml-4 font-bold text-primary-05'>
                  My Job listings
                </h1>
              </div>
              <hr className='border-slate-300' />
              <div id='dynamic' />
              <div className='flex justify-between items-center py-4 md:p-4 border-b border-b-slate-300'>
                <div>
                  <h1 className='text-lg font-medium'>
                    Full Stack Software Engineer
                  </h1>
                  <div className='text-gray-500 my-2'>
                    <i className='fa-solid fa-location-dot text-primary-05' />
                    <span className='ml-2'>Lagos, Nigeria</span>
                  </div>
                  <div className='flex gap-x-3 my-2'>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>Posted 5 days ago</span>
                    </div>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>
                        Expiring on 15th December 2023
                      </span>
                    </div>
                  </div>
                  <div className='text-gray-500'>
                    <i className='fa-solid fa-users text-primary-05' />
                    <span className='ml-2'>3 Applicants</span>
                  </div>
                </div>
                <div className='mr-4 flex flex-col md:flex-row gap-2'>
                  <button
                    type='button'
                    className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                  >
                    <i className='fa-solid fa-pen-to-square' />
                  </button>
                  <button
                    type='button'
                    className='bg-gray-300 w-10 h-10 rounded-full'
                  >
                    <i className='fa-solid fa-trash' />
                  </button>
                </div>
              </div>
              <div className='flex justify-between items-center py-4 md:p-4 border-b border-b-slate-300'>
                <div>
                  <h1 className='text-lg font-medium'>
                    Full Stack Software Engineer
                  </h1>
                  <div className='text-gray-500 my-2'>
                    <i className='fa-solid fa-location-dot text-primary-05' />
                    <span className='ml-2'>Lagos, Nigeria</span>
                  </div>
                  <div className='flex gap-x-3 my-2'>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>Posted 5 days ago</span>
                    </div>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>
                        Expiring on 15th December 2023
                      </span>
                    </div>
                  </div>
                  <div className='text-gray-500'>
                    <i className='fa-solid fa-users text-primary-05' />
                    <span className='ml-2'>3 Applicants</span>
                  </div>
                </div>
                <div className='mr-4 flex flex-col md:flex-row gap-2'>
                  <button
                    type='button'
                    className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                  >
                    <i className='fa-solid fa-pen-to-square' />
                  </button>
                  <button
                    type='button'
                    className='bg-gray-300 w-10 h-10 rounded-full'
                  >
                    <i className='fa-solid fa-trash' />
                  </button>
                </div>
              </div>
              <div className='flex justify-between items-center py-4 md:p-4'>
                <div>
                  <h1 className='text-lg font-medium'>
                    Full Stack Software Engineer
                  </h1>
                  <div className='text-gray-500 my-2'>
                    <i className='fa-solid fa-location-dot text-primary-05' />
                    <span className='ml-2'>Lagos, Nigeria</span>
                  </div>
                  <div className='flex gap-x-3 my-2'>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>Posted 5 days ago</span>
                    </div>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>
                        Expiring on 15th December 2023
                      </span>
                    </div>
                  </div>
                  <div className='text-gray-500'>
                    <i className='fa-solid fa-users text-primary-05' />
                    <span className='ml-2'>3 Applicants</span>
                  </div>
                </div>
                <div className='mr-4 flex flex-col md:flex-row gap-2'>
                  <button
                    type='button'
                    className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                  >
                    <i className='fa-solid fa-pen-to-square' />
                  </button>
                  <button
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
    </div>
  );
}
