import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CTA from "@presentation/components/home/CTA";

describe("CTA Component", () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <CTA />
      </BrowserRouter>
    );

  test("renders the CTA title", () => {
    renderComponent();
    expect(screen.getByText("立即开始制作您的证件照")).toBeInTheDocument();
  });

  test("renders the CTA description text", () => {
    renderComponent();
    expect(
      screen.getByText("免费、快速、专业 - 只需几分钟，获得完美证件照")
    ).toBeInTheDocument();
  });

  test("renders a call-to-action button with correct text", () => {
    renderComponent();
    const button = screen.getByRole("link", { name: /开始制作/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("cta-button");
  });

  test("button links to the upload page", () => {
    renderComponent();
    const button = screen.getByRole("link", { name: /开始制作/i });
    expect(button).toHaveAttribute("href", "/upload");
  });

  test("renders with proper layout and container", () => {
    renderComponent();
    const section = screen.getByTestId("cta-section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("cta-section");

    const container = screen.getByTestId("cta-container");
    expect(container).toBeInTheDocument();
  });
});
