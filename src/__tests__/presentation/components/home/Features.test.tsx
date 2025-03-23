import { render, screen } from "@testing-library/react";
import Features from "../../../../presentation/components/home/Features";

describe("Features Component", () => {
  it("renders without crashing", () => {
    render(<Features />);
  });

  it("renders the section title", () => {
    render(<Features />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain("平台特点");
  });

  it("displays at least 3 feature cards", () => {
    render(<Features />);

    const featureCards = screen.getAllByTestId(/feature-card-/);
    expect(featureCards.length).toBeGreaterThanOrEqual(3);
  });

  it("each feature has a title and description", () => {
    render(<Features />);

    const featureCards = screen.getAllByTestId(/feature-card-/);

    featureCards.forEach((card) => {
      const title = card.querySelector("h3");
      const description = card.querySelector("p");

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(title?.textContent?.length).toBeGreaterThan(0);
      expect(description?.textContent?.length).toBeGreaterThan(0);
    });
  });

  it("each feature has an icon", () => {
    render(<Features />);

    const featureIcons = screen.getAllByTestId(/feature-icon-/);
    expect(featureIcons.length).toBeGreaterThanOrEqual(3);

    featureIcons.forEach((icon) => {
      expect(icon).toBeInTheDocument();
    });
  });

  it("applies responsive layout for different screen sizes", () => {
    render(<Features />);

    const featuresSection = screen.getByTestId("features-section");
    expect(featuresSection).toHaveClass("features-container");

    const featuresList = screen.getByTestId("features-list");
    expect(featuresList).toHaveClass("features-grid");
  });
});
