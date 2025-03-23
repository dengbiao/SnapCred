import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../../../presentation/components/ui/Button";

describe("Button Component", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: /Click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("primary");
  });

  it("renders with primary variant", () => {
    render(<Button variant="primary">Primary Button</Button>);

    const button = screen.getByRole("button", { name: /Primary Button/i });
    expect(button).toHaveClass("primary");
  });

  it("renders with secondary variant", () => {
    render(<Button variant="secondary">Secondary Button</Button>);

    const button = screen.getByRole("button", { name: /Secondary Button/i });
    expect(button).toHaveClass("secondary");
  });

  it("renders with outlined variant", () => {
    render(<Button variant="outlined">Outlined Button</Button>);

    const button = screen.getByRole("button", { name: /Outlined Button/i });
    expect(button).toHaveClass("outlined");
  });

  it("renders with different sizes", () => {
    render(<Button size="small">Small Button</Button>);
    const smallButton = screen.getByRole("button", { name: /Small Button/i });
    expect(smallButton).toHaveClass("small");

    render(<Button size="large">Large Button</Button>);
    const largeButton = screen.getByRole("button", { name: /Large Button/i });
    expect(largeButton).toHaveClass("large");
  });

  it("renders as disabled", () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole("button", { name: /Disabled Button/i });
    expect(button).toBeDisabled();
  });

  it("renders with custom className", () => {
    render(<Button className="custom-class">Custom Button</Button>);

    const button = screen.getByRole("button", { name: /Custom Button/i });
    expect(button).toHaveClass("custom-class");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: /Click me/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("doesn't call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );

    const button = screen.getByRole("button", { name: /Click me/i });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with full width", () => {
    render(<Button fullWidth>Full Width Button</Button>);

    const button = screen.getByRole("button", { name: /Full Width Button/i });
    expect(button).toHaveClass("full-width");
  });
});
