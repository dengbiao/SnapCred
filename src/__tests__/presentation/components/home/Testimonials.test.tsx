import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Testimonials from "@presentation/components/home/Testimonials";

describe("Testimonials Component", () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Testimonials />
      </BrowserRouter>
    );

  test("renders the section title", () => {
    renderComponent();
    expect(screen.getByText("用户评价")).toBeInTheDocument();
  });

  test("renders all testimonial cards", () => {
    renderComponent();
    const testimonialCards = screen.getAllByTestId("testimonial-card");
    expect(testimonialCards.length).toBeGreaterThanOrEqual(3);
  });

  test("each testimonial has content and author info", () => {
    renderComponent();
    const testimonialCards = screen.getAllByTestId("testimonial-card");

    testimonialCards.forEach((card) => {
      // Check that each card has content
      const content = card.querySelector(".testimonial-content");
      expect(content).toBeInTheDocument();
      expect(content?.textContent?.trim().length).toBeGreaterThan(0);

      // Check that each card has author info
      const authorName = card.querySelector(".author-name");
      expect(authorName).toBeInTheDocument();
      expect(authorName?.textContent?.trim().length).toBeGreaterThan(0);

      const authorTitle = card.querySelector(".author-title");
      expect(authorTitle).toBeInTheDocument();
      expect(authorTitle?.textContent?.trim().length).toBeGreaterThan(0);
    });
  });

  test("renders testimonials in a responsive grid", () => {
    renderComponent();
    const testimonialGrid = screen.getByTestId("testimonials-grid");
    expect(testimonialGrid).toBeInTheDocument();
  });
});
