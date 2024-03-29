import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from '../../axios/axios';
import { Spinner } from '@material-tailwind/react';

const EmployerRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const errRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone || !email || !password || !confirmPassword) {
      setErrMsg('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setErrMsg('Passwords do not match');
      return;
    }

    const data = {
      name,
      phone,
      email,
      password,
    };
    setLoading(true);

    try {
      const response = await axios.post(
        '/auth/employer/register',
        JSON.stringify(data),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(response.data);
      setLoading(false);
      setSuccess(true);
      navigate('/VerifyEmail');
      setErrMsg('');
    } catch (error) {
      setLoading(false);
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg(error?.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    setErrMsg('');
  }, [name, phone, email, password, confirmPassword]);
  return (
    <>
      <form
        action
        className='bg-[#F6F9FA] px-10 pb-10 pt-4 max-w-3xl mx-auto rounded-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 tabContent'
        id='tab2'
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
        <div className>
          <label
            className='block text-gray-700 font-bold my-2 text-sm'
            htmlFor='company-name'
          >
            Company Name
          </label>
          <input
            className='rounded border border-primary-03 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
            id='company-name'
            type='text'
            placeholder='Tesla'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className>
          <label
            className='block text-gray-700 font-bold my-2 text-sm'
            htmlFor='company-number'
          >
            Phone number
          </label>
          <input
            className='rounded border border-primary-03 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
            id='company-number'
            type='text'
            placeholder='xxx-xxx-xxx'
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
          />
        </div>
        <div className='col-span-full'>
          <label
            className='block text-gray-700 font-bold my-2 text-sm'
            htmlFor='company-email'
          >
            Email
          </label>
          <input
            className='rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
            id='company-email'
            type='email'
            placeholder='johndoe@gmail.com'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <p
            className='hidden '
            id='error-email'
          >
            Email has already been taken
          </p>
        </div>

        <div className>
          <label
            className='block text-gray-700 font-bold my-2 text-sm'
            htmlFor='company-password'
          >
            Password
          </label>
          <input
            className='rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
            id='company-password'
            type='password'
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <div className>
          <label
            className='block text-gray-700 font-bold my-2 text-sm'
            htmlFor='company-confirm-password'
          >
            Confirm Password
          </label>
          <input
            className='rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
            id='company-confirm-password'
            type='password'
            placeholder='Confirm Password'
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <p
            className='hidden   '
            id='error'
          >
            Password does not match
          </p>
        </div>
        <label
          htmlFor='company-accept'
          className='col-span-full'
        >
          <input
            type='checkbox'
            name='remember'
            id='company-accept'
            className='mr-2'
          />
          you accept our Terms and Conditions and Privacy Policy
        </label>
        <div className='flex'>
          <button
            type='submit'
            className='bg-[#234270] text-white font-semibold w-full rounded py-2 hover:bg-[#0d304c] transition duration-300 active:bg-[#0d304c]'
            onClick={handleSubmit}
          >
            {loading ? <Spinner className='block mx-auto' /> : 'Register'}
          </button>
        </div>
        <p className='text-base my-auto'>
          Already have an account?{' '}
          <span className='text-[#234270] font-medium'>
            <Link to='/login'>Login</Link>
          </span>
        </p>
      </form>
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
                Account successfully created
              </h1>
              <p className='text-[#777676] '>
                We are glad, that you are here with us ? We have sent you a
                verification link to the email address{' '}
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
    </>
  );
};

export default EmployerRegister;
