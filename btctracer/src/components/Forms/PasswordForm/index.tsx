import KeyIcon from "../../../assets/key.svg";
import { PasswordFormProps } from "../../../types";
import { FormTitle } from "..";
import { PasswordInput } from "../..";

/**
 * The `PasswordForm` component is a form that allows users to enter and confirm their password.
 * @param {PasswordFormProps}  - - `password`: The current value of the password input field.
 * @returns The PasswordForm component is being returned.
 */
export const PasswordForm = ({
  password,
  confirm,
  updateForm,
}: PasswordFormProps) => {
  return (
    <div className="passwordFormWrapper">
      <FormTitle title="Seguridad" icon={KeyIcon} />
      <PasswordInput
        autoFocus
        placeholder="*************"
        required
        label="Elegí tu clave"
        value={password}
        onChange={(e) => updateForm({ password: e.target.value })}
        data-testid="password-input"
      />
      <PasswordInput
        placeholder="*************"
        required
        label="Confirmá tu clave"
        value={confirm}
        onChange={(e) => updateForm({ confirm: e.target.value })}
        data-testid="confirm-input"
      />
    </div>
  );
};
