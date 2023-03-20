import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Projects } from "./";

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

describe("Projects component", () => {
  describe("Title short screen", () => {
    beforeEach(() => mockMatchMedia(true));

    it("sould be able rendering the text Projetos", () => {
      render(<Projects />);

      const titleProjects = screen.getByText("Projetos");

      expect(titleProjects).toBeInTheDocument();
    });
  });

  describe("Title large screen", () => {
    beforeEach(() => mockMatchMedia(false));
    it("should be able rendering the text Meus Projetos", () => {
      render(<Projects />);
      const titleProjects = screen.getByText("Meus Projetos");
      expect(titleProjects).toBeInTheDocument();
    });
  });
});
