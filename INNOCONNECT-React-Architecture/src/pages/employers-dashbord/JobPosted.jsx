import { useEffect, useState, Fragment, useRef } from 'react';
import axios from '../../axios/axios';
import useAuthProvider from '../../context/useAuthProvider';
import formatDistance from 'date-fns/formatDistance';
import format from 'date-fns/format';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function DeleteModal({ open, setOpen, cancelButtonRef, func, id }) {
  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                      <ExclamationTriangleIcon
                        className='h-6 w-6 text-red-600'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-base font-semibold leading-6 text-gray-900'
                      >
                        Delete Job
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>
                          Are you sure you want to delete this job?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                    onClick={() => {
                      func(id);
                      setOpen(false);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

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
          <div className='flex justify-center items-center h-full w-full'>
            Loading...
          </div>
        ) : myJobs.length > 0 ? (
          myJobs.map((job) => (
            <>
              <div
                key={job.id}
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
            </>
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
