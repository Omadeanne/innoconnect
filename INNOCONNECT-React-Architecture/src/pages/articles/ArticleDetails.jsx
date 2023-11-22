import React from 'react';

const ArticleDetails = () => {
  // const blog = blogs.find((blog) => blog.id === +id);
  return (
   <div>
  <main className="py-8 max-w-[1440px] mx-auto px-4 sm:px-10">
    <div className>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="blog.html" className="inline-flex items-center text-sm font-medium text-primary-03 hover:text-blue-600 ">
              <i className="mx-1 fas fa-home" />
              Blog
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
              </svg>
              <a href="#" className="ml-1 text-sm font-medium text-Primary-03 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Programming
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Intro to
                javascript</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <section className="my-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
        <div className="max-w-3xl">
          <div className="flex items-center text-error-04 font-medium">
            <p className>Internship</p>
            <i className="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50" />
            <p className>4 mins read</p>
          </div>
          <h1 className="text-2xl lg:text-5xl font-bold text-primary-06 my-4">
            Are unpaid internships
            worth it?
          </h1>
          <p>
            In the fast-paced, ever-evolving landscape of the modern workplace, the importance of employee
            connections and team member connections cannot be overstated
          </p>
          <div className="flex gap-4 items-center mt-4 font-medium">
            <img src="./assets/team/lizzy.jpg" className="rounded-full h-14 w-14" alt />
            <div className="text-sm">
              <p className="mb-1">Elizbeth Okwong</p>
              <p>20th July, 2022</p>
            </div>
          </div>
          <p className="mt-4 mb-2">Share on</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Share on Facebook" className="text-primary-06 font-medium hover:underline">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="#" aria-label="Share on Twitter" className="text-primary-06 font-medium hover:underline">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="#" aria-label="Share on LinkedIn" className="text-primary-06 font-medium hover:underline">
              <i className="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="max-w-xl">
          <img src="assets/carr.jpg" alt className="rounded-xl w-full object-cover" />
        </div>
      </div>
    </section>
    <hr />
    <section className="my-10">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className=" md:w-3/5">
          <p className="text-gray-600">
            Career development is the process of building knowledge, experience, and
            skills that will help an employee reach long-term career goals. Career
            development is different from employee development, which is more focused
            simply on gaining skills and experience, often in areas that will benefit
            the employer. Career development, on the other hand, is guided by the
            employee's vision of their future career.
          </p>
          <h3 className="font-semibold text-2xl text-primary-05 my-3">
            Assessing Your Current Career Situation
          </h3>
          <p className="text-gray-600 my-3">
            In order to develop in your career, you need to have a good understanding
            of where you are now. This assessment should be a thoughtful process in
            which you evaluate your personal interests and values, identify your
            strengths and weaknesses, and review your current skills and experience.
          </p>
          <h3 className="font-semibold text-2xl text-primary-05 my-3">
            Setting Career Goals
          </h3>
          <p className="text-gray-600 my-3">
            The next step is setting goals for where you want your career to go.
            Building on your career assessment, you'll identify objectives that align
            with your personal and professional ambitions. Both long- and short-term
            goals are crucial; long-term goals guide the big picture, while
            shorter-term goals help you take the steps you need to take to arrive at
            your ideal future. <br />
          </p>
          <img src="assets/carr.jpg" className="rounded-xl my-3" alt />
          <p className="text-gray-600 my-3">
            Your career development goals should be unique to you and realistic—but
            also involving some stretching and growth. Setting goals is an important
            first step, but you'll need an action plan to achieve them. Your plan
            should be realistic and detailed, while allowing you to adapt and change
            course along the way as needed.
          </p>
          <h3 className=" font-semibold text-2xl text-primary-05 my-3">
            Balancing Work and Personal Life
          </h3>
          <p className="text-gray-600 my-3">
            Your personal happiness and satisfaction are important elements of career
            development goals, so you need to think about how to balance your work and
            personal life in a way that feels right to you. It's easy to focus so much
            on the end results that you forget to take care of your needs. <br />
          </p>
          <p className="text-gray-600 my-3">
            Career development is a marathon, not a sprint, and you won't be able to
            finish the race if you find yourself sidelined because of burnout. If you
            want to reach your long-term goals AND arrive there happy and healthy,
            it's crucial to add self-care to the equation. Protect and prioritize your
            own well-being by identifying what self-care means to you and establishing
            well-defined work-life boundaries.
          </p>
          <h3 className=" font-semibold text-2xl text-primary-05 my-3">
            Evaluating and Adjusting Career Development Strategies
          </h3>
          <p className="text-gray-600 my-3">
            Career development is a journey. While you may envision that journey as a
            straight line when you make your plan, every career has its twists and
            turns. You're allowed to change your short- and long-term objectives along
            the way, and there will be times when you have to adapt to circumstances
            beyond your control.<br />
          </p>
          <p className="text-gray-600 my-3">
            This awareness comes from regularly evaluating your progress and
            achievements. Take a good look at what you've achieved (or not) and what
            you've learned from that experience. This can help you identify areas
            where you can improve, which will become new short-term career development
            goals. This assessment can also inform the adjustments you need to make in
            your long-term career development plan.
          </p>
          <h3 className=" font-semibold text-2xl text-primary-05 my-3">
            Conclusion
          </h3>
          <p className="text-gray-600 my-3">
            Career development is key to getting where you want to go in your
            career—and to find personal satisfaction and accomplishment. Effective
            career development starts with deliberate planning, and while it should be
            your plan, it's not a solo effort. Along the way, people in your
            professional life—managers, colleagues, mentors, and more—will be
            instrumental in helping you realize your career dreams.<br />
          </p>
          <p className="text-gray-600 my-3">
            For organizations, mentoring is a proven and effective practice to help
            employees succeed on their career development journeys. Learn more about
            how Innoconnect mentoring can help you offer this support while maximizing
            mentoring's benefits to the organization.
          </p>
        </div>
        <div className="md:w-4/12 max-w-fit border rounded-xl p-8 h-fit">
          <p className="mb-3 font-semibold">Recommended for you</p>
          <a href="#" className="flex gap-5 my-4">
            <div>
              <img src="assets/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="thumbnail" className="rounded-md w-20" />
            </div>
            <div>
              <h4 className="font-semibold">France in Pictures</h4>
              <p className="text-sm">4 mins read</p>
            </div>
          </a>
          <a href="#" className="flex gap-5 my-4">
            <div>
              <img src="assets/technology.jpg" alt="thumbnail" className="rounded-md w-20" />
            </div>
            <div>
              <h4 className="font-semibold">France in Pictures</h4>
              <p className="text-sm">4 mins read</p>
            </div>
          </a>
          <a href="#" className="flex gap-5 mt-4">
            <div>
              <img src="assets/blog_illustration1.svg" alt="thumbnail" className="rounded-md w-20" />
            </div>
            <div>
              <h4 className="font-semibold">France in Pictures</h4>
              <p className="text-sm">4 mins read</p>
            </div>
          </a>
        </div>
      </div>
    </section>
    <hr />
    <section className="my-10">
      <h1 className="text-2xl md:text-3xl font-bold text-primary-06 my-4">Related Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <div>
            <img src="./assets/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="thumbnail" className="w-full rounded-lg object-cover" />
          </div>
          <div>
            <div className="flex items-center text-error-04 font-medium mb-3">
              <p className>Explore</p>
              <i className="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50" />
              <p className>4 mins read</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-06">The best Cities in Africa in 2023
            </h2>
            <p className="my-4">
              Tanzania's capital is also one of the most developed cities, which
              will probably surprise many people. Dar Es Salaam, however, h...<span><a href="#" className="text-error-04 font-medium"> Read more</a>
              </span>
            </p>
            <hr />
            <div className="flex items-center mt-4 font-medium">
              <img src="./assets/team/lizzy.jpg" className="rounded-full h-10 w-10" alt />
              <p className="ml-2">Elizbeth Okwong</p>
              <i className="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50 text-primary-05" />
              <p className>20th July, 2022</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <img src="./assets/blog_illustration1.svg" alt="thumbnail" className="w-full rounded-lg object-cover" />
          </div>
          <div>
            <div className="flex items-center text-error-04 font-medium mb-3">
              <p className>Explore</p>
              <i className="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50" />
              <p className>4 mins read</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-06">The best Cities in Africa in 2023
            </h2>
            <p className="my-4">
              Tanzania's capital is also one of the most developed cities, which
              will probably surprise many people. Dar Es Salaam, however, has...<span><a href="#" className="text-red-400 font-medium"> Read more</a>
              </span>
            </p>
            <hr />
            <div className="flex items-center mt-4 font-medium">
              <img src="./assets/team/lizzy.jpg" className="rounded-full h-10 w-10" alt />
              <p className="ml-2">Elizbeth Okwong</p>
              <i className="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50 text-primary-05" />
              <p className>20th July, 2022</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <img src="./assets/technology-customer-support1.jpg" alt="thumbnail" className="w-full rounded-lg object-cover" />
          </div>
          <div>
            <div className="flex items-center text-error-04 font-medium mb-3">
              <p className>Explore</p>
              <i className="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50" />
              <p className>4 mins read</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-06">Resources to help you prepare for
              interviews</h2>
            <p className="my-4">
              Prepare for interviews jobs internships Interviews are only really
              stressful when you're starting out...<span><a href="#" className="text-error-04 font-medium">Read
                  more</a>
              </span>
            </p>
            <hr />
            <div className="flex items-center mt-4 font-medium">
              <img src="./assets/team/dan.jpg" className="rounded-full h-10 w-10" alt />
              <p className="ml-2">Omoanon Daniel</p>
              <i className="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50 text-primary-05" />
              <p className>20th July, 2022</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <img src="./assets/blog_illustration1.svg" alt="thumbnail" className="w-full rounded-lg object-cover" />
          </div>
          <div>
            <div className="flex items-center text-error-04 font-medium mb-3">
              <p className>Explore</p>
              <i className="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50" />
              <p className>4 mins read</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-06">The best Cities in Africa in 2023
            </h2>
            <p className="my-4">
              Tanzania's capital is also one of the most developed cities, which
              will probably surprise many people. Dar Es Salaam, however, has...<span><a href="#" className="text-red-400 font-medium"> Read more</a>
              </span>
            </p>
            <hr />
            <div className="flex items-center mt-4 font-medium">
              <img src="./assets/team/lizzy.jpg" className="rounded-full h-10 w-10" alt />
              <p className="ml-2">Elizbeth Okwong</p>
              <i className="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50 text-primary-05" />
              <p className>20th July, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section className="my-10 flex justify-center items-center">
      <div className="w-3/5">
        <h1 className="text-4xl font-bold text-primary-06 text-center">Subcribe</h1>
        <p className="my-3 text-center">Get the latest news and updates</p>
        <form action className>
          <div className="relative">
            <input type="email" placeholder="Email Address" className="border border-primary-06 rounded-lg py-3 px-4 w-full" />
            <button aria-label="submit" type="submit" className="absolute right-4 top-3">
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>
</div>

  )
}

export default ArticleDetails