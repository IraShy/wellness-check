import type { AreaResults } from "../types";

function ResultsPage({ results }: { results: AreaResults }) {
  return (
    <>
      <h1>Results page</h1>
      <ul>
        {Object.entries(results).map(([area, score]) => (
          <li key={area}>
            {area}: {score}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ResultsPage;
