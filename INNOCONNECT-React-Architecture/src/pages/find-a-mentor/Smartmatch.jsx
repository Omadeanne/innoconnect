import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import MentorCard from './MentorCard';
// import mentors from './mentors';
import { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import { Spinner } from '@material-tailwind/react';

export default function Smartmatch() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await axios.get('/mentors');
        setMentors(res.data.rows);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMentors();
  }, []);

  return (
    <>
      <Nav />
      <div className='m-auto'>
        <div
          className='overflow-hidden bg-blend-overlay bg-cover bg-no-repeat  opacity-90 text-center flex flex-col items-center justify-center h-screen md:h-screen md:w-[100%] '
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ds086abwj/image/upload/v1702509287/mentorimage_img_zulnn3.jpg")`,
          }}
        >
          {/* <a href="https://ibb.co/0rrxLz4"><img className='relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen xmd:h-screen xmd:w-[100%]'src="https://i.ibb.co/TttsGNj/findamentor.jpg" alt="findamentor" border="0" /></a> */}
          <div>
            <p className='text-white text-6xl font-bold text-center my-[20px] p-[10px] '>
              Discover Your Mentorship Match
            </p>
            <p className='font-font text-white text-xl px-3 font-bold text-center my-[20px] max-w-3xl mx-auto'>
              Explore the possibilities of mentorship with us! Whether you are
              seeking technical guidance or professional growth, we are here to
              connect you with the mentor who is perfectly suited to your unique
              needs and aspirations. Your journey to success starts with the
              right mentorship match!
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[75%] m-auto pt-[30px] mb-10'>
        {loading ? <Spinner className='mx-auto block' /> : mentors.map((mentor, index) => (
          <MentorCard
            key={index}
            mentor={mentor}
          />
        ))}
      </div>
      {/* <div
        className='max-w-fit mx-auto my-20'
        aria-label='Page navigation'
      >
        <ul className='inline-flex'>
          <li>
            <button className='h-10 px-5 text-black transition-colors duration-150 bg-white border border-r-0 border-secondary-05  focus:shadow-outline hover:bg-secondary-01'>
              Prev
            </button>
          </li>
          <li>
            <button className='h-10 px-5 text-black transition-colors duration-150 bg-white border border-r-0 border-secondary-05 focus:shadow-outline hover:bg-secondary-01'>
              1
            </button>
          </li>
          <li>
            <button className='h-10 px-5 text-black transition-colors duration-150 bg-white border border-r-0 border-secondary-05 focus:shadow-outline hover:bg-secondary-01'>
              2
            </button>
          </li>
          <li>
            <button className='h-10 px-5 text-white transition-colors duration-150 bg-primary-06 border border-r-0 border-secondary-05 focus:shadow-outline'>
              3
            </button>
          </li>
          <li>
            <button className='h-10 px-5 text-black transition-colors duration-150 bg-white border border-secondary-05 focus:shadow-outline hover:bg-secondary-01'>
              Next
            </button>
          </li>
        </ul>
      </div> */}

      <Footer />
    </>
  );
}
