import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

import { About } from "./index";

describe("About component", () => {
  describe("Heading", () => {
    it("should be able to render the message Sobre mim into Heading", () => {
      render(<About />);
      mockAllIsIntersecting(true);

      const heading = screen.getByRole("heading", { name: "Sobre mim" });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("Imgs", () => {
    it("should be able to render the images", () => {
      render(<About />);
      mockAllIsIntersecting(true);

      const imgs = screen.getAllByTestId("tecnologies-logo");

      expect(imgs.length).toEqual(12);
    });
  });

  describe("Text", () => {
    it("should be able to render the introduction about", () => {
      render(<About />);
      mockAllIsIntersecting(true);

      const text = screen.getByText(/Olá/i);
      expect(text).toBeInTheDocument();
    });
  });
});
