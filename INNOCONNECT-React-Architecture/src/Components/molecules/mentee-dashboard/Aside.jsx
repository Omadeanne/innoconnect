import React from 'react'
import AsideButton from './AsideButton'


function Aside({ links }) {
    return (
        <aside className="sticky top-0 left-0  z-10 bg-[#1c2434] h-screen text-[#d2d8e2] items-center  p-4">
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
                        {links.map((link) => {
                            return (
                                <AsideButton
                                    key={link.name}
                                    link={link}
                                />
                            );
                        })}
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
                <button className="p-2 mx-5 my-5 text-center justify-center  text-white hover:bg-primary-05 hover:text-blue-900 hover:rounded-lg hover:px-4">
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
