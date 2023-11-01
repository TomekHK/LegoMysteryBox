import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App component", () => {
    it("renders the title", () => {
        render(<App />);
        const titleElement = screen.getByText(/LEGO Harry Potter mystery box!/i);
        expect(titleElement).toBeInTheDocument();
    });

    it("renders the 'LET'S GO!' button", () => {
        render(<App />);
        const buttonElement = screen.getByRole("button", { name: /let's go!/i });
        expect(buttonElement).toBeInTheDocument();
    });

    it("shows an alert when the 'LET'S GO!' button is clicked", () => {
        const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
        render(<App />);
        const buttonElement = screen.getByRole("button", { name: /let's go!/i });
        fireEvent.click(buttonElement);
        expect(alertSpy).toHaveBeenCalledWith("Hello World!");
        alertSpy.mockRestore();
    });
});

