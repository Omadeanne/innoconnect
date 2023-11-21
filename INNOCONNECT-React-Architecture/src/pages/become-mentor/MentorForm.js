import React from 'react'
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';

const MentorForm = () => {
  return (
    <div>
      <Nav />
  <main className="py-5">
    <section className="container px-4 mx-auto flex flex-col items-center">
      <h1 className="my-6 text-3xl md:text-5xl font-bold">Become a Mentor</h1>
      <div className="w-full max-w-lg px-10 md:px-0">
        <ol className="relative flex items-center w-full">
          <li className="step flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:border-primary-06 after:border after:inline-block">
            <span className="relative flex items-center justify-center w-8 h-8 bg-white rounded-full border border-secondary-05  shrink-0">
              <div className="current border border-secondary-05 h-5 w-5 rounded-full bg-secondary-07">
              </div>
              <div className="absolute hidden finish  items-center justify-center w-8 h-8 bg-success-06 rounded-full">
                <i className="block w-3.5 h-3.5 translate-x-1/2 translate-y-1/2 text-secondary-01 fa-solid fa-check" />
              </div>
            </span>
            <p className="absolute top-10 -left-8 font-semibold">Personal details</p>
          </li>
          <li className="relative step flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:border-primary-06  after:border after:inline-block">
            <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-secondary-05  shrink-0">
              <div className="hidden current border border-secondary-05 h-5 w-5 rounded-full bg-secondary-07">
              </div>
              <div className="absolute finish hidden items-center justify-center w-8 h-8 bg-success-06 rounded-full">
                <i className="block w-3.5 h-3.5 translate-x-1/2 translate-y-1/2 text-secondary-01 fa-solid fa-check" />
              </div>
            </span>
            <p className="absolute top-10 -left-1 font-semibold">Profile</p>
          </li>
          <li className="step relative flex items-center">
            <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-secondary-05  shrink-0">
              <div className="hidden current border border-secondary-05 h-5 w-5 rounded-full bg-secondary-07">
              </div>
              <div className="absolute finish hidden items-center justify-center w-8 h-8 bg-success-06 rounded-full">
                <i className="block w-3.5 h-3.5 translate-x-1/2 translate-y-1/2 text-secondary-01 fa-solid fa-check" />
              </div>
            </span>
            <p className="absolute top-10 -left-5 font-semibold">Experience</p>
          </li>
        </ol>
      </div>
      <form id="form" action className="w-full max-w-xl mb-24">
        <div className="tab ">
          <div className="px-5 py-2 bg-primary-04 mt-12 rounded-lg">
            <p className="text-white">
              Filling out the form only takes a couple minutes. We'd love to learn more about your
              background
              and the ins-and-outs of why you'd like to become a mentor. Keep things personal and talk
              directly to us and your mentees. We don't need jargon and polished cover letters here
            </p>
          </div>
          <div className="my-10">
            <p className="block text-sm font-medium leading-6 text-gray-900">Photo</p>
            <div className="mt-2 flex items-center gap-x-3">
              <img id="previewImage" src="assets/user.png" className="rounded-full h-14 w-14" alt="img" />
              <label htmlFor="photo" className="input border cursor-pointer rounded-md py-2 px-3  text-sm font-semibold text-primary-06 bg-gray-200 hover:bg-secondary-01">
                <span>
                  <i className="fa-solid fa-upload mr-1" /> Upload
                </span>
                <input id="photo" name="photo" type="file" accept=".jpg, .jpeg, .png" className="sr-only" />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 my-5">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First
                name</label>
              <div className="mt-2">
                <input type="text" name="first-name" id="first-name" placeholder="First Name" autoComplete="given-name" className=" block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last
                name</label>
              <div className="mt-2">
                <input type="text" placeholder="Last Name" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="mt-2">
                <input type="password" placeholder="xxxxxx" name="password" id="password" autoComplete="family-name" className="block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              <div className="mt-2">
                <input type="password" placeholder="xxxxxx" name="confirm-password" id="confirm-password" autoComplete="family-name" className="block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
                <p className="hidden   " id="error">Password does not match</p>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div className="mt-2">
                <input type="text" placeholder="xxx@email.com" name="email" id="email" autoComplete="family-name" className="block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
                <p className="hidden " id="error-email">Email has already been taken</p>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="job" className="block text-sm font-medium leading-6 text-gray-900">Job
                Title</label>
              <div className="mt-2">
                <input type="text" placeholder="Senior Software Engineer" name="job" id="job" autoComplete="family-name" className="block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className=" sm:col-span-3">
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">Location</label>
              <div className="mt-2 relative">
                <select aria-label="location" className="appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" name="location" id="location">
                  <option value>Select ocation</option>
                  <option value={1}>New York</option>
                  <option value={2}>Lagos</option>
                  <option value={3}>London</option>
                  <option value={4}>Abuja</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <i className="text-xs fa-solid fa-chevron-down" />
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">Company</label>
              <div className="mt-2">
                <input type="text" placeholder="Company Name" name="company" id="company" autoComplete="family-name" className="input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="tab hidden w-full">
          <div className="mt-10">
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
            <div className="mt-2 relative">
              <select aria-label="category" className="input appearance-none block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                  placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" name="category" id="category">
                <option value>Select Category</option>
                <option value={1}>Frontend</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="text-xs fa-solid fa-chevron-down" />
              </div>
            </div>
          </div>
          <div className=" mt-8">
            <label htmlFor="skills" className="block text-sm font-medium leading-6 text-gray-900">skills</label>
            <div className="mt-2 relative">
              <select aria-label="skills" className="input appearance-none block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                  placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" name="skills" id="skills">
                <option value>Select skills</option>
                <option value={1}>HTML</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="text-xs fa-solid fa-chevron-down" />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">Bio</label>
            <div className="mt-2">
              <textarea placeholder="Bio" name="bio" id="bio" className="input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
               placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" defaultValue={""} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 my-5">
            <div className="sm:col-span-3">
              <label htmlFor="linkedin" className="block text-sm font-medium leading-6 text-gray-900">Linkedin
                URL</label>
              <div className="mt-2">
                <input type="text" name="linkedin" id="linkedin" className="input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="x.com" className="block text-sm font-medium leading-6 text-gray-900">X.com
                URL</label>
              <div className="mt-2">
                <input type="text" name="x.com" id="x.com" className="input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">Personal
                Website URL(optional)</label>
              <div className="mt-2">
                <input type="text" name="website" id="website" className="input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                       placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="tab hidden">
          <div className="px-5 py-2 bg-primary-04 mt-12 rounded-lg">
            <p className="text-white">
              Complete and Submit your Application and we'll get back to you via E-mail
            </p>
          </div>
          <div className="mt-8">
            <label htmlFor="why" className="block text-sm font-medium leading-6 text-gray-900">Why do you want
              to be a Mentor?</label>
            <div className="mt-2">
              <textarea name="why" id="why" className="input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" defaultValue={""} />
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="achievement" className="block text-sm font-medium leading-6 text-gray-900">What in
              your opinion, has been your greatest achievement , so far?</label>
            <div className="mt-2">
              <textarea name="achievement" id="achievement" className="input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" defaultValue={""} />
            </div>
          </div>
          <div className="mt-8">
            <p className="block text-sm font-medium leading-6 text-gray-900">Upload Resume/CV*</p>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center text-4xl">
                <i className="fa-solid fa-cloud-arrow-up text-primary-04" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-primary-06 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-06 focus-within:ring-offset-2 hover:text-primary-04">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" accept="png, jpg, jpeg, pdf" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, PDF, DOCX</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button onclick="nextPrev(-1)" id="prevBtn" type="button" className="text-white font-semibold w-32 border bg-secondary-06 border-secondary-06 text-center rounded-lg px-4 py-2 block active:bg-secondary-07 hover:shadow-btn">
            Previous
          </button>
          <button onclick="nextPrev(1)" id="nextBtn" type="button" className="text-white font-semibold w-32 border bg-secondary-06 border-secondary-06 text-center rounded-lg px-4 py-2 block active:bg-secondary-07 hover:shadow-btn">
            Next
          </button>
        </div>
      </form>
    </section>
  </main>
  <Footer />
</div>

  )
}
export default MentorForm