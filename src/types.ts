import { WELLNESS_AREAS } from "./constants";

export type WellnessArea = (typeof WELLNESS_AREAS)[number];

export type Score = 0 | 1 | 2 | 3 | 4 | 5;

export type AreaResults = { [key in WellnessArea]?: number };

export interface PageHeaderProps {
  title: string;
}

export interface PageDescriptionProps {
  description: string;
}

export interface AssessmentCardProps {
  area: WellnessArea;
  score: Score;
  onSelectScore: (area: WellnessArea, score: Score) => void;
}

export interface AreaDescriptionProps {
  area: WellnessArea;
}
