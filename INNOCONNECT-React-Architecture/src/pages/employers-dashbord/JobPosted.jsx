import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import useAuthProvider from '../../context/useAuthProvider';

export default function JobPosted() {
  const { isLoggedIn } = useAuthProvider();
  const [isLoading, setIsLoading] = useState(true);
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get('/jobs/employer/', {
          headers: {
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        });

        console.log(response.data);
        setIsLoading(false);
        setMyJobs(response?.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error.response.message);
      }
    };
    getJobs();
  }, [isLoggedIn]);

  return (
    <div className='md:px-10 z-0 mt-10 h-full'>
      <div className='w-full bg-white p-5 md:p-10 shadow-card h-full'>
        <div className='flex items-center text-2xl md:text-4xl'>
          <i className='fa-solid fa-briefcase text-gray-700 py-4' />
          <h1 className='ml-4 font-bold text-primary-05'>My Job listings</h1>
        </div>
        <hr className='border-slate-300' />

        {isLoading ? (
          <div className='flex justify-center items-center h-full w-full'>Loading...</div>
        ) : (
          myJobs.map((job) => (
            <div
              key={job.id}
              className='flex justify-between items-center py-4 md:p-4 border-b border-b-slate-300'
            >
              <div>
                <h1 className='text-lg font-medium list-none'>{job.title}</h1>
                <div>
                  <p className='text-lg font-base list-none'>{job.workSetup}</p>
                </div>
                <div className='text-gray-500 my-2 flex items-center list-none'>
                  <i className='fa-solid fa-location-dot text-primary-05' />
                  <span className='ml-2'>{job.location}</span>
                </div>
                <div className='flex gap-x-3 my-2'>
                  <div className='text-gray-500'>
                    <i className='fa-regular fa-calendar text-primary-05' />
                    <span className='ml-2'>Posted 5 days ago</span>
                  </div>
                  <div className='text-gray-500'>
                    <i className='fa-regular fa-calendar text-primary-05' />
                    <span className='ml-2'>Expiring on 15th December 2023</span>
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
          ))
        )}
      </div>
    </div>
  );
}
