import React, { useState, useRef } from 'react';
import axios from '../../axios/axios';
import useAuthProvider from '../../context/useAuthProvider';
import { Spinner } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export default function Todos() {
  const [success, setSuccess] = useState(false);
  const { isLoggedIn } = useAuthProvider();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const errRef = useRef();

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const postTodo = async (e) => {
    e.preventDefault()
    if (!title || !description) {
      setErrMsg('All fields are required');
      return;
    }
    try {
      setLoading(true);
      const postTodoData = {
        title,
        description
      };
      const response = await axios.post('/todos/', JSON.stringify(postTodoData),
        {
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}` },
        })
      setLoading(false);
      setSuccess(true);
      setErrMsg('')
      postTodoData('')
      console.log(response)
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.message)
      setErrMsg(error?.response?.data?.message);

    }
  }
  const closeSuccessModal = () => {
    setSuccess(false);
  };

  return (
    <div className='md:px-10 z-0 mt-10 h-full'>
      <div className='w-full bg-white p-5 md:p-10 shadow-card h-full'>
        <div className='flex items-center text-2xl md:text-4xl'>
          <h1 className='mb-4 font-bold text-primary-05'>Todos</h1>
        </div>
        <hr className='border-slate-300' />

        <h2 className='text-primary-05 font-bold my-2 text-lg'>Add a Todo Here</h2>
        <div className>
          <label
            className='block text-gray-700 font-bold my-2 text-sm'
            htmlFor='title'
          >
            Title
          </label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            className='rounded border border-primary-03 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
            id='title'
            type='text'
            placeholder='Todo title'

          />
        </div>
        <div className>
          <label
            className='block text-gray-700 font-bold my-2 text-sm'
            htmlFor='description'
          >
            Description
          </label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            className='rounded border border-primary-03 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
            id='description'
            type='text'
            placeholder='Todo description'

          />
        </div>
        <p
          ref={errRef}
          className={
            errMsg
              ? 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-3 rounded relative mb-2 col-span-full'
              : 'hidden'
          }
          aria-live='assertive'
          role='alert'
        >
          {errMsg}
        </p>
        <p className='text-center'>
          <button
            onClick={postTodo}
            type='submit'
            className='bg-[#234270] text-white font-semibold mx-auto rounded py-2 px-5 my-5 hover:bg-[#0d304c] transition duration-300'
          >
            {loading ? <Spinner className='block mx-auto' /> : 'Add Todo'}
          </button>
        </p>
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
                Todo created Successfully
              </h1>
              <p className='text-[#777676] '>
                Your Todo has been created.
              </p>
            </div>
            <Link
              to='/mentees-dashboard/todos'
              onClick={closeSuccessModal}
              className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary-05 text-white px-4 py-2 shadow-sm ring-1 ring-inset ring-primary-05 mt-2 '
            >
              Add More
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

