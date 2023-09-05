import { ButtonProps } from "../../types";

/**
 * The `Link` component is a button that renders a label and triggers an `onClick` event when clicked.
 * @param {ButtonProps} props - The `props` parameter is an object that contains the properties passed
 * to the `Link` component. These properties can include `label`, `onClick`, and `style`.
 * @returns The `Link` component is returning a button element with the following attributes and
 * properties:
 */
export const Link = (props: ButtonProps) => {
  const { label, onClick, style } = props;
  return (
    <button {...props} className="link" style={style} onClick={onClick}>
      {label}
    </button>
  );
};
