interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export const Button = (props: ButtonProps) => {
  const { label, onClick, style } = props;
  return (
    <button {...props} className="btn" style={style} onClick={onClick}>
      {label}
    </button>
  );
};
