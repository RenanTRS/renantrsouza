import { render, screen } from "@testing-library/react";
import { Heading } from "./index";
import "@testing-library/jest-dom";

describe("Heading component", () => {
  it("be able to render a text", () => {
    render(<Heading size="lg">Teste</Heading>);

    const heading = screen.getByText("Teste");

    expect(heading).toBeInTheDocument();
  });
});
