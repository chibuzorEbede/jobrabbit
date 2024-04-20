import { candidates } from "@/data";
import CandidateCard from "@/components/candidate-card";

export default function FeaturedCandidates() {
  return (
    <section className="bg-white pt-8 text-slate-600">
      <h1 className="capitalize  text-3xl text-center">featured candidates</h1>
      <div className="md:flex md:px-12 py-8 md:justify-center mx-auto">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            imgUrl={candidate.imgUrl}
            name={candidate.name}
            description={candidate.description}
            location={candidate.location}
            url={candidate.url}
          />
        ))}
      </div>
    </section>
  );
}
