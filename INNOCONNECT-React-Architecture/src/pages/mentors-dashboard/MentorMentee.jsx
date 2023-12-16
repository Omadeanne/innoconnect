import { Spinner } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import { Link } from 'react-router-dom';
import useAuthProvider from '../../context/useAuthProvider';
import { Delete, Replay } from '@mui/icons-material';
import Check from '@mui/icons-material/Check';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';

const MentorMentee = () => {
  const [loading, setLoading] = useState(true);
  const [mentees, setMentees] = useState([]);
  const { isLoggedIn } = useAuthProvider();

  useEffect(() => {
    const getmentor = async () => {
      try {
        const response = await axios.get('/mentorship', {
          headers: {
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        });
        setMentees(response.data);
      } catch (error) {
        console.log(error.response.message);
      } finally {
        setLoading(false);
      }
    };
    getmentor();
  }, [isLoggedIn]);

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`/mentorship/${id}`, JSON.stringify({ status }), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
        },
      });

      setMentees((prevMentees) =>
        prevMentees.map((mentee) =>
          mentee.id === id
            ? {
                ...mentee,
                mentorships: { ...mentee.mentorships, status },
              }
            : mentee
        )
      );
    } catch (error) {
      console.log(error.response.message);
    }
  };

  return (
    <div className='md:px-10 z-0 mt-10 h-full'>
      <div className='w-full bg-white p-5 md:p-10 shadow-card h-full'>
        <div className='flex items-center text-2xl md:text-4xl'>
          <h1 className='mb-4 font-bold text-primary-05'>Bookmarks</h1>
        </div>
        <hr className='border-slate-300' />
        {loading ? (
          <div className='flex items-center justify-center h-full'>
            <Spinner className='block mx-auto' />
          </div>
        ) : mentees?.length > 0 ? (
          mentees.map((mentee) => (
            <div
              key={mentee.id}
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
                    <h1 className='text-lg font-medium capitalize'>{`${mentee?.user?.firstName} ${mentee?.user?.lastName}`}</h1>
                  </div>
                </div>
              </div>
              <div className='mr-4 flex items-center gap-2'>
                <button
                  aria-label='View'
                  type='button'
                  className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                >
                  <RemoveRedEye />
                </button>
                {mentee?.mentorships?.status === 'pending' ? (
                  <>
                    <button
                      onClick={() => updateStatus(mentee?.id, 'approved')}
                      aria-label='accept'
                      type='button'
                      className='bg-gray-300 w-10 h-10 rounded-full mr-2'
                    >
                      <Check />
                    </button>
                    <button
                      onClick={() => updateStatus(mentee?.id, 'rejected')}
                      aria-label='delete'
                      type='button'
                      className='bg-gray-300 w-10 h-10 rounded-full'
                    >
                      <Delete />
                    </button>
                  </>
                ) : (
                  <div className='flex items-center gap-2'>
                    {mentee?.mentorships?.status === 'approved' ? (
                      <span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text font-medium text-green-700 ring-1 ring-inset ring-green-600/10 mr-2'>
                        approved
                      </span>
                    ) : (
                      <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2'>
                        Rejected
                      </span>
                    )}

                    <button
                      aria-label='undo'
                      type='button'
                      className='bg-gray-300 w-10 h-10 rounded-full'
                    >
                      <Replay />
                    </button>
                  </div>
                )}
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

export default MentorMentee;
