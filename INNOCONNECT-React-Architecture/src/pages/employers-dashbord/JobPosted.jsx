import { useEffect, useState, useRef } from 'react';
import axios from '../../axios/axios';
import useAuthProvider from '../../context/useAuthProvider';
import formatDistance from 'date-fns/formatDistance';
import format from 'date-fns/format';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import { Spinner } from '@material-tailwind/react';

export default function JobPosted() {
  const { isLoggedIn } = useAuthProvider();
  const [isLoading, setIsLoading] = useState(true);
  const [myJobs, setMyJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get('/jobs/employer/', {
          headers: {
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        });

        setIsLoading(false);
        setMyJobs(response?.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error.response.message);
      }
    };
    getJobs();
  }, [isLoggedIn]);

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
        },
      });

      setIsLoading(false);
      const newJobs = myJobs.filter((job) => job.id !== id);
      setMyJobs(newJobs);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response.message);
    }
  };

  return (
    <div className='md:px-10 z-0 mt-10 h-full'>
      <div className='w-full bg-white p-5 md:p-10 shadow-card h-full'>
        <div className='flex items-center text-2xl md:text-4xl'>
          <i className='fa-solid fa-briefcase text-gray-700 py-4' />
          <h1 className='ml-4 font-bold text-primary-05'>My Job listings</h1>
        </div>
        <hr className='border-slate-300' />

        {isLoading ? (
          <div className='flex items-center justify-center h-full'>
          <Spinner className='block mx-auto' />
        </div>
        ) : myJobs.length > 0 ? (
          myJobs.map((job) => (
            <div key={job.id}>
              <div
                className='flex justify-between items-center py-4 md:p-4 border-b border-b-slate-300'
              >
                <div>
                  <h1 className='text-lg font-medium list-none capitalize'>
                    {job.title}
                  </h1>
                  <div>
                    <p className='text-lg font-base list-none capitalize'>
                      {job.workSetup}
                    </p>
                  </div>
                  <div className='text-gray-500 my-2 flex items-center list-none'>
                    <i className='fa-solid fa-location-dot text-primary-05' />
                    <span className='ml-2'>{job.location}</span>
                  </div>
                  <div className='flex gap-x-3 my-2'>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>{`Posted ${formatDistance(
                        new Date(job.createdAt),
                        new Date(),
                        { addSuffix: true }
                      )}`}</span>
                    </div>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>{`Deadline ${format(
                        new Date(job.endDate),
                        'dd/MM/yyyy'
                      )}`}</span>
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
                      <RemoveRedEyeIcon />
                    </button>
                  </Link>
                  <Link to={`/employers-dashboard/job-posted/edit/${job.id}`}>
                    <button
                      type='button'
                      className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                    >
                      <EditIcon />
                    </button>
                  </Link>
                  <Link>
                    <button
                      onClick={() => setOpen(true)}
                      type='button'
                      className='bg-gray-300 w-10 h-10 rounded-full'
                    >
                      <DeleteIcon />
                    </button>
                  </Link>
                </div>
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
}
