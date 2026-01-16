import { useState } from "react";
import type { AreaResults, Score, WellnessArea } from "../types";
import { WELLNESS_AREAS } from "../constants";
import PageDescription from "../components/PageDescription";
import PageHeader from "../components/PageHeader";
import AssessmentCard from "../components/AssessmentCard";

function AssessmentPage({
  onSubmit,
}: {
  onSubmit: (results: AreaResults) => void;
}) {
  const [results, setResults] = useState<AreaResults>({
    financial: 0,
    emotional: 0,
    occupational: 0,
    physical: 0,
    intellectual: 0,
    social: 0,
    spiritual: 0,
    environmental: 0,
  });

  const handleChange = (area: WellnessArea, score: Score) => {
    setResults((prevResults) => ({
      ...prevResults,
      [area]: score,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(results);
  };

  return (
    <>
      <section className="page-header">
        <PageHeader />
      </section>
      <section className="page-description">
        <PageDescription />
      </section>
      <form onSubmit={handleSubmit}>
        <section className="area-cards">
          {WELLNESS_AREAS.map((area) => (
            <AssessmentCard
              key={area}
              area={area}
              currentScore={results[area]}
              onSelectScore={handleChange}
            />
          ))}
        </section>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AssessmentPage;
