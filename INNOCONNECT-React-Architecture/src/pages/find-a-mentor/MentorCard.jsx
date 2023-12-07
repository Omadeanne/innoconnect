import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const MentorCard = ({ mentor }) => {
  const [connect, setConnect] = useState(false);

  const toggleConnect = () => {
    setConnect(!connect);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col ">
      {/* <Link to={`/mentors/${mentor.id}`}> */}
      <div data-aos="fade-up">
        <div className="flex flex-col items-center justify-center hull bg-primary-01 my-3 py-8 rounded-lg hover:shadow-lg hover:transition hover:duration-300">
          <div className=" ">
            <Link to={`/mentors/${mentor.id}`} className=" flex flex-col items-center ">
              <img
                className=" w-[120px] h-[120px] rounded-full shadow-card object-cover object-center "
                src={mentor.image}
                alt="Mentor"
              />
              <div className=" pt-[15px]">
                <p className="text-primary-07 font-font font-bold text-3xl text-center">
                  {mentor.name}
                </p>

                <p className="text-primary-06 font-font font-medium text-xl text-center">
                  {mentor.job}
                </p>
                <p className="text-primary-06 font-font font-medium text-md text-center">
                  {mentor.workPlace}
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-center m-auto text-2xl  pt-[10px] duration-300">
            <button>
              <a href="https://www.linkedin.com/">
                <i className="fa-brands fa-linkedin fa-sm  mx-[6px] rounded-lg p-4 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer" />
              </a>
            </button>

            <button>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-x-twitter fa-sm mx-[6px] rounded-lg p-4 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer" />
              </a>
            </button>

            <button>
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook fa-sm mx-[6px] rounded-lg p-4 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer" />
              </a>
            </button>
          </div>
          {connect ? (
            <button
              className="px-[10px] py-[8px] rounded-lg border-primary-07 border-2 font-font text-primary-07 text-base font-bold "
              onClick={toggleConnect}
            >
              Request Sent
            </button>
          ) : (
            <button
              className="rounded-lg bg-primary-05 hover:bg-primary-07 font-font text-base font-md text-[#fff] px-[10px] py-[8px] mt-8"
              onClick={toggleConnect}
            >
              Connect +
            </button>
          )}
        </div>
      </div>
      {/* </Link> */}
      {/* <div className='flex justify-center items-center gap-4 '>

      </div> */}
    </div>
  );
};

export default MentorCard;
