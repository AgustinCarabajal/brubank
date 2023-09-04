import { useState } from "react";
import { DocumentInputProps } from "../../../types";
import { Input } from "..";

export const DocumentInput = ({
  dni,
  dniType,
  updateForm,
}: DocumentInputProps) => {
  const [val, setVal] = useState(dni);

  const normalizedValue = (value: string): string => {
    if (!value) return value;
    const nums = value.replace(/[^\d]/g, "");
    if (nums.length === 2) return `${nums}`;
    if (nums.length === 5) return `${nums.slice(0, 2)}.${nums.slice(2)}`;

    if (nums.length <= 2) return nums;
    if (nums.length <= 5) return `${nums.slice(0, 2)}.${nums.slice(2)}`;
    return `${nums.slice(0, 2)}.${nums.slice(2, 5)}.${nums.slice(5, 8)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(normalizedValue(e.target.value));
    updateForm({ dni: normalizedValue(e.target.value) });
  };

  return (
    <div className="documentContainer">
      <Input
        type="text"
        className="documentTypeInput"
        value={dniType.toUpperCase()}
        disabled
        label="Tipo"
      />
      <Input
        type="text"
        autoFocus
        className="documentValueInput"
        placeholder="00.000.000"
        label="Documento"
        value={val}
        onChange={handleChange}
        required
        data-testid="dni-input"
        pattern="^(\d{2}\.{1}\d{3}\.\d{3})|(\d{2}\s{1}\d{3}\s\d{3})$"
      />
    </div>
  );
};
