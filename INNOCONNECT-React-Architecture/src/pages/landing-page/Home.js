import React from 'react';
import { Carousel, IconButton } from '@material-tailwind/react';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import { bg1, expert, skill, community, job_h, jobs_f } from '../../assets';
import { courses, mentors, testimonials, blogs } from './constants';
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';
import MentorCard from './MentorCard';
import CourseCard from './CourseCard';
import BlogCard from './BlogCard';

const firstHalf = mentors.slice(0, 8);
const secondHalf = mentors.slice(8);

const Home = () => {
  return (
    <>
      <Nav />
      <main className=''>
        <section className=''>
          <div
            className='relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen xmd:h-screen xmd:w-[100%]'
            style={{ backgroundImage: `url(${bg1})` }}
          >
            <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed'>
              <div className='flex h-full items-center justify-center'>
                <div className='text-white'>
                  <h2 className='mb-4 xmd:text-[20px] text-[50px] font-semibold'>
                    Learn a new skill, Launch a project,
                    <br />
                    Land your dream career.
                  </h2>
                  <h4 className='mb-6 text-l font-light'>
                    Learn a new skill, launch a project, land your dream career
                  </h4>
                  <div className='flex justify-center gap-3 xmd:flex-col xmd:w-[50%] xmd:m-auto'>
                    <a
                      href='/register'
                      className='rounded border-[1px] border-neutral-50 px-10 py-2 text-sm font-medium bg-white text-[#37627E] transition duration-150 ease-in-out hover:border-neutral-100 hover:shadow-xl focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-white'
                    >
                      Register
                    </a>
                    <a
                      href='/login'
                      className='rounded border-[1px] border-neutral-50 px-12 py-2 text-sm font-medium leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-white mt-6'>
          <div className='py-8 max-w-[1440px] mx-auto px-4 sm:px-10'>
            <div className='text-center'>
              <p className='text-[#222C2C] text-[14px] font-semibold'>
                Learn a new skill, launch a project, land your dream career
              </p>
              <p className='text-[50px] text-[#222C2C] font-semibold'>
                1-on-1 Mentorship in
              </p>
            </div>
            <div className='w-[100%] flex justify-around mt-10 xmd:flex-col'>
              <div className='flex flex-col items-center gap-4 bg-[#DAE5EB3D] px-12 py-8 rounded-lg hover:shadow-md'>
                <img
                  className=''
                  src={expert}
                  alt='expert'
                />
                <p className='text-[#222C2C] text-[22px] font-semibold'>
                  Expert Mentorship
                </p>
              </div>
              <div className='flex flex-col items-center gap-4 bg-[#DAE5EB3D] px-12 py-8 rounded-lg hover:shadow-md'>
                <img
                  className=''
                  src={skill}
                  alt='expert'
                />
                <p className='text-[#222C2C] text-[22px] font-semibold text-center'>
                  Skill Enhancement &amp;
                  <br />
                  Resources
                </p>
              </div>
              <div className='flex flex-col items-center gap-4 bg-[#DAE5EB3D] px-12 py-8 rounded-lg hover:shadow-md'>
                <img
                  className=''
                  src={community}
                  alt='expert'
                />
                <p className='text-[#222C2C] text-[22px] font-semibold'>
                  Vibrant Community
                </p>
              </div>
            </div>
          </div>
          <section className='mt-14 pb-14 bg-[#F6F9FA]'>
            <div className='pt-14 text-center'>
              <h1 className='text-[#222C2C] text-[40px] font-semibold'>
                Our <span className='text-[#457B9D]'>Mentors</span>
              </h1>
              <p className='font-semibold text-[#222C2C]'>
                You may have met some of the mentors that are on our platform
              </p>
            </div>
            <div>
              <div className='w-full mt-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
                <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                  {firstHalf.map((mentor) => (
                    <MentorCard mentor={mentor} />
                  ))}
                </ul>
                <ul
                  className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
                  aria-hidden='true'
                >
                  {secondHalf.map((mentor) => (
                    <MentorCard mentor={mentor} />
                  ))}
                </ul>
              </div>
              <div className='w-full mt-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
                <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse'>
                  {firstHalf.map((mentor) => (
                    <MentorCard mentor={mentor} />
                  ))}
                </ul>
                <ul
                  className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse'
                  aria-hidden='true'
                >
                  {secondHalf.map((mentor) => (
                    <MentorCard mentor={mentor} />
                  ))}
                </ul>
              </div>
            </div>
            <div className='flex justify-center pt-10 gap-3'>
              <Link
                to='/mentors'
                className='text-white font-semibold border bg-secondary-06 border-secondary-06 text-center rounded px-8 py-2  block active:bg-secondary-07 hover:shadow-btn'
              >
                Become a mentor
              </Link>
              <Link
                href='/login'
                className='rounded border-[1px] text-[#37627E] border-[#37627E] px-8 py-2 text-sm font-medium leading-normal transition duration-150 ease-in-out hover:border-[#37627E] hover:bg-neutral-500 hover:bg-opacity-10 focus:border-neutral-100 focus:ring-0 active:border-neutral-200 active:text-neutral-200'
                data-te-ripple-init=''
                data-te-ripple-color='light'
              >
                Login
              </Link>
            </div>
          </section>
          <section className='py-20 max-w-[1440px] mx-auto px-4 sm:px-10'>
            <div className='flex justify-center items-center gap-20'>
              <div>
                <h1 className='text-[#222C2C] text-[40px] font-semibold py-2'>
                  Find<span className='text-[#457B9D]'> Jobs</span>
                  <br />
                  That you'll definetly love
                </h1>
                <p className='py-2'>
                  Your next role could be with one of these top leading
                  organizations.
                </p>
                <Link
                  to='/job-search'
                  className='text-white my-2 font-medium border bg-secondary-06 border-secondary-06 text-center rounded-lg px-4 py-2 inline-block active:bg-secondary-07 hover:shadow-btn'
                >
                  Apply now
                </Link>
              </div>
              <div className='w-2/5'>
                <img
                  src={jobs_f}
                  className='w-full object-contain rounded-xl'
                  alt=''
                />
              </div>
            </div>
          </section>
          <section className='bg-[#F6F9FA]'>
            <div className='py-20 max-w-[1440px] mx-auto px-4 sm:px-10'>
              <div className='flex justify-center items-center gap-20'>
                <div className='w-2/5'>
                  <img
                    src={job_h}
                    className='w-full object-contain rounded-xl'
                    alt=''
                  />
                </div>
                <div>
                  <h1 className='text-[#222C2C] text-[40px] font-semibold py-2'>
                    Are you<span className='text-[#457B9D]'> Recruting</span>
                  </h1>
                  <p className='py-2'>
                    Post a job, Find &amp; Hire Top talents on InnoConnect.
                  </p>
                  <a
                    href='jobSearch.html'
                    className='text-white my-2 font-medium border bg-secondary-06 border-secondary-06 text-center rounded-lg px-4 py-2 inline-block active:bg-secondary-07 hover:shadow-btn'
                  >
                    Create an Employer account
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className='pt-14 h-full py-8 max-w-[1440px] mx-auto px-4 sm:px-10'>
            <div className='text-center pb-14'>
              <h1 className='text-[#222C2C] text-[40px] font-semibold'>
                A few <span className='text-[#457B9D]'>Testimonials</span>
              </h1>
              <p className='text-[#222C2C] font-semibold'>
                Our platform has touched some lives, you can here from the
                horses mouth
              </p>
            </div>

            <Carousel
              className='rounded-xl flex items-center'
              autoplay={true}
              autoplayDelay={5000}
              loop={true}
              transition={{ duration: 2 }}
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
                  {new Array(length).fill('').map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i
                          ? 'w-8 bg-gray-600'
                          : 'w-4 bg-gray-400'
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant='text'
                  color='black'
                  size='lg'
                  onClick={handlePrev}
                  className='!absolute top-2/4 left-4 -translate-y-2/4'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant='text'
                  color='black'
                  size='lg'
                  onClick={handleNext}
                  className='!absolute top-2/4 !right-4 -translate-y-2/4'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </IconButton>
              )}
            >
              {testimonials.map((test, index) => (
                <Testimonial
                  key={index}
                  test={test}
                />
              ))}
            </Carousel>
          </section>
          <section className='mt-16 pb-14 pt-14 bg-[#F6F9FA]'>
            <div className='py-8 max-w-[1440px] mx-auto px-4 sm:px-10'>
              <div className='text-center pb-14'>
                <h1 className='text-[#222C2C] text-[40px] font-semibold'>
                  Our<span className='text-[#457B9D]'> Courses</span>
                </h1>
                <p className='text-[#222C2C] font-semibold'>
                  These are the courses in which we offer mentorship for you
                </p>
              </div>
              <div className='flex xmd:flex-col justify-around'>
                {courses.map((course, index) => (
                  <CourseCard
                    key={index}
                    course={course}
                  />
                ))}
              </div>
              <div className='flex justify-center pt-10 gap-3'>
                <a
                  href='/register'
                  className='text-white font-semibold border bg-secondary-06 border-secondary-06 text-center rounded px-12 py-2  block active:bg-secondary-07 hover:shadow-btn'
                >
                  Register
                </a>
                <a
                  href='/login'
                  className='rounded border-[1px] text-[#37627E] border-[#37627E] px-12 py-2 text-sm font-medium leading-normal transition duration-150 ease-in-out hover:border-[#37627E] hover:bg-neutral-500 hover:bg-opacity-10 focus:border-neutral-100 focus:ring-0 active:border-neutral-200 active:text-neutral-200'
                >
                  Login
                </a>
              </div>
            </div>
          </section>
          <section className='mt-16 pb-14 pt-14 bg-[#fff] py-8 max-w-[1440px] mx-auto px-4 sm:px-10'>
            <div className='text-center pb-14'>
              <h1 className='text-[#222C2C] text-[40px] font-semibold'>
                Mentees after<span className='text-[#457B9D]'> Us</span>
              </h1>
              <p className='text-[#222C2C] font-semibold'>
                Our mentees have been placed in Top companies after mentorship
                with us
              </p>
            </div>
            <div className='w-[100%] px-20 xmd:hidden'>
              <div className='flex pb-10 gap-6 justify-around'>
                <img
                  src='assets/flutterwave.png'
                  alt=''
                />
                <img
                  src='assets/Microsoft.png'
                  alt=''
                />
                <img
                  src='assets/Twitter logo.png'
                  alt=''
                />
                <img
                  src='assets/netflix.png'
                  alt=''
                />
              </div>
              <div className='px-20 flex gap-2 justify-around'>
                <img
                  src='assets/Dell.png'
                  alt=''
                />
                <img
                  src='assets/Google.png'
                  alt=''
                />
                <img
                  src='assets/Instagram.png'
                  alt=''
                />
                <img
                  src='assets/Ubuntu.png'
                  alt=''
                />
              </div>
            </div>
            <div className='w-[100%] hidden xmd:w-[30%] m-auto'>
              <div className='flex pb-10 gap-6 justify-around'>
                <img
                  src='assets/flutterwave.png'
                  alt=''
                />
                <img
                  src='assets/Microsoft.png'
                  alt=''
                />
              </div>
              <div className='flex pb-10 gap-6 justify-around'>
                <img
                  src='assets/Twitter logo.png'
                  alt=''
                />
                <img
                  src='assets/netflix.png'
                  alt=''
                />
              </div>
              <div className='flex gap-2 justify-around'>
                <img
                  src='assets/Dell.png'
                  alt=''
                />
                <img
                  src='assets/Google.png'
                  alt=''
                />
              </div>
              <div className='flex gap-2 justify-around'>
                <img
                  src='assets/Instagram.png'
                  alt=''
                />
                <img
                  src='assets/Ubuntu.png'
                  alt=''
                />
              </div>
            </div>
          </section>
          <section className='mt-16 pb-14 pt-14 bg-[#F6F9FA]'>
            <div className='py-8 max-w-[1440px] mx-auto px-4 sm:px-10'>
              <div className='text-center pb-14'>
                <h1 className='text-[#457B9D] text-[40px] font-semibold'>
                  Blog
                </h1>
                <p className='text-[#222C2C] font-semibold'>
                  Here are some Blogs written by our Mentors and Mentees
                </p>
              </div>
              <div className='flex xmd:flex-col gap-10 justify-around px-20'>
                {blogs.map((blog) => (
                  <BlogCard blog={blog} />
                ))}
              </div>
              <div className='flex justify-center pt-10 gap-3'>
                <div className='flex gap-2 items-center rounded border-[1px] text-[#37627E] border-[#37627E] px-12 py-2 text-sm font-medium leading-normal transition duration-150 ease-in-out hover:border-[#37627E] hover:bg-neutral-500 hover:bg-opacity-10'>
                  <a href='blog.html'>More Articles</a>
                  <i className='fa-solid fa-chevron-right' />
                </div>
              </div>
              <div className='flex flex-col text-center pt-16 gap-6'>
                <h1 className='text-[23px] font-bold'>
                  Get our articles as we post them
                </h1>
                <div className='flex xmd:flex-col justify-center items-center gap-8'>
                  <form className='action='>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Email Address'
                      className='pr-20 pl-2 py-1 focus:outline-none'
                    />
                    <br />
                  </form>
                  <button
                    type='button'
                    className='rounded border-[1px] border-neutral-50 px-10 py-2 text-sm font-medium bg-blue-500 text-[#fff] focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200'
                    data-te-ripple-init=''
                    data-te-ripple-color='light'
                  >
                    Get our articles
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className='mt-16 pb-14 pt-14 bg-[#fff] py-8 max-w-[1440px] mx-auto px-4 sm:px-10'>
            <div className='text-center pb-14'>
              <h1 className='text-[#222C2C] text-[40px] font-semibold'>
                Contact our friendly team
              </h1>
              <p className='text-[#222C2C] font-semibold'>
                Our team are always ready to answer to your questions
              </p>
            </div>
            <div className='flex xmd:flex-col justify-around'>
              <div className='bg-[#F6F9FA] px-4 pt-6 pb-6'>
                <div className=''>
                  <i className='fa-solid fa-headset border-solid border-[1px] border-[#37627E] rounded-sm p-2' />
                </div>
                <p className='pt-2 text-[#222C2C] font-semibold text-[14px]'>
                  Customer Support
                </p>
                <p className='pt-4 text-[12px]'>Chat with our friendly team</p>
                <a 
                  href='mailto:InnoConnect@gmail.com'
                  className='text-[12px] font-bold decoration-solid'
                >
                  InnoConnect@gmail.com
                </a>
              </div>
              <div className='bg-[#F6F9FA] px-4 pt-6 pb-6'>
                <div className=''>
                  <i className='fa-regular fa-message border-solid border-[1px] border-[#37627E] rounded-sm p-2' />
                </div>
                <p className='pt-2 text-[#222C2C] font-semibold text-[14px]'>
                  Service Questions
                </p>
                <p className='pt-4 text-[12px]'>Some questions we're asked</p>
                <a
                  href='faq'
                  className='text-[12px] font-bold decoration-solid'
                >
                  InnoConnect.com/FAQs
                </a>
              </div>
              <div className='bg-[#F6F9FA] px-4 pt-6 pb-6'>
                <div className=''>
                  <i className='fa-solid fa-location-dot border-solid border-[1px] border-[#37627E] rounded-sm p-2' />
                </div>
                <p className='pt-2 text-[#222C2C] font-semibold text-[14px]'>
                  Visit Us
                </p>
                <p className='pt-4 text-[12px]'>Visit our office HQ</p>
                <a
                  href='url'
                  className='text-[12px] font-bold decoration-solid'
                >
                  No 2, Zoo Road, Kano State
                </a>
              </div>
              <div className='bg-[#F6F9FA] px-4 pt-6 pb-6'>
                <div className=''>
                  <i className='fa-solid fa-phone border-solid border-[1px] border-[#37627E] rounded-sm p-2' />
                </div>
                <p className='pt-2 text-[#222C2C] font-semibold text-[14px]'>
                  Call Us
                </p>
                <p className='pt-4 text-[12px]'>Talk to our support team</p>
                <a
                  href='tel:+234 704 342 2345 '
                  className='text-[12px] font-bold decoration-solid'
                >
                  +234 704 342 2345
                </a>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
