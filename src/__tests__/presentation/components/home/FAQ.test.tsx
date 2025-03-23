import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FAQ from "../../../../presentation/components/home/FAQ";

describe("FAQ Component", () => {
  it("renders the component with a title", () => {
    render(<FAQ />);

    expect(
      screen.getByRole("heading", { name: /常见问题/i })
    ).toBeInTheDocument();
  });

  it("displays the correct number of questions", () => {
    render(<FAQ />);

    // The component should display at least 4 FAQ items
    const questions = screen.getAllByTestId("faq-item");
    expect(questions.length).toBeGreaterThanOrEqual(4);
  });

  it("renders each FAQ item with a question and initially hidden answer", () => {
    render(<FAQ />);

    const faqItems = screen.getAllByTestId("faq-item");

    faqItems.forEach((item) => {
      // Each item should have a visible question
      const question = item.querySelector('[data-testid="faq-question"]');
      expect(question).toBeInTheDocument();
      expect(question).toBeVisible();

      // Each item should have an answer that is initially hidden
      const answer = item.querySelector('[data-testid="faq-answer"]');
      expect(answer).toBeInTheDocument();
      expect(answer).not.toBeVisible();
    });
  });

  it("toggles answer visibility when question is clicked", () => {
    render(<FAQ />);

    const firstQuestion = screen.getAllByTestId("faq-question")[0];
    const firstAnswer = screen.getAllByTestId("faq-answer")[0];

    // Initially the answer should be hidden
    expect(firstAnswer).not.toBeVisible();

    // Click the question
    fireEvent.click(firstQuestion);

    // After clicking, the answer should be visible
    expect(firstAnswer).toBeVisible();

    // Click again to hide
    fireEvent.click(firstQuestion);

    // Answer should be hidden again
    expect(firstAnswer).not.toBeVisible();
  });

  it("has responsive layout styles", () => {
    const { container } = render(<FAQ />);

    // First child is the section element
    const section = container.firstChild as HTMLElement;
    expect(section).toHaveClass("faq-section");

    // The second child of the section is the inner container
    const innerContainer = section.firstChild as HTMLElement;
    expect(innerContainer).toHaveClass("faq-container");
  });
});
