import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import { hero } from '../../assets';

const BecomeMentor = () => {
  return (
    <div>
      <Nav />
      <main className='mb-10'>
        <section>
          <div
            className='overflow-hidden bg-cover bg-no-repeat text-center flex flex-col items-center justify-center h-screen md:h-screen md:w-[100%]'
            style={{ backgroundImage: `url(${hero})` }}
          >
            <div className>
              <div className='mb-14'>
                <h1 className='text-white text-[64px] font-bold'>
                  Become A Mentor
                </h1>
                <p className='text-white text-[22px]'>
                  Guide our mentees bring their dreams to fruition
                </p>
              </div>
              <div className='flex gap-4 justify-center'>
                <Link
                  to='/mentor-form'
                  className='bg-primary-06 px-8 py-1 inline-flex items-center text-white  rounded-sm shadow'
                >
                  Become A Mentor
                </Link>
                {/* <a href="mentorForm.html" className="bg-white w-[180px] font-bold text-[#37627E] px-1 py-2 rounded">
              Become A Mentor
            </a> */}
                <a
                  href='mentors.html'
                  className='bg-transparent border-solid text-white font-bold border-2 border-white w-[180px] px-1 py-2 rounded'
                >
                  FAQs
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className=' w-[90%] m-auto mb-24'>
          <div className='text-center py-14'>
            <h1 className='text-[64px] text-[#222C2C] font-semibold'>
              How It works
            </h1>
            <p className='text-[32px] text-[#37627E]'>
              You can follow these steps to become a Mentor
            </p>
          </div>
          <div className='flex gap-10'>
            <div className='bg-[#37627E]  pb-10 pt-10 px-4 rounded-lg'>
              <div className='flex flex-col items-center'>
                <img
                  src='assets/icon.png'
                  alt
                />
                <div className='w-48 text-center pt-3 text-[#fff]'>
                  <h1 className='text-[20px] '>Sign Up</h1>
                  <p className='text-[12px]'>
                    Start your mentorship journey <br />
                    by creating an account on our platform.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-[#37627E]  pb-10 pt-10 px-4 rounded-lg'>
              <div className='flex flex-col items-center'>
                <img
                  src='assets/icon.png'
                  alt
                />
                <div className='w-48 text-center pt-3 text-[#fff]'>
                  <h1 className='text-[20px] '>Set Availability</h1>
                  <p className='text-[12px]'>
                    Let mentees know when you're available
                    <br />
                    for mentorship sessions.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-[#37627E]  pb-10 pt-10 px-4 rounded-lg'>
              <div className='flex flex-col items-center'>
                <img
                  src='assets/icon.png'
                  alt
                />
                <div className='w-48 text-center pt-3 text-[#fff]'>
                  <h1 className='text-[20px] '>Mentee Matching</h1>
                  <p className='text-[12px]'>
                    Our algorithm matches you with suitable mentees
                    <br />
                    based on your profile.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-[#37627E]  pb-10 pt-10 px-4 rounded-lg'>
              <div className='flex flex-col items-center'>
                <img
                  src='assets/icon.png'
                  alt
                />
                <div className='w-48 text-center pt-3 text-[#fff]'>
                  <h1 className='text-[20px] '>Start Mentoring</h1>
                  <p className='text-[12px]'>
                    Once matched, begin mentoring
                    <br />
                    through our platform.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-[#37627E]  pb-10 pt-10 px-4 rounded-lg'>
              <div className='flex flex-col items-center'>
                <img
                  src='assets/icon.png'
                  alt
                />
                <div className='w-48 text-center pt-3 text-[#fff]'>
                  <h1 className='text-[20px] '>Track Progress</h1>
                  <p className='text-[12px]'>
                    Track your mentee's progress
                    <br />
                    and offer feedback on their career goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#EEF8F8]'>
          <div className='w-[80%] m-auto py-16 flex gap-8'>
            <div>
              <h1 className='text-[50px] text-[#222C2C] font-bold pb-6'>
                The requirements for becoming a mentor
              </h1>
              <ul className='list-disc gap-4 pl-6 pt-10'>
                <li className='text-[20px] dec pb-4'>
                  Your extensive knowledge and experience are valuable assets
                  for mentoring.
                </li>
                <li className='text-[20px] dec pb-4'>
                  Mentorship is driven by a genuine desire to inspire and help
                  others reach their full potential.
                </li>
                <li className='text-[20px] dec'>
                  Effective communication is essential for conveying your ideas
                  and guiding your mentee effectively.
                </li>
              </ul>
            </div>
            <div>
              <img
                src='assets/book.png'
                alt='image'
              />
            </div>
          </div>
        </section>
        <section className='bg-[#FCFEFC]'>
          <div className='w-[80%] m-auto py-16 flex gap-8'>
            <div>
              <img
                src='assets/benefits.png'
                alt='image'
              />
            </div>
            <div>
              <h1 className='text-[50px] text-[#222C2C] font-bold pb-6'>
                Benefits of becoming a mentor
              </h1>
              <ul className='list-disc gap-4'>
                <li className='text-[20px] dec pb-4'>
                  Mentoring others encourages self-reflection and personal
                  growth, helping you refine your skills and perspectives.
                </li>
                <li className='text-[20px] dec pb-4'>
                  It's a chance to give back to your community and industry,
                  leaving a lasting legacy.
                </li>
                <li className='text-[20px] dec pb-4'>
                  Mentorship hones your leadership skills, making you a more
                  effective leader.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='bg-[#FCFEFC] h-[1000px] mb-60'>
          <div>
            <div className='text-center pb-24'>
              <h1 className='text-[40px] text-[#222C2C] font-semibold'>
                The amazing things that mentoring can do for you
              </h1>
              <p className='text-[#37627E]'>
                Senior Designers, Senior Developers and Leaders agree that
                mentoring is one of
                <br /> the impactful ways to spend your time. In return you’re
                building crucial
                <br /> leadership qualities.
              </p>
            </div>
            <div className='flex justify-center gap-6 relative'>
              <div className='w-[18%] bg-[#37627E] rounded-md absolute left-80'>
                <img
                  src='assets/test5.jpg'
                  alt
                  className='h-[300px] w-[300px]'
                />
                <div className='px-2 py-3'>
                  <p className='text-[#FFFFFF] mb-4'>
                    “Ensure people don’t make the same mistake”
                  </p>
                  <p className='text-[#F9ED7B] text-[14px]'>
                    Adebayo Adetayo, Senior Designer at NASA
                  </p>
                </div>
              </div>
              <div className='w-[18%] bg-[#37627E] rounded-md absolute mt-10'>
                <img
                  src='assets/test4.jpg'
                  alt
                  className='h-[300px] w-[300px]'
                />
                <div className='px-2 py-3'>
                  <p className='text-[#FFFFFF] mb-4'>
                    "In every failure lies an opportunity for improvement."
                  </p>
                  <p className='text-[#F9ED7B] text-[14px]'>
                    Anna Absalom, Project Manager at Telesoftas
                  </p>
                </div>
              </div>
              <div className='w-[18%] bg-[#37627E] rounded-md a absolute right-80'>
                <img
                  src='assets/test3.jpg'
                  alt
                  className='h-[300px] w-[300px]'
                />
                <div className='px-2 py-3'>
                  <p className='text-[#FFFFFF] mb-4'>
                    "The key to growth is preventing the repetition of errors."
                  </p>
                  <p className='text-[#F9ED7B] text-[14px]'>
                    Helen Paul, Talent Manager at Dumena
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-center gap-6 relative top-[500px]'>
              <div className='w-[18%] bg-[#37627E] rounded-md absolute left-80'>
                <img
                  src='assets/test6.jpg'
                  alt
                  className='h-[300px] w-[300px]'
                />
                <div className='px-2 py-3'>
                  <p className='text-[#FFFFFF] mb-4'>
                    "Wisdom is born from the lessons of yesterday."
                  </p>
                  <p className='text-[#F9ED7B] text-[14px]'>
                    Richard Ibrahim, Senior Developer at Sudo Africa
                  </p>
                </div>
              </div>
              <div className='w-[18%] bg-[#37627E] rounded-md absolute mt-10'>
                <img
                  src='assets/test2.jpg'
                  alt
                  className='h-[300px] w-[300px]'
                />
                <div className='px-2 py-3'>
                  <p className='text-[#FFFFFF] mb-4'>
                    "Mistakes are the stepping stones to progress."
                  </p>
                  <p className='text-[#F9ED7B] text-[14px]'>
                    Steven Adetoun, Product Manager at TIIDELab
                  </p>
                </div>
              </div>
              <div className='w-[18%] bg-[#37627E] rounded-md a absolute right-80'>
                <img
                  src='assets/mentor09.jpg'
                  alt
                  className='h-[300px] w-[300px]'
                />
                <div className='px-2 py-3'>
                  <p className='text-[#FFFFFF] mb-4'>
                    "Learn from the past to create a better future."
                  </p>
                  <p className='text-[#F9ED7B] text-[14px]'>
                    Derick Jaja, Community Manager at Innoconnect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='h-screen  flex items-center bg-[#EEF8F8]'>
          <div className='w-[70%] m-auto'>
            <h1 className='text-[#172A46] text-[40px] text-center'>
              “I had several calls with mentees this week, and every single one
              of them has been insightful, cheerful, uplifting, and full of
              ideas being exchanged.”
            </h1>
            <div className='flex justify-center items-center gap-4'>
              <img
                src='assets/salami.png'
                alt
              />
              <div className='flex gap-6 text-[36px] text-[#112034]'>
                <p>Kadiri Salami</p>
                <p>/</p>
                <p>Serial Entrepreneur</p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-[70%] m-auto'>
          <div className='text-center'>
            <h1 className='text-[#222C2C]  text-[60px] font-bold'>
              Let's hit the ground running, we're here to support you
            </h1>
            <p className='text-[#112034] text-[30px] font-semibold py-10'>
              You Get To :
            </p>
          </div>
          <div className='grid  grid-cols-2 grid-rows-2 gap-5'>
            <div className='flex gap-4'>
              <div className='bg-[#DAE5EB] h-10 px-4 py-2'>
                <i className='fa-regular fa-clock text-[#172A46] text-[20px]' />
              </div>
              <div>
                <h1 className='text-[#112034] text-[30px]'>Empower Others</h1>
                <p>
                  You have the opportunity to inspire and guide individuals on
                  their career journey.
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='bg-[#DAE5EB] h-10 px-4 py-2'>
                <i className='fa-regular fa-clock text-[#172A46] text-[20px]' />
              </div>
              <div>
                <h1 className='text-[#112034] text-[30px]'>
                  Expand Your Professional Network
                </h1>
                <p>
                  Connect with like-minded professionals and grow your circle.
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='bg-[#DAE5EB] h-10 px-4 py-2'>
                <i className='fa-regular fa-clock text-[#172A46] text-[20px]' />
              </div>
              <div>
                <h1 className='text-[#112034] text-[30px]'>
                  Enhance Your Leadership Skills
                </h1>
                <p>Mentorship cultivates your leadership abilities.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='bg-[#DAE5EB] h-10 px-4 py-2'>
                <i className='fa-regular fa-clock text-[#172A46] text-[20px]' />
              </div>
              <div>
                <h1 className='text-[#112034] text-[30px]'>
                  Experience Deep Fulfillment
                </h1>
                <p>
                  Witnessing the success of your mentees is profoundly
                  satisfying.
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-4 justify-center mt-20'>
            <a
              href='/mentor-form'
              className='text-white font-semibold border bg-secondary-06 border-secondary-06 text-center rounded px-12 py-2  block active:bg-secondary-07 hover:shadow-btn'
            >
              Become A Mentor
            </a>
            <a
              href='faq'
              className='text-primary-05 font-semibold w-28 border border-secondary-06 text-center rounded px-4 py-2 block hover:bg-[#6A95B1] hover:bg-opacity-20 transition-all'
            >
              FAQs
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeMentor;
