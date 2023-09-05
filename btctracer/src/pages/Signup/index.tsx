import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import {
  Button,
  UserForm,
  DocumentForm,
  PasswordForm,
  ErrorAlert,
  FormWrapper,
} from "../../components";
import { useRegisterForm } from "../../hooks/useRegisterForm";
import { signup } from "../../api";
import { FormData } from "../../types";
import { INITIAL_DATA, validatePassword } from "../../utils";
import { BarLoader } from "react-spinners";

export const Signup = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const updateForm = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const { step, next, isLastStep } = useRegisterForm([
    <UserForm key="userForm" {...data} updateForm={updateForm} />,
    <DocumentForm key="DocumentForm" {...data} updateForm={updateForm} />,
    <PasswordForm key="PasswordForm" {...data} updateForm={updateForm} />,
  ]);

  const { mutate, isLoading } = useMutation({
    mutationFn: signup,
    onError: (error: any) => {
      setError(error?.message);
    },
    onSuccess: () => {
      navigate("/success", { replace: true });
    },
  });

  const submitForm = () => {
    if (!validatePassword(data.password, data.confirm, setError)) return;
    mutate(data);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    return !isLastStep ? next() : submitForm();
  };

  const handleValidation = (e: React.FormEvent<HTMLFormElement>) => {
    switch ((e.target as HTMLInputElement).type) {
      case "date": {
        e.preventDefault();
        setError("Ingrese una fecha válida");
        return;
      }
      case "file": {
        e.preventDefault();
        setError("Ingrese una imagen válida");
        return;
      }

      default:
        return;
    }
  };

  return (
    <>
      <>{error && <ErrorAlert message={error} />}</>
      <FormWrapper>
        <form onSubmit={handleSubmit} onInvalid={handleValidation}>
          {step}
          {isLoading ? (
            <div className="submitLoader">
              <BarLoader color="#614ad9" />
            </div>
          ) : (
            <Button disabled={isLoading} type="submit" label="Siguiente" />
          )}
        </form>
      </FormWrapper>
    </>
  );
};
