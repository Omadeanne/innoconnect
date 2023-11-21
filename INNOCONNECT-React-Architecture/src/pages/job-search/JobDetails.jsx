import { Link, useParams } from 'react-router-dom';
import jobs from './jobs';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import { defaultImg } from '../../assets';
const JobDetails = () => {
  const { id } = useParams();

  const job = jobs.find((job) => job.id === +id);
  console.log(job);
  return (
    <>
      <Nav />
      <main>
        <>
          <hr />
          <section className='max-w-3xl mx-auto my-8 px-4'>
            <div className='flex justify-between items-center gap-x-8'>
              <div className='text-primary-05'>
                <h2 className='text-xl md:text-3xl font-bold text-primary-06'>
                  {job.title}
                </h2>
                <p className='mt-2'>
                  <i className='fa-solid fa-building mr-1' /> {job.company}
                </p>
                <p className='mt-2'>
                  <i className='fa-solid fa-location-dot mr-1' /> {job.location}
                </p>
                <p className='mt-2'>
                  <i className='fa-solid fa-briefcase mr-1' /> {job.site}
                </p>
                <p className='mt-2'>
                  <i className='fa-solid fa-clock mr-1' /> Job posted:{' '}
                  <span>{job.date}</span>
                </p>
                <div className='my-2 flex gap-3'>
                  <button className='w-20 bg-red-400 px-2 py-1 text-white rounded-sm text-sm'>
                    {job.type}
                  </button>
                  <button className='w-20 bg-green-400 px-2 py-1 text-white rounded-sm text-sm'>
                    {job.site}
                  </button>
                </div>
              </div>
              <div>
                <img
                  src={!job.companyLogo ? defaultImg : job.companyLogo}
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
                    {job.requirements?.map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                    ))}
                  </ul>
                </div>
                <hr className='col-span-full' />
                <p className='font-bold text-lg uppercase md:col-span-1'>
                  Responsibilities:
                </p>
                <div className='text-lg md:col-span-3'>
                  <ul className='list-disc list-inside'>
                    <li>
                      Develop new features and enhancements to existing
                      applications.
                    </li>
                    <li>
                      Collaborate with cross-functional teams to define, design,
                      and ship new features.
                    </li>
                    <li>
                      Identify opportunities for process improvements and
                      automation.
                    </li>
                    <li>Write well-designed, testable, efficient code.</li>
                  </ul>
                </div>
                <hr className='col-span-full' />
                <p className='font-bold text-lg uppercase md:col-span-1'>
                  Benefits:
                </p>
                <div className='text-lg md:col-span-3'>
                  <ul className='list-disc list-inside'>
                    <li>Competitive salary</li>
                    <li>Flexible working hours</li>
                    <li>Remote work</li>
                  </ul>
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
      <Footer />
    </>
  );
};

export default JobDetails;
