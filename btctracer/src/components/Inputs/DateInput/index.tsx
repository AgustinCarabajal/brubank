import { DateInputProps } from "../../../types";
import { Input } from "..";

/**
 * The DateInput component is a TypeScript React component that renders an input field for selecting a
 * date and updates the form with the selected date.
 * @param {DateInputProps}  - - `date`: The current value of the date input field.
 * @returns The DateInput component is being returned.
 */
export const DateInput = ({ date, updateForm }: DateInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm({
      date: new Date(e.target.value).toISOString().split("T")[0],
    });
  };

  return (
    <Input
      className="dateInput"
      type="date"
      value={date}
      onChange={handleChange}
      required
      label="Fecha de nacimiento"
      data-testid="date-input"
      min="1899-01-01"
      max={new Date().toISOString().split("T")[0]}
    />
  );
};
