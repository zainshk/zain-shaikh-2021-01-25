import { useState, useEffect } from 'react'
import moment from "moment"
var _ = require('lodash')
import { numberWithCommas } from '../helpers/functions'

const Jobs = ({ jobs }) => {
  const [filterJobs, setFilterJobs] = useState(jobs)
  const [sortBy, setSortBy] = useState('')

  const toggleDetails = (id) => {
    const e = document.getElementById(id);
    if (e)
      e.classList.contains("hidden")
        ? e.classList.remove("hidden")
        : e.classList.add("hidden")
  };

  const getCount = () => {
    let count = 0;
    jobs.forEach( job => count += job?.total_jobs_in_hospital )
    return count;
  };

  const sortJobs = (key, sortedBy) => {
    if (sortBy === sortedBy) {
      setFilterJobs([...jobs])
      setSortBy('')
    } else {
      setFilterJobs(_.sortBy( jobs, key ))
      setSortBy(sortedBy)
    }
  }

  useEffect(() => {
    setFilterJobs([...jobs])
  }, [jobs])

  return (
    <div className="flex-1 h-auto md:ml-8 md:mb-8 inline-block bg-white">
    
    {jobs.length <= 0 ? (
        <span className="m-2">No Result Found...</span>
      ) : (
      <div className="border border-gray-200 p-4">
        <div className="flex justify-between mb-8">
          <div className="text-sm">
            <span>
              <span className="font-semibold text-sm pr-2">
                {numberWithCommas(getCount())}
              </span>
              Job Postings
            </span>
          </div>
          <div className="text-sm hidden lg:inline-block">
            <span className="text-gray-400">Sort by</span>
            <span className="pl-2 cursor-pointer" onClick={() => sortJobs('total_jobs_in_hospital', 'Location')}>Location</span>
            <span className="pl-2 cursor-pointer" onClick={() => sortJobs('title', 'Role')}>Role</span>
            <span className="pl-2 cursor-pointer" onClick={() => sortJobs('name', 'Department')}>Department</span>
            <span className="pl-2 cursor-pointer" >Education</span>
            <span className="pl-2 cursor-pointer" onClick={() => sortJobs('experience', 'Experience')}>Experience</span>
          </div>
        </div>
        {filterJobs.map((job, index) => (
          <div className="my-4 ml-2 relative" key={index}>
            <div
              className="h-10 w-10 rounded-lg bg-gray-300 inline-block cursor-pointer"
              onClick={() => toggleDetails("job-" + index)}
            >
              <p className="text-white font-semibold text-2xl mt-0.5 uppercase text-center">
                {job?.name[0] + job?.name[1]}
              </p>
            </div>
            <span
              className="absolute top-2 ml-4 cursor-pointer"
              onClick={() => toggleDetails("job-" + index)}
            >
              {job?.total_jobs_in_hospital} jobs for {job?.name}
            </span>
            <div className="hidden" id={"job-" + index}>
              {job.items.map((item, jobIndex) => (
                <div key={"job-" + jobIndex}>
                  <div
                    className="my-4 sm:flex sm:justify-between border-t pt-4 pb-2 cursor-pointer"
                    onClick={() =>
                      toggleDetails("job" + index + "-detail-" + jobIndex)
                    }
                  >
                    <div>
                      <p className="font-semibold">{item?.job_title}</p>
                      <span className="text-sm">{item?.job_type} | </span>
                      <span className="text-sm">
                        ${item?.salary_range[0]} - ${item?.salary_range[1]} an
                        hour |{" "}
                      </span>
                      <span className="text-sm">{item.city}</span>
                    </div>
                    <h6 className="sm:mt-2 mr-4">
                      {moment(item?.created).fromNow()}
                    </h6>
                  </div>
                  <div
                    className="flex justify-between flex-col sm:flex-row hidden"
                    id={"job" + index + "-detail-" + jobIndex}
                  >
                    <table className="hidden sm:block">
                      <thead>
                        <tr>
                          <th className="w-1/4"></th>
                          <th className="w-2/4"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="font-semibold">Department:</td>
                          <td className="pr-20">
                            {item?.department.reduce(
                              (dept, value) => dept + ", " + value
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Hours / shifts:</td>
                          <td className="pr-20">
                            {item?.hours[0]} hours / {item?.work_schedule}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Summary</td>
                          <td className="pr-20">{item?.description}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="sm:hidden">
                      <p className="font-semibold">Department:</p>
                      <p>
                        {item?.department.reduce(
                          (dept, value) => dept + ", " + value
                        )}
                      </p>
                      <p className="font-semibold mt-4">Hours / shifts:</p>
                      <p>
                        {item?.hours[0]} hours / {item?.work_schedule}
                      </p>
                      <p className="font-semibold mt-4">Summary</p>
                      <p>{item?.description}</p>
                    </div>
                    <div className="flex sm:flex-col flex-row mt-4">
                      <div className="w-28 border rounded-lg border-blue-400 py-1 px-3 inline-block mr-4 cursor-pointer bg-blue-400  mt-2">
                        <p className="text-white text-sm py-1 px-1 text-center">
                          Job details
                        </p>
                      </div>
                      <div className="w-28 border rounded-lg border-blue-400 py-1 px-3 inline-block mr-4 cursor-pointer mt-2">
                        <p className="text-blue-400 text-sm text-center py-1">
                          Save job
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Jobs;
