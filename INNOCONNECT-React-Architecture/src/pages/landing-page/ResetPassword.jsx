import { useEffect, useRef, useState } from 'react';
import { logo, registerpageimage } from '../../assets';
import { Link, useLocation } from 'react-router-dom';
import axios from '../../axios/axios';
import { Spinner } from '@material-tailwind/react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const errRef = useRef();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');

  useEffect(() => {
    setErrMsg('');
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setErrMsg('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setErrMsg('Passwords do not match');
      return;
    }

    try {
      setIsLoading(true);
      const data = {
        password,
      };
      await axios.post(
        `/auth/reset-password?token=${token}`,
        JSON.stringify(data),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setSuccess(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg(error?.response?.data?.message);
      }
    }
  };
  return (
    <>
      <div className='flex flex-col md:flex-row min-h-screen'>
        <div className='md:absolute h-20 left-4 top-4 p-4 bg-[#112034]'>
          <Link to='/'>
            <img
              className=''
              src={logo}
              alt=''
            />
          </Link>
        </div>
        <div className='hidden md:flex  bg-[#112034] flex-1 justify-center items-center p-10'>
          <img
            src={registerpageimage}
            alt='signup'
            className='w-full max-w-md'
          />
        </div>
        <div className='container-content flex-1 flex justify-center items-center bg-[#fff] p-5 '>
          <div className='w-full max-w-md'>
            <h1 className='text-center font-bold text-3xl md:text-4xl  mt-3 mb-4 text-[#234270]'>
              Reset Password
            </h1>
            <form
              action=''
              className='bg-[#F6F9FA] p-8 rounded-2xl'
              id='reset-form'
            >
              <p
                ref={errRef}
                className={
                  errMsg
                    ? 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2 col-span-full'
                    : 'hidden'
                }
                aria-live='assertive'
                role='alert'
              >
                {errMsg}
              </p>
              <p>Enter new Password</p>
              <div className='my-4'>
                <label
                  className='block text-gray-700 font-bold my-2 text-sm'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  className='rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
                  id='password'
                  type='password'
                  placeholder='Password'
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
              </div>
              <div className='my-4'>
                <label
                  className='block text-gray-700 font-bold my-2 text-sm'
                  htmlFor='confirm-password'
                >
                  Confirm Password
                </label>
                <input
                  className='rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
                  id='confirm-password'
                  type='password'
                  placeholder='Confirm Password'
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  value={confirmPassword}
                />
              </div>
              <p
                className='hidden'
                id='reset-err'
              >
                Password does not match
              </p>
              <button
                type='submit'
                onClick={handleSubmit}
                className='bg-[#234270] text-white w-full font-semibold rounded py-2 mt-5 hover:bg-[#0d304c] transition duration-300'
              >
                {isLoading ? (
                  <Spinner className='block mx-auto' />
                ) : (
                  'Reset Password'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      {success && (
        <div
          id='success-modal'
          className={
            success
              ? 'fixed inset-0  w-full h-screen flex items-center justify-center z-50 bg-gray-800 bg-opacity-50'
              : 'hidden'
          }
        >
          <div className='container w-[464px] bg-white p-8 rounded-3xl text-center hover:shadow-lg'>
            <div className='content'>
              <div className='flex justify-center items-center'>
                {/* <img
                src='./assets/partypopper.png'
                alt=""
              /> */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-12 h-12 animate-bounce'
                >
                  <path
                    fillRule='evenodd'
                    d='M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='px-10'>
                <h1 className='text-xl font-bold my-3'>
                  Password Reset Successful
                </h1>
                <p className='text-[#777676] '>
                  Your password has been reset successfully. You can now login
                </p>
              </div>
              <Link
                to='/login'
                id='login-button'
                className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary-05 text-white px-4 py-2 shadow-sm ring-1 ring-inset ring-primary-05 mt-2 '
              >
                Proceed to Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
