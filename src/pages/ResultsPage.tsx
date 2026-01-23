import type { AreaResults } from "../types";
import BarChart from "../components/BarChart";

function ResultsPage({ results }: { results: AreaResults }) {
  return (
    <>
      <h1>Your results</h1>
      <BarChart results={results} />
    </>
  );
}

export default ResultsPage;
