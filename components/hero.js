import Link from "next/link";
import Button from "./ui/button";
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
          <Button text={"see our curated jobs"} />
        </Link>
      </div>
    </section>
  );
}
