import { PiWarningCircleFill } from "react-icons/pi";
import { ErrorAlertProps } from "../../types";

/**
 * The `ErrorAlert` component is a TypeScript React component that renders an alert with a warning icon
 * and a message.
 * @param {ErrorAlertProps}  - The `ErrorAlert` component takes in a single prop called `message`. This
 * prop is of type `ErrorAlertProps`, which is not defined in the code snippet provided. However, based
 * on the usage of the prop, we can assume that `ErrorAlertProps` is an interface or type that
 * @returns The ErrorAlert component is returning a div element with the class name "alert". Inside the
 * div, there is a PiWarningCircleFill component with the class name "warningIcon" and a span element
 * containing the message prop.
 */
export const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <div className="alert">
      <PiWarningCircleFill className="warningIcon" />
      <span>{message}</span>
    </div>
  );
};
