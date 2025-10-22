import { useState } from "react";
import type { AreaResults } from "../types";
import { WELLNESS_AREAS, MIN_SCORE, MAX_SCORE } from "../constants";

function AssessmentPage() {
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

  const handleClick = (area: keyof AreaResults, score: number) => {
    setResults((prevResults) => ({
      ...prevResults,
      [area]: score,
    }));
  };

  // TODO: update the submit handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted results:", results);
  };

  return (
    <>
      <section className="page-header">
        {/* TODO: add the PageHeader component */}
        <p>PageHeader</p>
      </section>
      <section className="page-description">
        {/* TODO: add the PageDescription component */}
        <p>PageDescription</p>
      </section>
      <form onSubmit={handleSubmit}>
        <section className="area-cards">
          <p>AreaCards</p>
          {/* TODO: abstract into a separate AssessmentCard component */}
          {WELLNESS_AREAS.map((area) => (
            <article className="assessment-card" key={area + "-card"}>
              <h2 key={area}>
                {area} wellness: {results[area]}
              </h2>
              {/* TODO: update the description */}
              <p>AreaDescription</p>
              <section>
                {Array.from({ length: MAX_SCORE }, (_, i) => i + MIN_SCORE).map(
                  (i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => handleClick(area, i)}
                    >
                      {i}
                    </button>
                  )
                )}
              </section>
            </article>
          ))}
        </section>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AssessmentPage;
