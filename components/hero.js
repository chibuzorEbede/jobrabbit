import Link from "next/link";
export default function Hero() {
  return (
    <section className="">
      <div className="bg-[url('/business-man-working-late-office.jpg')] bg-cover h-[600px] flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-7xl capitalize">
          find the career you deserve
        </h2>
        <p className="text-sm md:text-lg pt-8 pb-8 capitalize">
          your job search starts and ends with us.
        </p>
        <Link href="/find-a-job">
          <button className="px-4 py-2 md:px-8 md:py-4 outline outline-blue-600 bg-blue-600 hover:bg-transparent  uppercase rounded-md ">
            see our curated jobs
          </button>
        </Link>
      </div>
    </section>
  );
}
