import { Link } from 'react-router-dom';
import { logo, registerpageimage } from '../../assets';

const Login = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <div className='md:absolute h-20 left-4 top-4 p-4 bg-[#112034]'>
        <img
          className
          src={logo}
          alt='logo'
        />
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
              >
                Login
              </button>
              <div className='text-right text-sm text-[#234270] mt-2'>
                <a href='./forgot.html'>Forgot Password?</a>
              </div>
              <p className='text-center my-2 text-[#234270] text-base'>Or</p>
              <button
                type='submit'
                className='border border-[#234270] text-[#234270] w-full rounded p-2 my-2  transition duration-300 flex justify-center items-center gap-x-4'
              >
                {/* <img
                  src='images/Google.png'
                  className
                  alt='google sign up'
                /> */}
                <span>Sign up with Google</span>
              </button>
              <button
                type='submit'
                className='border border-[#234270] text-[#234270] w-full rounded p-2  transition duration-300 mt-1 flex justify-center items-center gap-x-4'
              >
                {/* <img
                  src='images/apple.svg'
                  alt='apple signup'
                /> */}
                <span>signup with Apple</span>
              </button>
              <p className='text-base text-center mt-2'>
                Don't have an account?{' '}
                <span className='text-[#234270] font-medium'>
                  <Link to='/'>Register</Link>
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
