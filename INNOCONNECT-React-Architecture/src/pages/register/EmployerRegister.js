import { Link } from 'react-router-dom'

const EmployerRegister = () => {
  return (
    <form action className="bg-[#F6F9FA] px-10 pb-10 pt-4 max-w-3xl mx-auto rounded-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 tabContent" id="tab2">
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
              <Link to="/login">Login</Link></span>
          </p>
        </form>
  )
}

export default EmployerRegister
