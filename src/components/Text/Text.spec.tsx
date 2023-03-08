import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Text } from "./index";

const children = "Test message";

describe("Text component", () => {
  it("should be able to render this component", () => {
    render(<Text>{children}</Text>);

    const textComponent = screen.getByText("Test message");

    expect(textComponent).toBeInTheDocument();
    expect(textComponent).not.toBe("Test someone");
  });
});
