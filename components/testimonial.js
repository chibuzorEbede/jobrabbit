import CompaniesCard from "./companies-card";

export default function Testimonial() {
  return (
    <section className="bg-white pt-10 text-slate-600">
      <h1 className="capitalize  text-3xl text-center">
        Companies We&apos;ve Helped
      </h1>
      <p className="text-center pt-4 text-lg">
        Some of the companies we&apos;ve helped recruit excellent applicants
        over the years.
      </p>
      <div className="flex px-12 pt-4 justify-center">
        <CompaniesCard />
        <CompaniesCard />
        <CompaniesCard />
      </div>
    </section>
  );
}
