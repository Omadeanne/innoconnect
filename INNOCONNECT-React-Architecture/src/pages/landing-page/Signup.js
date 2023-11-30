import { useState } from 'react';
import MenteeRegister from '../register/MenteeRegister';
import EmployerRegister from '../register/EmployerRegister';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import { businessman, registerpageimage, mentee } from '../../assets';

const Signup = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };


  return (
    <div>
      <div className='flex flex-col md:flex-row min-h-screen'>
        <Link
          to='/'
          className='md:absolute h-20 left-4 top-4 p-4 bg-[#112034]'
        >
          <img
            className
            src={logo}
            alt='logo'
          />
        </Link>
        <div className='hidden md:flex  bg-[#112034] flex-1 justify-center items-center p-10'>
          <img
            src={registerpageimage}
            alt='signup'
            className='w-full max-w-md'
          />
        </div>
        <div className='flex-1 flex justify-center items-center bg-[#fff]'>
          <div className='w-full'>
            <h1 className='text-center font-bold text-3xl md:text-5xl mt-3 mb-4 text-[#234270]'>
              Sign Up
            </h1>
            <div className='w-full max-w-3xl mx-auto px-10 bg-[#F6F9FA]'>
              <ul className='flex gap-6 flex-row justify-center text-[rgb(29,53,87)]'>
                <li className='group w-1/2'>
                  <button
                    type='button'
                    onClick={() => handleTabClick(1)}
                    className='tabLinks text-left inline-block text-lg font-bold w-full border-b'
                  >
                    <img
                      src={mentee}
                      className='w-10 h-10 inline-block my-4'
                      alt=''
                    />
                    <span className='ml-2'>Mentee</span>
                    <div className={`${activeTab === 1 ? 'bg-black h-[2px] group-hover:scale-x-100 transition-all duration-100' : 'bg-black scale-x-0 h-[2px] group-hover:scale-x-100 transition-all duration-100'}`}></div>
                  </button>
                </li>
                <li className='group w-1/2'>
                  <button
                    type='button'
                    onClick={() => handleTabClick(2)}
                    className='tabLinks text-left inline-block text-lg font-semibold w-full border-b'
                  >
                    <img
                      src={businessman}
                      className='w-10 h-10 inline-block my-4'
                      alt=''
                    />
                    <span className='ml-2'>Employer</span>
                    <div className={`${activeTab === 2 ? 'bg-black h-[2px] group-hover:scale-x-100 transition-all duration-100' : 'bg-black scale-x-0 h-[2px] group-hover:scale-x-100 transition-all duration-100'}`}></div>
                  </button>
                </li>
              </ul>
            </div>
            {activeTab === 1 && <MenteeRegister />}
            {activeTab === 2 && <EmployerRegister />}
            <span className='text-[#234270] p-10 font-medium'>Want to become a Mentor? 
                  <Link to='/mentor-form' class='hover:font-bold hover:text-[#192433] mt-3'> Click here</Link>
                </span>
            <p className='text-center my-2 text-[#234270] text-base font-bold col-span-full'>
              Or
            </p>
            <div className='w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4  px-8'>
              <button
                type='button'
                className='border border-[#234270] text-[#234270] w-full rounded p-2 my-2  transition duration-300 flex justify-center items-center gap-x-4'
              >
                <img
                  src='assets/GoogleLogo.png'
                  className
                  alt=''
                />
                <span>Sign up with Google</span>
              </button>
              <button
                type='button'
                className='border border-[#234270] text-[#234270] w-full rounded p-2 my-2 transition duration-300 flex justify-center items-center gap-x-4'
              >
                {/* <img
                  src='assets/apple.svg'
                  alt=""
                /> */}
                <span>signup with Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
