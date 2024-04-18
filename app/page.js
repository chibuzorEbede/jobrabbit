import Image from "next/image";
import Link from "next/link";
import { jobs, candidates } from "@/data";
import {
  FaLocationDot,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaVimeo,
  FaLinkedin,
} from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center px-8 py-2 bg-slate-900   w-full ">
        <Link href="/">
          <Image src="rabbit-logo.svg" width={200} height={50} alt="logo" />
        </Link>
        <nav>
          <Link href="/signup">
            <button className=" mr-4 capitalize"> sign up</button>
          </Link>
          <Link href="/login">
            <button className="outline px-4 py-2 rounded-sm capitalize hover:bg-white hover:text-slate-900">
              login
            </button>
          </Link>
        </nav>
      </header>
      <section className="">
        <div className="bg-[url('/business-man-working-late-office.jpg')] bg-cover h-[600px] flex flex-col items-center justify-center">
          <h2 className="text-7xl capitalize">find the career you deserve</h2>
          <p className="text-lg pt-8 pb-8 capitalize">
            your job search starts and ends with us.
          </p>
          <button className="px-8 py-4 outline outline-blue-600 bg-blue-600 hover:bg-transparent  uppercase rounded-md ">
            see our curated jobs
          </button>
        </div>
      </section>
      <section className="bg-white pt-8 text-slate-600">
        <h1 className="capitalize  text-3xl text-center">featured jobs</h1>
        <div className="flex px-12 pt-4 justify-center">
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

      <section className="bg-white pt-8 text-slate-600">
        <h1 className="capitalize  text-3xl text-center">
          featured candidates
        </h1>
        <div className="flex px-12 pt-4 justify-center">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              imgUrl={candidate.imgUrl}
              name={candidate.name}
              description={candidate.description}
              location={candidate.location}
              url={candidate.url}
            />
          ))}
        </div>
      </section>
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
      <section className="bg-[url('/business-man-working-late-office.jpg')] pt-10 text-slate-600 h-96 text-center">
        <h1 className="capitalize  text-3xl pb-4">Got a Question?</h1>
        <p className=" py-8 text-lg">
          We’re here to help. Send us an email or call us at +234-8100-208-***
        </p>
        <button className="text-white px-8 py-4 outline outline-blue-600 bg-blue-600 hover:bg-transparent  uppercase rounded-md">
          contact us
        </button>
      </section>
      <footer className="bg-white text-slate-900 py-8 px-16 flex justify-between">
        <div>© 2024 — ALL RIGHTS RESERVED</div>
        <ul className="flex gap-8">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaPinterest />
          </li>
          <li>
            <FaVimeo />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaPinterest />
          </li>
        </ul>
      </footer>
    </>
  );
}

const JobCard = ({ imgUrl, link, title, location, type, description }) => {
  return (
    <article className="text-slate-900 w-96 shadow-md m-4 rounded-bl-md rounded-br-md">
      <Link href={link}>
        <Image
          alt="job description"
          className="rounded-tr-md rounded-tl-md"
          src={`/` + imgUrl}
          width={400}
          height={200}
        />
      </Link>
      <div className="p-4 ">
        <Link href={link} className="hover:underline">
          <h5 className="pt-4 text-lg">{title}</h5>
        </Link>
        <div className="flex items-center pt-4">
          <FaLocationDot className="mr-2" />
          <Link href={link}>
            <p className="hover:underline">{location}</p>
          </Link>
          <p className="capitalize bg-red-600 p-1 ml-4 rounded-md text-white text-sm">
            {type}
          </p>
        </div>
        <div className="pt-4">
          <p className="tracking-wide leading-relaxed">{description}</p>
        </div>
      </div>
    </article>
  );
};

const CandidateCard = ({ imgUrl, name, description, location, url }) => {
  return (
    <article className="text-slate-900 w-96 shadow-md m-4 rounded-bl-md rounded-br-md">
      <Link href={url}>
        <Image
          alt="candidate image"
          className="rounded-tr-md rounded-tl-md"
          src={`/` + imgUrl}
          width={512}
          height={512}
        />
      </Link>
      <div className="p-4 ">
        <Link href={url} className="hover:underline">
          <h5 className="pt-4 text-lg">{name}</h5>
        </Link>
        <div className="flex items-center pt-4">
          <FaLocationDot className="mr-2" />
          <Link href={url}>
            <p className="hover:underline">{location}</p>
          </Link>
        </div>
        <div className="pt-4">
          <p className="tracking-wide leading-relaxed">{description}</p>
        </div>
      </div>
    </article>
  );
};

const CompaniesCard = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/dolby-logo-final.svg"
          width={200}
          height={100}
          alt="companies image"
        />
      </Link>
    </>
  );
};
