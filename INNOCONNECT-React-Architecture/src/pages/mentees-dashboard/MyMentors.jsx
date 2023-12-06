import { Rating } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const MyMentors = () => {
  const mentors = false;
  return (
    <div className='md:px-10 z-0 mt-10 h-full'>
      <div className='w-full bg-white p-5 md:p-10 shadow-card h-full'>
        <div className='flex items-center text-2xl md:text-4xl'>
          <h1 className='mb-4 font-bold text-primary-05'>My Mentors</h1>
        </div>
        <hr className='border-slate-300' />
        {mentors ? (
          <>
            <div className='flex items-center justify-between px-5 py-4 border-b border-b-slate-300'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <img
                    src='https://i.pravatar.cc/300'
                    alt=''
                    className='rounded-full h-20 w-20'
                  />
                </div>
                <div>
                  <h1 className='text-lg font-medium my-1'>John Doe</h1>
                  <p className='text-gray-500 my-1'>Devops Engineer</p>
                  <Rating
                    value={4}
                    readonly
                  />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2'>
                  Pending
                </span>
                <Link to=''>
                  <span className='inline-flex items-center rounded-full h-9 w-9 bg-blue-gray-100 px-2 py-1 text font-medium ring-1 ring-inset ring-red-600/10 mr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6'
                    >
                      <path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
                      <path
                        fillRule='evenodd'
                        d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className='flex items-center justify-between px-5 py-4 border-b border-b-slate-300'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <img
                    src='https://i.pravatar.cc/300'
                    alt=''
                    className='rounded-full h-20 w-20'
                  />
                </div>
                <div>
                  <h1 className='text-lg font-medium my-1'>Elizabeth Okwong</h1>
                  <p className='text-gray-500 my-1'>Frontend Developer</p>
                  <Rating
                    value={4}
                    readonly
                  />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <span className='inline-flex items-center rounded-full h-9 w-9 bg-blue-gray-100 px-2 py-1 text font-medium ring-1 ring-inset ring-red-600/10 mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                <Link to=''>
                  <span className='inline-flex items-center rounded-full h-9 w-9 bg-blue-gray-100 px-2 py-1 text font-medium ring-1 ring-inset ring-red-600/10 mr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6'
                    >
                      <path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
                      <path
                        fillRule='evenodd'
                        d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className='flex items-center justify-between px-5 py-4 border-b border-b-slate-300'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <img
                    src='https://i.pravatar.cc/300'
                    alt=''
                    className='rounded-full h-20 w-20'
                  />
                </div>
                <div>
                  <h1 className='text-lg font-medium my-1'>Patience Bassey</h1>
                  <p className='text-gray-500 my-1'>Product Manager</p>
                  <Rating
                    value={4}
                    readonly
                  />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2'>
                  Pending
                </span>
                <Link to=''>
                  <span className='inline-flex items-center rounded-full h-9 w-9 bg-blue-gray-100 px-2 py-1 text font-medium ring-1 ring-inset ring-red-600/10 mr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6'
                    >
                      <path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
                      <path
                        fillRule='evenodd'
                        d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className='flex justify-center items-center h-full'>
            <div className='text-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-9 h-9 block mx-auto'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'
                />
              </svg>

              <p className='text-primary-05 font-semibold my-2'>No Mentors</p>
              <Link
                to='/jobs'
                className='inline-flex justify-center gap-x-1.5 rounded-md bg-secondary-06 px-3 text-sm py-2  text-white shadow-sm active:bg-secondary-07 hover:shadow-btn my-2'
              >
                Discover your mentors
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyMentors;
