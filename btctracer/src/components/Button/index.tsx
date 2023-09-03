interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  link?: boolean;
}
export const Button = (props: ButtonProps) => {
  const { label, onClick, style, link } = props;
  return (
    <button
      {...props}
      className={link ? "link" : "btn"}
      style={style}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
