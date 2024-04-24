import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedJobs from "@/components/featured-jobs";
import FeaturedCandidates from "@/components/featured-candidates";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <FeaturedCandidates />
      <Testimonial />
    </>
  );
}
