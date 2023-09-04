import { useState } from "react";
import { DateInputProps } from "../../../types";
import { Input } from "..";

export const DateInput = ({ date, updateForm }: DateInputProps) => {
  const [val, setVal] = useState(date);

  const normalizedValue = (value: string): string => {
    if (!value) return value;
    const nums = value.replace(/[^\d]/g, "");
    if (nums.length === 2) return `${nums}`;
    if (nums.length === 4) return `${nums.slice(0, 2)}/${nums.slice(2)}`;

    if (nums.length <= 2) return nums;
    if (nums.length <= 4) return `${nums.slice(0, 2)}/${nums.slice(2)}`;
    return `${nums.slice(0, 2)}/${nums.slice(2, 4)}/${nums.slice(4, 8)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const normalized = normalizedValue(e.target.value);
    setVal(normalized);
    if (/^(\d{2}\/\d{2}\/\d{4})$/.test(normalized))
      updateForm({
        date: new Date(`
      ${normalized.split("/")[1]}/
      ${normalized.split("/")[0]}/
      ${normalized.split("/")[2]}
      `)
          .toISOString()
          .split("T")[0],
      });
  };

  return (
    <Input
      type="text"
      placeholder="24/04/1945"
      value={val}
      onChange={handleChange}
      required
      label="Fecha de nacimiento"
      pattern="^(\d{2}\/{1}\d{2}\/{1}\d{4})$"
      data-testid="date-input"
    />
  );
};
