import React from 'react';
import { Link } from 'react-router-dom';

const MentorCard = ({mentor}) => {
  return (
    <Link to={`/mentors/${mentor.id}`}>
      <div className='flex flex-col pl-7 items-center justify-center hull'>
        <div>
          <img
            className='w-[120px] h-[120px] rounded-full shadow-card object-cover object-center'
            src={mentor.image}
            alt='Mentor'
          />
        </div>
        <div className='pt-[15px]'>
          <p className='text-primary-07 font-font font-bold text-3xl text-center'>
            {mentor.name}
          </p>
          <p className='text-primary-06 font-font font-medium text-xl text-center'>
            {mentor.job}
          </p>
          <p className='text-primary-06 font-font font-medium text-md text-center'>
            {mentor.workPlace}
          </p>
          <div className='flex items-center justify-center m-auto text-2xl gap-3 pt-[10px] duration-300'>
            <i className='fa-brands fa-linkedin transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer' />
            <i className='fa-brands fa-x-twitter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer' />
            <i className='fa-brands fa-facebook transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 mx-[10px] hover:cursor-pointer' />
          </div>
        </div>
        <div className='inline-flex justify-center items-center gap-4 mt-[30px]'>
          <button className='px-[10px] py-[8px] rounded-lg border-primary-07 border-2 font-font text-primary-07 text-base font-bold'>
            View Profile
          </button>
          <button className='rounded-lg bg-primary-07 font-font text-base font-md text-[#fff] px-[10px] py-[8px]'>
            Select Mentor
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MentorCard;
