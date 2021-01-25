import { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi';

const Search = ({jobs, setFiltered}) => {

  const [keyword, setKeyword] = useState('')
    const fetchFiltered = url => fetch(url).then(res => res.json())

    const searchJobs = () => { 
        if(keyword === "" && jobs.length > 0) {
          setFiltered(jobs)
          return
        }
        fetchFiltered("/api/jobs?param="+keyword.toLowerCase())
          .then(data => setFiltered(data.jobs))
    }
    useEffect(() => {
      searchJobs()
    }, [keyword])

  return (
    <div className="relative md:py-8 md:px-8">
      <div className="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200"> 
        <button className="outline-none focus:outline-none"><FiSearch/></button>
        <input 
        type="search" 
        placeholder="Search for any job, title, keywords or company" 
        className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
        value={keyword}
        placeholder="Search for any job, title, keywords or company"
        onChange={(e) => setKeyword(e.target.value.toLowerCase())}
        />
      </div>  
    </div>
  )
}

export default Search
