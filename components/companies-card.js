import Image from "next/image";
import Link from "next/link";

export default function CompaniesCard() {
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
}
