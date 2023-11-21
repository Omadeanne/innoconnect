import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { logo } from '../../../assets';


const navigation = [
  { name: 'Jobs', to: '/job-search', current: true },
  { name: 'Courses', to: '/courses', current: false },
  { name: 'Pricing', to: '/pricing', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  return (
    <Disclosure
      as='nav'
      className='sticky top-0 z-50 bg-white'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-[1440px] px-2 py-3 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className='block h-6 w-6'
                      aria-hidden='true'
                    />
                  ) : (
                    <Bars3Icon
                      className='block h-6 w-6'
                      aria-hidden='true'
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link to='/'>
                  <img
                    className='h-6 w-auto'
                    src={logo}
                    alt='Your Company'
                  />
                  </Link>
                </div>
                <div className='hidden md:block sm:mx-auto'>
                  <div className='flex space-x-4'>
                    <Menu
                      as='div'
                      className='relative inline-block text-left'
                    >
                      <div>
                        <Menu.Button className='group inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2  text-primary-05 hover:bg-primary-05 hover:text-white font-medium'>
                          Mentorship
                          <ChevronDownIcon
                            className='-mr-1 my-auto h-5 w-5 text-primary-05 group-hover:text-white'
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
                        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <div className='py-1'>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='#'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2'
                                  )}
                                >
                                  Find a Mentor
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='#'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2'
                                  )}
                                >
                                  Become a mentor
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className='text-primary-05 hover:bg-primary-05 hover:text-white rounded-md px-3 py-2 font-medium'
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Menu
                      as='div'
                      className='relative inline-block text-left'
                    >
                      <div>
                        <Menu.Button className='group inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2  text-primary-05 hover:bg-primary-05 hover:text-white font-medium'>
                          More
                          <ChevronDownIcon
                            className='-mr-1 my-auto h-5 w-5 text-primary-05 group-hover:text-white'
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
                        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <div className='py-1'>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='#'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2'
                                  )}
                                >
                                  Blog
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='#'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2'
                                  )}
                                >
                                  Community
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='#'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2'
                                  )}
                                >
                                  About us
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
              <div className='lg:flex lg:px-0 hidden gap-4 absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <Link
                to='/login'
                className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-secondary-06 px-4 py-2 font-semibold text-white shadow-sm active:bg-secondary-07 hover:shadow-btn'
              >
                Register
              </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
