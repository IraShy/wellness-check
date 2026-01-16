import { useState } from "react";
import AssessmentPage from "./pages/AssessmentPage";
import type { AreaResults } from "./types";
import ResultsPage from "./pages/ResultsPage";

function App() {
  const [currentPage, setCurrentPage] = useState<"assessment" | "results">(
    "assessment"
  );
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

  const handleAssessmentSubmit = (submittedResults: AreaResults) => {
    setResults(submittedResults);
    console.log("Submitted results:", submittedResults);
    setCurrentPage("results");
  };
  return (
    <>
      <h1>Wellness Check</h1>
      {currentPage === "assessment" && (
        <AssessmentPage onSubmit={handleAssessmentSubmit} />
      )}

      {currentPage === "results" && <ResultsPage results={results} />}
    </>
  );
}

export default App;
