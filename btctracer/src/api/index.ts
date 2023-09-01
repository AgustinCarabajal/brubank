import { endpoints } from "./constants";

export const getPrices = () =>
  fetch(import.meta.env.VITE_BASE_URL + endpoints.prices).then((res) =>
    res.json()
  );
