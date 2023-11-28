import React from 'react';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import { useParams } from 'react-router-dom';
import mentors from './mentors';
import { edet, test3, test4, test6, test7, test10 } from "../../assets";


export default function MentorProfile() {
  const { id } = useParams;

  const mentor = mentors.find((mentor) => mentor.id === id);
  return (
    <div>
      <Nav />
      <div className='flex justify-center mt-3'>
        <div className='flex flex-1 justify-center items-center'>
          <img
            src={mentor.image}
            alt="mentor's pic"
            className=''
          />
        </div>
        <div className='text-left flex-1 py-5 px-10'>
          <h1 className='text-3xl font-bold'>{mentor.name}</h1>
          <p>{mentor.job}</p>
          <div className='flex   text-2xl gap-5 '>
            <button>
              <i className='fa-brands fa-sm fa-linkedin   hover:cursor-pointer' />
            </button>
            <button>
              <i className='fa-brands fa-sm fa-x-twitter   hover:cursor-pointer' />
            </button>
            <button>
              <i className='fa-brands fa-sm fa-facebook   hover:cursor-pointer' />
            </button>
          </div>
          <div className='mt-8'>
            <p className='text-xl font-bold'>About</p> <hr />
            <p>{mentor.about}</p>
          </div>
          <div className='my-5'>
            <p className='text-xl font-bold'>Experience</p> <hr />
            <ul>
              {mentor.experiences?.map((experience) => (
                <li>
                  <h3>{experience.title}</h3>
                  <p>{experience.company}</p>
                  <small>{experience.date}</small>
                </li>
              ))}
              <li className='my-3 '>
                <h3 className='text-xl font-semi-bold'>Software Engineer</h3>
                <p>Microsoft</p>
                <small>May 2021 - Present</small>
              </li>
              <hr />
              <li>
                <h3 className='text-xl font-semi-bold'>Software Engineer</h3>
                <p>Interswitch</p>
                <small>August 2019- April 2021</small>
              </li>
            </ul>
          </div>
          <div className='text-center'>
            <button className='rounded-lg bg-primary-05 my-3 font-font text-base font-md text-[#fff] px-8 py-[8px]'>
              Connect +
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
