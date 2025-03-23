import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "../../../../presentation/components/home/Hero";

describe("Hero Component", () => {
  const renderWithRouter = (ui: React.ReactElement) => {
    return render(ui, { wrapper: BrowserRouter });
  };

  it("renders without crashing", () => {
    renderWithRouter(<Hero />);
  });

  it("renders the main heading", () => {
    renderWithRouter(<Hero />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain("快证先生");
  });

  it("renders the subheading text", () => {
    renderWithRouter(<Hero />);

    const subheading = screen.getByText(/快速生成各类标准证件照/i);
    expect(subheading).toBeInTheDocument();
  });

  it("displays the call-to-action button", () => {
    renderWithRouter(<Hero />);

    const ctaButton = screen.getByRole("link", { name: /立即体验/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute("href", "/upload");
  });

  it("displays a hero image", () => {
    renderWithRouter(<Hero />);

    const heroImage = screen.getByAltText(/证件照示例/i);
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src");
  });

  it("renders the secondary CTA button", () => {
    renderWithRouter(<Hero />);

    const secondaryCta = screen.getByRole("link", { name: /了解更多/i });
    expect(secondaryCta).toBeInTheDocument();
  });

  it("applies responsive classes for different screen sizes", () => {
    renderWithRouter(<Hero />);

    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toHaveClass("hero-container");
  });
});
