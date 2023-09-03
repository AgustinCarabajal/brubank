import { useState } from "react";
import { FormTitle, PasswordInput } from "..";
import KeyIcon from "../../assets/key.svg";

export const PasswordForm = () => {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className="passwordFormWrapper">
      <FormTitle title="Seguridad" icon={KeyIcon} />
      <PasswordInput
        placeholder="*************"
        required
        label="Elegí tu clave"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <PasswordInput
        placeholder="*************"
        required
        label="Confirmá tu clave"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
    </div>
  );
};
