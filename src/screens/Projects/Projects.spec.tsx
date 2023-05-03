import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Projects } from "./";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      push: jest.fn()
    };
  }
}));

const mockOneProject = [
  {
    id: "1",
    icon: { url: "https://media.graphassets.com/bCr89R2ROmeKbIwACrBQ" },
    name: "gitapp",
    cover: { url: "https://media.graphassets.com/VTKoQElKQiG1IkGv0U7U" },
    coverblur: "LKQ0aS%L_2Io?aR%M{j]~qxuWVj]"
  }
];

const mockTwoProject = [
  {
    id: "1",
    icon: { url: "https://media.graphassets.com/bCr89R2ROmeKbIwACrBQ" },
    name: "gitapp",
    cover: { url: "https://media.graphassets.com/VTKoQElKQiG1IkGv0U7U" },
    coverblur: "LKQ0aS%L_2Io?aR%M{j]~qxuWVj]"
  },
  {
    id: "2",
    icon: { url: "https://media.graphassets.com/bCr89R2ROmeKbIwACrBQ" },
    name: "someone",
    cover: { url: "https://media.graphassets.com/VTKoQElKQiG1IkGv0U7U" },
    coverblur: "LKQ0aS%L_2Io?aR%M{j]~qxuWVj]"
  }
];

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
      render(<Projects projects={mockOneProject} />);
      mockAllIsIntersecting(true);

      const titleProjects = screen.getByText("Projetos");

      expect(titleProjects).toBeInTheDocument();
    });
  });

  describe("Title large screen", () => {
    beforeEach(() => mockMatchMedia(false));
    it("should be able rendering the text Meus Projetos", () => {
      render(<Projects projects={mockOneProject} />);
      mockAllIsIntersecting(true);

      const titleProjects = screen.getByText("Meus Projetos");
      expect(titleProjects).toBeInTheDocument();
    });
  });

  describe("Project cards", () => {
    beforeEach(() => mockMatchMedia(false));

    it("should be able rendering the card", () => {
      render(<Projects projects={mockOneProject} />);
      mockAllIsIntersecting(true);

      const cardBlock = screen.getAllByTestId("card");

      expect(cardBlock.length).not.toBe(2);
      expect(cardBlock.length).toBe(1);
    });

    it("should be able rendering two cards", () => {
      render(<Projects projects={mockTwoProject} />);
      mockAllIsIntersecting(true);

      const cardsBlock = screen.getAllByTestId("card");

      expect(cardsBlock.length).toBe(2);
      expect(cardsBlock.length).not.toBe(1);
    });

    it("should be able rendering the title card and his icon", () => {
      render(<Projects projects={mockOneProject} />);
      mockAllIsIntersecting(true);

      const titleCard = screen.getByText(mockOneProject[0].name);
      expect(titleCard).toBeInTheDocument();

      const iconCard = screen.getByAltText("Logo do projeto");
      expect(iconCard).toBeInTheDocument();
    });

    it("should be able rendering the cover from project card", () => {
      render(<Projects projects={mockOneProject} />);
      mockAllIsIntersecting(true);

      const coverProject = screen.getByAltText("Capa do projeto");
      expect(coverProject).toBeInTheDocument();
    });

    it("should be able rendering a button from project card", () => {
      render(<Projects projects={mockOneProject} />);
      mockAllIsIntersecting(true);

      const buttonOfCard = screen.getByRole("button", { name: /Acessar/i });
      expect(buttonOfCard).toBeInTheDocument();
    });
  });
});
