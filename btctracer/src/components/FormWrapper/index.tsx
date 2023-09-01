type FormWrapperProps = {
  children: React.ReactNode;
};

export const FormWrapper = ({ children }: FormWrapperProps) => {
  return <div className="wrapper">{children}</div>;
};
