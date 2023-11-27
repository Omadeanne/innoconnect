import React from 'react'

export default function Contact(){
  return(
    <div>
      <section className="my-12 lg:pl-0 pl-7 pr-3 lg:ml-40">
  {/* support and paragra */}
  <div className>
    <h1 className="text-inno-blue font-sans font-bold lg:p-4 text-left text-[48px] lg:text-[58px]">Support</h1>
    <p className="font-medium lg:p-4 ">
      Explore our support options and get in touch with us to get the help
      you need.<br />
      Our team is here to help you and support you in your journey.
    </p>
  </div>
  <div className="my-6 py-4  flex flex-col  lg:m-0 lg:flex-row before:">
    <div className="bg-white stroke-2 rounded-lg shadow-inno my-8 lg:my-0 hover:drop-shadow-xl w-[310px] mx-4 h-[350px] lg:h-[290px]">
      {/* <i class="fa fa-phone-square fa-3x bg-midnight" aria-hidden="true" ></i> */}
      <div className="m-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" width={43} height={43} className="bg-pri-color p-1 mb-6 rounded" viewBox="0 0 34 34" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M22.8084 18.9259L23.4544 18.2841C24.3469 17.3973 25.7367 17.2145 26.8785 17.835L29.5843 19.307C31.3226 20.2519 31.7065 22.5681 30.3479 23.9182L28.3362 25.9185C27.8234 26.4285 27.1887 26.7997 26.4577 26.8677C24.7691 27.025 21.294 26.94 17.1942 24.5401L22.8084 18.9259ZM14.4359 10.6015L14.8425 10.1964C15.8441 9.20187 15.939 7.60387 15.0649 6.43654L13.2799 4.05229C12.1976 2.60729 10.108 2.41604 8.86841 3.64854L6.64424 5.85854C6.03082 6.47054 5.61999 7.26104 5.66957 8.13937C5.76166 9.75437 6.31132 12.701 8.71399 16.322L14.4359 10.6015Z" fill="white" />
          <path opacity="0.6" d="M17.0892 16.2875C12.9157 12.1381 14.4259 10.6095 14.4358 10.5996L8.71387 16.3229C9.65878 17.7453 10.8885 19.271 12.4879 20.8619C14.1029 22.4684 15.6895 23.6599 17.194 24.5396L22.8083 18.9268C22.8083 18.9268 21.2755 20.4511 17.0892 16.2889V16.2875Z" fill="white" />
        </svg>
      </div>
      <div className="pt-6 pb-3 mx-3">
        <h2 className="font-medium text-[28px]">Sales &amp; Support</h2>
        <p className="mt-2  pb-6 mr-2 leading-5 text-[18px] lg:text-[14px]">
          Use the form below to get in touch with us. <br />
          We will get back to you as soon as possible .
        </p>
        <div className="rounded-bl-2xl rounded-br-2xl mt-5 bg-blue-gray-50  py-6 md:px-0">
          <a href="#contact-form" className="text-base font-medium text-blue-700 hover:text-blue-600">
            Contact us
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    <div className="bg-white stroke-2 my-8 lg:my-0 rounded-lg shadow-inno  hover:drop-shadow-xl w-[310px] mx-4 h-[350px] lg:h-[290px]">
      {/* <i class="fa fa-phone-square fa-3x bg-midnight" aria-hidden="true" ></i> */}
      <div className="m-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" width={43} height={43} className="bg-pri-color p-1 mb-6 rounded" viewBox="0 0 34 34" fill="none">
          <g clipPath="url(#clip0_3017_8627)">
            <path d="M22.0999 0C23.0016 0 23.8664 0.358213 24.5041 0.995837C25.1417 1.63346 25.4999 2.49826 25.4999 3.4H10.1999C9.29817 3.4 8.43336 3.75821 7.79574 4.39584C7.15812 5.03346 6.7999 5.89826 6.7999 6.8V27.2C5.89817 27.2 5.03336 26.8418 4.39574 26.2042C3.75812 25.5665 3.3999 24.7017 3.3999 23.8V3.4C3.3999 2.49826 3.75812 1.63346 4.39574 0.995837C5.03336 0.358213 5.89817 0 6.7999 0L22.0999 0Z" fill="#FCFEFC" />
            <path d="M30.6 8.49961C30.6 7.59787 30.2418 6.73307 29.6042 6.09545C28.9665 5.45782 28.1017 5.09961 27.2 5.09961H11.9C10.9983 5.09961 10.1335 5.45782 9.49584 6.09545C8.85821 6.73307 8.5 7.59787 8.5 8.49961V30.5996C8.5 31.5013 8.85821 32.3661 9.49584 33.0038C10.1335 33.6414 10.9983 33.9996 11.9 33.9996H27.2C28.1017 33.9996 28.9665 33.6414 29.6042 33.0038C30.2418 32.3661 30.6 31.5013 30.6 30.5996V8.49961ZM18.7 16.9996H11.9V8.49961H18.7V16.9996ZM27.2 10.1996H20.4V8.49961H27.2V10.1996ZM27.2 13.5996H20.4V11.8996H27.2V13.5996ZM27.2 16.9996H20.4V15.2996H27.2V16.9996ZM27.2 20.3996H11.9V18.6996H27.2V20.3996ZM27.2 23.7996H11.9V22.0996H27.2V23.7996ZM27.2 27.1996H11.9V25.4996H27.2V27.1996Z" fill="#FCFEFC" />
          </g>
          <defs>
            <clipPath id="clip0_3017_8627">
              <rect width={34} height={34} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="pt-6 pb-3 mx-3">
        <h2 className="font-medium text-[28px]">  Partner Inquiries</h2>
        <p className="mt-2  pb-6 mr-2 leading-5  text-[18px] lg:text-[14px]">
          We accept affiliates and other opportunities to collaborate with other organizations.
        </p>
        <p />
        <div className="rounded-bl-2xl rounded-br-2xl mt-5 bg-blue-gray-50  py-6 md:px-0">
          <a href="#contact-form" className="text-base font-medium text-blue-700 hover:text-blue-600">
            Work with us
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    <div className="bg-white stroke-2 rounded-lg shadow-inno my-8 lg:my-0 hover:drop-shadow-xl w-[310px] mx-4 h-[350px] lg:h-[290px]">
      {/* <i class="fa fa-phone-square fa-3x bg-midnight" aria-hidden="true" ></i> */}
      <div className="m-3 ">
        <svg width={43} height={43} viewBox="0 0 34 34" className="bg-pri-color p-1 mb-6 rounded" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="material-symbols:partner-exchange-rounded">
            <path id="Vector" d="M16.0087 11.7587L13.0691 8.78372C12.7857 8.50039 12.6441 8.16984 12.6441 7.79206C12.6441 7.41428 12.7857 7.08372 13.0691 6.80039L16.0129 3.82539C16.2934 3.54206 16.6268 3.40039 17.0131 3.40039C17.4003 3.40039 17.7384 3.54206 18.0274 3.82539L20.967 6.80039C21.2503 7.08372 21.392 7.41428 21.392 7.79206C21.392 8.16984 21.2503 8.50039 20.967 8.78372L18.0232 11.7587C17.7427 12.0421 17.4093 12.1837 17.023 12.1837C16.6358 12.1837 16.2977 12.0421 16.0087 11.7587ZM2.83366 28.3337C2.43227 28.3337 2.09558 28.1977 1.82358 27.9257C1.55158 27.6537 1.41605 27.3175 1.417 26.9171V22.6671C1.417 21.8643 1.69466 21.1914 2.25 20.6483C2.80533 20.1053 3.47211 19.8337 4.25033 19.8337H8.88991C9.36214 19.8337 9.81075 19.9518 10.2357 20.1879C10.6607 20.424 11.0031 20.7428 11.2628 21.1441C11.9476 22.065 12.7919 22.7851 13.7958 23.3046C14.7998 23.824 15.8679 24.0837 17.0003 24.0837C18.1573 24.0837 19.2377 23.824 20.2417 23.3046C21.2456 22.7851 22.0777 22.065 22.7378 21.1441C23.0448 20.7428 23.4051 20.424 23.8187 20.1879C24.2324 19.9518 24.6631 19.8337 25.1107 19.8337H29.7503C30.5531 19.8337 31.226 20.1053 31.7691 20.6483C32.3121 21.1914 32.5837 21.8643 32.5837 22.6671V26.9171C32.5837 27.3184 32.4477 27.6551 32.1757 27.9271C31.9037 28.1991 31.5674 28.3347 31.167 28.3337H24.0837C23.6823 28.3337 23.3456 28.1977 23.0736 27.9257C22.8016 27.6537 22.6661 27.3175 22.667 26.9171V25.1108C21.8406 25.7011 20.9491 26.1497 19.9923 26.4566C19.0356 26.7636 18.0383 26.9171 17.0003 26.9171C15.9851 26.9171 14.9934 26.7574 14.0253 26.4382C13.0573 26.119 12.1601 25.6647 11.3337 25.0754V26.9171C11.3337 27.3184 11.1977 27.6551 10.9257 27.9271C10.6537 28.1991 10.3174 28.3347 9.917 28.3337H2.83366ZM5.667 18.4171C4.48644 18.4171 3.48297 18.0039 2.65658 17.1775C1.83019 16.3511 1.417 15.3476 1.417 14.1671C1.417 12.9629 1.83019 11.9533 2.65658 11.1382C3.48297 10.3232 4.48644 9.91611 5.667 9.91706C6.87116 9.91706 7.88077 10.3246 8.69583 11.1396C9.51089 11.9547 9.91794 12.9638 9.917 14.1671C9.917 15.3476 9.50947 16.3511 8.69441 17.1775C7.87936 18.0039 6.87022 18.4171 5.667 18.4171ZM28.3337 18.4171C27.1531 18.4171 26.1496 18.0039 25.3232 17.1775C24.4969 16.3511 24.0837 15.3476 24.0837 14.1671C24.0837 12.9629 24.4969 11.9533 25.3232 11.1382C26.1496 10.3232 27.1531 9.91611 28.3337 9.91706C29.5378 9.91706 30.5474 10.3246 31.3625 11.1396C32.1776 11.9547 32.5846 12.9638 32.5837 14.1671C32.5837 15.3476 32.1761 16.3511 31.3611 17.1775C30.546 18.0039 29.5369 18.4171 28.3337 18.4171Z" fill="#FBFBFB" />
          </g>
        </svg>
        {/* <i
          class="fa fa-phone fa-2x bg-midnight rounded-lg p-2"
          aria-hidden="true"
        ></i> */}
      </div>
      <div className="pt-6 pb-3 mx-3">
        <h2 className="font-medium text-[28px]">Help Articles</h2>
        <p className="my-2 mr-2 leading-5 text-[18px] lg:text-[14px]">
          Explore our frequently asked questions and help articles 
          to get the most out of your mentorships.
        </p>
        <div className="rounded-bl-2xl rounded-br-2xl mt-5 bg-blue-gray-50  py-6 md:px-0">
          <a href="#contact-form" className="text-base font-medium text-blue-700 hover:text-blue-600">
            Learn More
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* contact our team */}
  <div className="flex flex-col lg:flex-row justify lg:p-5 w-[90%] lg:w-[100%]">
    <div className="lg:w-[35%] ">
      <h1 className="text-inno-blue font-sans font-bold text-3xl">Contact our team</h1>
      <p className="font-medium pt-[50px]">Get talking to the right person in our team and<br /> we’ll get back to you as soon as possible.</p>
      <img src="./image/frame.png" alt="thumbnail" className="ro
  unded-[6px] my-[3em]" height="40%" width="200%" />
    </div>
    <div className="lg:w-[60%] w-full pl-3 lg:pl-[6rem] lg:pt-5">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
            First Name
          </label>
          <input type="text" name="name" id="name" placeholder="First Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
            Last Name
          </label>
          <input type="text" name="name" id="name" placeholder="last Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
            Email Address
          </label>
          <input type="email" name="email" id="email" placeholder="example@domain.com" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        {/* <div class="mb-5">
                <label
                  for="subject"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  How can we help you ?
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Please select..."
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div> */}
        <div className="sm:col-span-2 mb-5">
          <label htmlFor="reason" className="block mb-3 text-base font-medium text-[#07074D] ">
            How can we help ?
          </label>
          <div className="mt-1 w-full">
            <select id="subject" className="form-select  border border-[#e0e0e0] px-8 bg-white mt-1 block w-full h-full text-[#6B7280] outline-none pl-3 pr-10 py-4 text-base border-gray-300 focus:border-[#6A64F1] focus:shadow-md sm:text-sm rounded-md" name="reason" required>
              <option value>
                Please select ....
              </option>
              <option value="MenteeQuestion">
                I have a question about being/becoming a mentee
              </option>
              <option value="MentorQuestion">
                I have a question about being/becoming a mentor
              </option>
              <option value="Refund">
                I want to request a refund for a recent payment
              </option>
              <option value="Issue">
                There's an issue with my mentorship/payment/account
              </option>
              <option value="Sales">
                I have a sales or partnership inquiry
              </option>
              <option value="Writer">
                I have a writing or guest post inquiry
              </option>
              <option value="Other">
                There's something else....
              </option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
            Message
          </label>
          <textarea rows={4} name="message" id="message" placeholder="Type your message" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" defaultValue={""} />
        </div>
        <div>
          <button className="hover:shadow-form items-center rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

    </div>
  )
}