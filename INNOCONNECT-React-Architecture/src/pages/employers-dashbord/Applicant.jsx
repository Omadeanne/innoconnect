import { useState, useEffect } from 'react';
import useAuthProvider from '../../context/useAuthProvider';
import axios from '../../axios/axios';
import { useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CheckIcon from '@mui/icons-material/Check';
import ReplayIcon from '@mui/icons-material/Replay';
import { Spinner } from '@material-tailwind/react';

export default function Applicant() {
  const { isLoggedIn } = useAuthProvider();
  const [isLoading, setIsLoading] = useState(true);
  const [applicants, setApplicants] = useState([]);
  const [errMsg, setErrMsg] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get(`/jobs/${id}`, {
          headers: {
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        });
        setIsLoading(false);
        const apps = response?.data?.applications;
        setApplicants(apps);
      } catch (error) {
        setIsLoading(false);
        if (!error?.response) {
          setErrMsg('No Server Response');
        } else {
          setErrMsg(error?.response?.data?.message);
        }
      }
    };

    fetchApplicants();
  }, [isLoggedIn, id]);

  const updateApplicationStatus = async (jobId, id, status) => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `/application/${jobId}/${id}`,
        JSON.stringify({
          status,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        }
      );

      setIsLoading(false);
      setApplicants((prevApplicants) =>
        prevApplicants.map((app) => {
          if (app.id === id) {
            return {
              ...app,
              jobApplication: {
                ...app.jobApplication,
                status,
              },
            };
          }
          return app;
        })
      );
    } catch (error) {
      setIsLoading(false);
      console.log(error.response.message);
    }
  };

  return (
    <div className='px-10 z-0 mt-10 '>
      <div className='w-full bg-white p-10 shadow-card'>
        <div className='flex items-center text-4xl'>
          <i className='fa-solid fa-users text-gray-700 py-4' />
          <h1 className='ml-4 font-bold text-primary-05'>Applicants</h1>
        </div>
        <hr className='border-slate-300' />
        {isLoading ? (
          <div className='flex items-center justify-center h-full'>
          <Spinner className='block mx-auto' />
        </div>
        ) : applicants.length > 0 ? (
          applicants?.map((app) => (
            <div
              key={app.id}
              className='flex justify-between items-center p-4 border-b border-b-slate-300'
            >
              <div className='flex items-center'>
                <div className='mr-4'>
                  <a href='https://ibb.co/mTsNFWx'>
                    <img
                      className='w-20 h-20 rounded-full object-cover'
                      src='https://i.ibb.co/mTsNFWx/edet.png'
                      alt='edet'
                      border='0'
                    />
                  </a>
                </div>
                <div className='flex flex-col'>
                  <div className='flex items-center'>
                    <h1 className='text-lg font-medium capitalize'>{`${app?.firstName} ${app?.lastName}`}</h1>
                  </div>
                </div>
              </div>
              <div className='mr-4 flex items-center gap-2'>
                <button
                  aria-label='View'
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                >
                  <RemoveRedEyeIcon />
                </button>
                {app.jobApplication.status === 'pending' ? (
                  <>
                    <button
                      onClick={() =>
                        updateApplicationStatus(
                          app.jobApplication.jobId,
                          app.id,
                          'accepted'
                        )
                      }
                      aria-label='accept'
                      type='button'
                      className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                    >
                      <CheckIcon />
                    </button>
                    <button
                      onClick={() =>
                        updateApplicationStatus(
                          app.jobApplication.jobId,
                          app.id,
                          'rejected'
                        )
                      }
                      aria-label='delete'
                      type='button'
                      className='bg-gray-300 w-10 h-10 rounded-full'
                    >
                      <DeleteIcon />
                    </button>
                  </>
                ) : (
                  <div className='flex items-center gap-2'>
                    {app.jobApplication.status === 'accepted' ? (
                      <span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text font-medium text-green-700 ring-1 ring-inset ring-green-600/10 mr-2'>
                        accepted
                      </span>
                    ) : (
                      <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2'>
                        Rejected
                      </span>
                    )}

                    <button
                      onClick={() =>
                        updateApplicationStatus(
                          app.jobApplication.jobId,
                          app.id,
                          'pending'
                        )
                      }
                      aria-label='undo'
                      type='button'
                      className='bg-gray-300 w-10 h-10 rounded-full'
                    >
                      <ReplayIcon />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className='flex justify-center items-center h-full w-full'>
            No Applicants
          </div>
        )}

      </div>
    </div>
  );
}
