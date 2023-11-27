import React from 'react'


export default function PostJobs(){
  return(
    <div>
  <div className="px-10 mt-10 tabContent" id="postJob">
    <div className="w-full bg-white p-10 shadow-card">
      <h1 className="text-4xl font-bold text-primary-05 py-4">Post Job</h1>
      <hr className="border-slate-300" />
      <form action id="form" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
        <div className>
          <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="title" placeholder="Full stack developer" autoComplete="given-name" className=" block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div className>
          <label htmlFor="Job-type" className="block text-sm font-medium leading-6 text-gray-900">Job
            Type</label>
          <div className="mt-2 relative">
            <select aria-label="job-type" const type className="appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" name="Job-type" id="Job-type">
              <option value>Select a type</option>
              <option value="Full-time">FulL-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i className="text-xs fa-solid fa-chevron-down" />
            </div>
          </div>
        </div>
        <div className>
          <label htmlFor="onsite" className="block text-sm font-medium leading-6 text-gray-900">One-site/Remote</label>
          <div className="mt-2 relative">
            <select aria-label="onsite/remote" className="appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" name="onsite" id="onsite">
              <option value>Select one</option>
              <option value="One-site">One-site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i className="text-xs fa-solid fa-chevron-down" />
            </div>
          </div>
        </div>
        <div className>
          <label htmlFor="Job-category" className="block text-sm font-medium leading-6 text-gray-900">Job
            category</label>
          <div className="mt-2 relative">
            <select aria-label="Job-category" className="appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" name="Job-category" id="Job-category">
              <option value disabled selected>Select an option</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Product Mgt">Product Mgt</option>
              <option value="Product Design">Product Design</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i className="text-xs fa-solid fa-chevron-down" />
            </div>
          </div>
        </div>
        <div className>
          <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">Experience
            level</label>
          <div className="mt-2 relative">
            <select aria-label="experience" className="appearance-none block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                          placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" name="experience" id="experience">
              <option value disabled selected>Select an option</option>
              <option value="Intern">Intern</option>
              <option value="entry">Entry</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior">Senior</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i className="text-xs fa-solid fa-chevron-down" />
            </div>
          </div>
        </div>
        <div className>
          <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
            Location</label>
          <div className="mt-2">
            <input type="text" name="location" id="location" placeholder="New York" autoComplete="given-name" className=" block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div className>
          <label htmlFor="expiry" className="block text-sm font-medium leading-6 text-gray-900">
            Expiry date</label>
          <div className="mt-2">
            <input type="datetime-local" name="expiry" id="expiry" className=" block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div className>
          <label htmlFor="min-salary" className="block text-sm font-medium leading-6 text-gray-900">
            Min salary</label>
          <div className="mt-2">
            <input type="text" name="min-salary" id="min-salary" placeholder="Min salary" className=" block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div className>
          <label htmlFor="max-salary" className="block text-sm font-medium leading-6 text-gray-900">
            Max salary</label>
          <div className="mt-2">
            <input type="text" name="max-salary" id="max-salary" placeholder="Max salary" className=" block w-full rounded-md border input py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                              placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="requirements" className="block text-sm font-medium leading-6 text-gray-900">Requirements</label>
          <div className="mt-2">
            <textarea placeholder="requirements" name="requirements" id="requirements" className="input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" defaultValue={""} />
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="responsibilty" className="block text-sm font-medium leading-6 text-gray-900">Responsibilty</label>
          <div className="mt-2">
            <textarea placeholder="responsibilty" name="responsibilty" id="responsibilty" className="input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" defaultValue={""} />
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About
            job</label>
          <div className="mt-2">
            <textarea placeholder="about" name="about" id="about" className="input block w-full rounded-md border py-1.5 px-4 text-gray-900 shadow-sm bg-gray-200
                   placeholder:text-accent-03 focus:ring-1 focus:ring-inset focus:ring-primary-05 sm:text-sm sm:leading-6" defaultValue={""} />
          </div>
        </div>
        <div className>
          <button type="submit" className="bg-primary-07 w-full text-lg rounded-md border py-3 px-4 text-white shadow-sm hover:bg-blue-600 font-medium">
            Submit
          </button>
        </div></form>
    </div>
  </div>
</div>

  )
}