import React from 'react';
import Aside from '../../Components/molecules/mentee-dashboard/Aside';
import Header from '../../Components/molecules/mentee-dashboard/Header';
import DateUpdate from '../../Components/molecules/mentee-dashboard/DateUpdate';
import {
  home,
  community,
  course,
  mentor,
  messages,
} from '../../Components/molecules/mentee-dashboard/icons';

const links = [
  {
    name: 'Overview',
    to: '/overview',
    icon: home,
  },
  {
    name: 'Courses',
    to: '/courses',
    icon: course,
  },
  {
    name: 'Mentors',
    to: '/mentors',
    icon: mentor,
  },
  {
    name: 'messages',
    to: '/messages',
    icon: messages,
  },
  {
    name: 'community',
    to: '/community',
    icon: community,
  },
];

export default function MenteesDashboard() {
  return (
    <div className='flex'>
      <div className=''>
        <Aside links={links} />
      </div>

      <div className='bg-gray-200 w-full'>
        <Header />
        <div className='px-6 z-0 snap-x'>
          {/* courses boxes */}
          <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-6 my-4 py-2 text-center snap-x'>
            <div className='bg-[#ffffff] rounded-lg py-10 h-40 pr-10 pl-10 hover:bg-[#1C2434] hover:text-white snap-center'>
              <h2 className='rounded-full text-xl text-center font-semibold '>
                A
              </h2>
              <p className='font-semibold'>Adobe Suit and Pack</p>
            </div>
            <div className='bg-[#ffffff] rounded-lg py-10 h-40 pr-10 pl-10 hover:bg-[#1C2434] hover:text-white snap-center'>
              <h2 className='rounded-full text-xl text-center font-semibold '>
                B
              </h2>
              <p className='font-semibold '>Basic HTML and CSS</p>
            </div>
            <div className='bg-[#ffffff] rounded-lg py-10 h-40 pr-10 pl-10 hover:bg-[#1C2434] hover:text-white snap-center'>
              <h2 className='rounded-full text-xl text-center font-semibold '>
                C
              </h2>
              <p className='font-semibold '>CSS Renewed</p>
            </div>
          </div>
          {/* chart container */}
          <div className='bg-card py-3 rounded-sm flex '>
            {/* chart */}
            <div className=' w-full md:w-3/5 bg-white shadow-md'>
              <div className='flex items-center p-4'>
                <i className='fa-solid fa-eye text-gray-700' />
                <h2 className='text-primary-05 font-bold ml-2'>
                  Profile views
                </h2>
              </div>
              <hr className='border-slate-300' />
              <canvas
                id='myChart'
                className='w-full p-4'
              />
            </div>
            {/* to do */}
            <div className=' md:w-2/5 relative bg-card text-zinc-700 rounded-md p-4 divide-y divide-slate-300'>
              {/* to-do items */}
              <div className='flex justify-between flex-col'>
                <div className='flex items-center'>
                  <h2 className='text-primary-05 font-bold'>Todo List</h2>
                </div>
                <div className='flex justify-between items-center gap-4'>
                  <input
                    type='text'
                    id='taskInput'
                    className='border-b border-b-black mt-2 w-full'
                    placeholder='Add a new to-do item...'
                  />
                  <button
                    type='button'
                    onclick='addTask()'
                    className
                  >
                    <i className='fa-solid fa-plus' />
                  </button>
                </div>
                <ul id='taskList' />
              </div>
            </div>
          </div>
          {/* upcoming preview */}
          <div className='flex justify-evenly bg-white mt-8 mb-14 py-5 rounded-md'>
            <div className>
              <img
                className='max-h-96'
                src='./assets/upcoming-meetings.png'
                alt
              />
            </div>
            <div>
              <img
                className='max-h-96 max-w-5xl'
                src='./assets/interview.png'
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
