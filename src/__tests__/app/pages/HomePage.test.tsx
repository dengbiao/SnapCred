import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "@app/pages/HomePage";

// Mock the Layout component since we're testing HomePage specifically
jest.mock("@presentation/components/layout/Layout", () => {
  return ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mocked-layout">{children}</div>
  );
});

describe("HomePage", () => {
  beforeEach(() => {
    // Wrap component in BrowserRouter since it uses Link from react-router-dom
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  it("renders the hero section", () => {
    // Check for presence of hero content
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("contains call-to-action button", () => {
    // Looking for CTA buttons in the hero section
    const actionButtons = screen.getAllByRole("link");
    expect(actionButtons.length).toBeGreaterThan(0);
  });

  it("provides navigation links to other pages", () => {
    // Check for links to guide or about pages
    const guideLink =
      screen.getByText(/开始使用|立即制作|创建证件照|立即体验/i);
    expect(guideLink).toBeInTheDocument();
  });
});
