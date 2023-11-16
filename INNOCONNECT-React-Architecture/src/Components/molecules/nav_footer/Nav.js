import { useState } from 'react';

function Nav() {
  const [open, isOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white'>
      <nav className='relative z-50 py-5'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-10 flex justify-between'>
          <a href='index.html'>
            <img
              className='w-40 md:w-full'
              src='assets/logo.svg'
              alt='innoConnect logo'
            />
          </a>
          <div
            id='navMenu'
            className='mx-auto bg-white hidden absolute top-0 right-0 lg:static lg:flex flex-col lg:flex-row h-screen w-56 lg:h-auto lg:w-auto'
          >
            <button
              aria-label='Close'
              id='close'
              type='button'
              className='mb-8 p-4 lg:hidden'
            >
              <i className='text-2xl text-primary-06 fa-solid fa-close' />
            </button>
            <div className='flex flex-col lg:flex-row'>
              <div className='dropdown group item relative'>
                <div
                  href='#'
                  className='dropdownbtn cursor-pointer font-medium text-lg text-[#1D3557] px-4 py-2'
                  onClick={ () => isOpen(!open) }
                >
                  Mentorship{' '}
                  <i className='ml-1 text-xs transition-all duration-100 fa-solid fa-chevron-down' />
                </div>
                <div className={ open ? 'shadow  absolute z-10 bg-white w-40 mt-1 rounded-b transition ease-linear duration-100' : 'hidden'}>
                  <a
                    href='smartMatch.html'
                    className='text-gray-800 px-4 py-2 block'
                  >
                    Find a mentor
                  </a>
                  <a
                    href='mentor.html'
                    className='text-gray-800 px-4 py-2 block'
                  >
                    Become a mentor
                  </a>
                </div>
              </div>
              <div className='group relative'>
                <a
                  href='jobSearch.html'
                  className='block cursor-pointer font-medium text-lg text-[#1D3557] px-4 py-2'
                >
                  Job Search
                </a>
              </div>
              <div className='group relative'>
                <a
                  href='course.html'
                  className='block cursor-pointer font-medium text-lg text-[#1D3557] px-4 py-2'
                >
                  Courses
                </a>
              </div>
              <div className='group relative'>
                <a
                  href='pricing.html'
                  className='block cursor-pointer font-medium text-lg text-[#1D3557] px-4 py-2'
                >
                  Pricing
                </a>
              </div>
              <div className='dropdown group relative'>
                <div
                  href='#'
                  className='dropdownbtn cursor-pointer font-medium text-lg text-[#1D3557] px-4 py-2'
                  onClick={ () => isOpen(!open) }
                >
                  More{' '}
                  <i className='ml-1 transition-all duration-100 text-xs fa-solid fa-chevron-down' />
                </div>
                <div className={ open ? 'shadow  absolute z-10 bg-white w-40 mt-1 rounded-b transition ease-linear duration-100' : 'hidden'}>
                  <a
                    href='community-page.html'
                    className='text-gray-800 px-4 py-2 block'
                  >
                    Community
                  </a>
                  <a
                    href='blog.html'
                    className='text-gray-800 px-4 py-2 block'
                  >
                    Articles
                  </a>
                  <a
                    href='About.html'
                    className='text-gray-800 px-4 py-2 block'
                  >
                    About us
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:hidden px-4 mt-4 gap-4'>
              <a
                href='login.html'
                className='text-primary-05 font-semibold w-28 border border-secondary-06 text-center rounded-lg px-4 py-2 block hover:bg-[#6A95B1] hover:bg-opacity-20 transition-all'
              >
                login
              </a>
              <a
                href='register.html'
                className='text-white font-semibold w-28 border bg-secondary-06 border-secondary-06 text-center rounded-lg px-4 py-2 block active:bg-secondary-07 hover:shadow-btn'
              >
                signup
              </a>
            </div>
          </div>
          <div className='lg:flex lg:px-0 hidden gap-4'>
            <a
              href='login.html'
              className='text-primary-05 font-semibold w-28 border border-secondary-06 text-center rounded-lg px-4 py-2 block hover:bg-[#6A95B1] hover:bg-opacity-20 transition-all'
            >
              login
            </a>
            <a
              href='register.html'
              className='text-white font-semibold w-28 border bg-secondary-06 border-secondary-06 text-center rounded-lg px-4 py-2 block active:bg-secondary-07 hover:shadow-btn'
            >
              signup
            </a>
          </div>
          <div className='lg:hidden'>
            <button
              id='mobile-menu-button'
              className=''
              aria-label='Open Menu'
            >
              <i className='fas fa-bars' />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
