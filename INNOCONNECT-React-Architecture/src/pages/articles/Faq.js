import React from 'react';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';

export default function Faq() {
  return (
    <div>
      <Nav />
      <main className='px-4'>
        <div className='container min-h-screen flex mx-auto flex-col sm:flex-row py-5 sm:py-14 relative'>
          <div className='w-full sm:w-1/4 py-5'>
            <ul className='flex gap-4 flex-row sm:flex-col text-[#1D3557]'>
              <li>
                <a
                  href='faq.html'
                  className='inline-block group py-2 text-lg font-semibold'
                >
                  For Mentees
                  <div className='bg-black h-[1px] transition-all duration-200' />{' '}
                </a>
              </li>
              <li>
                <a
                  href='mentors.html'
                  className=' inline-block group py-2 text-lg font-semibold'
                >
                  For Mentors{' '}
                  <div className='bg-black scale-x-0 h-[1px] group-hover:scale-x-100 transition-all duration-100'></div>{' '}
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full sm:w-3/4 md:max-w-2xl flex flex-col gap-10'>
            <div className>
              <h1 className='text-secondary-07 text-2xl font-bold '>
                Frequently Asked Questions
              </h1>
              <p className='mt-4 text-lg'>
                Need some help or got a burning question that you need answered
                pronto? Just click on one of the sections below to find the
                answer...
              </p>
            </div>
            <div>
              {/* WHAT IS INNOCONNECT */}
              <div className='relative w-full border-t border-black'>
                {/* input checkbox */}
                <input
                  type='checkbox'
                  id='input1'
                  className='absolute peer opacity-0'
                />
                {/* Heading */}
                <label
                  htmlFor='input1'
                  className='flex justify-between items-center font-semibold tracking-[1px] text-secondary-07  h-14 cursor-pointer'
                >
                  What is Innoconnect{' '}
                  <span className='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                    <ion-icon name='chevron-down-outline' />
                  </span>
                </label>
                {/* Arrow */}
                {/* Content */}
                <div className='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                  <p className='py-4 text-base'>
                    There are many benefits of using a CSS framework like
                    Tailwind. Below are the major ones. You write less custom
                    CSS. With Tailwind, you style elements by applying
                    pre-existing classes directly in your HTML. By using utility
                    classes in this way, you can build custom designs without
                    writing CSS. You keep CSS files small.
                  </p>
                </div>
              </div>
              {/* How Does Innoconnect Assign Mentors */}
              <div className='relative  w-full border-t border-b border-black'>
                {/* input checkbox */}
                <input
                  type='checkbox'
                  id='input2'
                  className='absolute peer opacity-0'
                />
                {/* Heading */}
                <label
                  htmlFor='input2'
                  className='font-semibold tracking-[1px] text-secondary-07 h-14 flex items-center justify-between cursor-pointer'
                >
                  How Does Innoconnect Assign Mentors
                  <span className='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                    <ion-icon name='chevron-down-outline' />
                  </span>
                </label>
                {/* Arrow */}
                {/* Content */}
                <div className='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                  <p className='py-4 text-base'>
                    There are many benefits of using a CSS framework like
                    Tailwind. Below are the major ones. You write less custom
                    CSS. With Tailwind, you style elements by applying
                    pre-existing classes directly in your HTML. By using utility
                    classes in this way, you can build custom designs without
                    writing CSS. You keep CSS files small.
                  </p>
                </div>
              </div>
              {/* How Many Courses Can I Take in a Go */}
              <div className='relative w-full  border-b border-black'>
                {/* input checkbox */}
                <input
                  type='checkbox'
                  id='input3'
                  className='absolute peer opacity-0'
                />
                {/* Heading */}
                <label
                  htmlFor='input3'
                  className='font-semibold tracking-[1px] text-secondary-07 h-14 flex items-center justify-between cursor-pointer'
                >
                  How Many Courses Can I Take in a Go
                  <span className='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                    <ion-icon name='chevron-down-outline' />
                  </span>
                </label>
                {/* Arrow */}
                {/* Content */}
                <div className='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                  <p className='py-4 text-base'>
                    There are many benefits of using a CSS framework like
                    Tailwind. Below are the major ones. You write less custom
                    CSS. With Tailwind, you style elements by applying
                    pre-existing classes directly in your HTML. By using utility
                    classes in this way, you can build custom designs without
                    writing CSS. You keep CSS files small.
                  </p>
                </div>
              </div>
              {/* Do Mentors Assign Courses  */}
              <div className='relative  w-full  border-b border-black'>
                {/* input checkbox */}
                <input
                  type='checkbox'
                  id='input4'
                  className='absolute peer opacity-0'
                />
                {/* Heading */}
                <label
                  htmlFor='input4'
                  className='font-semibold tracking-[1px] text-secondary-07 h-14 flex items-center justify-between cursor-pointer'
                >
                  Do Mentors Assign Courses
                  <span className='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                    <ion-icon name='chevron-down-outline' />
                  </span>
                </label>
                {/* Arrow */}
                {/* Content */}
                <div className='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                  <p className='py-4 text-base'>
                    There are many benefits of using a CSS framework like
                    Tailwind. Below are the major ones. You write less custom
                    CSS. With Tailwind, you style elements by applying
                    pre-existing classes directly in your HTML. By using utility
                    classes in this way, you can build custom designs without
                    writing CSS. You keep CSS files small.
                  </p>
                </div>
              </div>
              {/* How Many Times Do I Get To Meet With A Mentors  */}
              <div className='relative  w-full  border-b border-black'>
                {/* input checkbox */}
                <input
                  type='checkbox'
                  id='input5'
                  className='absolute peer opacity-0'
                />
                {/* Heading */}
                <label
                  htmlFor='input5'
                  className='font-semibold tracking-[1px] text-secondary-07 h-14 flex items-center justify-between cursor-pointer'
                >
                  How Many Times Do I Get To Meet With A Mentors
                  <span className='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                    <ion-icon name='chevron-down-outline' />
                  </span>
                </label>
                {/* Arrow */}
                {/* Content */}
                <div className='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                  <p className='py-4 text-base'>
                    There are many benefits of using a CSS framework like
                    Tailwind. Below are the major ones. You write less custom
                    CSS. With Tailwind, you style elements by applying
                    pre-existing classes directly in your HTML. By using utility
                    classes in this way, you can build custom designs without
                    writing CSS. You keep CSS files small.
                  </p>
                </div>
              </div>
              {/* How Long Does The Mentorship Program Last */}
              <div className='relative  w-full  border-b border-black'>
                {/* input checkbox */}
                <input
                  type='checkbox'
                  id='input6'
                  className='absolute peer opacity-0'
                />
                {/* Heading */}
                <label
                  htmlFor='input6'
                  className='font-semibold tracking-[1px] text-secondary-07 h-14 flex items-center justify-between cursor-pointer'
                >
                  How Long Does The MentorshipProgram Last
                  <span className='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                    <ion-icon name='chevron-down-outline' />
                  </span>
                </label>
                {/* Arrow */}
                {/* Content */}
                <div className='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                  <p className='py-4 text-base'>
                    There are many benefits of using a CSS framework like
                    Tailwind. Below are the major ones. You write less custom
                    CSS. With Tailwind, you style elements by applying
                    pre-existing classes directly in your HTML. By using utility
                    classes in this way, you can build custom designs without
                    writing CSS. You keep CSS files small.
                  </p>
                </div>
              </div>
              {/* How Long Would It Take To Finish A Curriculum */}
              <div className='relative  w-full  border-b border-black'>
                {/* input checkbox */}
                <input
                  type='checkbox'
                  id='input7'
                  className='absolute peer opacity-0'
                />
                {/* Heading */}
                <label
                  htmlFor='input7'
                  className='font-semibold tracking-[1px] text-secondary-07 h-14 flex items-center justify-between cursor-pointer'
                >
                  How Long Would It Take To Finish A Curriculum
                  <span className='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                    <ion-icon name='chevron-down-outline' />
                  </span>
                </label>
                {/* Arrow */}
                {/* Content */}
                <div className='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                  <p className='py-4 text-base'>
                    There are many benefits of using a CSS framework like
                    Tailwind. Below are the major ones. You write less custom
                    CSS. With Tailwind, you style elements by applying
                    pre-existing classes directly in your HTML. By using utility
                    classes in this way, you can build custom designs without
                    writing CSS. You keep CSS files small.
                  </p>
                </div>
              </div>
              {/* Are There Live Sessions */}
              <div className='relative  w-full  border-b border-black'>
                {/* input checkbox */}
                <input
                  type='checkbox'
                  id='input8'
                  className='absolute peer opacity-0'
                />
                {/* Heading */}
                <label
                  htmlFor='input8'
                  className='font-semibold tracking-[1px] text-secondary-07 h-14 flex items-center justify-between cursor-pointer'
                >
                  Are There Live Sessions
                  <span className='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                    <ion-icon name='chevron-down-outline' />
                  </span>
                </label>
                {/* Arrow */}
                {/* Content */}
                <div className='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                  <p className='py-4 text-base'>
                    There are many benefits of using a CSS framework like
                    Tailwind. Below are the major ones. You write less custom
                    CSS. With Tailwind, you style elements by applying
                    pre-existing classes directly in your HTML. By using utility
                    classes in this way, you can build custom designs without
                    writing CSS. You keep CSS files small.
                  </p>
                </div>
              </div>
              {/* Do I Really Get A Job After The Mentorship Program */}
              <div className='relative  w-full  border-b border-black'>
                {/* input checkbox */}
                <input
                  type='checkbox'
                  id='input9'
                  className='absolute peer opacity-0'
                />
                {/* Heading */}
                <label
                  htmlFor='input9'
                  className='font-semibold tracking-[1px] text-secondary-07 h-14 flex items-center justify-between cursor-pointer'
                >
                  Do I Really Get A Job After The Mentorship Program
                  <span className='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                    <ion-icon name='chevron-down-outline' />
                  </span>
                </label>
                {/* Arrow */}
                {/* Content */}
                <div className='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                  <p className='py-4 text-base'>
                    There are many benefits of using a CSS framework like
                    Tailwind. Below are the major ones. You write less custom
                    CSS. With Tailwind, you style elements by applying
                    pre-existing classes directly in your HTML. By using utility
                    classes in this way, you can build custom designs without
                    writing CSS. You keep CSS files small.
                  </p>
                </div>
              </div>
              {/* How Many Percent Do You Pay After Placement */}
              <div className='relative  w-full  border-b border-black'>
                {/* input checkbox */}
                <input
                  type='checkbox'
                  id='input10'
                  className='absolute peer opacity-0'
                />
                {/* Heading */}
                <label
                  htmlFor='input10'
                  className='font-semibold tracking-[1px] text-secondary-07 h-14 flex items-center justify-between cursor-pointer'
                >
                  How Many Percent Do You Pay After Placement
                  <span className='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                    <ion-icon name='chevron-down-outline' />
                  </span>
                </label>
                {/* Arrow */}
                {/* Content */}
                <div className='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                  <p className='py-4 text-base'>
                    There are many benefits of using a CSS framework like
                    Tailwind. Below are the major ones. You write less custom
                    CSS. With Tailwind, you style elements by applying
                    pre-existing classes directly in your HTML. By using utility
                    classes in this way, you can build custom designs without
                    writing CSS. You keep CSS files small.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
