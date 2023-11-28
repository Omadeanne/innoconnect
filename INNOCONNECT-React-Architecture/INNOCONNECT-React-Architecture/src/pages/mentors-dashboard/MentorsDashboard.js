import React from 'react'
import Aside from '../../Components/molecules/mentee-dashboard/Aside'
import Header from '../../Components/molecules/mentee-dashboard/Header'

export default function MentorsDashboard (){
  return(
    <div className="flex">
      <div className='w-1/4'>
        <Aside />
      </div>
      <div className='w-3/4 bg-gray-200'>
        <Header />
      </div>
    </div>

  )
}