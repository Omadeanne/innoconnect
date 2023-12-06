import React from "react";
import Nav from "../../Components/molecules/nav_footer/Nav";
import Footer from "../../Components/molecules/nav_footer/Footer";

function Community() {
  return (
    <>
      <Nav />
      <main>
        <div className="bg-primary-05 px-4 py-2">
          <div className="container md:h-[500px] mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-10">
            <div className="text-white w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-semibold">
                Join Our Community
              </h1>
              <p className="lg:text-[1.2rem] md:text-[1.5rem] mt-6  mb-8 mx-auto font-medium">
                <b>
                  Be a part of innoconnect community to help us learn <br />
                  more about your experience
                </b>
              </p>
              <a
                href="https://discord.com/channels/1181568987788759040/11815689884891956"
                className="text-white bg-secondary-06 p-3 rounded-md text-sm md:text-base inline-flex items-center shadow-md gap-3"
              >
                <i class="fa-brands fa-discord mr-2 inline-block h-5 w-5 text-[22px] "></i>
                Join the community
              </a>
            </div>
            <div className="w-full md:w-[30rem]">
              <a href="https://imgbb.com/">
                <img
                  className="w-full h-[370px] object-cover"
                  src="https://i.ibb.co/T47FDFY/community-svg1.png"
                  alt="community-svg1"
                  border="0"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 mt-[8rem]">
          <div className="flex justify-center items-center flex-col lg:flex-row gap-8">
            <div className="w-full text-center lg:text-left lg:w-1/2">
              <h2 className="text-[3rem] font-bold text-primary-06">
                Join Our Community
              </h2>
              <p className="mt-8 text-[1.7rem] text-primary-06">
                Get the chance to join various interactive live sessions and
                learn from Industry Experts and Mentors. Ask the right questions
                and get the answers from experienced minds.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/MMss42Z/commu-4.jpg"
                  className="w-full object-cover"
                  alt="commu-4"
                  border="0"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 mt-[8rem]">
          <div className="flex justify-center items-center flex-col-reverse lg:flex-row  gap-8">
            <div className="w-full lg:w-1/2">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/2nj4sfr/commu-3.jpg"
                  className="w-full object-cover"
                  alt="commu-3"
                  border="0"
                />
              </a>
            </div>
            <div className="w-full text-center lg:text-left lg:w-1/2">
              <h3 className="text-[3rem] font-bold text-primary-06 px-10">
                Network with the best
              </h3>
              <p className="mt-8 text-[1.7rem] text-primary-06 px-10">
                Get the chance to join various interactive live sessions and
                learn from Industry Experts and Mentors. Ask the right questions
                and get the answers from experienced minds.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 mt-[8rem]">
          <div className="flex justify-center items-center flex-col lg:flex-row  gap-8">
            <div className="w-full text-center lg:text-left lg:w-1/2">
              <h3 className="text-[3rem] font-bold text-primary-06 px-10">
                Share your experience and help the community
              </h3>
              <p className="mt-8 text-[1.7rem] text-primary-06 px-10">
                Be open to sharing your experience and insights with the
                community so that others can learn from you. Help other people
                to solve their problems and get help from other people to solve
                your problems.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/VjHpDXP/comm-2-1.jpg"
                  className="w-full object-cover"
                  alt="comm-2-1"
                  border="0"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 my-[8rem]">
          <div className="flex flex-col-reverse lg:flex-row  justify-center items-center  gap-8">
            <div className="w-full lg:w-1/2">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/DGVrvnL/comm-1.jpg"
                  className="w-full object-cover"
                  alt="comm-1"
                  border="0"
                />
              </a>
            </div>
            <div className="w-full text-center lg:text-left lg:w-1/2">
              <div className="pl-4">
                <h3 className="text-[3rem] font-bold text-primary-06 px-10">
                  Network with the best
                </h3>
                <p className="mt-8 text-[1.7rem] text-primary-06 px-10">
                  Get the chance to join various interactive live sessions and
                  learn from Industry Experts and Mentors. Ask the right
                  questions and get the answers from experienced minds.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[8rem] flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-[3rem] font-bold text-primary-06">
              Join us Now
            </h3>
            <a
              href="https://discord.com/channels/1181568987788759040/11815689884891956"
              className="text-white bg-secondary-06 p-3 rounded-md text-sm md:text-base inline-flex items-center shadow-md gap-3"
            >
              <i class="fa-brands fa-discord mr-2 inline-block h-5 w-5 text-[22px] "></i>
              Join the community
            </a>
            {/* <a
              href='#'
              className='text-white bg-secondary-06 p-3 rounded-md inline-flex items-center shadow-md my-4'
            >
              <img
                src='assets/discord.svg'
                alt=''
                className='mr-2 inline-block'
              />
              Join the community
            </a> */}
            <h2 className="uppercase mb-4 font-bold tracking-[2px]">
              Follow Us
            </h2>
            <div className="max-w-fit mx-auto">
              <ul className="flex gap-4">
                <li>
                  <a aria-label="facebook" className="hover:underline" href="#">
                    <i>
                      <i className="fa-brands fa-facebook text-[20px]" />
                    </i>
                  </a>
                </li>
                <li>
                  <a aria-label="twitter" className="hover:underline" href="#">
                    <i className="fa-brands fa-twitter text-[20px]" />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="instagram"
                    className="hover:underline"
                    href="#"
                  >
                    <i className="fa-brands fa-instagram text-[20px] " />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Community;
