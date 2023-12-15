import { Spinner } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios/axios';
import useAuthProvider from '../../context/useAuthProvider';
import { format, formatDistance } from 'date-fns';

const Applications = () => {
  const [jobs, setjobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useAuthProvider();

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axios.get('/application', {
          headers: {
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        });
        setjobs(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, [isLoggedIn]);

  return (
    <div className='md:px-10 z-0 mt-10 h-full'>
      <div className='w-full bg-white p-5 md:p-10 shadow-card h-full'>
        <div className='flex items-center text-2xl md:text-4xl'>
          <h1 className='mb-4 font-bold text-primary-05'>Applications</h1>
        </div>
        <hr className='border-slate-300' />
        {loading ? (
          <div className='flex items-center justify-center h-full'>
            <Spinner className='block mx-auto' />
          </div>
        ) : jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div
              key={index}
              className='flex justify-between items-center px-5 py-4 border-b border-b-slate-300'
            >
              <div>
                <h1 className='text-lg font-medium'>{job?.title}</h1>
                <div className='text-gray-500 my-2'>
                  <i className='fa-solid fa-location-dot text-primary-05' />
                  <span className='ml-2'>{job?.location}</span>
                </div>
                <div className='flex gap-x-3 my-2'>
                  <div className='text-gray-500'>
                    <i className='fa-regular fa-calendar text-primary-05' />
                    <span className='ml-2'>Posted:{' '}
                        {formatDistance(
                          new Date(job?.createdAt),
                          new Date(),
                          {
                            addSuffix: true,
                          }
                        )}</span>
                  </div>
                  <div className='text-gray-500'>
                    <i className='fa-regular fa-calendar text-primary-05' />
                    <span className='ml-2'>Deadline:{' '}
                        {format(
                          new Date(job?.endDate),
                          'dd MMM yyyy'
                        )}</span>
                  </div>
                </div>
                <button
                  type='button'
                  className='inline-flex justify-center gap-x-1.5 rounded-md bg-secondary-06 px-3 text-sm py-2  text-white shadow-sm active:bg-secondary-07 hover:shadow-btn my-2'
                >
                  View Details
                </button>
              </div>
              <div className='mr-4 flex flex-col md:flex-row gap-2 '>
                <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>
                  {job?.jobApplication?.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className='flex justify-center items-center h-full'>
            <div className='text-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-9 h-9 mx-auto inline-block'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
                  clipRule='evenodd'
                />
              </svg>

              <p className='text-primary-05 font-semibold my-2'>
                No applications
              </p>
              <p className='text-gray-500'>Find your dream job</p>
              <Link
                to='/jobs'
                className='inline-flex justify-center gap-x-1.5 rounded-md bg-secondary-06 px-3 text-sm py-2  text-white shadow-sm active:bg-secondary-07 hover:shadow-btn my-2'
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Applications;
