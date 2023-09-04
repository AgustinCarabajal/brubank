import { InputProps } from "../../../types";

export const Input = (props: InputProps) => {
  const { label } = props;
  return (
    <div className="inputWrapper">
      <label className="label">{label}</label>
      <input className="input" {...props} />
    </div>
  );
};
