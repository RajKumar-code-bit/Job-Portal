import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import JobCard from "./components/jobCard/JobCard";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchbar/SearchBar";
import jobPortalData from "./data/jobPortalData";
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);

  const [customjobs, setCustomJobs] = useState(false);

  //fetch jobs data
  const fetchjobs = async () => {
    setCustomJobs(false);
   
   
    const newjobs = [];
    const jobsRef = query(collection(db, "jobs"));

    //to sorting job order by date
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      newjobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });

    setJobs(newjobs);
  };

  useEffect(() => {
    fetchjobs();
  }, []);

  const fetchjobsCustom = async (jobCriteria) => {
    setCustomJobs(true);
   
    const newjobs = [];
    const jobsRef = query(collection(db, "jobs"));

    //to sorting job order by date
    const q = query(
      jobsRef,
      where("type", "==", jobCriteria.type),
      where("location", "==", jobCriteria.location),
      where("title", "==", jobCriteria.title),
      where("experience", "==", jobCriteria.experience),
      orderBy("postedOn", "desc")
    );
    const req = await getDocs(q);
    req.forEach((job) => {
      newjobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });

    setJobs(newjobs);
  };



// const clear=()=>{
// fetchjobs()

// }


  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchjobsCustom={fetchjobsCustom} fetchjobs={fetchjobs}  customjobs={customjobs} />
      <div className="flex flex-col items-center">
      
      
        {/* {customjobs && (
          <button className=" "onClick={clear}  >
            <p className="bg-blue-600 text-white px-10 py-2 rounded-md">Clear</p>
          </button>
        )} */}
     </div>

      {jobs.map((data) => (
        <JobCard key={data.id} data={data} />
      ))}
    </div>
  );
}

export default App;
