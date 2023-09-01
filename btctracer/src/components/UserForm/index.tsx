import { DocumentInput, FormTitle, Input } from "..";
import UserIcon from "../../assets/user.svg";

export const UserForm = () => {
  return (
    <div>
      <FormTitle title="Crear cuenta" icon={UserIcon} />
      <DocumentInput />
      <Input placeholder="ejemplo@ejemplo.com" label="Correo electrónico" />
      <Input placeholder="Ingresá tu nombre" label="Nombre" />
      <Input placeholder="Ingresá tu apellido" label="Apellido" />
      <Input placeholder="24/04/1945" label="Fecha de nacimiento" />
    </div>
  );
};
