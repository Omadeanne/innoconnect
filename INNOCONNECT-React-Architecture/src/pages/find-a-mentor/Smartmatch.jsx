import React from 'react';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import MentorCard from './MentorCard';
import mentors from './mentors';
import { hero} from '../../assets';

export default function Smartmatch() {
  return (
    <>
      <Nav />
      <div className='m-auto'>
        <div className=' m-auto '>
        <div
            className='relative overflow-hidden bg-cover bg-no-repeat p-12 text-center flex justify-center items-center h-screen xmd:h-screen xmd:w-[100%]'
            style={{ backgroundImage: `url(${hero})` }}
          >
          <div>
          <p className='font-font text-6xl font-bold text-white text-center my-[20px] p-[10px]'>
            Discover Your Mentorship Match
          </p>
          <p className='font-font text-base font-medium text-white text-center my-[20px] max-w-3xl mx-auto'>
            Explore the possibilities of mentorship with us! Whether you're
            seeking technical guidance or professional growth, we're here to
            connect you with the mentor who's perfectly suited to your unique
            needs and aspirations. Your journey to success starts with the right
            mentorship match!
          </p>
          </div>
        </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[75%] m-auto pt-[30px]'>
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
            />
          ))}
        </div>
        <div
          className='max-w-fit mx-auto my-20'
          aria-label='Page navigation'
        >
          <ul className='inline-flex'>
            <li>
              <button className='h-10 px-5 text-black transition-colors duration-150 bg-white border border-r-0 border-secondary-05  focus:shadow-outline hover:bg-secondary-01'>
                Prev
              </button>
            </li>
            <li>
              <button className='h-10 px-5 text-black transition-colors duration-150 bg-white border border-r-0 border-secondary-05 focus:shadow-outline hover:bg-secondary-01'>
                1
              </button>
            </li>
            <li>
              <button className='h-10 px-5 text-black transition-colors duration-150 bg-white border border-r-0 border-secondary-05 focus:shadow-outline hover:bg-secondary-01'>
                2
              </button>
            </li>
            <li>
              <button className='h-10 px-5 text-white transition-colors duration-150 bg-primary-06 border border-r-0 border-secondary-05 focus:shadow-outline'>
                3
              </button>
            </li>
            <li>
              <button className='h-10 px-5 text-black transition-colors duration-150 bg-white border border-secondary-05 focus:shadow-outline hover:bg-secondary-01'>
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
