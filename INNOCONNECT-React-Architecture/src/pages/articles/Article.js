import React from 'react';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import { Link } from 'react-router-dom';
import { blog_illustration, carr } from '../../assets';
// import ArticleContents from './ArticleContents';
// import ArticleDetails from './ArticleDetails';


const Article = () => {
  return (
    <div>
      <Nav />
      <main className=''>
        <section className='bg-primary-05 px-4 py-5 m-auto'>
          <div className='container md:h-[500px] mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-10'>
            <div className='w-full md:w-2/5'>
              <div className>
                <h1 className='text-3xl md:text-5xl text-white font-bold font-sans'>
                  Our Blog
                </h1>
                <p className='text-xl text-white my-4 max-w-lg'>
                  A center for all our Resources and insights.Get the best of Career news, Lifestyles, Technology and lots more...
                </p>
                <div class="inline-block w-full">
                  <form action="" id="search-form" class="w-full flex gap-4">
                    <div class="relative inline-block ">
                      <input class="md:max-w-sm rounded px-2 py-1 placeholder:text-base focus:outline-none" type="text" placeholder="Search" aria-label="Search" id="search-input"/>
                      <i class="absolute right-2 top-[0.4rem] text-primary-06 opacity-70 text-sm fa-solid fa-magnifying-glass"></i>
                    </div>
                    <button type="submit"class="bg-white inline-block rounded-3xl text-sm hover:text-white text-primary-06 py-1 px-4 hover:bg-[#6A95B1] transition-all">Search</button>
                  </form>
                </div>
              </div>
            </div>
            <div className='w-full md:w-[30rem]'>
              <img
                src={blog_illustration}
                className='w-full object-cover'
                alt='blog'
              />
            </div>
          </div>
        </section>

        <div id='content'>
          <section className='mt-8 flex justify-center items-center w-full'id='featured'>
            <div className='flex flex-col md:flex-row gap-10 px-4'>

              {/* {ArticleContents.map((blog) => (
                <ArticleDetails
                  key={blog.id}
                  blog={blog}
                />
              ))} */}

              <div className>
                <img src={carr} className='rounded-xl'alt='thumbnail'/>
              </div>
              <div className='w-full md:w-2/5'>
                {/* <div className='flex items-center text-error-04 font-medium'>
                  <p className>Internship</p>
                  <i className='fa-solid fa-circle text-[0.4rem] mx-2 opacity-50' />
                  <p className>4 mins read</p>
                </div> */}
                <h2 className='text-3xl lg:text-5xl font-bold text-primary-06 mt-4'>
                  What you get when you learn how to code <br/> worth it?
                </h2><p className='mt-4'>
                  In the fast-paced, ever-evolving landscape of the modern
                  workplace, the importance of employee connections and team
                  member connections cannot be overstated. These connections
                  play a pivotal role in facilitating engagement, which, in
                  turn, contributes significantly to individual and
                  organizational growth...
                  <span>
                    <Link
                     
                      className=' px-3 py-1 inline-flex items-center text-red-500  font-bold'
                    >
                      Read More
                    </Link>
                  
                  </span>
                </p>
                <div className='flex items-center mt-8 font-medium'>
                   <a href="https://ibb.co/35X4VZP"><img  className='rounded-full h-10 w-10' src="https://i.ibb.co/5XDGCHJ/lizzy.jpg" alt="lizzy" border="0" /></a>
                  <p className='ml-2'>Elizbeth Okwong</p>
                  <i className='fa-solid fa-circle text-[0.4rem] mx-2 opacity-50 text-primary-05' />
                  <p className>20th July, 2022</p>
                </div>
              </div>
            </div>
          </section>
          <section className='mt-20'>
            <div
              className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4'
              id='blogList'
            >
              <div class="flex flex-col gap-4">
      <div>
        <img src="./assets/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="thumbnail"
          class="w-full rounded-lg object-cover"/>
      </div>
      <div>
        <div class="flex items-center text-error-04 font-medium mb-3">
          <p class="">Explore</p>
          <i class="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50"></i>
          <p class="">4 mins read</p>
        </div>
        <h2 class="text-xl md:text-3xl font-bold text-primary-06">Roadmap for Transitioning to Data Analytics</h2>
        <p class="my-4">
        You may have a university degree in an unrelated field, or have been working in a completely different domain. You may be interested in transitioning into a data analysis role for a while, but do not know where to start. If this sounds like you, keep on reading! 😉<span><a href="https://medium.com/towards-data-science/how-to-transition-to-data-analytics-128a3dca54d5"
              class="text-error-04 font-medium"> Read more...</a>
          </span>
        </p>
        <hr/>
        <div class="flex items-center mt-4 font-medium">
        <a href="https://ibb.co/35X4VZP"><img className="rounded-full h-10 w-10" src="https://i.ibb.co/5XDGCHJ/lizzy.jpg" alt="lizzy" border="0" /></a>
          <p class="ml-2">Elizbeth Okwong</p>
          <i class="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50 text-primary-05"></i>
          <p class="">20th July, 2022</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div>
        <img src="./assets/blog_illustration1.svg" alt="thumbnail"
          class="w-full rounded-lg object-cover"/>
      </div>
      <div>
        <div class="flex items-center text-error-04 font-medium mb-3">
          <p class="">Explore</p>
          <i class="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50"></i>
          <p class="">4 mins read</p>
        </div>
        <h2 class="text-xl md:text-3xl font-bold text-primary-06">Maximizing Mentorship: Essential Questions to Ask Your Mentor</h2>
        <p class="my-4">
        Mentorship is an essential component of career development. Having someone who can guide you and provide you with insights based on their experiences can significantly accelerate your progress towards...<span><a href="https://medium.com/pm101/maximizing-mentorship-essential-questions-to-ask-your-mentor-d3f5d63bc5a5"
              class="text-red-400 font-medium"> Read more</a>
          </span>
        </p>
        <hr/>
        <div class="flex items-center mt-4 font-medium">
        <a href="https://ibb.co/35X4VZP"><img className="rounded-full h-10 w-10" src="https://i.ibb.co/5XDGCHJ/lizzy.jpg" alt="lizzy" border="0" /></a>
          <p class="ml-2">Elizbeth Okwong</p>
          <i class="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50 text-primary-05"></i>
          <p class="">20th July, 2022</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div>
        <img src="./assets/technology-customer-support1.jpg" alt="thumbnail" class="w-full rounded-lg object-cover"/>
      </div>
      <div>
        <div class="flex items-center text-error-04 font-medium mb-3">
          <p class="">Explore</p>
          <i class="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50"></i>
          <p class="">4 mins read</p>
        </div>
        <h2 class="text-xl md:text-3xl font-bold text-primary-06">Mastering Emotional Intelligence: The Key to Success and Well-being</h2>
        <p class="my-4">
        In the realm of personal and professional development, few skills hold as much importance as emotional intelligence (EI). This nuanced and often underestimated trait has the power to shape not only our relationships but also our careers, mental health, and overall quality of life.<span><a href="https://medium.com/@tjohnson34452/mastering-emotional-intelligence-the-key-to-success-and-well-being-e5653a3b82d5"
              class="text-error-04 font-medium">Read
              more</a>
          </span>
        </p>
        <hr/>
        <div class="flex items-center mt-4 font-medium">
        <a href="https://ibb.co/vYnbpy5"><img className="rounded-full h-10 w-10" src="https://i.ibb.co/Ryw1frn/dan.jpg" alt="dan" border="0" /></a>
          <p class="ml-2">Omoanon Daniel</p>
          <i class="fa-solid fa-circle text-[0.4rem] mx-2 opacity-50 text-primary-05"></i>
          <p class="">20th July, 2022</p>
        </div>
      </div>
    </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
