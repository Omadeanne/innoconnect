import { useState } from 'react';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Submit from './Submit';

const MentorForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    company: '',
    why: '',
    achievement: '',
    resume: '',
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
                    <div className={currentStep >= 2 ? 'absolute items-center justify-center w-8 h-8 bg-success-06 rounded-full transition-all' : 'hidden'}>
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
                    <div className={currentStep >= 3 ? 'absolute items-center justify-center w-8 h-8 bg-success-06 rounded-full transition-all' : 'hidden'}>
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
            {getStepComponent(currentStep)}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default MentorForm;
