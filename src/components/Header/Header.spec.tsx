import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { Header } from "./index";

const mockMatchMedia = (value: boolean) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: value,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });
};

describe("Header component", () => {
  describe("Logo", () => {
    beforeEach(() => mockMatchMedia(true));
    it("should be able to render the logo", () => {
      render(<Header />);

      const img = screen.getByLabelText("Logo do site.");

      expect(img).toBeInTheDocument();
    });
  });

  describe("Mobile menu", () => {
    beforeEach(() => mockMatchMedia(false));
    it("should be able to render the button to toggle", () => {
      render(<Header />);

      const button = screen.getByLabelText("Abrir menu");
      expect(button).toBeInTheDocument();
    });

    it("should be able to click in this button and change the label text from Abrir menu to Fechar menu", async () => {
      render(<Header />);

      const button = screen.getByLabelText("Abrir menu");
      await userEvent.click(button);

      expect(button).toHaveAttribute("aria-label", "Fechar menu");
    });
  });

  describe("Navigation", () => {
    beforeEach(() => mockMatchMedia(false));
    it("should be able to render a header menu navigation", () => {
      render(<Header />);

      const header = screen.getByRole("menubar");

      expect(header).toBeInTheDocument();
    });

    it("should be able to render a link to download", () => {
      render(<Header />);

      const linkToDownload = screen.getByRole("link", {
        name: "Download CV"
      });

      expect(linkToDownload).toHaveAttribute("download");
    });
  });
});
