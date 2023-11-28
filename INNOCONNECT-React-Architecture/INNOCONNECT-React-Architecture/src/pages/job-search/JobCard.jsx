import React from 'react';
import { defaultImg } from '../../assets';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className='job-cards'>
      <div className='relative bg-white flex items-center gap-4 my-4 text-primary-05'>
        <div className='hidden  md:block h-32 w-32'>
          <img
            src={!job.companyLogo ? defaultImg : job.companyLogo}
            alt='job_brand'
            className='w-full object-cover rounded-full'
          />
        </div>
        <div className='w-full rounded-md leading-8 '>
          <h2 className='font-bold text-xl'>{job.title}</h2>
          <p className='font-medium'>{job.company}</p>
          <div className='my-2 flex gap-3'>
            <button className='w-20 bg-red-400 px-2 py-1 text-white rounded-sm text-sm'>
              {job.type}
            </button>
            <button className='w-20 bg-green-400 px-2 py-1 text-white rounded-sm text-sm'>
              {job.site}
            </button>
          </div>
          <p className='font-medium'>Skills Required: {job.skills?.map((skill) => <span>{skill}, </span>)}</p>
          <p className='text-[#1D3557] text-sm my-3'>
            <i className='fas fa-clock mr-1' /> Job posted:{' '}
            <span>{job.date}</span>
          </p>
          <Link
            to={`/job-details/${job.id}`}
            className='bg-primary-06 px-8 py-1 inline-flex items-center text-white  rounded-sm shadow'
          >
            Details
          </Link>
        </div>
        <div className='p-4 flex gap-3 absolute top-0 right-0 lg:relative'>
          <i className='fas fa-bookmark text-primary-06' />
          <i className='fas fa-share-alt text-primary-06' />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default JobCard;
