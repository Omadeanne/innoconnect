import { Menu, Transition } from '@headlessui/react';
import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ProfileAndNotifications = () => {
  const roles = [
    { name: 'mentor', to: '/mentors-dashboard', current: true },
    { name: 'mentee', to: '/mentees-dashboard', current: false },
    { name: 'employer', to: '/employers-dashboard', current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const user = {
    role: 'mentor',
  };

  return (
    <>
      <button
        type='button'
        className='relative rounded-fullp-1 text-primary-05 hover:text-primary-07 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
      >
        <span className='absolute -inset-1.5' />
        <span className='sr-only'>View notifications</span>
        <BellIcon
          className='h-6 w-6'
          aria-hidden='true'
        />
      </button>

      {/* Profile dropdown */}
      <Menu
        as='div'
        className='relative ml-3'
      >
        {({ open }) => (
          <>
            <div>
              <Menu.Button className='relative flex p-1 rounded-full text-sm focus:outline-none items-center'>
                <span className='absolute -inset-1.5' />
                <span className='sr-only'>Open user menu</span>
                <img
                  className='h-10 w-10 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <span className='font-semibold mx-4'>Patience</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180' : ''
                  } -mr-1 my-auto h-5 w-5 text-primary-05 group-hover:text-white`}
                  aria-hidden='true'
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {roles.map((role) => {
                  if (role.name === user.role) {
                    return (
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={role.to}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='w-6 h-6 inline-block mr-2'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                              />
                            </svg>
                            Dashboard
                          </Link>
                        )}
                      </Menu.Item>
                    );
                  }
                  return null;
                })}
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to='#'
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6 inline-block mr-2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                        />
                      </svg>
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to='#'
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6 inline-block mr-2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                        />
                      </svg>
                      Sign out
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
};

export default ProfileAndNotifications;
