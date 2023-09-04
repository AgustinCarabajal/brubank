import { render, screen } from "@testing-library/react";
import { Success } from "../pages";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("BitcoinTracer test suite", () => {
  it("Should Render Success Component", async () => {
    render(
      <BrowserRouter>
        <Success />
      </BrowserRouter>
    );

    expect(screen.getByText(/Formulario enviado/i)).toBeInTheDocument();
  });
});
