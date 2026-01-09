import { MAX_SCORE, MIN_SCORE, AREA_DESCRIPTIONS } from "../constants";
import type { AssessmentCardProps, Score } from "../types";

function AssessmentCard({
  area,
  currentScore,
  onSelectScore,
}: AssessmentCardProps) {
  return (
    <>
      <article className="assessment-card" key={area + "-card"}>
        <h2>{area} wellness</h2>
        <p>{AREA_DESCRIPTIONS[area]}</p>
        <section className="options-buttons">
          {Array.from({ length: MAX_SCORE }, (_, i) => i + MIN_SCORE).map(
            (score) => (
              <span key={`${area}-${score}-option`}>
                <input
                  type="radio"
                  name={area}
                  value={score}
                  id={`${area}-${score}`}
                  checked={score === currentScore}
                  onChange={(e) => {
                    const score = Number(e.target.value) as Score;
                    onSelectScore(area, score);
                  }}
                />
                <label
                  htmlFor={`${area}-${score}`}
                  className={score === currentScore ? "selected" : ""}
                >
                  {score}
                </label>
              </span>
            )
          )}
        </section>
      </article>
    </>
  );
}

export default AssessmentCard;
