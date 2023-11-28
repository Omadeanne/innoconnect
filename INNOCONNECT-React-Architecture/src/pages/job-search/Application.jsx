import { useParams } from 'react-router-dom';
import jobs from './jobs';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';

const Application = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === +id);

  return (
    <>
      <Nav />
      <main>
        <>
          <hr />
          <section className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4'>
            <div className='col-span-1 pt-8'>
              <div className='text-center'>
                <h1 className='font-bold text-2xl mb-2'>APPLICATION FORM</h1>
                <p className='mb-4'>
                  Provide the required information and we'll get back to you if
                  you're qualified
                </p>
              </div>
              <div className='lg:hidden mx-auto w-full max-w-xl'>
                <hr />
                <div className='flex items-center justify-between'>
                  <div className='my-4'>
                    <h2 className='text-lg md:text-xl font-bold text-primary-06'>
                      Fullstack Developer
                    </h2>
                    <p className='mt-2 text-sm'>
                      <i className='fa-solid fa-building mr-1' /> Fliqpay
                      Technologies
                    </p>
                    <p className='mt-2 text-sm'>
                      <i className='fa-solid fa-location-dot mr-1' /> Abuja,
                      Nigeria
                    </p>
                    <p className='mt-2 text-sm'>
                      <i className='fa-solid fa-briefcase mr-1' /> Full-time
                    </p>
                  </div>
                  <img
                    src='./assets/vector.png'
                    className='w-20'
                    alt=''
                  />
                </div>
                <hr />
              </div>
              <form
                id='form'
                action=''
                className='mx-auto w-full max-w-xl mb-24'
              >
                <div className='grid grid-cols-1 gap-y-4 my-5'>
                  <div className=''>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      First name
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        placeholder='First Name'
                        autoComplete='given-name'
                        className=' block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className=''>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Last name
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        placeholder='Last Name'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className=''>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Email
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        placeholder='xxx@email.com'
                        name='email'
                        id='email'
                        autoComplete='family-name'
                        className='block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className=''>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Phone
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        placeholder='xxx-xxx-xxxx'
                        name='phone'
                        id='phone'
                        autoComplete=''
                        className='block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className='mt-4'>
                    <p className='block text-sm font-medium leading-6 text-gray-900'>
                      Upload Resume/CV*
                    </p>
                    <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-gray-200'>
                      <div className='text-center text-4xl'>
                        <i className='fa-solid fa-cloud-arrow-up text-primary-04' />
                        <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                          <label
                            htmlFor='file-upload'
                            className='relative cursor-pointer rounded-md  font-semibold text-primary-06 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-06 focus-within:ring-offset-2 hover:text-primary-04'
                          >
                            <span>Upload a file</span>
                            <input
                              id='file-upload'
                              name='file-upload'
                              accept='png, jpg, jpeg, pdf'
                              type='file'
                              className='sr-only'
                            />
                          </label>
                          <p className='pl-1'>or drag and drop</p>
                        </div>
                        <p className='text-xs leading-5 text-gray-600'>
                          PNG, JPG, PDF, DOCX
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type='submit'
                  href='Application.html'
                  className='text-white font-semibold w-28 border bg-secondary-06 border-secondary-06 text-center rounded-lg px-4 py-2 block active:bg-secondary-07 hover:shadow-btn mt-8'
                >
                  Submit
                </button>
              </form>
            </div>
            <div className='col-span-1 my-8 hidden lg:block'>
              <div
                className='border border-gray-300 shadow rounded-lg p-4 max-w-3xl mx-auto max-h-[50rem] overflow-y-auto scrollbar-track-slate-100 scrollbar-thumb-slate-400
          scrollbar-thin'
              >
                <div className='mb-4'>
                  <h2 className='text-xl md:text-xl font-bold text-primary-06'>
                    {job.title}
                  </h2>
                  <p className='mt-2'>
                    <i className='fa-solid fa-building mr-1' /> {job.company}
                  </p>
                  <p className='mt-2'>
                    <i className='fa-solid fa-location-dot mr-1' />{' '}
                    {job.location}
                  </p>
                  <p className='mt-2'>
                    <i className='fa-solid fa-briefcase mr-1' /> {job.type}
                  </p>
                </div>
                <hr />
                <div className='my-4'>
                  <p className='font-bold text-lg uppercase md:col-span-1'>
                    Requirements:
                  </p>
                  <div className='text-lg md:col-span-3'>
                    <ul className='list-disc list-inside'>
                      {job.requirements?.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <hr />
                <div className='my-4'>
                  <p className='font-bold text-lg uppercase md:col-span-1'>
                    Responsibilities:
                  </p>
                  <div className='text-lg md:col-span-3'>
                    <ul className='list-disc list-inside'>
                      <li>
                        Develop new features and enhancements to existing
                        applications.
                      </li>
                      <li>
                        Collaborate with cross-functional teams to define,
                        design, and ship new features.
                      </li>
                      <li>
                        Identify opportunities for process improvements and
                        automation.
                      </li>
                      <li>Write well-designed, testable, efficient code.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              id='success-modal'
              className='fixed hidden inset-0 items-center justify-center z-50 bg-gray-800 bg-opacity-50'
            >
              <div className='container w-[464px] bg-white p-8 rounded-3xl text-center hover:shadow-lg'>
                <div className='content'>
                  <div className='flex justify-center items-center'>
                    <img
                      src='./assets/partypopper.png'
                      alt=''
                    />
                  </div>
                  <div className='px-10'>
                    <h1 className='text-xl font-bold my-3'>Application sent</h1>
                    <p>You'll be contacted shortly</p>
                  </div>
                  <a
                    href='jobSearch.html'
                    className='bg-[#234270] inline-block text-white w-full font-semibold rounded p-3 mt-5 hover:bg-[#0d304c] transition duration-300'
                  >
                    continue
                  </a>
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

export default Application;
