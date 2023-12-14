import { useState } from 'react';
import Card from '../../Components/molecules/card/Card';
import { Rating } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
// import TodoWidget from './widgets/TodoWidget';

const MentorOverview = () => {
  const details = [
    {
      title: 'Mentees',
      count: 0,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-9 h-9'
        >
          <path d='M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z' />
          <path
            fillRule='evenodd'
            d='M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z'
            clipRule='evenodd'
          />
          <path d='M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z' />
        </svg>
      ),
    },
    {
      title: 'Mentees Appointments',
      count: 0,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-9 h-9'
        >
          <path
            fillRule='evenodd'
            d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      title: 'Courses',
      count: 0,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-9 h-9'
        >
          <path
            fillRule='evenodd'
            d='M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L16.44 12 11.47 4.72z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      title: 'Tasks',
      count: 0,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'
        >
          <path d='M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z' />
        </svg>
      ),
    },
  ];

  const [jobs, setJobs] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      checked: false,
    },
    {
      id: 2,
      text: 'Learn Redux',
      checked: false,
    },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, checked: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const checkAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, checked: true })));
  };

  return (
    <div className='px-6 mb-4 z-0'>
      <Card details={details} />
      <div className='grid grid-cols-1 md:grid-cols-2 mb-4 gap-6 min-h-[500px]'>
        <div className='bg-white shadow-md h-full'>
          <div className='flex items-center justify-between p-4'>
            <div className='flex items-center'>
              <h2 className='text-primary-05 font-bold ml-2'>Mentees</h2>
            </div>
            <div>
              <Link
                to='/'
                className='inline-flex items-center justify-center text-primary-05 font-medium hover:bg-primary-05 hover:text-white rounded-md gap-x-1.5 rounded-m px-3 text-sm py-2 mr-2 transition-all'
              >
                View more
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </Link>
            </div>
          </div>
          <hr className='border-slate-300' />
          {mentors.length > 0 ? (
            <div>
              <div className='flex items-center justify-between px-5 py-4 border-b border-b-slate-300'>
                <div className='flex items-center justify-between gap-4'>
                  <div>
                    <img
                      src='https://i.pravatar.cc/300'
                      alt=''
                      className='rounded-full h-20 w-20'
                    />
                  </div>
                  <div>
                    <h1 className='text-lg font-medium my-1'>John Doe</h1>
                    <p className='text-gray-500 my-1'>Devops Engineer</p>
                    <Rating
                      value={4}
                      readonly
                    />
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2'>
                    Pending
                  </span>
                  <Link to=''>
                    <span className='inline-flex items-center rounded-full h-9 w-9 bg-blue-gray-100 px-2 py-1 text font-medium ring-1 ring-inset ring-red-600/10 mr-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                      >
                        <path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
                        <path
                          fillRule='evenodd'
                          d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              <div className='flex items-center justify-between px-5 py-4 border-b border-b-slate-300'>
                <div className='flex items-center justify-between gap-4'>
                  <div>
                    <img
                      src='https://i.pravatar.cc/300'
                      alt=''
                      className='rounded-full h-20 w-20'
                    />
                  </div>
                  <div>
                    <h1 className='text-lg font-medium my-1'>
                      Elizabeth Okwong
                    </h1>
                    <p className='text-gray-500 my-1'>Frontend Developer</p>
                    <Rating
                      value={4}
                      readonly
                    />
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='inline-flex items-center rounded-full h-9 w-9 bg-blue-gray-100 px-2 py-1 text font-medium ring-1 ring-inset ring-red-600/10 mr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                  <Link to=''>
                    <span className='inline-flex items-center rounded-full h-9 w-9 bg-blue-gray-100 px-2 py-1 text font-medium ring-1 ring-inset ring-red-600/10 mr-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                      >
                        <path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
                        <path
                          fillRule='evenodd'
                          d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              <div className='flex items-center justify-between px-5 py-4 border-b border-b-slate-300'>
                <div className='flex items-center justify-between gap-4'>
                  <div>
                    <img
                      src='https://i.pravatar.cc/300'
                      alt=''
                      className='rounded-full h-20 w-20'
                    />
                  </div>
                  <div>
                    <h1 className='text-lg font-medium my-1'>
                      Patience Bassey
                    </h1>
                    <p className='text-gray-500 my-1'>Product Manager</p>
                    <Rating
                      value={4}
                      readonly
                    />
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2'>
                    Pending
                  </span>
                  <Link to=''>
                    <span className='inline-flex items-center rounded-full h-9 w-9 bg-blue-gray-100 px-2 py-1 text font-medium ring-1 ring-inset ring-red-600/10 mr-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                      >
                        <path d='M12 15a3 3 0 100-6 3 3 0 000 6z' />
                        <path
                          fillRule='evenodd'
                          d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className='flex justify-center items-center h-full'>
              <div className='text-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-9 h-9 block mx-auto'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'
                  />
                </svg>

                <p className='text-primary-05 font-semibold my-2'>No Mentees</p>
                <Link
                  to='/mentors-dashboard/mentee'
                  className='inline-flex justify-center gap-x-1.5 rounded-md bg-secondary-06 px-3 text-sm py-2  text-white shadow-sm active:bg-secondary-07 hover:shadow-btn my-2'
                >
                  Discover your mentees
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className='bg-white shadow-md h-full'>
          <div className='flex items-center justify-between p-4'>
            <div className='flex items-center'>
              <h2 className='text-primary-05 font-bold ml-2'>
                Mentees Appointment
              </h2>
            </div>
            <div>
              <Link
                to='/'
                className='inline-flex items-center justify-center text-primary-05 font-medium hover:bg-primary-05 hover:text-white rounded-md gap-x-1.5 rounded-m px-3 text-sm py-2 mr-2 transition-all'
              >
                View more
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </Link>
            </div>
          </div>
          <hr className='border-slate-300' />
          {jobs.length > 0 ? (
            <div>
              <div className='flex justify-between items-center px-5 py-4 border-b border-b-slate-300'>
                <div>
                  <h1 className='text-lg font-medium'>
                    Full Stack Software Engineer
                  </h1>
                  <div className='text-gray-500 my-2'>
                    <i className='fa-solid fa-location-dot text-primary-05' />
                    <span className='ml-2'>Lagos, Nigeria</span>
                  </div>
                  <div className='flex gap-x-3 my-2'>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>Posted 5 days ago</span>
                    </div>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>
                        Expiring on 15th December 2023
                      </span>
                    </div>
                  </div>
                  <button
                    type='button'
                    className='inline-flex justify-center gap-x-1.5 rounded-md bg-secondary-06 px-3 text-sm py-2  text-white shadow-sm active:bg-secondary-07 hover:shadow-btn my-2'
                  >
                    View Details
                  </button>
                </div>
                <div className='mr-4 flex flex-col md:flex-row gap-2 '>
                  <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>
                    Pending
                  </span>
                </div>
              </div>
              <hr className='border-slate-300' />
              <div className='flex justify-between items-center p-4'>
                <div>
                  <h1 className='text-lg font-medium'>
                    Full Stack Software Engineer
                  </h1>
                  <div className='text-gray-500 my-2'>
                    <i className='fa-solid fa-location-dot text-primary-05' />
                    <span className='ml-2'>Lagos, Nigeria</span>
                  </div>
                  <div className='flex gap-x-3 my-2'>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>Posted 5 days ago</span>
                    </div>
                    <div className='text-gray-500'>
                      <i className='fa-regular fa-calendar text-primary-05' />
                      <span className='ml-2'>
                        Expiring on 15th December 2023
                      </span>
                    </div>
                  </div>
                  <button
                    type='button'
                    className='inline-flex justify-center gap-x-1.5 rounded-md bg-secondary-06 px-3 text-sm py-2  text-white shadow-sm active:bg-secondary-07 hover:shadow-btn my-2'
                  >
                    View Details
                  </button>
                </div>
                <div className='mr-4 flex flex-col md:flex-row gap-2 '>
                  <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>
                    Declined
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className='flex justify-center items-center h-full'>
              <div className='text-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-9 h-9 mx-auto inline-block'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
                    clipRule='evenodd'
                  />
                </svg>

                <p className='text-primary-05 font-semibold my-2'>
                  No Appointments
                </p>
                {/* <p className='text-gray-500'>Find your dream job</p> */}
                <Link
                  to='/mentors-dashboard/appointments'
                  className='inline-flex justify-center gap-x-1.5 rounded-md bg-secondary-06 px-3 text-sm py-2  text-white shadow-sm active:bg-secondary-07 hover:shadow-btn my-2'
                >
                  View Appointments
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-6 my-4 min-h-[500px]'>
        <div className='bg-white shadow-md h-full col-span-2'>
          <div className='flex items-center justify-between p-4'>
            <div className='flex items-center'>
              <h2 className='text-primary-05 font-bold ml-2'>Courses</h2>
            </div>
            <div>
              <Link
                to='/'
                className='inline-flex items-center justify-center text-primary-05 font-medium hover:bg-primary-05 hover:text-white rounded-md gap-x-1.5 rounded-m px-3 text-sm py-2 mr-2 transition-all'
              >
                View more
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </Link>
            </div>
          </div>
          <hr className='border-slate-300' />
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center  p-10'>
              <div className='text-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-9 h-9 block mx-auto'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                  />
                </svg>

                <p className='text-primary-05 font-semibold my-2'>No Courses</p>
                <p className='text-gray-500'>You have not added any courses</p>
                <Link
                  to='/mentors-dashboard/courses'
                  className='inline-flex justify-center gap-x-1.5 rounded-md bg-secondary-06 px-3 text-sm py-2  text-white shadow-sm active:bg-secondary-07 hover:shadow-btn my-2'
                >
                  Discover courses
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white shadow-md h-full'>
          <div className='flex items-center justify-between p-4'>
            <div className='flex items-center'>
              <h2 className='text-primary-05 font-bold ml-2'>Todo</h2>
            </div>
            <div className='flex items-center'>
              <button
                type='button'
                onClick={checkAll}
                className='inline-flex items-center justify-center text-primary-05 font-medium hover:bg-primary-05 hover:text-white rounded-md gap-x-1.5 rounded-m px-3 text-sm py-2 mr-2 transition-all'
              >
                Check all
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 ml-2'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
          <hr className='border-slate-300' />
          <div className='mt-4 flex justify-center flex-col items-center'>
            {todos.length <= 0 ? (
              <div className='my-auto'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-9 h-9 block mx-auto'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                  />
                </svg>

                <h1 className='text-primary-05 font-bold ml-2 text-center'>
                  Nothing here
                </h1>
              </div>
            ) : (
              todos.map((todo, index) => {
                return (
                  <ul className='w-full'>
                    {/* <TodoWidget
                      key={index}
                      todo={todo}
                      toggleCheck={toggleCheck}
                      deleteTodo={deleteTodo}
                    /> */}
                  </ul>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorOverview;