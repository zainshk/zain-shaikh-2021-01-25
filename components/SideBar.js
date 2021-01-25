import { useState } from "react";
import useSwr from "swr";
import Modal from "./Modal";
import { numberWithCommas } from '../helpers/functions'

const SideBar = () => {
  const [ showModal, setShowModal ] = useState(false)
  const getFilters = (url) => fetch(url).then((res) => res.json())
  
  const { data, err } = useSwr("/api/filters", getFilters)
  if (err) return <span>Error: Unable to load filters</span>

  return (
    <div className="h-auto hidden md:inline-block">
      <div className="bg-white p-4">
        <span className="font-semibold mb-2 text-md">JOB TYPE</span>
        <ul>
          {data ? data.job_type.map((job, index) => (
            <li className="text-sm mt-2" key={index}>
              {job?.key}
              <span className="text-xs text-gray-400 ml-1">
                {numberWithCommas(job?.doc_count)}
              </span>
            </li>
          )): <span className="m-2">Loading...</span>}
        </ul>
      </div>
      <div className="bg-white p-4 mt-8">
        <span className="font-semibold mb-2 text-md">DEPARTMENT</span>
        <ul>
          {data?.department.map((dept, index) => {
            if (index < 10)
              return (
                <li className="text-sm my-2" key={index}>
                  {dept?.key}
                  <span className="text-xs text-gray-400 ml-1">
                    {numberWithCommas(dept?.doc_count)}
                  </span>
                </li>
              );
          })}
        </ul>
        <span className="text-blue-500 font-semibold cursor-pointer inline"
          onClick={() => setShowModal(!showModal)}> Show more </span>
      </div>
      <div className="bg-white p-4 mt-8">
        <span className="font-semibold mb-2 text-md">WORK SCHEDULE</span>
        <ul>
          {data ? data.work_schedule.map((work, index) => (
            <li className="text-sm my-2" key={index}>
              {work?.key}
              <span className="text-xs text-gray-400 ml-1">
                {numberWithCommas(work?.doc_count)}
              </span>
            </li>
          )): <span className="m-2">Loading...</span>}
        </ul>  
      </div>
      <div className="bg-white p-4 my-8">
        <h6 className="font-semibold mb-2">EXPERIENCE</h6>
        <ul>
          {data ? data.work_schedule.map((exp, index) => (
            <li className="text-sm my-2" key={index}>
              {exp?.key}
              <span className="text-xs text-gray-400 ml-1">
                {numberWithCommas(exp?.doc_count)}
              </span>
            </li>
          )): <span className="m-2">Loading...</span>}
        </ul>
      </div>
      { showModal ? (
        <Modal department={data?.department} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default SideBar;
