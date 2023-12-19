import { Link, useParams } from 'react-router-dom';
import useAuthProvider from '../../context/useAuthProvider';
import axios from '../../axios/axios';
import { useEffect, useState } from 'react';
import { Spinner } from '@material-tailwind/react';
import { Alert, Snackbar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const snackPosition = { vertical: 'bottom', horizontal: 'right' };

const EditJob = () => {
  const { isLoggedIn } = useAuthProvider();
  const { id } = useParams();

  const [job, setJob] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const formatDate = (date) => {
    const d = new Date(date);
    const formattedDate = d.toISOString().split('T')[0];
    return formattedDate;
  };

  useEffect(() => {
    const getJob = async () => {
      try {
        const response = await axios.get(`/jobs/${id}`, {
          headers: {
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        });
        setIsLoading(false);
        setJob({...response.data, endDate: formatDate(response.data.endDate)});
      } catch (error) {
        setIsLoading(false);
        setOpen(true);
        if (!error?.response) {
          setErrMsg('No Server Response');
        } else {
          setErrMsg(error?.response?.data?.message);
        }
        console.error(error?.response?.message);
      }
    };
    getJob();
  }, [id, isLoggedIn]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      ...job,
      id: undefined,
      createdAt: undefined,
      updatedAt: undefined,
      employerId: undefined,
      applications: undefined,
      employer: undefined,
    };

    try {
      await axios.patch(`/jobs/${id}`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
        },
      });

      setIsLoading(false);
      setSuccess(true);
    } catch (error) {
      setOpen(true);
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg(error?.response?.data?.message);
      }
      setIsLoading(false);
      console.error(error?.response?.message);
    }
  };

  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-[calc(100vh-100px)]'>
        <Spinner className='block mx-auto' />
      </div>
    );
  }
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
        <h1 className='text-4xl font-bold text-primary-05 py-4'>Edit Job</h1>
        <hr className='border-slate-300' />
        <form
          id='form'
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4'
        >
          <div>
            <label
              htmlFor='title'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Title
            </label>
            <div className='mt-2'>
              <input
                onChange={handleChange}
                value={job?.title}
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
          <div>
            <label
              htmlFor='Job-type'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Job Type
            </label>
            <div className='mt-2 relative'>
              <select
                onChange={handleChange}
                value={job?.type}
                aria-label='job-type'
                className='appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                name='type'
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
          <div>
            <label
              htmlFor='workSetup'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              One-site/Remote
            </label>
            <div className='mt-2 relative'>
              <select
                onChange={handleChange}
                value={job?.workSetup}
                aria-label='workSetup'
                className='appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                name='workSetup'
                id='workSetup'
              >
                <option
                  value
                  disabled
                >
                  Select one
                </option>
                <option value='One-site'>On-site</option>
                <option value='Remote'>Remote</option>
                <option value='Hybrid'>Hybrid</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <i className='text-xs fa-solid fa-chevron-down' />
              </div>
            </div>
          </div>
          <div>
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
          <div>
            <label
              htmlFor='experience'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Experience level
            </label>
            <div className='mt-2 relative'>
              <select
                onChange={handleChange}
                value={job?.experience}
                aria-label='experience'
                className='appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                name='experience'
                id='experience'
              >
                <option
                  value
                  disabled
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
          <div>
            <label
              htmlFor='location'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Location
            </label>
            <div className='mt-2'>
              <input
                onChange={handleChange}
                value={job?.location}
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
          <div>
            <label
              htmlFor='endDate'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Expiry date
            </label>
            <div className='mt-2'>
              <input
                onChange={handleChange}
                value={job?.endDate}
                type='date'
                name='endDate'
                id='endDate'
                placeholder={job?.endDate}
                className=' block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                            focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='minSalary'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Min salary
            </label>
            <div className='mt-2'>
              <input
                onChange={handleChange}
                value={job?.minSalary}
                type='text'
                name='minSalary'
                id='minSalary'
                placeholder='Min salary'
                className=' block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='maxSalary'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Max salary
            </label>
            <div className='mt-2'>
              <input
                onChange={handleChange}
                value={job?.maxSalary}
                type='text'
                name='maxSalary'
                id='maxSalary'
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
                onChange={handleChange}
                value={job?.requirements}
                placeholder='requirements'
                name='requirements'
                id='requirements'
                className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
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
                onChange={handleChange}
                value={job?.description}
                placeholder='description'
                name='description'
                id='description'
                className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
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
                onChange={handleChange}
                value={job?.benefits}
                placeholder='benefits'
                name='benefits'
                id='benefits'
                className='input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              type='submit'
              className='bg-primary-07 w-full text-lg rounded-md border py-3 px-4 text-white shadow-sm hover:bg-blue-600 font-medium'
            >
              {isLoading ? <Spinner className='mx-auto block' /> : 'Update'}
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
              <VerifiedIcon />
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
};

export default EditJob;
