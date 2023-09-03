import { ReactElement, useState } from "react";

export const useRegisterForm = (steps: ReactElement[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev >= steps.length - 1 ? prev : prev + 1));
  };

  return {
    currentIndex,
    step: steps[currentIndex],
    next,
    isLastStep: currentIndex >= steps.length - 1,
  };
};
