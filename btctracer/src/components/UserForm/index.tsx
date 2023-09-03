import { DocumentInput, DateInput, FormTitle, Input } from "..";
import UserIcon from "../../assets/user.svg";

export const UserForm = () => {
  return (
    <div>
      <FormTitle title="Crear cuenta" icon={UserIcon} />
      <DocumentInput />
      <Input
        type="email"
        required
        placeholder="ejemplo@ejemplo.com"
        label="Correo electrónico"
      />
      <Input placeholder="Ingresá tu nombre" required label="Nombre" />
      <Input placeholder="Ingresá tu apellido" required label="Apellido" />
      <DateInput />
    </div>
  );
};
