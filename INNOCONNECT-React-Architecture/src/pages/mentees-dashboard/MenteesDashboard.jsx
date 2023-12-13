import React from 'react';
import Aside from '../../Components/molecules/mentee-dashboard/Aside';
import Header from '../../Components/molecules/mentee-dashboard/Header';
import {
  home,
  community,
  course,
  mentor,
  messages,
} from '../../Components/molecules/mentee-dashboard/icons';
import { Outlet } from 'react-router-dom';

const links = [
  {
    name: 'Dashboard',
    to: '/mentees-dashboard',
    icon: home,
  },
  {
    name: 'Courses',
    to: '/mentees-dashboard/courses',
    icon: course,
  },
  {
    name: 'Mentors',
    to: '/mentees-dashboard/my-mentors',
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
    <div className='flex relative'>
      <div className='relative'>
        <Aside links={links} />
      </div>
      <div className=' bg-gray-200 w-full min-h-[100vh] overflow-auto flex flex-col justify-between ml-[20rem]'>
        <div className='h-full'>
          <Header />
          <Outlet />
          <div className='border-t my-4 py-4'>
            <h1 className='text-center'>
              © 2023 InnoConnect. All rights reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
