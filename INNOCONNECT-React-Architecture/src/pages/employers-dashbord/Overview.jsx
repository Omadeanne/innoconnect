import { useEffect, useRef, useState } from 'react';
import Card from '../../Components/molecules/card/Card';
import axios from '../../axios/axios';
import useAuthProvider from '../../context/useAuthProvider';
import { format, formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import { BellAlertIcon } from '@heroicons/react/24/outline';
import Delete from '@mui/icons-material/Delete';
import DeleteModal from './DeleteModal';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import { Spinner } from '@material-tailwind/react';

const Overview = () => {
  const { isLoggedIn } = useAuthProvider();
  const [allJobs, setAllJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const details = [
    {
      title: 'Jobs posted',
      count: allJobs.length,
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
      title: 'Applications',
      count: applications.length,
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
      count: 0,
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
      count: 0,
      icon: <BellAlertIcon className='w-9 h-9 text-primary-05' />,
    },
  ];
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
        },
      });

      setIsLoading(false);
      const newJobs = allJobs.filter((job) => job.id !== id);
      setAllJobs(newJobs);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response.message);
    }
  };
  useEffect(() => {
    const applications = async () => {
      try {
        const response = await axios.get('/employer/applicants', {
          headers: {
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        });
        const applicants = response.data.map((job) => job.jobApplications);
        setApplications(applicants);
      } catch (error) {
        console.log(error.response);
      }
    };
    applications();
  }, [isLoggedIn]);

  useEffect(() => {
    const displayJobs = async () => {
      try {
        const response = await axios.get(`/jobs/employer?limit=${3}`, {
          headers: {
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        });

        setAllJobs(response.data);
      } catch (error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    };
    displayJobs();
  }, [isLoggedIn]);
 
  console.log(applications);
  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Spinner className='block mx-auto' />
      </div>
    );
  }

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
          <div className='flex justify-center items-center h-full'>
            <div className='text-center'>
              <BellAlertIcon className='w-10 h-10 mx-auto text-primary-05' />

              <p className='text-primary-05 font-semibold my-2'>
                No Notifications yet
              </p>
            </div>
          </div>
          {/* <div className='p-4 border-b border-b-slate-300'>
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
          </div> */}
        </div>
      </div>
      <div className='w-full bg-white my-4 shadow-md pt-2'>
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center'>
            <h2 className='text-primary-05 font-bold ml-2'>Jobs Posted</h2>
          </div>
          <div>
            <Link
              to='/employers-dashboard/job-posted'
              className='inline-flex items-center justify-center text-primary-05 font-medium hover:bg-primary-05 hover:text-white rounded-md gap-x-1.5 rounded-m px-3 text-sm py-2 mr-2 transition-all'
            >
              View more
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </Link>
          </div>
        </div>
        <hr className='border-slate-300' />
        {isLoading ? (
          <div className='flex justify-center items-center h-full w-full'>
            Loading...
          </div>
        ) : allJobs.length > 0 ? (
          allJobs.map((job, index) => (
            <div
              key={index}
              className='flex justify-between items-center p-4 border-b border-b-slate-300 h-full'
            >
              <div>
                <h1 className='text-lg font-medium'>{job.title}</h1>
                <div className='text-gray-500 my-2'>
                  <i className='fa-solid fa-location-dot text-primary-05' />
                  <span className='ml-2'>{job.location}</span>
                </div>
                <div className='flex gap-x-3 my-2'>
                  <div className='text-gray-500'>
                    <i className='fa-regular fa-calendar text-primary-05' />
                    <span className='ml-2'>
                      Posted:{' '}
                      {formatDistance(new Date(job?.createdAt), new Date(), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                  <div className='text-gray-500'>
                    <i className='fa-regular fa-calendar text-primary-05' />
                    <span className='ml-2'>
                      Deadline: {format(new Date(job?.endDate), 'dd MMM yyyy')}
                    </span>
                  </div>
                </div>
                <div className='text-gray-500'>
                  <i className='fa-solid fa-users text-primary-05' />
                  <span className='ml-2'>{job?.applications?.length}</span>
                </div>
              </div>
              <div className='mr-4 flex flex-col md:flex-row gap-2'>
                <Link
                  to={`/employers-dashboard/job-posted/${job.id}/applications`}
                >
                  <button
                    type='button'
                    className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                  >
                    <RemoveRedEye />
                  </button>
                </Link>
                <button
                  onClick={() => setOpen(true)}
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full'
                >
                  <Delete />
                </button>
              </div>
              <DeleteModal
                id={job.id}
                open={open}
                setOpen={setOpen}
                cancelButtonRef={cancelButtonRef}
                handleDelete={handleDelete}
              />
            </div>
          ))
        ) : (
          <div className='flex justify-center items-center h-full w-full'>
            No Jobs Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
