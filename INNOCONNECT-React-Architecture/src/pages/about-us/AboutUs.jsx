import React, { useState } from "react";
import Nav from "../../Components/molecules/nav_footer/Nav";
import Footer from "../../Components/molecules/nav_footer/Footer";

const About = () => {

  const [viewImage, setViewImage] = useState(false);

  const toggleViewImage = () => {
    setViewImage(!viewImage);

  }


  return (
    <div>
      <Nav />
      <section>
        <div className="flex w-full h-80 justify-center  text-white bg-[#1c2434] flex-col text-center ">
          <h1 className="m-1 text-4xl font-extrabold"> About Us</h1>
          <p className="m-2 p-4 text-xl sm:max-w-3xl lg:max-w-5xl mx-auto text-justify">
            {" "}
            Innoconnect provides easy access to mentoring for your employees who
            are working remotely and mentoring employees in different offices
            and locations. Employees can use the app to enroll, get matched,
            engage in their mentoring relationship, and measure their mentoring
            success.
          </p>
        </div>
        <div className="py-8 max-w-[1440px] mx-auto px-4 sm:px-10">
          <div className="flex justify-center flex-col text-center mt-10 rounded-lg  md:w-2/3  bg-[#DCF0F1] mr-auto py-5 md:py-8 px-8">
            <div className="text-slate-950">
              <h1 className="my-2 text-3xl font-bold"> Mission</h1>
              <p className="md:text-xl my-2 text-justify">
                At Innoconnect, our mission is to empower individuals on their
                journey to career success. We strive to provide a dynamic and
                user-friendly platform that connects users with experienced
                mentors, guiding them towards fulfilling careers. We are
                committed to fostering a supportive community that facilitates
                meaningful interactions, knowledge sharing, and growth. Our
                mission is to equip users with the skills, resources, and
                connections necessary to excel in their chosen paths.
              </p>
            </div>
          </div>
          <div className=" flex justify-center flex-col text-center mt-10 rounded-lg md:w-2/3   bg-[#1c2434] ml-auto py-5 px-8 md:py-8">
            <div className="text-white">
              <h1 className="my-2 text-3xl font-bold"> Vision</h1>
              <p className="md:text-xl my-2 text-justify">
                To revolutionize career advancement, we envision a world where
                our Career Placement and Mentorship Support App is the catalyst
                for professional success. We are committed to providing
                individuals with the tools and guidance to navigate their career
                paths effectively.
                <br /> Our vision is a future where mentorship is easily
                accessible, connecting aspiring professionals with experienced
                mentors who guide them toward meaningful careers.
              </p>
            </div>
          </div>
          <span className="text-4xl flex justify-center mt-24 font-extrabold">
            OUR TEAM
          </span>
          <h3 className="text-2xl flex justify-center mt-1">
            Meet the entire team
          </h3>
          <div>
            <div
              id="image-grid"
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10 mx-20"
            >
              <div>
                <a href="https://ibb.co/35X4VZP">
                  <img
                    className="rounded-full mx-auto w-52 h-52"
                    src="https://i.ibb.co/5XDGCHJ/lizzy.jpg"
                    alt="lizzy"
                    border="0"
                  />
                </a>

                <p className="mb-1 text-xl text-center">Elizabeth Okwong</p>
              </div>
              <div>
                <a href="https://ibb.co/XSf703r">
                  <img
                    className="rounded-full mx-auto w-52 h-52"
                    src="https://i.ibb.co/SRDtYd4/obi.jpg"
                    alt="obi"
                    border="0"
                  />
                </a>

                <p className="mb-1 text-xl text-center">Obinna Nnodim</p>
              </div>
              <div>
                <a href="https://ibb.co/QKq3TDc">
                  <img
                    className="rounded-full mx-auto w-52 h-52"
                    src="https://i.ibb.co/JsbwG3d/som.jpg"
                    alt="som"
                    border="0"
                  />
                </a>
                <p className="mb-1 text-center text-xl">Ejiba Chisom</p>
              </div>
              <div>
                <a href="https://ibb.co/YdCXM0s">
                  <img
                    className="rounded-full mx-auto w-52 h-52"
                    src="https://i.ibb.co/t2GztLr/pat.jpg"
                    alt="pat"
                    border="0"
                  />
                </a>

                <p className="mb-1 text-xl text-center">Patience Bassey</p>
              </div>
              {/* hidden */}
              
              

            </div>
            {viewImage && (<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10 mx-20'>
                <div className="">
                  <a href="https://ibb.co/mTsNFWx">
                    <img
                      className="rounded-full mx-auto w-52 h-52"
                      src="https://i.ibb.co/PjpDzHS/edet.jpg"
                      alt="edet"
                      border="0"
                    />
                  </a>

                  <p className="mb-1 text-xl text-center">Edet Effiong</p>
                </div>
                <div className="">
                  <a href="https://ibb.co/j30WjGc">
                    <img
                      className="rounded-full mx-auto w-52 h-52"
                      src="https://i.ibb.co/bNw2GLS/glad.jpg"
                      alt="glad"
                      border="0"
                    />
                  </a>

                  <p className="mb-1 text-xl text-center">Gladys Luke</p>
                </div>
                <div className="">
                  <a href="https://ibb.co/vYnbpy5">
                    <img
                      className="rounded-full mx-auto w-52 h-52"
                      src="https://i.ibb.co/Ryw1frn/dan.jpg"
                      alt="dan"
                      border="0"
                    />
                  </a>

                  <p className="mb-1 text-xl text-center">Daniel Omoanon</p>
                </div>
                <div className="">
                  <a href="https://ibb.co/vx2MhZR">
                    <img
                      className="rounded-full mx-auto w-52 h-52"
                      src="https://i.ibb.co/5WqJkBw/nofi.jpg"
                      alt="nofi"
                      border="0"
                    />
                  </a>

                  <p className="mb-1 text-xl text-center">Nofisat Aboidun</p>
                </div>
                <div className="">
                  <a href="https://ibb.co/ZzJL2fx">
                    <img
                      className="rounded-full mx-auto w-52 h-52"
                      src="https://i.ibb.co/VYNjwLT/efe.jpg"
                      alt="efe"
                      border="0"
                    />
                  </a>

                  <p className="mb-1 text-xl text-center">Efe Salubi</p>
                </div>
                <div className="">
                  <a href="https://ibb.co/rswxzdp">
                    <img
                      className="rounded-full mx-auto w-52 h-52"
                      src="https://i.ibb.co/wszSPcQ/anas.jpg"
                      alt="anas"
                      border="0"
                    />
                  </a>

                  <p className="mb-1 text-xl text-center">Anas Abdulmalik</p>
                </div>
                <div className="">
                  <a href="https://ibb.co/P1LmKkT">
                    <img
                      className="rounded-full mx-auto w-52 h-52"
                      src="https://i.ibb.co/DwJVhdG/abbas.jpg"
                      alt="abbas"
                      border="0"
                    />
                  </a>

                  <p className="mb-1 text-xl text-center">Abbas Toafeeq</p>
                </div>
              </div>)}
            
          </div>
          <div className="relative mt-4 mb-4 mr-8 lg:mt-24 text-right flex flex-row-reverse">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#DCF0F1] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="image-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={toggleViewImage}
              >
                View All
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
