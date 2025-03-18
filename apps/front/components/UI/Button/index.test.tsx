import { render, screen } from "@testing-library/react";

import { Button } from ".";

describe("Button", () => {
  it("is truthy", () => {
    const testString = "test";

    render(<Button>{testString}</Button>);

    const text = screen.getByText(testString);

    expect(text).toBeInTheDocument();
  });
});
