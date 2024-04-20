import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
export default function CandidateCard({
  imgUrl,
  name,
  description,
  location,
  url,
}) {
  return (
    <article className="text-slate-900 shadow-md m-4 rounded-bl-md rounded-br-md">
      <Link href={url}>
        <Image
          alt="candidate image"
          className="rounded-tr-md rounded-tl-md"
          src={`/` + imgUrl}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
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
}
