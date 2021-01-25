import { useState } from "react";
import useSwr from "swr";
import Layout from '../components/Layout'
import SideBar from '../components/SideBar'
import Search from '../components/Search'
import Jobs from '../components/Jobs';

const Home = () => {

  const [filtered, setFiltered] = useState(null);

  const fetchJobs = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSwr("/api/jobs", fetchJobs)

  return (
    <Layout title='Home Page'>
      <Search jobs={ data?.jobs || [] } setFiltered={setFiltered} />
      <main className="flex md:px-8">
        <SideBar/>
        <Jobs jobs={filtered ? filtered : data?.jobs || []} />
      </main>
    </Layout>
  )
}

export default Home
