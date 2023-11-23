import React from 'react'


function Aside() {
    return (
        <aside className="sticky top-0 left-0  z-10 bg-[#1c2434] h-screen text-[#d2d8e2] items-center justify-around p-4">
            {/* brand logo  */}
            <div className=" my-3">
                <div className="p-3 justify-self">
                    <span className='justify-center items-center'>
                        <a href="index.html">
                         <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1700420010311/cb052fc8-a3e6-4425-8b87-1d8c300642ac.png" alt="brand-logo" />
                        </a> 
                    </span>
                </div>
            </div> 
            {/* side buttons  */}
            <div className="mt-7 p-3">
                <div>
                    <ul>
                        <li className=" justify-center pl-7 p-2  mx-5 my-3 text-white hover:bg-white hover:text-blue-900 hover:rounded-lg" >
                            <a href className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                                <span className="font-semibold text-xl pl-4"> Overview</span>
                            </a>
                        </li>
                        <li className="justify-center pl-7 p-2 mx-5 my-3 text-white hover:bg-white hover:text-blue-900 hover:rounded-lg">
                            <a href className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <span className="font-semibold text-xl pl-4">Courses</span>
                            </a>
                        </li>
                        <li className="justify-center pl-7 p-2 mx-5 my-3 text-white hover:bg-white hover:text-blue-900 hover:rounded-lg">
                            <a href className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span className="font-semibold text-xl pl-4">Messages</span>
                            </a>
                        </li>
                        <li className="justify-center pl-7 p-2 mx-5 my-3 text-white hover:bg-white hover:text-blue-900 hover:rounded-lg">
                            <a href className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                                <span className="font-semibold text-xl pl-4"> Mentorship</span>
                            </a>
                        </li>
                        <li className="justify-center pl-7 p-2 mx-5 my-3 text-white hover:bg-white hover:text-blue-900 hover:rounded-lg">
                            <a href className='flex'>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                                <span className="font-semibold text-xl pl-4"> Community</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* subscription box  */}
            <div className="m-2 p-7 bg-[#2c3850] text-center">
                <div className="justify-center">
                    <h3 className="text-xl font-bold ">Go Premium</h3>
                    <p className="text-slate-100 font-thin text-sm max-w-lg py-1">Get all recent courses and personalized mentorship</p>
                    <a href="./subscription.html">
                        <button className="mt-3 py-2 m-auto px-12 items-center rounded-md bg-[#3c50e0] lg:text-[1rem] md:text-[1.2rem] font-semibold ease-in-out  hover:-translate-y-1 hover:scale-70 duration-300">
                        PURCHASE NOW
                        </button>
                    </a>
                </div>
            </div>
            {/* sign out button */}
            <div>
                <button className="p-2 mx-5 my-5 text-center justify-center  text-white hover:bg-white hover:text-blue-950 hover:rounded-lg hover:px-4">
                    <a href className='flex'> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        <span className="font-semibold text-xl pl-4">Logout</span>
                    </a>
                </button>
            </div>
       </aside>
    )
}
export default Aside
