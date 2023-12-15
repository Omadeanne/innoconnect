import { useEffect, useRef, useState } from 'react';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../../Components/molecules/Modal';
import axios from '../../axios/axios';
import useAuthProvider from '../../context/useAuthProvider';
import { Spinner } from '@material-tailwind/react';

export default function MentorProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/find-a-mentor';
  const { isLoggedIn } = useAuthProvider();
  const [connect, setConnect] = useState(false);
  const [mentor, setMentor] = useState({});
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [Loading, setLoading] = useState(true);
  const cancelButtonRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const getMentor = async () => {
      try {
        const response = await axios.get(`/mentors/${id}`, {
          headers: {
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        });

        console.log('Mentor Data:', response.data);
        setMentor(response.data);
      } catch (error) {
        console.error('Error fetching mentor:', error.message);
      } finally {
        setLoading(false);
      }
    };

    getMentor();
  }, [id, isLoggedIn]);

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

      console.log('Connection Response:', res.data);
      setConnect(!connect);
    } catch (error) {
      console.error('Connection Error:', error);
    } finally {
      setIsLoading(false);
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

      console.log('Disconnection Response:', res.data);
      setConnect(!connect);
    } catch (error) {
      console.error('Disconnection Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Nav />
      <hr />

      <div className='flex justify-center mt-3 items-center h-[calc(100vh-100px)]'>
        {Loading ? (
          <div className='flex items-center justify-center h-[calc(100vh-100px)]'>
            <Spinner className='block mx-auto' />
          </div>
        ) : (
          <>
            <div className='flex flex-1 justify-center items-center'>
              <img
                src={
                  mentor?.user?.profileImg ||
                  'https://i.ibb.co/0rrxLz4/findamentor.jpg'
                }
                alt="mentor's pic"
                className='h-[450px] w-[450px] rounded-full object-cover object-center'
              />
            </div>
            <div className='text-left flex-1 py-5 px-10'>
              <h1 className='text-3xl font-bold mb-2'>{`${mentor?.user?.firstName} ${mentor?.user?.lastName}`}</h1>
              <div className='flex   text-2xl gap-5 '>
                <button>
                  <i className='fa-brands fa-sm fa-linkedin   hover:cursor-pointer' />
                </button>
                <button>
                  <i className='fa-brands fa-sm fa-x-twitter   hover:cursor-pointer' />
                </button>
                <button>
                  <i className='fa-brands fa-sm fa-facebook   hover:cursor-pointer' />
                </button>
              </div>
              <div className='mt-8'>
                <p className='text-xl font-bold'>About</p> <hr />
                <p>{mentor?.user?.bio}</p>
              </div>
              <div className='my-5'>
                <p className='text-xl font-bold'>Experience</p> <hr />
                <ul>
                  <li className='my-3 '>
                    <h3 className='text-xl font-semi-bold'>
                      Software Engineer
                    </h3>
                    <p>Microsoft</p>
                    <small>May 2021 - Present</small>
                  </li>
                  <hr />
                  <li>
                    <h3 className='text-xl font-semi-bold'>
                      Software Engineer
                    </h3>
                    <p>Interswitch</p>
                    <small>August 2019- April 2021</small>
                  </li>
                </ul>
              </div>
              <div>
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
                    {isLoading ? (
                      <Spinner className='block mx-auto' />
                    ) : (
                      'Connect +'
                    )}
                  </button>
                )}
              </div>
            </div>
          </>
        )}
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
      <Footer />
    </div>
  );
}
