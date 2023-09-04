import { documentType } from "../types";

export const validatePassword = (
  password: string,
  confirm: string,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  if (password.length < 8) {
    setError("Ingresar al menos 8 caracteres");
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    setError("Ingresar al menos 1 mayuscula");
    return false;
  }
  if (!/[a-z]/.test(password)) {
    setError("Ingresar al menos 1 minuscula");
    return false;
  }
  if (!/[0-9]/.test(password)) {
    setError("Ingresar al menos 1 numero");
    return false;
  }
  if (password !== confirm) {
    setError("Las claves no coinciden");
    return false;
  }
  setError("");
  return true;
};

export const INITIAL_DATA = {
  dniType: documentType.DNI,
  dni: "",
  email: "",
  name: "",
  lastName: "",
  date: "",
  dniFront: "",
  dniBack: "",
  password: "",
  confirm: "",
};
