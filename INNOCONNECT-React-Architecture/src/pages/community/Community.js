import React from 'react';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';

function Community() {
  return (
    <>
      <Nav />
      <main>
        <div className='bg-primary-05 px-4 py-5'>
          <div className='container md:h-[500px] mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-10'>
            <div className='text-white w-full lg:w-1/2 text-center lg:text-left'>
              <h1 className='text-3xl md:text-4xl lg:text-[3rem] font-semibold'>
                Join Our Community
              </h1>
              <p className='lg:text-[1.7rem] md:text-[1.5rem] mt-6  mb-8 mx-auto font-medium'>
                <b>
                  {' '}
                  Be a part of innoconnect community to help us learn <br />
                  more about your experience
                </b>
              </p>
              <a
                href='#'
                className='text-white bg-secondary-06 p-3 rounded-md text-sm md:text-base inline-flex items-center shadow-md'
              >
                <img
                  src='assets/discord.svg'
                  alt=''
                  className='mr-2 inline-block h-5 w-5'
                />
                Join the community
              </a>
            </div>
            <div className='w-full md:w-[30rem]'>
              <img
                src='assets/undraw_community_re_cyrm.svg'
                alt=''
                className='w-full object-cover'
              />
            </div>
          </div>
        </div>
        <div className='container mx-auto p-4 mt-[8rem]'>
          <div className='flex justify-center items-center flex-col lg:flex-row gap-8'>
            <div className='w-full text-center lg:text-left lg:w-1/2'>
              <h2 className='text-[3rem] font-bold text-primary-06'>
                Join Our Community
              </h2>
              <p className='mt-8 text-[1.7rem] text-primary-06'>
                Get the chance to join various interactive live sessions and
                learn from Industry Experts and Mentors. Ask the right questions
                and get the answers from experienced minds.
              </p>
            </div>
            <div className='w-full lg:w-1/2'>
              <img
                src='assets/commu-3.jpg'
                alt=''
                className='w-full object-cover '
              />
            </div>
          </div>
        </div>
        <div className='container mx-auto p-4 mt-[8rem]'>
          <div className='flex justify-center items-center flex-col-reverse lg:flex-row  gap-8'>
            <div className='w-full lg:w-1/2'>
              <img
                src='assets/comm-1.jpg'
                alt='image'
                className='w-full object-cover'
              />
            </div>
            <div className='w-full text-center lg:text-left lg:w-1/2'>
              <h3 className='text-[3rem] font-bold text-primary-06 px-10'>
                Network with the best
              </h3>
              <p className='mt-8 text-[1.7rem] text-primary-06 px-10'>
                Get the chance to join various interactive live sessions and
                learn from Industry Experts and Mentors. Ask the right questions
                and get the answers from experienced minds.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto p-4 mt-[8rem]'>
          <div className='flex justify-center items-center flex-col lg:flex-row  gap-8'>
            <div className='w-full text-center lg:text-left lg:w-1/2'>
              <h3 className='text-[3rem] font-bold text-primary-06 px-10'>
                Share your experience and help the community
              </h3>
              <p className='mt-8 text-[1.7rem] text-primary-06 px-10'>
                Be open to sharing your experience and insights with the
                community so that others can learn from you. Help other people
                to solve their problems and get help from other people to solve
                your problems.
              </p>
            </div>
            <div className='w-full lg:w-1/2'>
              <img
                src='assets/commu-4.jpg'
                alt='image'
                className='w-full object-cover'
              />
            </div>
          </div>
        </div>
        <div className='container mx-auto p-4 my-[8rem]'>
          <div className='flex flex-col-reverse lg:flex-row  justify-center items-center  gap-8'>
            <div className='w-full lg:w-1/2'>
              <img
                src='assets/comm-2.jpg'
                alt='image'
                className='w-full object-cover'
              />
            </div>
            <div className='w-full text-center lg:text-left lg:w-1/2'>
              <div className='pl-4'>
                <h3 className='text-[3rem] font-bold text-primary-06 px-10'>
                  Network with the best
                </h3>
                <p className='mt-8 text-[1.7rem] text-primary-06 px-10'>
                  Get the chance to join various interactive live sessions and
                  learn from Industry Experts and Mentors. Ask the right
                  questions and get the answers from experienced minds.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-[8rem] flex items-center justify-center'>
          <div className='text-center'>
            <h3 className='text-[3rem] font-bold text-primary-06'>
              Join us Now
            </h3>
            <a
              href='#'
              className='text-white bg-secondary-06 p-3 rounded-md inline-flex items-center shadow-md my-4'
            >
              <img
                src='assets/discord.svg'
                alt=''
                className='mr-2 inline-block'
              />
              Join the community
            </a>
            <h2 className='uppercase mb-4 font-bold tracking-[2px]'>
              Follow Us
            </h2>
            <div className='max-w-fit mx-auto'>
              <ul className='flex gap-4'>
                <li>
                  <a
                    aria-label='facebook'
                    className='hover:underline'
                    href='#'
                  >
                    <i>
                      <i className='fa-brands fa-facebook' />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    aria-label='twitter'
                    className='hover:underline'
                    href='#'
                  >
                    <i className='fa-brands fa-twitter' />
                  </a>
                </li>
                <li>
                  <a
                    aria-label='instagram'
                    className='hover:underline'
                    href='#'
                  >
                    <i className='fa-brands fa-instagram' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Community;
