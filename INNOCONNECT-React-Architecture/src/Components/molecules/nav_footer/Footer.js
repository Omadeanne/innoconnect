import React from 'react';

function Footer() {
  return (
    <footer className='bg-primary-05  text-white '>
      <div className='px-4 py-11 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <div>
          <h2 className='uppercase mb-4 font-bold tracking-[2px]'>Legal</h2>
          <ul>
            <li>
              <a
                className='hover:underline'
                href='terms-and-conditions'
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='#'
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='uppercase mb-4 font-bold tracking-[2px]'>Support</h2>
          <ul>
            <li>
              <a
                className='hover:underline'
                href='#'
              >
                Help &amp; Support
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='team.html'
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='/faq'
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='#'
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='uppercase mb-4 font-bold tracking-[2px]'>Our Site</h2>
          <ul>
            <li>
              <a
                className='hover:underline'
                href='#'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='#'
              >
                Find a mentor
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='mentorForm.html'
              >
                Become a mentor
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='#'
              >
                Post a job
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='#'
              >
                Find a job
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='#'
              >
                Courses
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='#'
              >
                Resources
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='#'
              >
                Articles
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='#'
              >
                Community
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='uppercase mb-4 font-bold tracking-[2px]'>Follow Us</h2>
          <ul className='flex space-x-4'>
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
      <div className='border-t border-white'>
        <div className='container mx-auto px-4 py-5 flex justify-between items-center'>
          <a
            aria-label='logo'
            href='#'
          >
            <img
              className='w-20 sm:w-full'
              src='assets/inno-connect-1.svg'
              alt=''
            />
          </a>
          <p className='text-xs sm:text-sm text-center'>
            Copyright © 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
