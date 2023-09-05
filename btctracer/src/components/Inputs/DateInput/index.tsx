import { DateInputProps } from "../../../types";
import { Input } from "..";

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
