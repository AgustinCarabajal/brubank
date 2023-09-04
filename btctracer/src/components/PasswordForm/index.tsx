import { useState } from "react";
import { FormTitle, PasswordInput } from "..";
import KeyIcon from "../../assets/key.svg";

type PasswordType = {
  password: string;
  confirm: string;
};

type PasswordFormProps = PasswordType & {
  updateForm: (fields: Partial<PasswordType>) => void;
};

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
      />
      <PasswordInput
        placeholder="*************"
        required
        label="Confirmá tu clave"
        value={confirm}
        onChange={(e) => updateForm({ confirm: e.target.value })}
      />
    </div>
  );
};
