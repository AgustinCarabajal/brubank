interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  linkVariant?: boolean;
}
export const Button = (props: ButtonProps) => {
  const { label, onClick, style, linkVariant } = props;
  return (
    <button
      {...props}
      className={linkVariant ? "link" : "btn"}
      style={style}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
