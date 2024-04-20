import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

export default function JobCard({
  imgUrl,
  link,
  title,
  location,
  type,
  description,
}) {
  return (
    <article className="text-slate-900 shadow-md m-4 rounded-bl-md rounded-br-md">
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
}
