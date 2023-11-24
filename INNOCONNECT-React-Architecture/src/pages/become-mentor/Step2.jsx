import React from 'react';

const Step2 = ({ data, handleChange, next, back }) => {
  return (
    <>
      <div className='w-full'>
        <div className='mt-10'>
          <label
            htmlFor='category'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Category
          </label>
          <div className='mt-2 relative'>
            <select
              aria-label='category'
              className='input appearance-none block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                  placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              name='category'
              id='category'
            >
              <option value>Select Category</option>
              <option value={1}>Frontend</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <i className='text-xs fa-solid fa-chevron-down' />
            </div>
          </div>
        </div>
        <div className=' mt-8'>
          <label
            htmlFor='skills'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            skills
          </label>
          <div className='mt-2 relative'>
            <select
              aria-label='skills'
              className='input appearance-none block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                  placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              name='skills'
              id='skills'
            >
              <option value>Select skills</option>
              <option value={1}>HTML</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <i className='text-xs fa-solid fa-chevron-down' />
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <label
            htmlFor='bio'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Bio
          </label>
          <div className='mt-2'>
            <textarea
              placeholder='Bio'
              name='bio'
              id='bio'
              className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
               placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              defaultValue={''}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 my-5'>
          <div className='sm:col-span-3'>
            <label
              htmlFor='linkedin'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Linkedin URL
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='linkedin'
                id='linkedin'
                className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='x.com'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              X.com URL
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='x.com'
                id='x.com'
                className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-6'>
            <label
              htmlFor='website'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Personal Website URL(optional)
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='website'
                id='website'
                className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-10'>
        <button
          onClick={back}
          id='prevBtn'
          type='button'
          className='text-white font-semibold w-32 border bg-secondary-06 border-secondary-06 text-center rounded-lg px-4 py-2 block active:bg-secondary-07 hover:shadow-btn'
        >
          Previous
        </button>
        <button
          onClick={next}
          id='nextBtn'
          type='button'
          className='text-white font-semibold w-32 border bg-secondary-06 border-secondary-06 text-center rounded-lg px-4 py-2 block active:bg-secondary-07 hover:shadow-btn'
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step2;
