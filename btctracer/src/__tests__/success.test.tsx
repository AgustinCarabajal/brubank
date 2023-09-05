import { render, screen } from "@testing-library/react";
import { Success } from "../pages";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/* The code is defining a test suite using the `describe` function. The test suite is named
"BitcoinTracer test suite". Inside the test suite, there is a test case defined using the `it`
function. The test case is named "Should Render Success Component". */
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
