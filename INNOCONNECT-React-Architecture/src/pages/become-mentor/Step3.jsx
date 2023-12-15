const Step3 = ({ data, handleChange, next, back }) => {
  return (
    <>
    <div className='tab'>
      <div className='px-5 py-2 bg-primary-04 mt-12 rounded-lg'>
        <p className='text-white'>
          Complete and Submit your Application and we will get back to you via
          E-mail
        </p>
      </div>
      <div className='mt-8'>
        <label
          htmlFor='why'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Why do you want to be a Mentor?
        </label>
        <div className='mt-2'>
          <textarea
            onChange={handleChange}
            value={data.why}
            name='why'
            id='why'
            className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
            defaultValue={''}
          />
        </div>
      </div>
      <div className='mt-8'>
        <label
          htmlFor='achievement'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          What in your opinion, has been your greatest achievement , so far?
        </label>
        <div className='mt-2'>
          <textarea
            onChange={handleChange}
            value={data.achievement}
            name='achievement'
            id='achievement'
            className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
            defaultValue={''}
          />
        </div>
      </div>
      <div className='mt-8'>
        <p className='block text-sm font-medium leading-6 text-gray-900'>
          Upload Resume/CV*
        </p>
        <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
          <div className='text-center text-4xl'>
            <i className='fa-solid fa-cloud-arrow-up text-primary-04' />
            <div className='mt-4 flex text-sm leading-6 text-gray-600'>
              <label
                htmlFor='file-upload'
                className='relative cursor-pointer rounded-md bg-white font-semibold text-primary-06 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-06 focus-within:ring-offset-2 hover:text-primary-04'
              >
                <span>Upload a file</span>
                <input
                  id='file-upload'
                  name='file-upload'
                  accept='png, jpg, jpeg, pdf'
                  type='file'
                  className='sr-only'
                />
              </label>
              <p className='pl-1'>or drag and drop</p>
            </div>
            <p className='text-xs leading-5 text-gray-600'>
              PNG, JPG, PDF, DOCX
            </p>
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

export default Step3;
