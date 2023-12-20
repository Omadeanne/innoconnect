import { useState } from 'react';
import Aside from '../../Components/molecules/mentee-dashboard/Aside';
import Header from '../../Components/molecules/mentee-dashboard/Header';
import {
  home,
  jobPosted,
  postJobs,
  messages,
} from '../../Components/molecules/mentee-dashboard/icons';
import { Outlet } from 'react-router-dom';

const links = [
  {
    name: 'Dashboard',
    to: '/employers-dashboard',
    icon: home,
  },
  {
    name: 'My Jobs',
    to: '/employers-dashboard/job-posted',
    icon: postJobs,
  },
  {
    name: 'Post Job',
    to: '/employers-dashboard/post-job',
    icon: jobPosted,
  },
  {
    name: 'Messages',
    to: '/employers-dashboard/messages',
    icon: messages,
  },
];

export default function Dashboard() {

  const [open, setOpen] = useState(false);
  return (
    <main className='darkmode:bg-gray-900'>
      <div className='flex relative'>
        <div className=''>
          <Aside links={links} open={open} setOpen={setOpen} />
        </div>
        <div className='h-screen bg-gray-200 overflow-auto w-full flex flex-col justify-between ml-auto lg:ml-[20rem]'>
          <Header open={open} setOpen={setOpen} />
          <div className=''>
            <Outlet />
          </div>
          <div className='border-t mt-auto py-4'>
            <h1 className='text-center'>
              © 2023 InnoConnect. All rights reserved.
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
