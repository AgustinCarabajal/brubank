import { RequestData } from "../types";
import { endpoints } from "./constants";

/**
 * The function `getPrices` fetches data from a specified URL and returns the response as a JSON
 * object.
 */
export const getPrices = () =>
  fetch(process.env.VITE_BASE_URL + endpoints.prices).then((res) => res.json());

/**
 * The `signup` function sends a POST request to a signup endpoint with user data and returns a promise
 * that resolves to the response JSON or throws an error.
 * @param {RequestData}  - - `dniType`: The type of identification document (e.g., "passport",
 * "driver's license", etc.)
 * @returns The `signup` function is returning a promise that resolves to the JSON response from the
 * API if the response is successful (status code 200), otherwise it throws an error.
 */
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
