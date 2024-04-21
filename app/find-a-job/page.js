import Navbar from "@/components/navbar";
import LocationMap from "@/components/location-map";
import Spacer from "@/components/utils/spacer";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import JobList from "@/components/job-list";
import JobTile from "@/components/job-tile";
import { jobData } from "@/data";
import { apiJob } from "@/data";
import formatDate from "@/components/utils/date-calc";

export default function FindAJob() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <LocationMap />
        <JobSearchForm />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}

function JobSearchForm() {
  return (
    <section className="md:px-20 lg:px-48 md:py-16">
      <form className="bg-blue-500 p-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <input
            className="p-2 outline-none rounded-md flex-1"
            type="text"
            placeholder="Keywords..."
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
        >
          search
        </button>
      </form>
      <Spacer />
      <JobList>
        {apiJob.map((job) => (
          <JobTile
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
