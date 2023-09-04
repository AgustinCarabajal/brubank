import { ButtonProps } from "../../types";

export const Button = (props: ButtonProps) => {
  const { label, onClick, style } = props;
  return (
    <button {...props} className="btn" style={style} onClick={onClick}>
      {label}
    </button>
  );
};
