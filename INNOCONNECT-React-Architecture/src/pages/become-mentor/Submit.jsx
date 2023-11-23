import React from 'react';

const Submit = ({ data, back }) => {
  const listItems = Object.entries(data).map(([key, value]) => (
    <li className='sm:col-span-3'>
      <label
        htmlFor={key}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {key}
      </label>
      <div className='mt-2'>
        <input
          type='text'
          name={key}
          id={key}
          autoComplete='given-name'
          value={value}
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
      </div>
    </li>
  ));
  return (
    <div className='mt-10'>
      <div className='px-5 py-2 bg-primary-04 mt-12 rounded-lg'>
        <p className='text-white text-center'>Review your Application</p>
      </div>
      <ul className='my-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        {listItems}
      </ul>
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
          id='nextBtn'
          type='submit'
          className='text-white font-semibold w-32 border bg-secondary-06 border-secondary-06 text-center rounded-lg px-4 py-2 block active:bg-secondary-07 hover:shadow-btn'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Submit;
