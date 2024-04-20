import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedJobs from "@/components/featured-jobs";
import FeaturedCandidates from "@/components/featured-candidates";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
import ContactUs from "@/components/contact-us";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedJobs />
      <FeaturedCandidates />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
}
