import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';
import Modal from '../../Components/molecules/Modal';
import axios from '../../axios/axios';
import useAuthProvider from '../../context/useAuthProvider';
import { Spinner } from '@material-tailwind/react';

const MentorCard = ({ mentor }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/find-a-mentor';
  const { isLoggedIn } = useAuthProvider();
  const [connect, setConnect] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cancelButtonRef = useRef(null);

  const handleConnect = async () => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from } });
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post(
        `/mentorship/${mentor.id}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        }
      );
      console.log(res.data);
      setIsLoading(false);
      setConnect(!connect);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisconnect = async () => {
    setIsLoading(true);
    try {
      const res = await axios.delete(`/mentorship/${mentor.id}`, {
        headers: {
          Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
        },
      });
      console.log(res.data);
      setIsLoading(false);
      setConnect(!connect);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='flex flex-col '>
      <div data-aos='fade-up'>
        <div className='flex flex-col items-center justify-center hull bg-primary-01 my-3 py-8 rounded-lg hover:shadow-lg hover:transition hover:duration-300'>
          <div className=' '>
            <Link
              to={`/mentors/${mentor.id}`}
              className=' flex flex-col items-center '
            >
              <img
                className=' w-[120px] h-[120px] rounded-full shadow-card object-cover object-center '
                src={
                  mentor?.image || 'https://i.ibb.co/0rrxLz4/findamentor.jpg'
                }
                alt='Mentor'
              />
              <div className=' pt-[15px]'>
                <p className='text-primary-07 font-font font-bold text-3xl text-center'>
                  {`${mentor.user.firstName} ${mentor.user.lastName}`}
                </p>

                <p className='text-primary-06 font-font font-medium text-xl text-center'>
                  {mentor.jobTitle}
                </p>
              </div>
            </Link>
          </div>

          <div className='flex items-center justify-center m-auto text-2xl  pt-[10px] duration-300'>
            <button>
              <a href={`https://www.linkedin.com/in/${mentor.linkedin}`}>
                <i className='fa-brands fa-linkedin fa-sm  mx-[6px] rounded-lg p-4 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer' />
              </a>
            </button>

            <button>
              <a
                href={`https://twitter.com/${mentor.twitter}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa-brands fa-x-twitter fa-sm mx-[6px] rounded-lg p-4 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer' />
              </a>
            </button>

            <button>
              <a href={`https://www.github.com/${mentor.github}`}>
                <i className='fa-brands fa-github fa-sm mx-[6px] rounded-lg p-4 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer' />
              </a>
            </button>
          </div>
          {connect ? (
            <button
              className='px-[10px] py-[8px] mt-8 rounded-lg border-primary-07 border-2 font-font text-primary-07 text-base font-bold '
              onClick={() => {
                setOpen(true);
              }}
            >
              Disconnect
            </button>
          ) : (
            <button
              onClick={handleConnect}
              className='rounded-lg bg-primary-05 hover:bg-primary-07 font-font text-base font-md text-[#fff] px-[10px] py-[8px] mt-8'
            >
              {isLoading ? <Spinner className='block mx-auto' /> : 'Connect +'}
            </button>
          )}
        </div>
        <Modal
          id={mentor.id}
          open={open}
          setOpen={setOpen}
          cancelButtonRef={cancelButtonRef}
          func={handleDisconnect}
          h3='Disconnect?'
          p='Are you sure you want to disconnect?'
        />
      </div>
    </div>
  );
};
MentorCard.propTypes = {
  mentor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
    jobTitle: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default MentorCard;
