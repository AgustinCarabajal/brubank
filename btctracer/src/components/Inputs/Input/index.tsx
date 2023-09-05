import { InputProps } from "../../../types";

/**
 * The `Input` component is a TypeScript React component that renders an input field with a label.
 * @param {InputProps} props - The `props` parameter is an object that contains the properties passed
 * to the `Input` component. These properties can include any valid HTML input attributes such as
 * `type`, `placeholder`, `value`, `onChange`, etc. Additionally, it can also include a `label`
 * property which is used to
 * @returns The `Input` component is returning a JSX element.
 */
export const Input = (props: InputProps) => {
  const { label } = props;
  return (
    <div className="inputWrapper">
      <label className="label">{label}</label>
      <input className="input" {...props} />
    </div>
  );
};
