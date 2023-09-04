import { documentType } from "../pages";
import { endpoints } from "./constants";

export const getPrices = () =>
  fetch(import.meta.env.VITE_BASE_URL + endpoints.prices).then((res) =>
    res.json()
  );

interface RequestData {
  dniType: documentType;
  dni: string;
  name: string;
  lastName: string;
  date: string;
  dniFront: string;
  dniBack: string;
  password: string;
}

export const signup = ({
  dniType,
  dni,
  name,
  lastName,
  date,
  dniFront,
  dniBack,
  password,
}: RequestData) => {
  const data = new FormData();
  data.append("name", name);
  data.append("last_name", lastName);
  data.append("password", password);
  data.append("birth_date", date);
  data.append("files[]", dniFront);
  data.append("files[]", dniBack);
  data.append("dni", dni);
  data.append("dni_type", dniType);

  return fetch(import.meta.env.VITE_BASE_URL + endpoints.signup, {
    method: "post",
    body: data,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error();
    })
    .catch(() => {
      throw new Error("Ups! Hubo un error");
    });
};
