import { useNavigate } from "react-router";
import {
  Button,
  UserForm,
  DocumentForm,
  PasswordForm,
  ErrorAlert,
} from "../../components";
import { FormWrapper } from "../../components/FormWrapper";
import { useRegisterForm } from "../../hooks/useRegisterForm";
import { useState } from "react";

export const Signup = () => {
  const { step, next, isLastStep } = useRegisterForm([
    // <UserForm />,
    // <DocumentForm />,
    <PasswordForm />,
  ]);

  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const submitForm = () => {
    navigate("/success", { replace: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return !isLastStep ? next() : submitForm();
  };

  return (
    <>
      <>{isError && <ErrorAlert message="Las claves no coinciden" />}</>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          {step}
          <div>
            <Button type="submit" label="Siguiente" />
          </div>
        </form>
      </FormWrapper>
    </>
  );
};
