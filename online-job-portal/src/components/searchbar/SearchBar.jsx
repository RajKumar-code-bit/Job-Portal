import React, { useState } from "react";

const SearchBar = ({fetchjobsCustom,customjobs, fetchjobs}) => {

  
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: "",
  });


 
// to reset filters
  const handleClear = () => {
    setJobCriteria({
      title: "",
      location: "",
      experience: "",
      type: "",
    });
    fetchjobs();
  };



  const handleChange=(e)=>{
  setJobCriteria((prev)=>({...prev,[e.target.name]:e.target.value}))
  
  
  }
  console.log(jobCriteria);

  const search= async()=>{
    await fetchjobsCustom(jobCriteria)
  }

 console.log(jobCriteria);
 

  return (
    <div className=" flex flex-wrap my-10 gap-4 xs:gap-2 justify-center px-4 md:px-10  ">
      <select onChange={handleChange} name="title" value={jobCriteria.title} className="w-64  py-3 pl-4  font-semibold bg-zinc-200 rounded-md">
        <option value="" disabled hidden selected>
          Job Role
        </option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="backend Developer">backend Developer</option>
        <option value="Data Engineer">Data Engineer</option>
        <option value="IOS Developer">IOS Developer</option>
        <option value="Java Developer">Java Developer</option>
      </select>
      <select onChange={handleChange} name="type" value={jobCriteria.type} className="w-64 py-3 pl-4  bg-zinc-200 font-semibold  rounded-md">
        <option value="" disabled hidden selected>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select onChange={handleChange} name="location" value={jobCriteria.location} className="w-64 py-3 pl-4  font-semibold bg-zinc-200 rounded-md">
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office"> In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select onChange={handleChange} name="experience" value={jobCriteria.experinece} className="w-64 py-3 pl-4 font-semibold bg-zinc-200 rounded-md">
        <option value="" disabled hidden selected>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button onClick={search} className="w-64 py-3 text-white font-bold bg-blue-600 rounded-md">
        Search
      </button>
      {customjobs && (
          <button className="flex items-center"onClick={handleClear}  >
            <p className="bg-blue-600 text-white px-10 py-3 rounded-md">Clear</p>
          </button>
        )}
    </div>
  );
};

export default SearchBar;
