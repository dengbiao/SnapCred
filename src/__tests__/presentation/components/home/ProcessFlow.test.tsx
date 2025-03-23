import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProcessFlow from "../../../../presentation/components/home/ProcessFlow";

describe("ProcessFlow Component", () => {
  it("renders the component with a title", () => {
    render(<ProcessFlow />);

    expect(
      screen.getByRole("heading", { name: /如何使用 - 四步轻松获取证件照/i })
    ).toBeInTheDocument();
  });

  it("displays the correct number of steps", () => {
    render(<ProcessFlow />);

    // The component should display 4 steps
    const steps = screen.getAllByTestId("process-step");
    expect(steps).toHaveLength(4);
  });

  it("renders each step with an icon, title and description", () => {
    render(<ProcessFlow />);

    const steps = screen.getAllByTestId("process-step");

    steps.forEach((step) => {
      // Each step should have an icon
      expect(step.querySelector("svg")).toBeInTheDocument();

      // Each step should have a title
      const title = step.querySelector("h3");
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent(/.+/);

      // Each step should have a description
      const description = step.querySelector("p");
      expect(description).toBeInTheDocument();
      expect(description).toHaveTextContent(/.+/);
    });
  });

  it("has proper styling for a responsive layout", () => {
    const { container } = render(<ProcessFlow />);

    // The container should have the process-section class
    const flowContainer = container.firstChild;
    expect(flowContainer).toHaveClass("process-section");

    // Test for responsive design elements
    const stepsContainer = screen.getByTestId("steps-container");
    expect(stepsContainer).toHaveClass("process-steps");
  });
});
