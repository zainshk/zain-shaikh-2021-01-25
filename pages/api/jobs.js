import jobs from "../../data/jobs";

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  // Search Implemented
  const uniqueJobs = Object.keys(jobs[0].items[0])
  const query = req?.query?.param 
  if (query) {
    const filtered = []
    for (let i=0; i < jobs.length; i++) {
      let flag = false
      let itemsArray = []
      for(let j=0; j < jobs[i].items.length ; j++){
          const item = jobs[i].items[j]
        for(let k=0; k < uniqueJobs.length; k++) {
          const key = uniqueJobs[k]
          if(item[key].toString().toLowerCase().includes(query)) {
            itemsArray.push(item)
            flag = true
            break
          }
        }
        if(flag == true){
          jobs[i].total_jobs_in_hospital = itemsArray.length
          jobs[i].items = itemsArray
          filtered.push(jobs[i])
          break
        }
      }
      
    }
    return res.json({jobs: filtered})
  } 
  res.json({ jobs: jobs });
};
