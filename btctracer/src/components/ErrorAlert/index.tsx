import { PiWarningCircleFill } from "react-icons/pi";

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <div className="alert">
      <PiWarningCircleFill className="warningIcon" />
      <span>{message}</span>
    </div>
  );
};
