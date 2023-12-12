import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import jobs from './jobs';
import JobCard from './JobCard';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
const filters = [
  {
    id: 'DatePosted',
    name: 'Date Posted',
    options: [
      { value: '24', label: 'Past 24 hours', checked: false },
      { value: '7', label: 'Past 7 days', checked: false },
      { value: '30', label: 'Past 30 days', checked: false },
    ],
  },
  {
    id: 'jobType',
    name: 'Job Type',
    options: [
      { value: 'Full-time', label: 'Full-time', checked: false },
      { value: 'Part-time', label: 'Part-time', checked: false },
      { value: 'contract', label: 'Contract', checked: false },
      { value: 'internship', label: 'Internship', checked: false },
    ],
  },
  {
    id: 'remoteOrOnsite',
    name: 'Onsite/Remote',
    options: [
      { value: 'on-site', label: 'Onsite', checked: false },
      { value: 'remote', label: 'Remote', checked: false },
      { value: 'hybrid', label: 'Hybrid', checked: false },
    ],
  },
];
const JobSearch = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  return (
    <>
      <Nav />
      <Transition.Root
        show={mobileFiltersOpen}
        as={Fragment}
      >
        <Dialog
          as='div'
          className='relative z-[100] lg:hidden'
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
                <div className='flex items-center justify-between px-4'>
                  <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
                  <button
                    type='button'
                    className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon
                      className='h-6 w-6'
                      aria-hidden='true'
                    />
                  </button>
                </div>

                {/* Filters */}
                <form className='mt-4 border-t border-gray-200'>
                  <h3 className='sr-only'>Categories</h3>
                  {filters.map((section) => (
                    <Disclosure
                      as='div'
                      key={section.id}
                      className='border-t border-gray-200 px-4 py-6'
                    >
                      {({ open }) => (
                        <>
                          <h3 className='-mx-2 -my-3 flow-root'>
                            <Disclosure.Button className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
                              <span className='font-medium text-gray-900'>
                                {section.name}
                              </span>
                              <span className='ml-6 flex items-center'>
                                {open ? (
                                  <MinusIcon
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <PlusIcon
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className='pt-6'>
                            <div className='space-y-6'>
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className='flex items-center'
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type='checkbox'
                                    defaultChecked={option.checked}
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className='ml-3 min-w-0 flex-1 text-gray-500'
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <main>
        <>
          <hr />
          <section className='bg-primary-05 px-4 py-5'>
            <div className='container mx-auto'>
              <h1 className='text-4xl font-semibold text-white'>Find a Job</h1>
              <p className='text-lg text-white pt-3'>
                Find your dream job and apply
              </p>
              <form
                action=''
                id='searchForm'
                className='flex gap-x-2 items-center mt-5 over'
              >
                <div className='relative inline-block'>
                  <input
                    className='w-full md:max-w-sm rounded px-2 py-1 placeholder:text-base focus:outline-none'
                    type='text'
                    placeholder='Search jobs'
                    aria-label='Search'
                    id='search'
                  />
                  <i className='absolute right-2 top-[0.4rem] text-sm text-primary-06 fa-solid fa-magnifying-glass' />
                </div>
                <div className='relative inline-block'>
                  <input
                    className='w-full md:max-w-sm rounded px-2 py-1 placeholder:text-base focus:outline-none'
                    type='text'
                    placeholder='Location'
                    aria-label='Search'
                    id='location'
                  />
                  <i className='absolute right-2 top-[0.4rem] text-primary-06 text-sm fa-solid fa-location-dot' />
                </div>
                <button
                  type='submit'
                  className='bg-white inline-block rounded-3xl text-sm hover:text-white text-primary-06 py-1 px-4 hover:bg-[#6A95B1] transition-all'
                >
                  Search
                </button>
              </form>
            </div>
          </section>
          <section
            aria-labelledby='products-heading'
            className='pb-24 pt-6 container mx-auto'
          >
            <h2
              id='products-heading'
              className='sr-only'
            >
              Products
            </h2>

            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              {/* Filters */}
              <form className='hidden lg:block'>
                <h2 className='text-lg py-6 font-bold text-gray-900'>
                  Filters
                </h2>
                {filters.map((section) => (
                  <Disclosure
                    as='div'
                    key={section.id}
                    className='border-y  border-gray-200 py-6'
                  >
                    {({ open }) => (
                      <>
                        <h3 className='-my-3 flow-root'>
                          <Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
                            <span className='font-medium text-gray-900'>
                              {section.name}
                            </span>
                            <span className='ml-6 flex items-center'>
                              {open ? (
                                <MinusIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
                                />
                              ) : (
                                <PlusIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className='pt-6'>
                          <div className='space-y-4'>
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className='flex items-center'
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type='checkbox'
                                  defaultChecked={option.checked}
                                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                  aria-labelledby={`filter-${section.id}-${optionIdx}`}
                                 
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className='ml-3 text-sm text-gray-600'
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className='lg:col-span-3'>
                <button
                  type='button'
                  className='-m-2 ml-4 p-2 my-3 text-primary-05 hover:text-gray-500 sm:ml-6 lg:hidden flex items-center'
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <FunnelIcon
                    className='h-5 w-5 inline-block mr-2'
                    aria-hidden='true'
                  />
                  <span className='font-medium'>Filters</span>
                </button>
                <div className='border shadow rounded-lg py-3 px-6 w-full'>
                  <h2 className='text-primary-06 text-lg mb-2 font-bold'>
                    Recommended Jobs
                  </h2>
                  <hr />
                  
                    <JobCard
                      
                    />
                  
                </div>
              </div>
            </div>
          </section>
        </>
      </main>
      <Footer />
    </>
  );
};

export default JobSearch;
