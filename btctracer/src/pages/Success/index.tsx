import { useNavigate } from "react-router";
import { Button, FormTitle, FormWrapper } from "../../components";
import SuccessIcon from "../../assets/success.svg";

/**
 * The `Success` component is a form that displays a success message and a button to navigate back to
 * the home page.
 * @returns The Success component is returning a form with a FormTitle component and a Button
 * component.
 */
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
