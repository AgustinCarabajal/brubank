import { ReactElement, useState } from "react";

/**
 * A custom hook that manages the state and navigation
 * for a multi-step registration form.
 * @param {ReactElement[]} steps - The `steps` parameter is an array of React elements. Each element
 * represents a step in a registration form.
 * @returns The `useRegisterForm` function returns an object with the following properties:
 */
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
