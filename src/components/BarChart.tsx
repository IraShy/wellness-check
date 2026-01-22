import type { AreaResults } from "../types";
import { MAX_SCORE } from "../constants";

function BarChart({ results }: { results: AreaResults }) {
  const getBarColor = (score: number) => {
    switch (score) {
      case 1:
        return "#8B0000"; // dark red
      case 2:
        return "#DC143C"; // lighter red
      case 3:
        return "#FF8C00"; // orange
      case 4:
        return "#9ACD32"; // yellow-green
      case 5:
        return "#228B22"; // green
      default:
        return "#f0f0f0"; // gray for 0
    }
  };

  return (
    <div className="bar-chart">
      {Object.entries(results).map(([area, score]) => (
        <div key={area} className="bar-row">
          <div className="bar-label">{area}</div>
          <div className="bar-container">
            <div
              className="bar-fill"
              style={{
                width: `${(score / MAX_SCORE) * 100}%`,
                backgroundColor: getBarColor(score),
              }}
            />
            <span className="bar-score">
              {score}/{MAX_SCORE}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BarChart;
