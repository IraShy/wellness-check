export const WELLNESS_AREAS = [
  "financial",
  "emotional",
  "occupational",
  "physical",
  "intellectual",
  "social",
  "spiritual",
  "environmental",
] as const;

export const MIN_SCORE = 1;
export const MAX_SCORE = 5;

export const AREA_DESCRIPTIONS = {
  financial:
    "Your financial circumstances. Living within your financial means. Budgeting, planning, having a safety net.",
  emotional:
    "Understanding your feelings and emotions, being able to manage stress levels and resolve conflicts.",
  occupational:
    "Satisfaction with your job and career. Having realistic self-expectations, being happy with what you do, having a goal and a purpose.",
  physical:
    "Your overall physical condition. Things to think about: regular exercises, balanced diet, healthy sleep schedule, stress management, regular check-ups",
  intellectual:
    "Having a desire to learn new concepts and skills, being open-minded, engaging in mentally-stimulating activities and reflective practices.",
  social:
    "Maintaining your personal community, feeling connected in your relationships.",
  spiritual:
    "Having a positive mindset. Practising personal development, being mindful and kind.",
  environmental:
    "Living in safe and comfortable conditions as the result of taking care of your global environment and personal surroundings. Using resources responsibly.",
};
