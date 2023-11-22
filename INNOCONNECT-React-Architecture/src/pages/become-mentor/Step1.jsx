const Step1 = ({ data, handleChange, next }) => {
  return (
    <>
      <div className='transition-all ease-in-out'>
        <div className='px-5 py-2 bg-primary-04 mt-12 rounded-lg'>
          <p className='text-white'>
            Filling out the form only takes a couple minutes. We'd love to learn
            more about your background and the ins-and-outs of why you'd like to
            become a mentor. Keep things personal and talk directly to us and
            your mentees. We don't need jargon and polished cover letters here
          </p>
        </div>
        <div className='my-10'>
          <p className='block text-sm font-medium leading-6 text-gray-900'>
            Photo
          </p>
          <div className='mt-2 flex items-center gap-x-3'>
            <img
              id='previewImage'
              src='assets/user.png'
              className='rounded-full h-14 w-14'
              alt='img'
            />
            <label
              htmlFor='photo'
              className='input border cursor-pointer rounded-md py-2 px-3  text-sm font-semibold text-primary-06 bg-gray-200 hover:bg-secondary-01'
            >
              <span>
                <i className='fa-solid fa-upload mr-1' /> Upload
              </span>
              <input
                id='photo'
                name='photo'
                type='file'
                accept='.jpg, .jpeg, .png'
                className='sr-only'
              />
            </label>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 my-5'>
          <div className='sm:col-span-3'>
            <label
              htmlFor='first-name'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              First name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                placeholder='First Name'
                autoComplete='given-name'
                className=' block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='last-name'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Last name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                placeholder='Last Name'
                name='last-name'
                id='last-name'
                autoComplete='family-name'
                className='block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='password'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Password
            </label>
            <div className='mt-2'>
              <input
                type='password'
                placeholder='xxxxxx'
                name='password'
                id='password'
                autoComplete='family-name'
                className='block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='confirm-password'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Confirm Password
            </label>
            <div className='mt-2'>
              <input
                type='password'
                placeholder='xxxxxx'
                name='confirm-password'
                id='confirm-password'
                autoComplete='family-name'
                className='block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
              <p
                className='hidden   '
                id='error'
              >
                Password does not match
              </p>
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Email
            </label>
            <div className='mt-2'>
              <input
                type='text'
                placeholder='xxx@email.com'
                name='email'
                id='email'
                autoComplete='family-name'
                className='block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
              <p
                className='hidden '
                id='error-email'
              >
                Email has already been taken
              </p>
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='job'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Job Title
            </label>
            <div className='mt-2'>
              <input
                type='text'
                placeholder='Senior Software Engineer'
                name='job'
                id='job'
                autoComplete='family-name'
                className='block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className=' sm:col-span-3'>
            <label
              htmlFor='location'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Location
            </label>
            <div className='mt-2 relative'>
              <select
                aria-label='location'
                className='appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                name='location'
                id='location'
              >
                <option value>Select ocation</option>
                <option value={1}>New York</option>
                <option value={2}>Lagos</option>
                <option value={3}>London</option>
                <option value={4}>Abuja</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <i className='text-xs fa-solid fa-chevron-down' />
              </div>
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='company'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Company
            </label>
            <div className='mt-2'>
              <input
                type='text'
                placeholder='Company Name'
                name='company'
                id='company'
                autoComplete='family-name'
                className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-10'>
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

export default Step1;
