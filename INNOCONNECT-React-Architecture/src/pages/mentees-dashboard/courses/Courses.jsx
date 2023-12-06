import React, { useState } from 'react';
import './courses.css';
import { Link } from 'react-router-dom';
const Courses = () => {
  const [activeTab, setActiveTab] = useState(1);
  const course = false;

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className='md:px-10 z-0 mt-10 h-full'>
      <div className='w-full bg-white p-5 md:p-10 shadow-card h-full'>
        <div className='flex items-center text-2xl md:text-4xl'>
          <h1 className='mb-4 font-bold text-primary-05'>My Courses</h1>
        </div>
        <hr className='border-slate-300' />
        <div
          className='flex items-center mt-4 mb-8 border-b
border-b-slate-300'
        >
          <button
            type='button'
            onClick={() => handleTabClick(1)}
            className='group text-left inline-block text-lg font-bold w-1/5 min-w-[150px]'
          >
            <span className='ml-2'>Currently learning</span>
            <div
              className={`${
                activeTab === 1
                  ? 'bg-black h-[2px] group-hover:scale-x-100 transition-all duration-100 mt-3'
                  : 'bg-black scale-x-0 h-[2px] group-hover:scale-x-100 transition-all duration-100 mt-3'
              }`}
            ></div>
          </button>
          <button
            type='button'
            onClick={() => handleTabClick(2)}
            className='group text-left inline-block text-lg font-bold w-1/5 min-w-[150px] '
          >
            <span className='ml-2'>Completed</span>
            <div
              className={`${
                activeTab === 2
                  ? 'bg-black h-[2px] group-hover:scale-x-100 transition-all duration-100 mt-3'
                  : 'bg-black scale-x-0 h-[2px] group-hover:scale-x-100 transition-all duration-100 mt-3'
              }`}
            ></div>
          </button>
        </div>
        {activeTab === 1 && (
          <div
            id='Home'
            className='w-full text-primary-05  px-4 py-8'
          >
            {course ? (
              <>
                <div className='col bg'>
                  <div className='col-info'>
                    <div className='col-info-text'>
                      <h1>Web Development</h1>
                      <span className='inline-flex items-center rounded-md bg-primary-01 px-2 py-1 text font-medium text-primary-05 ring-1 ring-inset ring-red-600/10'>
                        Course
                      </span>
                    </div>
                    <ul className='col-info-links'>
                      <li>
                        <a
                          href='#'
                          className='white'
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='blue'
                        >
                          Continue
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='skills'>
                    <div className='skill-bar'>
                      <div
                        className='skill-per'
                        style={{ maxWidth: '30%' }}
                      />
                    </div>
                    <p>30% Complete</p>
                  </div>
                </div>
                <div className='col'>
                  <div className='col-info'>
                    <div className='col-info-text'>
                      <h1>Digital Marketing</h1>
                      <span className='inline-flex items-center rounded-md bg-primary-01 px-2 py-1 text font-medium text-primary-05 ring-1 ring-inset ring-red-600/10'>
                        Course
                      </span>
                    </div>
                    <ul className='col-info-links'>
                      <li>
                        <a
                          href='#'
                          className='white'
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='blue'
                        >
                          Continue
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='skills'>
                    <div className='skill-bar'>
                      <div
                        className='skill-per'
                        style={{ maxWidth: '60%' }}
                      />
                    </div>
                    <p>60% Complete</p>
                  </div>
                </div>
                <div className='col'>
                  <div className='col-info'>
                    <div className='col-info-text'>
                      <h1>Cyber Security</h1>
                      <span className='inline-flex items-center rounded-md bg-primary-01 px-2 py-1 text font-medium text-primary-05 ring-1 ring-inset ring-red-600/10'>
                        Course
                      </span>
                    </div>
                    <ul className='col-info-links'>
                      <li>
                        <a
                          href='#'
                          className='white'
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='blue'
                        >
                          Continue
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='skills'>
                    <div className='skill-bar'>
                      <div
                        className='skill-per'
                        style={{ maxWidth: '50%' }}
                      />
                    </div>
                    <p>50% Complete</p>
                  </div>
                </div>
              </>
            ) : (
              <div className='flex justify-center items-center  p-10'>
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
                      d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                    />
                  </svg>

                  <p className='text-primary-05 font-semibold my-2'>
                    No Courses
                  </p>
                  <p className='text-gray-500'>
                    You have not added any courses
                  </p>
                  <Link
                    to='/jobs'
                    className='inline-flex justify-center gap-x-1.5 rounded-md bg-secondary-06 px-3 text-sm py-2  text-white shadow-sm active:bg-secondary-07 hover:shadow-btn my-2'
                  >
                    Discover courses
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
        {activeTab === 2 && (
          <div
            id='News'
            className=''
          >
            <div className='col'>
              <div className='col-info'>
                <div className='col-info-text'>
                  <h1>Intro to python programming</h1>
                  <span className='inline-flex items-center rounded-md bg-primary-01 px-2 py-1 text font-medium text-primary-05 ring-1 ring-inset ring-red-600/10'>
                    Course
                  </span>
                </div>
                <ul className='col-info-links'>
                  <li>
                    <a
                      href='#'
                      className='white'
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='blue'
                    >
                      Continue
                    </a>
                  </li>
                </ul>
              </div>
              <div className='skills'>
                <div className='skill-bar'>
                  <div
                    className='skill-per'
                    style={{ maxWidth: '100%' }}
                  />
                </div>
                <p>Completed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
