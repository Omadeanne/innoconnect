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

export default function MentorsDashboard (){
  return(
    <div className="flex">
      <div className=''>
        <Aside links={links} />
      </div>
      <div className='bg-gray-200 w-full'>
        <Header />
      </div>
    </div>

  )
}