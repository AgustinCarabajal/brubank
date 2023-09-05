import { FormTitle } from "..";
import { DateInput, DocumentInput, Input } from "../..";
import { UserFormProps } from "../../../types";
import UserIcon from "../../../assets/user.svg";

/**
 * The UserForm component is a form that allows users to input their personal information such as DNI,
 * email, name, last name, and date of birth.
 * @param {UserFormProps}  - - `dniType`: The type of document identification (e.g., "DNI",
 * "Passport").
 * @returns The UserForm component is being returned.
 */
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
        data-testid="email-input"
      />
      <Input
        type="text"
        placeholder="Ingresá tu nombre"
        value={name}
        required
        label="Nombre"
        onChange={(e) => updateForm({ name: e.target.value })}
        data-testid="name-input"
      />
      <Input
        type="text"
        placeholder="Ingresá tu apellido"
        value={lastName}
        required
        label="Apellido"
        onChange={(e) => updateForm({ lastName: e.target.value })}
        data-testid="lastname-input"
      />
      <DateInput date={date} updateForm={updateForm} />
    </div>
  );
};
