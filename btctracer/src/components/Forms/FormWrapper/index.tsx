type FormWrapperProps = {
  children: React.ReactNode;
};

/**
 * The FormWrapper component is a wrapper that renders its children inside a div with the class name
 * "wrapper".
 * @param {FormWrapperProps}  - The `FormWrapper` component takes in a single prop called `children`.
 * The `children` prop is a special prop in React that allows you to pass components or elements as
 * children to another component.
 * @returns a JSX element. Specifically, it is returning a `<div>` element with the class name
 * "wrapper" and the children passed to the component.
 */
export const FormWrapper = ({ children }: FormWrapperProps) => {
  return <div className="wrapper">{children}</div>;
};
