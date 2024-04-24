"use client";
import LocationMap from "@/components/location-map";
import JobSearchForm from "@/components/job-search-form";

export default function FindAJob() {
  return (
    <>
      <main className="bg-white text-slate-900">
        <LocationMap />
        <JobSearchForm />
      </main>
    </>
  );
}
