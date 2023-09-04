import { useNavigate } from "react-router";
import { Button, FormTitle, FormWrapper } from "../../components";
import SuccessIcon from "../../assets/success.svg";

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
