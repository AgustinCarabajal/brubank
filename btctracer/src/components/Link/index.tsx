import { ButtonProps } from "../../types";

export const Link = (props: ButtonProps) => {
  const { label, onClick, style } = props;
  return (
    <button {...props} className="link" style={style} onClick={onClick}>
      {label}
    </button>
  );
};
