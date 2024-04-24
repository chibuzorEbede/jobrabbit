import JobList from "@/components/job-list";
import JobTile from "@/components/job-tile";
import { apiJob } from "@/data";
import formatDate from "@/lib/_utils/date-calc";
import Spacer from "@/lib/_utils/spacer";
import { useState } from "react";

export default function JobSearchForm() {
  const [searchText, setSearchText] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <section className="md:px-20 lg:px-48 md:py-16">
      <form className="bg-blue-500 p-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <input
            className="p-2 outline-none rounded-md flex-1"
            type="text"
            placeholder="Keywords..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select className="p-2 outline-none rounded-md flex-1 capitalize">
            <option>all regions</option>
            <option>nigeria</option>
            <option>usa</option>
          </select>
          <select className="p-2 outline-none rounded-md flex-1 capitalize">
            <option>choose a category</option>
            <option>nigeria</option>
            <option>usa</option>
          </select>
        </div>
        <button
          className="bg-white text-slate-900 p-2 outline-none rounded-md"
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          search
        </button>
      </form>
      <Spacer />
      <JobList>
        {apiJob.map((job) => (
          <JobTile
            key={crypto.randomUUID()}
            imgUrl={job.imgUrl}
            jobTitle={job.jobTitle}
            employerName={job.employerName}
            jobLocation={job.jobLocation}
            employmentType={job.employmentType}
            jobPostDate={formatDate(job.jobPostDate)}
            jobUrl={job.jobUrl}
          />
        ))}
      </JobList>
    </section>
  );
}
