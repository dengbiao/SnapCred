import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CTA from "../../../../presentation/components/home/CTA";

describe("CTA Component", () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <CTA />
      </BrowserRouter>
    );

  it("renders without crashing", () => {
    renderComponent();
    expect(screen.getByTestId("cta-section")).toBeInTheDocument();
  });

  it("displays default title and description", () => {
    renderComponent();
    expect(screen.getByText("立即开始制作您的证件照")).toBeInTheDocument();
    expect(screen.getByText(/免费、快速、专业/i)).toBeInTheDocument();
  });

  it("renders a call-to-action button", () => {
    renderComponent();
    const button = screen.getByRole("link", { name: /开始制作/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/upload");
  });

  it("accepts custom props", () => {
    render(
      <BrowserRouter>
        <CTA
          title="Custom Title"
          description="Custom Description"
          buttonText="Custom Button"
          buttonLink="/custom"
        />
      </BrowserRouter>
    );

    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom Description")).toBeInTheDocument();

    const button = screen.getByRole("link", { name: "Custom Button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/custom");
  });

  it("has the correct styling classes", () => {
    renderComponent();
    expect(screen.getByTestId("cta-section")).toHaveClass("cta-section");
    expect(screen.getByTestId("cta-container")).toHaveClass("cta-container");
  });
});
