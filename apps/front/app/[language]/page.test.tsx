import { expect, test, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "./page";

vi.mock("next/font/google", () => ({
  Inter: () => ({
    className: "inter",
  }),
}));

test("home", () => {
  render(<Home params={{ language: "en" }} />);
  const main = within(screen.getByRole("main"));

  expect(main).toBeDefined();
});
