import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-2 bg-slate-900   w-full ">
      <Link href="/">
        <Image src="rabbit-logo.svg" width={100} height={50} alt="logo" />
      </Link>
      <nav>
        <Link href="/signup">
          <button className=" mr-4 capitalize text-sm md:text-base">
            sign up
          </button>
        </Link>
        <Link href="/login">
          <button className="outline px-4 py-2 rounded-sm capitalize hover:bg-white hover:text-slate-900 text-sm md:text-base">
            login
          </button>
        </Link>
      </nav>
    </header>
  );
}
