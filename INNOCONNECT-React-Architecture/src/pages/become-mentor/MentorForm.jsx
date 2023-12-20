import { useEffect, useRef, useState } from 'react';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Submit from './Submit';
import axios from '../../axios/axios';
import { Link } from 'react-router-dom';

const MentorForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    why: '',
    achievement: '',
    cv: '',
    profileImg: '',
    jobTitle: '',
    linkedin: '',
    github: '',
    portfolio: '',
    twitter: '',
  });

  useEffect(() => {
    setErrMsg('');
  }, [
    formData.firstName,
    formData.lastName,
    formData.email,
    formData.password,
  ]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      setErrMsg('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        '/auth/mentor/register',
        JSON.stringify(formData),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(response.data);
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setLoading(false);
        setErrMsg('No Server Response');
      } else {
        setErrMsg(error?.response?.data?.message);
      }
      console.error(error);
    }
  };
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const back = () => {
    setCurrentStep(currentStep - 1);
  };
  const getStepComponent = (currentStep) => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            data={formData}
            handleChange={handleChange}
            next={next}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        );
      case 2:
        return (
          <Step2
            data={formData}
            handleChange={handleChange}
            next={next}
            back={back}
          />
        );
      case 3:
        return (
          <Step3
            data={formData}
            handleChange={handleChange}
            next={next}
            back={back}
          />
        );
      default:
        return (
          <Submit
            data={formData}
            handleSubmit={handleSubmit}
            Loading={loading}
            back={back}
          />
        );
    }
  };

  return (
    <div>
      <Nav />
      <main className='py-5'>
        <section className='container px-4 mx-auto flex flex-col items-center'>
          <h1 className='my-6 text-3xl md:text-5xl font-bold'>
            Become a Mentor
          </h1>
          <div className='w-full max-w-lg px-10 md:px-0'>
            <ol className='relative flex items-center w-full'>
              <li className="step flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:border-primary-06 after:border after:inline-block">
                <span className='relative flex items-center justify-center w-8 h-8 bg-white rounded-full border border-secondary-05  shrink-0'>
                  {currentStep === 1 ? (
                    <div className='current border border-secondary-05 h-5 w-5 rounded-full bg-secondary-07 transition-all'></div>
                  ) : (
                    <div className='absolute items-center justify-center w-8 h-8 bg-success-06 rounded-full'>
                      <i className='block w-3.5 h-3.5 translate-x-1/2 translate-y-1/2 text-secondary-01 fa-solid fa-check transition-all' />
                    </div>
                  )}
                </span>
                <p className='absolute top-10 -left-8 font-semibold'>
                  Personal details
                </p>
              </li>
              <li className="relative step flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:border-primary-06  after:border after:inline-block">
                <span className='flex items-center justify-center w-8 h-8 bg-white rounded-full border border-secondary-05  shrink-0'>
                  {currentStep === 2 ? (
                    <div
                      className={
                        currentStep === 2
                          ? 'transition-all border border-secondary-05 h-5 w-5 rounded-full bg-secondary-07'
                          : 'hidden'
                      }
                    ></div>
                  ) : (
                    <div
                      className={
                        currentStep >= 2
                          ? 'absolute items-center justify-center w-8 h-8 bg-success-06 rounded-full transition-all'
                          : 'hidden'
                      }
                    >
                      <i className='block w-3.5 h-3.5 translate-x-1/2 translate-y-1/2 text-secondary-01 fa-solid fa-check' />
                    </div>
                  )}
                </span>
                <p className='absolute top-10 -left-1 font-semibold'>Profile</p>
              </li>
              <li className='step relative flex items-center'>
                <span className='flex items-center justify-center w-8 h-8 bg-white rounded-full border border-secondary-05  shrink-0'>
                  {currentStep === 3 ? (
                    <div
                      className={
                        currentStep === 3
                          ? 'transition-all border border-secondary-05 h-5 w-5 rounded-full bg-secondary-07'
                          : 'hidden'
                      }
                    ></div>
                  ) : (
                    <div
                      className={
                        currentStep >= 3
                          ? 'absolute items-center justify-center w-8 h-8 bg-success-06 rounded-full transition-all'
                          : 'hidden'
                      }
                    >
                      <i className='block w-3.5 h-3.5 translate-x-1/2 translate-y-1/2 text-secondary-01 fa-solid fa-check' />
                    </div>
                  )}
                </span>
                <p className='absolute top-10 -left-5 font-semibold'>
                  Experience
                </p>
              </li>
            </ol>
          </div>
          <form
            id='form'
            action
            className='w-full max-w-xl mb-24'
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
            {getStepComponent(currentStep)}
          </form>
        </section>
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
                  Your account creation process has been completed and
                  successful.
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
      </main>
      <Footer />
    </div>
  );
};
export default MentorForm;
