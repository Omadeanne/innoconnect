import React from 'react'

const Header = () => {
  
  return (
    <header >
        <div className="sticky top-0 right-0 z-50 py-2 items-center justify-between drop-shadow-sm bg-[#ffffff] flex">
            <div className="lg:hidden flex text-2xl ml-4" id="open-menu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                </svg>
            </div>
            {/* user greeting */}
            <div className="flex-col ml-2 pl-9">
                <div className>
                    <h3 className="font-bold">
                        Hi,
                        <span>Edet Effiong</span>
                    </h3>
                </div>
                <div className="font-light text-xs">
                     What are we learning today?
                </div>
            </div>
            {/* search bar */}
            <div className="mb-4 md:flex items-center justify-center mt-1 ml-[35px] hidden">
                <div className="flex border-2 border-gray-300 rounded-xl px-2 py-1 lg:w-80 md:w-60">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-6 text-xl text-slate-500 align-center p- items-center justify-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

                <input type="text" className="text-gray-500  py-1 pr-2 w-72 focus:outline-none" placeholder="Search for courses" />
                </div>
            </div>
 
            {/* notification bell and profile */}
            <div className="flex items-center">
                {/* bell */}
                <div className="px-2 hidden lg:block">
                    <a href="meassages.html" className="w-5 text-xl sm:w-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </a>
                </div>
                {/* drop down menu */}
                <div className="dropdown group item relative z-50">
                    <div href="#" className="dropdownbtn flex items-center cursor-pointer font-medium text-lg text-[#1D3557] px-4 py-2">
                        <img className="w-14" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1700419986985/d1992668-dea7-4870-9be7-54a52dc47d97.png" alt="profile" /> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3 text-xs transition-all duration-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                    </div>
                    <div className="menu hidden absolute right-2 bg-white w-52 mt-4 rounded-b transition ease-linear duration-100 divide-y divide-slate-300">
                        <a href="index.html" className="text-gray-800 px-4  py-2 block hover:bg-slate-200 ">Dashboard</a>
                        <a href="profile.html" className="text-gray-800 px-4  py-2 block hover:bg-slate-200">My Profile</a>
                        <a href="settings.html" className="text-gray-800 px-4  py-2 block hover:bg-slate-200">Account Settingsr</a>
                    </div>
                </div>               
            </div> 
        </div>    
    </header>
  )
}

export default Header
