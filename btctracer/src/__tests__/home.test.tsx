import * as ReactQuery from "react-query";
import { render, within, screen } from "@testing-library/react";
import { Home } from "../pages";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.spyOn(ReactQuery, "useQuery").mockImplementation(
  jest.fn().mockReturnValue({
    data: [
      {
        BTC: 764867.9296627028,
      },
      {
        ETH: 179444.81251065098,
      },
    ],
    isLoading: false,
    isSuccess: true,
  })
);

describe("BitcoinTracer test suite", () => {
  it("Should Render Home Component", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const { getByText } = within(screen.getByTestId("logo-container"));
    expect(getByText("Bitcoin")).toBeInTheDocument();
  });
});
