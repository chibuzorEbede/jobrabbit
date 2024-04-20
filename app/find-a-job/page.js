import Navbar from "@/components/navbar";
import LocationMap from "@/components/location-map";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Spacer from "@/components/utils/spacer";
import Link from "next/link";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";

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
            placeholder="keywords"
          />
          <select className="p-2 outline-none rounded-md flex-1">
            <option>all regions</option>
            <option>nigeria</option>
            <option>usa</option>
          </select>
          <select className="p-2 outline-none rounded-md flex-1">
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
      <JobTile />
      <JobTile />
      <JobTile />
    </section>
  );
}

function JobTile() {
  return (
    <Link href="/">
      <article className="flex md:flex gap-4  shadow-sm border p-2">
        <Image className="" src="/company-icon.jfif" width={150} height={100} />

        <div className="md:flex gap-4 md:gap-24 items-center md:justify-around md:px-8 ">
          <div className="">
            <p className="text-xl md:text-lg md:capitalize uppercase text-slate-700 ">
              senior ux developer
            </p>
            <p className="text-sm font-medium mt-1 md:mt-0">AirBnB</p>
          </div>
          <div className="flex items-center pt-2 md:pt-0">
            <FaLocationDot />
            <p className="capitalize ml-2 text-slate-700">
              sacramento, california
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="p-2 bg-green-700 inline md:block md:text-center text-white text-xs uppercase rounded-md">
              temporary
            </p>
            <p className="mt-2 text-slate-500 md:text-center ">
              posted 3 days ago
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
