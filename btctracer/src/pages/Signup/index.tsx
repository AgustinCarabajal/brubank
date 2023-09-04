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
import { useMutation } from "react-query";
import { signup } from "../../api";

export enum documentType {
  DNI = "dni",
}

export type FormData = {
  dniType: documentType;
  dni: string;
  email: string;
  name: string;
  lastName: string;
  date: string;
  dniFront: string;
  dniBack: string;
  password: string;
  confirm: string;
};

const INITIAL_DATA = {
  dniType: documentType.DNI,
  dni: "",
  email: "",
  name: "",
  lastName: "",
  date: "",
  dniFront: "",
  dniBack: "",
  password: "",
  confirm: "",
};

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
    if (data.password.length < 8)
      return setError("Ingresar al menos 8 caracteres");
    if (!/[A-Z]/.test(data.password))
      return setError("Ingresar al menos 1 mayuscula");
    if (!/[a-z]/.test(data.password))
      return setError("Ingresar al menos 1 minuscula");
    if (!/[0-9]/.test(data.password))
      return setError("Ingresar al menos 1 numero");
    if (data.password !== data.confirm)
      return setError("Las claves no coinciden");

    setError("");
    mutate(data);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return !isLastStep ? next() : submitForm();
  };

  return (
    <>
      <>{error && <ErrorAlert message={error} />}</>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          {step}
          <div>
            <Button disabled={isLoading} type="submit" label="Siguiente" />
          </div>
        </form>
      </FormWrapper>
    </>
  );
};
