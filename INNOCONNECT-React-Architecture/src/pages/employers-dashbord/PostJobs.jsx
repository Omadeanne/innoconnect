import axios from '../../axios/axios';
import { useState } from 'react';
import useAuthProvider from '../../context/useAuthProvider';
import { Link } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';
import { Alert, Snackbar } from '@mui/material';

const snackPosition = { vertical: 'bottom', horizontal: 'right' };

export default function PostJobs() {
  const [success, setSuccess] = useState(false);
  const { isLoggedIn } = useAuthProvider();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [workSetup, setWorkSetup] = useState('');
  const [type, setType] = useState('');
  const [experience, setExperience] = useState('');
  const [requirements, setRequirements] = useState('');
  const [benefits, setBenefits] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleClose = () => {
    setOpen(false);
  };
  const handlePostJob = async (e) => {
    e.preventDefault();
    if (
      !title ||
      !description ||
      !location ||
      !workSetup ||
      !type ||
      !experience ||
      !requirements ||
      !benefits ||
      !minSalary ||
      !maxSalary ||
      !endDate
    ) {
      setErrMsg('All fields are required');
      setOpen(true);
      return;
    }
    try {
      setLoading(true);
      const postJobData = {
        title,
        description,
        location,
        workSetup,
        type,
        experience,
        requirements,
        benefits,
        minSalary,
        maxSalary,
        endDate,
      };
      await axios.post('/jobs/', JSON.stringify(postJobData), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
        },
      });
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      setOpen(true);
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg(error?.response?.data?.message);
      }
    }
  };

  return (
    <div className='px-10 z-0 mt-10'>
      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={snackPosition}
        open={open}
        onClose={handleClose}
        key={snackPosition.vertical + snackPosition.horizontal}
      >
        <Alert
          onClose={handleClose}
          severity='error'
          sx={{ width: '100%' }}
        >
          {errMsg}
        </Alert>
      </Snackbar>
      <div className='w-full bg-white p-10 shadow-card'>
        <h1 className='text-4xl font-bold text-primary-05 py-4'>Post Job</h1>
        <hr className='border-slate-300' />
        <form
          action
          id='form'
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4'
        >
          <div className>
            <label
              htmlFor='title'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Title
            </label>
            <div className='mt-2'>
              <input
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                type='text'
                name='title'
                id='title'
                placeholder='Full stack developer'
                autoComplete='given-name'
                className=' block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className>
            <label
              htmlFor='Job-type'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Job Type
            </label>
            <div className='mt-2 relative'>
              <select
                onChange={(event) => setType(event.target.value)}
                value={type}
                aria-label='job-type'
                className='appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                name='Job-type'
                id='Job-type'
              >
                <option value>Select a type</option>
                <option value='Full-time'>Full-time</option>
                <option value='Part-time'>Part-time</option>
                <option value='Contract'>Contract</option>
                <option value='Internship'>Internship</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <i className='text-xs fa-solid fa-chevron-down' />
              </div>
            </div>
          </div>
          <div className>
            <label
              htmlFor='onsite'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              One-site/Remote
            </label>
            <div className='mt-2 relative'>
              <select
                onChange={(event) => setWorkSetup(event.target.value)}
                value={workSetup}
                aria-label='onsite/remote'
                className='appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                name='onsite'
                id='onsite'
              >
                <option value>Select one</option>
                <option value='One-site'>On-site</option>
                <option value='Remote'>Remote</option>
                <option value='Hybrid'>Hybrid</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <i className='text-xs fa-solid fa-chevron-down' />
              </div>
            </div>
          </div>
          <div className>
            <label
              htmlFor='Job-category'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Job category
            </label>
            <div className='mt-2 relative'>
              <select
                aria-label='Job-category'
                className='appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                name='Job-category'
                id='Job-category'
              >
                <option
                  value
                  disabled
                  selected
                >
                  Select an option
                </option>
                <option value='Artificial Intelligence'>
                  Artificial Intelligence
                </option>
                <option value='Machine Learning'>Machine Learning</option>
                <option value='Blockchain'>Blockchain</option>
                <option value='Software Engineering'>
                  Software Engineering
                </option>
                <option value='Cybersecurity'>Cybersecurity</option>
                <option value='Product Mgt'>Product Mgt</option>
                <option value='Product Design'>Product Design</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <i className='text-xs fa-solid fa-chevron-down' />
              </div>
            </div>
          </div>
          <div className>
            <label
              htmlFor='experience'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Experience level
            </label>
            <div className='mt-2 relative'>
              <select
                onChange={(event) => setExperience(event.target.value)}
                value={experience}
                aria-label='experience'
                className='appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                name='experience'
                id='experience'
              >
                <option
                  disabled
                  selected
                >
                  Select an option
                </option>
                <option value='Intern'>Intern</option>
                <option value='entry'>Entry</option>
                <option value='Mid-level'>Mid-level</option>
                <option value='Senior'>Senior</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <i className='text-xs fa-solid fa-chevron-down' />
              </div>
            </div>
          </div>
          <div className>
            <label
              htmlFor='location'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Location
            </label>
            <div className='mt-2'>
              <input
                onChange={(event) => setLocation(event.target.value)}
                value={location}
                type='text'
                name='location'
                id='location'
                placeholder='New York'
                autoComplete='given-name'
                className=' block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className>
            <label
              htmlFor='endDate'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Expiry date
            </label>
            <div className='mt-2'>
              <input
                onChange={(event) => setEndDate(event.target.value)}
                value={endDate}
                type='datetime-local'
                name='endDate'
                id='endDate'
                className=' block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className>
            <label
              htmlFor='min-salary'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Min salary
            </label>
            <div className='mt-2'>
              <input
                onChange={(event) => setMinSalary(event.target.value)}
                value={minSalary}
                type='text'
                name='min-salary'
                id='min-salary'
                placeholder='Min salary'
                className=' block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className>
            <label
              htmlFor='max-salary'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Max salary
            </label>
            <div className='mt-2'>
              <input
                onChange={(event) => setMaxSalary(event.target.value)}
                value={maxSalary}
                type='text'
                name='max-salary'
                id='max-salary'
                placeholder='Max salary'
                className=' block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='col-span-full'>
            <label
              htmlFor='requirements'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Requirements
            </label>
            <div className='mt-2'>
              <textarea
                onChange={(event) => setRequirements(event.target.value)}
                value={requirements}
                placeholder='requirements'
                name='requirements'
                id='requirements'
                className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                defaultValue={''}
              />
            </div>
          </div>
          <div className='col-span-full'>
            <label
              htmlFor='responsibilty'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Responsibilty
            </label>
            <div className='mt-2'>
              <textarea
                placeholder='responsibilty'
                name='responsibilty'
                id='responsibilty'
                className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                defaultValue={''}
              />
            </div>
          </div>
          <div className='col-span-full'>
            <label
              htmlFor='about'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              About job
            </label>
            <div className='mt-2'>
              <textarea
                onChange={(event) => setDescription(event.target.value)}
                value={description}
                placeholder='about'
                name='about'
                id='about'
                className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                defaultValue={''}
              />
            </div>
          </div>
          <div className='col-span-full'>
            <label
              htmlFor='benefits'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Benefits
            </label>
            <div className='mt-2'>
              <textarea
                onChange={(event) => setBenefits(event.target.value)}
                value={benefits}
                placeholder='benefits'
                name='benefits'
                id='benefits'
                className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                defaultValue=' '
              />
            </div>
          </div>
          <div className>
            <button
              onClick={handlePostJob}
              type='submit'
              className='bg-primary-07 w-full text-lg rounded-md border py-3 px-4 text-white shadow-sm hover:bg-blue-600 font-medium'
            >
              {loading ? <Spinner className='block mx-auto' /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
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
                Job Posted Successfully
              </h1>
              <p className='text-[#777676] '>Your Job has been created.</p>
            </div>
            <Link
              to='/employers-dashboard/job-posted'
              className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary-05 text-white px-4 py-2 shadow-sm ring-1 ring-inset ring-primary-05 mt-2 '
            >
              View Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
