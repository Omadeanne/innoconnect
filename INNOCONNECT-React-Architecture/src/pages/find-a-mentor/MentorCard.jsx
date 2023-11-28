import React,{useEffect} from "react";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MentorCard = ({mentor}) => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Link to={`/mentors/${mentor.id}`}>
      <div data-aos="fade-up">
      <div className='flex flex-col  items-center justify-center hull bg-primary-01 my-3 py-8 rounded-lg hover:shadow-lg hover:transition hover:duration-300'>
        
        <div className="">
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
          <div className='flex items-center justify-center m-auto text-2xl  pt-[10px] duration-300'>
            <button><i className='fa-brands fa-linkedin fa-sm  mx-[10px] hover:cursor-pointer' /></button>
            <button><i className='fa-brands fa-x-twitter fa-sm mx-[10px] hover:cursor-pointer' /></button>
            <button><i className='fa-brands fa-facebook fa-sm mx-[10px] hover:cursor-pointer' /></button>
          </div>
        </div>
      </div>
        <div className='flex justify-center items-center gap-4 '>
          {/* <button className='px-[10px] py-[8px] rounded-lg border-primary-07 border-2 font-font text-primary-07 text-base font-bold'>
            View Profile
          </button> */}
          <button className='rounded-lg bg-primary-05 hover:bg-primary-07 font-font text-base font-md text-[#fff] px-[10px] py-[8px]'>
            Connect +
          </button>
        </div>
    </div>
    </Link>
  );
};

export default MentorCard;
