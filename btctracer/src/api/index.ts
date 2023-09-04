import { RequestData } from "../types";
import { endpoints } from "./constants";

export const getPrices = () =>
  fetch(process.env.VITE_BASE_URL + endpoints.prices).then((res) => res.json());

export const signup = async ({
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

  return fetch(process.env.VITE_BASE_URL + endpoints.signup, {
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
