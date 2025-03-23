import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Testimonials from "../../../../presentation/components/home/Testimonials";

describe("Testimonials Component", () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Testimonials />
      </BrowserRouter>
    );

  it("renders without crashing", () => {
    renderComponent();
    expect(screen.getByTestId("testimonials-section")).toBeInTheDocument();
  });

  it("displays the section title", () => {
    renderComponent();
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toHaveTextContent(/用户评价/i);
  });

  it("renders multiple testimonial cards", () => {
    renderComponent();
    const testimonialCards = screen.getAllByTestId("testimonial-card");
    expect(testimonialCards.length).toBeGreaterThanOrEqual(3);
  });

  it("displays user names and avatars", () => {
    renderComponent();
    const userNames = screen.getAllByTestId("testimonial-name");
    expect(userNames.length).toBeGreaterThanOrEqual(3);

    const avatars = screen.getAllByTestId("testimonial-avatar");
    expect(avatars.length).toBeGreaterThanOrEqual(3);
  });

  it("contains testimonial content", () => {
    renderComponent();
    const contents = screen.getAllByTestId("testimonial-content");
    expect(contents.length).toBeGreaterThanOrEqual(3);

    // Check that content isn't empty
    contents.forEach((content) => {
      expect(content.textContent?.trim().length).toBeGreaterThan(0);
    });
  });

  it("displays star ratings", () => {
    renderComponent();
    const ratings = screen.getAllByTestId("testimonial-rating");
    expect(ratings.length).toBeGreaterThanOrEqual(3);
  });

  it("renders testimonials in a responsive grid", () => {
    renderComponent();
    const testimonialGrid = screen.getByTestId("testimonials-grid");
    expect(testimonialGrid).toBeInTheDocument();
  });
});
