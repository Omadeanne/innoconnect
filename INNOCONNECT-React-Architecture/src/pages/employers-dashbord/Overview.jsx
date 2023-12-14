import Card from '../../Components/molecules/card/Card';

const Overview = () => {
  const details = [
    {
      title: 'Jobs posted',
      count: 100,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-9 h-9'
        >
          <path
            fillRule='evenodd'
            d='M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z'
            clipRule='evenodd'
          />
          <path d='M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z' />
        </svg>
      ),
    },
    {
      title: 'Candidates Applied',
      count: 100,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-9 h-9'
        >
          <path
            fillRule='evenodd'
            d='M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
            clipRule='evenodd'
          />
          <path d='M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z' />
        </svg>
      ),
    },
    {
      title: 'Profile view',
      count: 100,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-9 h-9'
        >
          <path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
          <path
            fillRule='evenodd'
            d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      title: 'Notifications',
      count: 4,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-9 h-9'
        >
          <path
            fillRule='evenodd'
            d='M5.25 9.75a.75.75 0 011.5 0v2.25h7.5a.75.75 0 010 1.5h-7.5v7.5a.75.75 0 01-1.5 0v-2.25H3.75a.75.75 0 010-1.5h2.25V9.75z'
            clipRule='evenodd'
          />
          <path
            fillRule='evenodd'
            d='M5.25 9.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ];
  return (
    <div className='px-6 mb-4 z-0 '>
      <Card details={details} />
      <div className='rounded-sm flex-col md:flex-row flex gap-6 '>
        {/* chart */}
        <div className=' w-full md:w-3/5 bg-white shadow-md'>
          <div className='flex items-center p-4'>
            <i className='fa-solid fa-eye text-gray-700' />
            <h2 className='text-primary-05 font-bold ml-2'>Profile views</h2>
          </div>
          <hr className='border-slate-300' />
          <canvas
            id='myChart'
            className='w-full p-4'
          />
        </div>
        {/* notifications */}
        <div className='w-full md:w-2/5 bg-white flex flex-col shadow-md'>
          <div className='flex items-center p-4'>
            <i className='fa-solid fa-bell text-gray-700' />
            <h2 className='text-primary-05 font-bold ml-2'>Notifications</h2>
          </div>
          <hr className='border-slate-300' />
          <div className='p-4 border-b border-b-slate-300'>
            <div className='flex items-center'>
              <i className='fa-regular fa-bell bg-gray-300 p-3 rounded-full' />
              <p className='ml-3 text-sm'>
                Your job listing{' '}
                <a
                  href='#'
                  className='font-medium text-secondary-04'
                >
                  job Full Stack Software Engineer
                </a>{' '}
                is expiring
              </p>
            </div>
          </div>
          <div className='p-4 border-b border-b-slate-300'>
            <div className='flex items-center'>
              <i className='fa-regular fa-user bg-gray-300 p-3 rounded-full' />
              <p className='ml-3 text-sm'>
                <span className='font-medium'>Elizabeth Okwong</span> applied
                for a
                <a
                  href='#'
                  className='font-medium text-secondary-04'
                >
                  job Full Stack Software Engineer
                </a>
              </p>
            </div>
          </div>
          <div className='p-4 border-b border-b-slate-300'>
            <div className='flex items-center'>
              <i className='fa-regular fa-comment bg-gray-300 p-3 rounded-full' />
              <p className='ml-3 text-sm'>
                <span className='font-medium'>Edet Effiong</span> sent you a
                message
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full my-4 shadow-md pt-2'>
        <div className='w-full bg-white'>
          <div className='flex items-center p-4'>
            <i className='fa-solid fa-briefcase text-gray-700' />
            <h2 className='text-primary-05 font-bold ml-2'>My Job listings</h2>
          </div>
          <hr className='border-slate-300' />
          <div className='flex justify-between items-center p-4 border-b border-b-slate-300'>
            <div>
              <h1 className='text-lg font-medium'>
                Full Stack Software Engineer
              </h1>
              <div className='text-gray-500 my-2'>
                <i className='fa-solid fa-location-dot text-primary-05' />
                <span className='ml-2'>Lagos, Nigeria</span>
              </div>
              <div className='flex gap-x-3 my-2'>
                <div className='text-gray-500'>
                  <i className='fa-regular fa-calendar text-primary-05' />
                  <span className='ml-2'>Posted 5 days ago</span>
                </div>
                <div className='text-gray-500'>
                  <i className='fa-regular fa-calendar text-primary-05' />
                  <span className='ml-2'>Expiring on 15th December 2023</span>
                </div>
              </div>
            </div>
            <div className='mr-4 flex flex-col md:flex-row gap-2 '>
              <button
                type='button'
                className='bg-gray-300 w-10 h-10 rounded-full'
              >
                <i className='fa-solid fa-pen-to-square' />
              </button>
              <button
                type='button'
                className='bg-gray-300 w-10 h-10 rounded-full'
              >
                <i className='fa-solid fa-trash' />
              </button>
            </div>
          </div>
          <div className='flex justify-between items-center p-4 border-b border-b-slate-300'>
            <div>
              <h1 className='text-lg font-medium'>
                Full Stack Software Engineer
              </h1>
              <div className='text-gray-500 my-2'>
                <i className='fa-solid fa-location-dot text-primary-05' />
                <span className='ml-2'>Lagos, Nigeria</span>
              </div>
              <div className='flex gap-x-3 my-2'>
                <div className='text-gray-500'>
                  <i className='fa-regular fa-calendar text-primary-05' />
                  <span className='ml-2'>Posted 5 days ago</span>
                </div>
                <div className='text-gray-500'>
                  <i className='fa-regular fa-calendar text-primary-05' />
                  <span className='ml-2'>Expiring on 15th December 2023</span>
                </div>
              </div>
            </div>
            <div className='mr-4 flex flex-col md:flex-row gap-2'>
              <button
                type='button'
                className='bg-gray-300 w-10 h-10 rounded-full'
              >
                <i className='fa-solid fa-pen-to-square' />
              </button>
              <button
                type='button'
                className='bg-gray-300 w-10 h-10 rounded-full'
              >
                <i className='fa-solid fa-trash' />
              </button>
            </div>
          </div>
          <div className='flex justify-between items-center p-4'>
            <div>
              <h1 className='text-lg font-medium'>
                Full Stack Software Engineer
              </h1>
              <div className='text-gray-500 my-2'>
                <i className='fa-solid fa-location-dot text-primary-05' />
                <span className='ml-2'>Lagos, Nigeria</span>
              </div>
              <div className='flex gap-x-3 my-2'>
                <div className='text-gray-500'>
                  <i className='fa-regular fa-calendar text-primary-05' />
                  <span className='ml-2'>Posted 5 days ago</span>
                </div>
                <div className='text-gray-500'>
                  <i className='fa-regular fa-calendar text-primary-05' />
                  <span className='ml-2'>Expiring on 15th December 2023</span>
                </div>
              </div>
            </div>
            <div className='mr-4 flex flex-col md:flex-row gap-2'>
              <button
                type='button'
                className='bg-gray-300 w-10 h-10 rounded-full'
              >
                <i className='fa-solid fa-pen-to-square' />
              </button>
              <button
                type='button'
                className='bg-gray-300 w-10 h-10 rounded-full'
              >
                <i className='fa-solid fa-trash' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
