import React, { useState, useRef, useEffect } from 'react';
import { logo, registerpageimage } from '../../assets';
import axios from '../../axios/axios';
import { Spinner } from '@material-tailwind/react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const errRef = useRef();

  useEffect(() => {
    setErrMsg('');
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrMsg('All fields are required');
      return;
    }

    try {
      setIsLoading(true);
      const data = {
        email,
      };
      await axios.post('/auth/forgot-password', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });
      setSuccess(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg(error?.response?.data?.message);
      }
    }
  };
  return (
    <div>
      <div className='flex flex-col md:flex-row min-h-screen'>
        <a
          href='index.html'
          className='md:absolute h-20 left-4 top-4 p-4 bg-[#112034]'
        >
          <img
            className
            src={logo}
            alt='logo'
          />
        </a>
        <div className='hidden md:flex  bg-[#112034] flex-1 justify-center items-center p-10'>
          <img
            src={registerpageimage}
            alt='signup img'
            className='w-full max-w-md'
          />
        </div>
        <div className='container-content flex-1 flex justify-center items-center bg-[#fff] p-5 '>
          {!success ? (
            <div className='w-full max-w-md'>
              <h1 className='text-center font-bold text-3xl md:text-4xl mt-3 mb-4 text-[#234270]'>
                Forgot Password
              </h1>
              <form
                action
                className='bg-[#F6F9FA] p-8 rounded-2xl'
                id='forgot-form'
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
                <p className='text-lg my-4'>
                  Enter your email to recover your password
                </p>
                <div className='my-4'>
                  <label
                    className='block text-gray-700 font-bold my-2 text-sm'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    className='rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
                    id='email'
                    type='email'
                    placeholder='johndoe@gmail.com'
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                  />
                </div>
                <button
                  type='submit'
                  onClick={handleSubmit}
                  className='bg-[#234270] text-white w-full font-semibold rounded py-2 mt-5 hover:bg-[#0d304c] transition duration-300'
                >
                  {isLoading ? <Spinner className='block mx-auto' /> : 'Submit'}
                </button>
                <p className=' text-center text-[#234270] my-2'>
                  {' '}
                  <a href='./login'>Back to Login</a>
                </p>
              </form>
            </div>
          ) : (
            <div className='w-full max-w-md flex justify-center items-center transition-all'>
              <h1 className='text-center font-bold text-3xl md:text-4xl mt-3 mb-4 text-[#234270]'>
                Password reset link sent to your email
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
