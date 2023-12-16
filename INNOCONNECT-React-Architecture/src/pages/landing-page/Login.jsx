import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logo, registerpageimage } from '../../assets';
import { useEffect, useRef, useState } from 'react';
import axios from '../../axios/axios';
import { Spinner } from '@material-tailwind/react';
import useAuthProvider from '../../context/useAuthProvider';

const Login = () => {
  const location = useLocation();
  const Navigate = useNavigate();

  const { setIsLoggedIn } = useAuthProvider();
  const roles = [
    { name: 'mentor', to: '/mentors-dashboard' },
    { name: 'mentee', to: '/mentees-dashboard' },
    { name: 'employer', to: '/employers-dashboard' },
  ];

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const errRef = useRef();

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrMsg('All fields are required');
      return;
    }

    try {
      setLoading(true);
      const data = {
        email,
        password,
      };
      const response = await axios.post('/auth/login', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });

      setLoading(false);
      localStorage.setItem('isLoggedIn', JSON.stringify(response?.data));
      setIsLoggedIn(response?.data);
      setErrMsg('')
      let from =
        location.state?.from?.pathname ||
        `${roles.find((role) => role.name === response?.data?.user?.role)?.to}`;
      Navigate(from, { replace: true });
    } catch (error) {
      setLoading(false);
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg(error?.response?.data?.message);
      }
    }
  };
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <div className='md:absolute h-20 left-4 top-4 p-4 bg-[#112034]'>
        <Link to='/'>
          <img
            className
            src={logo}
            alt='logo'
          />
        </Link>
      </div>
      <div className='hidden md:flex  bg-[#112034] flex-1 justify-center items-center p-10'>
        <img
          src={registerpageimage}
          alt='signup img'
          className='w-full max-w-md'
        />
      </div>
      <div className='flex-1 flex justify-center items-center bg-[#fff] p-10'>
        <div className='container-content flex-1 flex justify-center items-center bg-[#fff] p-5 '>
          <div className='w-full max-w-md'>
            <h1 className='text-center font-bold text-3xl md:text-4xl mt-3 mb-4 text-[#234270]'>
              Login
            </h1>
            <form
              action
              className='bg-[#F6F9FA] p-8 rounded-2xl'
              id='form-login'
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
                <p
                  className='hidden'
                  id='login-error'
                >
                  Email or password does not match
                </p>
              </div>
              <button
                type='submit'
                className='bg-[#234270] text-white w-full font-semibold rounded py-2 mt-5 hover:bg-[#0d304c] transition duration-300'
                onClick={handleSubmit}
              >
                {loading ? <Spinner className='block mx-auto' /> : 'Login'}
              </button>
              <div className='text-right text-sm text-[#234270] mt-2'>
                <a href='/forgot-password'>Forgot Password?</a>
              </div>
              {/* <p className='text-center my-2 text-[#234270] text-base'>Or</p>
              <button
                type='submit'
                className='border border-[#234270] text-[#234270] w-full rounded p-2 my-2  transition duration-300 flex justify-center items-center gap-x-4'
              >
                <i className='fa-brands fa-google text-sm'></i>
                <a href="https://imgbb.com/"><img src="https://i.ibb.co/3F2NfCH/Google-Logo.png" 
               alt="Google-Logo" border="0" /></a>
                <span>Sign up with Google</span>
              </button>
              <button
                type='submit'
                className='border border-[#234270] text-[#234270] w-full rounded p-2  transition duration-300 mt-1 flex justify-center items-center gap-x-4'
              >
                <i className='fa-brands fa-apple text-sm'></i>

                <span>signup with Apple</span>
              </button> */}
              <p className='text-base text-center mt-2 text-primary-04 cursor-pointer'>
                Don{"'"}t have an account?
                <span className='text-[#234270] font-medium'>
                  <Link to='/register'>
                    <span className='hover:font-bold hover:text-[#192433] text-primary-06 mt-3'>
                      Register
                    </span>
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
