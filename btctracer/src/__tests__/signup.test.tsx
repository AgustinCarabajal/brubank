import * as ReactQuery from "react-query";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Signup } from "../pages";
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

jest.spyOn(ReactQuery, "useMutation").mockImplementation(
  jest.fn().mockReturnValue({
    mutate: jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 200 }),
      })
    ),
    isLoading: false,
    isSuccess: true,
  })
);

let file: File;

beforeEach(() => {
  file = new File(["(⌐□_□)"], "dni.png", { type: "image/png" });
});

describe("BitcoinTracer test suite", () => {
  it("Should Navigate through Signup Component", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    expect(screen.getByText(/Crear cuenta/i)).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("dni-input"), {
      target: { value: "12.323.123" },
    });
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "test@test.com" },
    });
    fireEvent.change(screen.getByTestId("name-input"), {
      target: { value: "name" },
    });
    fireEvent.change(screen.getByTestId("lastname-input"), {
      target: { value: "lastname" },
    });
    fireEvent.change(screen.getByTestId("date-input"), {
      target: { value: "12/12/2000" },
    });

    fireEvent.click(screen.getByText(/Siguiente/i));

    expect(screen.getByText(/Subir docu/i)).toBeInTheDocument();

    global.URL.createObjectURL = jest.fn(() => "image-url");

    await waitFor(() =>
      fireEvent.change(screen.getByTestId("dniFront"), {
        target: { files: [file] },
      })
    );

    await waitFor(() =>
      fireEvent.change(screen.getByTestId("dniBack"), {
        target: { files: [file] },
      })
    );

    fireEvent.click(screen.getByText(/Siguiente/i));

    expect(screen.getByText(/Seguridad/i)).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "Test123!" },
    });

    fireEvent.change(screen.getByTestId("confirm-input"), {
      target: { value: "Test123!" },
    });

    fireEvent.click(screen.getByText(/Siguiente/i));
  });

  it("Should validate password", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    expect(screen.getByText(/Crear cuenta/i)).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("dni-input"), {
      target: { value: "12.323.123" },
    });
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "test@test.com" },
    });
    fireEvent.change(screen.getByTestId("name-input"), {
      target: { value: "name" },
    });
    fireEvent.change(screen.getByTestId("lastname-input"), {
      target: { value: "lastname" },
    });
    fireEvent.change(screen.getByTestId("date-input"), {
      target: { value: "12/12/2000" },
    });

    fireEvent.click(screen.getByText(/Siguiente/i));

    expect(screen.getByText(/Subir docu/i)).toBeInTheDocument();

    global.URL.createObjectURL = jest.fn(() => "image-url");

    await waitFor(() =>
      fireEvent.change(screen.getByTestId("dniFront"), {
        target: { files: [file] },
      })
    );

    await waitFor(() =>
      fireEvent.change(screen.getByTestId("dniBack"), {
        target: { files: [file] },
      })
    );

    fireEvent.click(screen.getByText(/Siguiente/i));

    expect(screen.getByText(/Seguridad/i)).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "Test123!" },
    });

    fireEvent.change(screen.getByTestId("confirm-input"), {
      target: { value: "otro" },
    });

    fireEvent.click(screen.getByText(/Siguiente/i));

    expect(screen.getByText(/Las claves no coinciden/i)).toBeInTheDocument();
  });
});
