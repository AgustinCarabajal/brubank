import { DocumentInput, DateInput, FormTitle, Input } from "..";
import UserIcon from "../../assets/user.svg";
import { documentType } from "../../pages";

type UserType = {
  dniType: documentType;
  dni: string;
  email: string;
  name: string;
  lastName: string;
  date: string;
};

type UserFormProps = UserType & {
  updateForm: (fields: Partial<UserType>) => void;
};

export const UserForm = ({
  dniType,
  dni,
  email,
  name,
  lastName,
  date,
  updateForm,
}: UserFormProps) => {
  return (
    <div>
      <FormTitle title="Crear cuenta" icon={UserIcon} />
      <DocumentInput dniType={dniType} dni={dni} updateForm={updateForm} />
      <Input
        type="email"
        required
        placeholder="ejemplo@ejemplo.com"
        label="Correo electrónico"
        value={email}
        onChange={(e) => updateForm({ email: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Ingresá tu nombre"
        value={name}
        required
        label="Nombre"
        onChange={(e) => updateForm({ name: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Ingresá tu apellido"
        value={lastName}
        required
        label="Apellido"
        onChange={(e) => updateForm({ lastName: e.target.value })}
      />
      <DateInput date={date} updateForm={updateForm} />
    </div>
  );
};
