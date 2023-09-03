import { Button, FormTitle } from "../../components";
import SuccessIcon from "../../assets/success.svg";
import { FormWrapper } from "../../components/FormWrapper";
import { useNavigate } from "react-router";

export const Success = () => {
  const navigate = useNavigate();

  const handleSubmit = () => navigate("/", { replace: true });

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormTitle success title="Formulario enviado" icon={SuccessIcon} />
        <Button type="submit" label="Aceptar" />
      </form>
    </FormWrapper>
  );
};
