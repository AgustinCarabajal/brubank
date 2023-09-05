import { ButtonProps } from "../../types";

/**
 * The Button component is a TypeScript React component that renders a button with a label, onClick
 * event handler, and custom style.
 * @param {ButtonProps} props - The `props` parameter is an object that contains the properties passed
 * to the `Button` component. These properties can include `label`, `onClick`, and `style`.
 * @returns The `Button` component is returning a `button` element with the following attributes and
 * content:
 */
export const Button = (props: ButtonProps) => {
  const { label, onClick, style } = props;
  return (
    <button {...props} className="btn" style={style} onClick={onClick}>
      {label}
    </button>
  );
};
