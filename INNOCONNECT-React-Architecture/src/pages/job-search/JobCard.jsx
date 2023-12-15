import { defaultImg } from '../../assets';
import { Link } from 'react-router-dom';
import formatDistance from 'date-fns/formatDistance';
import Proptypes from 'prop-types';
import axios from '../../axios/axios';
import { useEffect, useState } from 'react';
import useAuthProvider from '../../context/useAuthProvider';
const JobCard = ({ job }) => {
  const [bookmark, setBookmark] = useState(false);
  const { isLoggedIn } = useAuthProvider();

  useEffect(() => {
    const getBookmark = async () => {
      try {
        const res = await axios.get(`jobs/${job.id}/bookmark`, {
          headers: {
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        });
        setBookmark(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookmark();
  }, [isLoggedIn, job.id]);

  console.log(bookmark);
  const handleBookmark = async () => {
    try {
      const res = axios.post(
        `jobs/${job.id}/bookmark`,
        {},
        {
          headers: {
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        }
      );

      setBookmark(!bookmark);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='job-cards'>
      <div
        key={job.id}
        className='relative bg-white flex items-center gap-4 my-4 text-primary-05'
      >
        <div className='hidden md:block h-32 w-32'>
          <img
            src={!job.companyLogo ? defaultImg : job.companyLogo}
            alt='job_brand'
            className='w-full object-cover rounded-full'
          />
        </div>
        <div className='w-full rounded-md leading-8 '>
          <h2 className='font-bold text-xl'>{job.title}</h2>
          <p className='font-semibold text-lg'>{job.employer.name}</p>
          <div className='my-2 flex gap-3'>
            <button className='w-20 bg-red-400 px-2 py-1 text-white rounded-sm text-sm'>
              {job.type}
            </button>
            <button className='w-20 bg-green-400 px-2 py-1 text-white rounded-sm text-sm'>
              {job.workSetup}
            </button>
          </div>

          <p className='text-[#1D3557] text-sm my-3'>
            <i className='fas fa-clock mr-1' /> Job posted:{' '}
            <span className='ml-2'>{`${formatDistance(
              new Date(job.createdAt),
              new Date(),
              { addSuffix: true }
            )}`}</span>
          </p>
          <Link
            to={`/job-details/${job.id}`}
            className='bg-primary-06 px-8 py-1 inline-flex items-center text-white rounded-sm shadow'
          >
            Details
          </Link>
        </div>
        <div className='p-4 flex gap-3 absolute top-0 right-0 lg:relative items-center'>
          <button>
            <i
              className={`${
                bookmark ? 'fas fa-bookmark' : 'far fa-bookmark'
              } text-primary-06`}
              onClick={handleBookmark}
            />
          </button>
          <i className='fas fa-share-alt text-primary-06' />
        </div>
      </div>
      <hr />
    </div>
  );
};

JobCard.propTypes = {
  job: Proptypes.object,
};

export default JobCard;
