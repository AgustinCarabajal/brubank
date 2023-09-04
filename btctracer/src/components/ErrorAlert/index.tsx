import { PiWarningCircleFill } from "react-icons/pi";
import { ErrorAlertProps } from "../../types";

export const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <div className="alert">
      <PiWarningCircleFill className="warningIcon" />
      <span>{message}</span>
    </div>
  );
};
