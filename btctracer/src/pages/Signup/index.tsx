import { Button, UserForm, DocumentForm, PasswordForm } from "../../components";
import { FormWrapper } from "../../components/FormWrapper";
import { useRegisterForm } from "../../hooks/useRegisterForm";

export const Signup = () => {
  const { step, next } = useRegisterForm([
    // <UserForm />,
    <DocumentForm />,
    <PasswordForm />,
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        {step}
        <div>
          <Button type="submit" label="Siguiente" />
        </div>
      </form>
    </FormWrapper>
  );
};
