import React from 'react'
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';

export default function PersonalityTest() {
  return (
    <>
    <Nav />
    
    <div className="flex-1 flex justify-center items-center bg-[#fff] p-10  ">
      <div className="mx-auto w-[920px]">
        <h1 className="text-center font-bold text-5xl md:text-5xl my-[18px] text-[#234270]">Personality Test</h1>
        <div className="bg-[#4A5D79] py-[10px] px-[20px] rounded-md">
          <p className="text-2xl font-medium text-white text-center">As part of our mentoring program, we'd like to understand your personality traits better.
            Please complete the following personality assessment.</p>
        </div>
        <div><p className="text-[#1D3557] text-center text-[24px] my-5 font-bold">For each statement, please indicate your level of agreement on a scale from 1 (Strongly Disagree) to 5 (Strongly Agree).</p></div>
        <div className="my-3 items-center">
          <ol className="list-decimal ">
            <li className="text-2xl text-[#112034] font-medium flex-col">I am usually the life of the party.</li>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Normal</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Agree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Agree</span></div>
            <li className="text-2xl text-[#112034] font-medium flex-col mt-5">I prefer spending time alone rather than in a group.</li>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Normal</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Agree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Agree</span></div>
            <li className="text-2xl text-[#112034] font-medium flex-col mt-5">I enjoy trying new things and taking risks.</li>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Normal</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Agree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Agree</span></div>
            <li className="text-2xl text-[#112034] font-medium flex-col mt-5">I am organized and like to plan ahead.</li>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Normal</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Agree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Agree</span></div>
            <li className="text-2xl text-[#112034] font-medium flex-col mt-5"> I tend to be very empathetic toward others.</li>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Normal</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Agree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Agree</span></div>
            <li className="text-2xl text-[#112034] font-medium flex-col mt-5"> I prefer a structured and routine lifestyle.</li>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Disagree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Normal</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Agree</span></div>
            <div><span className="mx-3 text-xl text-[#1D3557]"><input type="radio" className="mx-1 " />Strongly Agree</span></div>
          </ol>
          <div className="flex gap-10 my-8">
            <div className="flex-1 justify-between self-center"> <button className="border-[#234270] text-[#234270] text-xl  border-2 rounded-lg px-5 py-3  bg-[#FCFEFC] 
          ">Previous Step</button></div>
            <div className="flex-1 justify-center self-center"> <button className="text-xl text-white  rounded-lg px-5 py-3  bg-[#37627E] hover:bg-[#0d304c] transition duration-300 ">Next Step</button></div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}