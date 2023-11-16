const Signup = () => {
  return (
   <div>
  {/* <div class="content h-screen flex justify-center items-center  bg-[#f4f4f4] overflow-none"> */}
  <div className="flex flex-col md:flex-row min-h-screen">
    <a href="index.html" className="md:absolute h-20 left-4 top-4 p-4 bg-[#112034]">
      <img className src="assets/innoConnect 1.svg" alt />
    </a>
    <div className="hidden md:flex  bg-[#112034] flex-1 justify-center items-center p-10">
      <img src="./assets/Frame 102.png" alt="signup image" className="w-full max-w-md" />
    </div>
    <div className="flex-1 flex justify-center items-center bg-[#fff]">
      <div className="w-full">
        <h1 className="text-center font-bold text-3xl md:text-5xl mt-3 mb-4 text-[#234270]">Sign Up</h1>
        <div className="w-full max-w-3xl mx-auto px-10 bg-[#F6F9FA]">
          <ul className="flex gap-6 flex-row justify-center text-[rgb(29,53,87)]">
            <li className="group w-1/2">
              <button type="button" onclick="openTab(event,'tab1')" id="defaultOpen" className="tabLinks text-left inline-block text-lg font-bold w-full border-b">
                <img src="assets/mentee.png" className="w-10 h-10 inline-block my-4" alt />
                <span className="ml-2">Mentee</span>
                <div className="bar bg-black scale-x-0 h-[2px] group-hover:scale-x-100 transition-all duration-100">
                </div>
              </button>
            </li>
            <li className="group w-1/2">
              <button type="button" onclick="openTab(event,'tab2')" className="tabLinks text-left inline-block text-lg font-semibold w-full border-b">
                <img src="assets/businessman.png" className="w-10 h-10 inline-block my-4" alt />
                <span className="ml-2">Employer</span>
                <div className="bar bg-black scale-x-0 h-[2px] group-hover:scale-x-100 transition-all duration-100">
                </div>
              </button>
            </li>
          </ul>
        </div>
        <form action className="bg-[#F6F9FA] px-10 pb-10 pt-4 max-w-3xl mx-auto rounded-b-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 tabContent" id="tab1">
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="fname">
              First Name
            </label>
            <input className="rounded border border-primary-03 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="fname" type="text" placeholder="John" />
          </div>
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="lname">
              Last Name
            </label>
            <input className="rounded border border-primary-03 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="lname" type="text" placeholder="Doe" />
          </div>
          <div className="col-span-full">
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="email">
              Email
            </label>
            <input className="rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="email" type="email" placeholder="johndoe@gmail.com" />
            <p className="hidden " id="error-email">Email has already been taken</p>
          </div>
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="password">
              Password
            </label>
            <input className="rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="password" type="password" placeholder="Password" />
          </div>
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input className="rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="confirm-password" type="password" placeholder="Confirm Password" />
            <p className="hidden   " id="error">Password does not match</p>
          </div>
          <label htmlFor="remember" className="col-span-full">
            <input type="checkbox" name="remember" id="remember" className="mr-2" />
            you accept our Terms and Conditions and Privacy Policy
          </label>
          <div className="flex">
            <button type="submit" className="bg-[#234270] text-white font-semibold w-full rounded py-2 hover:bg-[#0d304c] transition duration-300">
              Submit
            </button>
          </div>
          <p className="text-base my-auto">Already have an account? <span className="text-[#234270] font-medium">
              <a href="./login.html">Login</a></span>
          </p>
        </form>
        {/* <form action className="bg-[#F6F9FA] px-10 pb-10 pt-4 max-w-3xl mx-auto rounded-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 tabContent" id="tab2">
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="company-name">
              Company Name
            </label>
            <input className="rounded border border-primary-03 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="company-name" type="text" placeholder="Tesla" />
          </div>
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="company-number">
              Phone number
            </label>
            <input className="rounded border border-primary-03 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="company-number" type="text" placeholder="xxx-xxx-xxx" />
          </div>
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="company-email">
              Email
            </label>
            <input className="rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="company-email" type="email" placeholder="johndoe@gmail.com" />
            <p className="hidden " id="error-email">Email has already been taken</p>
          </div>
          <div className="w-full">
            <label htmlFor="hear-about-us" className="block text-gray-700 font-bold my-2 text-sm">
              Company/Industry
            </label>
            <div className="w-full">
              <select id="hear-about-us" className="w-full py-2 px-3 border text-gray-700 leading-tight border-primary-03 rounded">
                <option value disabled selected>Select an option</option>
                <option value={1}>Artificial Intelligence</option>
                <option value={2}>Robotics</option>
                <option value={3}>Blockchain</option>
                <option value={4}>Software Engineering</option>
                <option value={5}>Cybersecurity</option>
                <option value={6}>Product Mgt</option>
                <option value={7}>Product Design</option>
              </select>
            </div>
          </div>
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="company-password">
              Password
            </label>
            <input className="rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="company-password" type="password" placeholder="Password" />
          </div>
          <div className>
            <label className="block text-gray-700 font-bold my-2 text-sm" htmlFor="company-confirm-password">
              Confirm Password
            </label>
            <input className="rounded border border-primary-03 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" id="company-confirm-password" type="password" placeholder="Confirm Password" />
            <p className="hidden   " id="error">Password does not match</p>
          </div>
          <label htmlFor="company-accept" className="col-span-full">
            <input type="checkbox" name="remember" id="company-accept" className="mr-2" />
            you accept our Terms and Conditions and Privacy Policy
          </label>
          <div className="flex">
            <button type="submit" className="bg-[#234270] text-white font-semibold w-full rounded py-2 hover:bg-[#0d304c] transition duration-300 active:bg-[#0d304c]">
              Submit
            </button>
          </div>
          <p className="text-base my-auto">Already have an account? <span className="text-[#234270] font-medium">
              <a href="./login.html">Login</a></span>
          </p>
        </form> */}
        <p className="text-center my-2 text-[#234270] text-base font-bold col-span-full">Or</p>
        <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4  px-8">
          <button type="button" className="border border-[#234270] text-[#234270] w-full rounded p-2 my-2  transition duration-300 flex justify-center items-center gap-x-4"><img src="assets/GoogleLogo.png" className alt /><span>Sign up with Google</span></button>
          <button type="button" className="border border-[#234270] text-[#234270] w-full rounded p-2 my-2 transition duration-300 flex justify-center items-center gap-x-4"><img src="assets/apple.svg" alt /><span>signup with Apple</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* </div> */}
  <div id="success-modal" className="hidden fixed inset-0  items-center justify-center z-50 bg-gray-800 bg-opacity-50">
    <div className="container w-[464px] bg-white p-8 rounded-3xl text-center hover:shadow-lg">
      <div className="content">
        <div className="flex justify-center items-center">
          <img src="./assets/partypopper.png" alt />
        </div>
        <div className="px-10">
          <h1 className="text-xl font-bold my-3">Account successfully created</h1>
          <p className="text-[#777676] ">Your account creation process has been completed and successful.</p>
        </div>
        <button type="submit" id="login-button" className="bg-[#234270] text-white w-full font-semibold rounded py-2 mt-5 hover:bg-[#0d304c] transition duration-300">Proceed
          to Login</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Signup
