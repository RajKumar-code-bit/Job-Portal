import React from "react";
import dayjs from "dayjs";

const JobCard = ({data}) => {
 
  const date1 = dayjs(Date.now());
  const diffinDays = date1.diff(data.postedOn, "day");
  return (
    <div className=" mx-2 lg:mx-40 mb-4">
      <div
        className="flex justify-between bg-zinc-200 rounded-md items-center
        px-6 py-4 border-2 border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103 
        transition-transform duration-200 ease-in-out"
      >
        <div className="flex flex-col items-start gap-2 ">
          <h1 className="font-semibold text-lg">{data.title} - {data.company}</h1>
          <p>{data.type} &#x02022; {data.experience} &#x02022; {data.location} </p>
          <div className="flex items-center gap-2">
            {data.skills.map((skill) => (
              <p className=" text-gray-500 py-1 px-2 border border-gray-600 rounded-md">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-600">Posted {diffinDays} {diffinDays<=1 ? "day" :"days"} ago</p>
          <a href={data.job_link}>
            <button className="text-blue-700 border border-blue-700 hover:bg-blue-400 hover:text-white hover:border-none px-10 py-2 rounded-md">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
