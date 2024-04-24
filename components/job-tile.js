import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
export default function JobTile({
  imgUrl,
  jobTitle,
  employerName,
  jobLocation,
  employmentType,
  jobPostDate,
  jobUrl,
}) {
  return (
    <Link href={jobUrl}>
      <article className="flex gap-4 shadow-sm border p-2">
        <div className="min-w-[100px] min-h-[100px] ">
          <Image
            className=""
            src={imgUrl}
            width={100}
            height={100}
            alt={employerName}
          />
        </div>

        <aside className="md:flex-auto md:flex md:gap-8 md:justify-between">
          <div className="md:w-[40%]">
            <p className="text-xl md:text-lg md:capitalize uppercase font-medium text-slate-700 ">
              {jobTitle}
            </p>
            <p className="text-sm font-medium mt-1 text-slate-700 md:mt-0">
              {employerName}
            </p>
          </div>
          <div className="flex items-center pt-2 md:pt-0 md:w-[30%]">
            <FaLocationDot />
            <p className="capitalize ml-2 text-slate-700">{jobLocation}</p>
          </div>
          <div className="mt-4 md:mt-0 md:w-[30%]">
            <p className="p-1 bg-green-700 inline md:inline-block md:text-center text-white text-xs uppercase rounded-md">
              {employmentType}
            </p>
            <p className="mt-2 text-slate-500  ">{jobPostDate}</p>
          </div>
        </aside>
      </article>
    </Link>
  );
}
