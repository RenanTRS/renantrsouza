import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Hero } from "./index";

describe("Hero component", () => {
  describe("Avatar", () => {
    it("should be able to render a picture", () => {
      render(<Hero />);

      const img = screen.getByRole("img", {
        name: "Uma foto artística do desenvolvedor."
      });

      expect(img).toBeInTheDocument();
    });
  });

  describe("Headings", () => {
    it("should be able to render headings", () => {
      render(<Hero />);

      const headingH1 = screen.getByRole("heading", {
        level: 1,
        name: "Renan T. R. Souza"
      });
      const headingH2 = screen.getByRole("heading", {
        level: 2,
        name: "Front-end Developer"
      });

      expect(headingH1).toBeInTheDocument();
      expect(headingH2).toBeInTheDocument();
    });
  });

  describe("Links", () => {
    it("should be able to render anchor links", () => {
      render(<Hero />);

      const download = screen.getByRole("link", { name: "Download CV" });
      const whatsappLink = screen.getByRole("link", {
        name: "Link para o WhatsApp"
      });
      const linkedinLink = screen.getByRole("link", {
        name: "Link para o LinkedIn"
      });
      const githubLink = screen.getByRole("link", {
        name: "Link para o GitHub"
      });

      expect(download).toHaveAttribute(
        "href",
        "/documents/renan_tiago_ribeiro_de_souza.pdf"
      );
      expect(whatsappLink).toBeInTheDocument();
      expect(linkedinLink).toBeInTheDocument();
      expect(githubLink).toBeInTheDocument();
    });
  });
});
