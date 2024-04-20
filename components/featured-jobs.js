import { jobs } from "@/data";
import JobCard from "./job-card";

export default function FeaturedJobs() {
  return (
    <section className="bg-white pt-8 text-slate-600">
      <h1 className="capitalize  text-3xl text-center">featured jobs</h1>
      <div className="md:flex md:px-12 md:pt-4 md:justify-center">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            imgUrl={job.imgUrl}
            link={job.link}
            title={job.title}
            location={job.location}
            type={job.type}
            description={job.description}
          />
        ))}
      </div>
    </section>
  );
}
