import { Link, useParams } from 'react-router-dom';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import { defaultImg } from '../../assets';
import axios from '../../axios/axios';
import { useState, useEffect } from 'react';
import formatDistance from 'date-fns/formatDistance';
import { Spinner } from '@material-tailwind/react';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const response = await axios.get(`/jobs/${id}`, {});
        // setIsLoading(false);
        console.log(response.data);
        setJob(response.data);
      } catch (error) {
        console.log(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    getJobDetails();
  }, [id]);

  return (
    <>
      <Nav />
      {isLoading ? (
        <div className='flex items-center justify-center h-[calc(100vh-100px)]'>
          <Spinner className='block mx-auto' />
        </div>
      ) : (
        <main className='h-[calc(100vh-100px)] flex justify-center items-center'>
          <>
            <hr />
            <section className='max-w-3xl mx-auto my-8 px-4'>
              <div className='flex justify-between items-center gap-x-8'>
                <div className='text-primary-05'>
                  <h2 className='text-xl md:text-3xl font-bold text-primary-06'>
                    {job.title}
                  </h2>
                  <p className='mt-2'>
                    <i className='fa-solid fa-building mr-1' />{' '}
                    {job?.employer?.name}
                  </p>
                  <p className='mt-2'>
                    <i className='fa-solid fa-location-dot mr-1' />{' '}
                    {job.location}
                  </p>
                  <p className='mt-2'>
                    <i className='fa-solid fa-briefcase mr-1' /> {job.workSetup}
                  </p>
                  {/* <p className='mt-2'>
                  <i className='fa-solid fa-clock mr-1' /> Job posted:{' '}
                  <span className='ml-2'>{`${formatDistance(
                    new Date(job?.createdAt),
                    new Date(),
                    { addSuffix: true }
                  )}`}</span>
                </p> */}
                  <div className='my-2 flex gap-3'>
                    <button className='w-20 bg-red-400 px-2 py-1 text-white rounded-sm text-sm'>
                      {job.type}
                    </button>
                    <button className='w-20 bg-green-400 px-2 py-1 text-white rounded-sm text-sm'>
                      {job.workSetup}
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src={
                      !job?.employer?.user?.profileImg
                        ? defaultImg
                        : job?.employer?.user?.profileImg
                    }
                    alt=''
                    className='object-cover h-52 w-h-52 rounded-md'
                  />
                </div>
              </div>
              <hr className='mt-8' />
              <div className='mt-8 text-primary-05'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-y-8'>
                  <p className='font-bold text-lg uppercase md:col-span-1'>
                    About:
                  </p>
                  <p className='text-lg md:col-span-3'>{job.description}</p>
                  <hr className='col-span-full' />
                  <p className='font-bold text-lg uppercase md:col-span-1'>
                    Requirements:
                  </p>
                  <div className='text-lg md:col-span-3'>
                    <ul className='list-disc list-inside'>
                      {job.requirements}
                    </ul>
                  </div>

                  <hr className='col-span-full' />
                  <p className='font-bold text-lg uppercase md:col-span-1'>
                    Benefits:
                  </p>
                  <div className='text-lg md:col-span-3'>
                    <ul className='list-disc list-inside'>{job.benefits}</ul>
                  </div>
                </div>
              </div>
              <hr className='mt-8' />
              <Link
                to={`/apply/${job.id}`}
                className='text-white font-semibold w-28 border bg-secondary-06 border-secondary-06 text-center rounded-lg px-4 py-2 block active:bg-secondary-07 hover:shadow-btn mt-8'
              >
                Apply
              </Link>
            </section>
          </>
        </main>
      )}
      <Footer />
    </>
  );
};

export default JobDetails;
