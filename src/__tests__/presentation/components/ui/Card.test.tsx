import { render, screen } from "@testing-library/react";
import Card from "../../../../presentation/components/ui/Card";

describe("Card Component", () => {
  it("renders with default props", () => {
    render(<Card>Card Content</Card>);

    const card = screen.getByText("Card Content");
    expect(card.parentElement).toHaveClass("card");
    expect(card.parentElement).toHaveClass("default");
  });

  it("renders with custom className", () => {
    render(<Card className="custom-card">Card Content</Card>);

    const card = screen.getByText("Card Content");
    expect(card.parentElement).toHaveClass("custom-card");
  });

  it("renders with different variants", () => {
    render(<Card variant="elevated">Elevated Card</Card>);

    const elevatedCard = screen.getByText("Elevated Card");
    expect(elevatedCard.parentElement).toHaveClass("elevated");

    render(<Card variant="outlined">Outlined Card</Card>);

    const outlinedCard = screen.getByText("Outlined Card");
    expect(outlinedCard.parentElement).toHaveClass("outlined");
  });

  it("renders with different padding sizes", () => {
    render(<Card padding="small">Small Padding</Card>);

    const smallPadding = screen.getByText("Small Padding");
    expect(smallPadding.parentElement).toHaveClass("padding-small");

    render(<Card padding="large">Large Padding</Card>);

    const largePadding = screen.getByText("Large Padding");
    expect(largePadding.parentElement).toHaveClass("padding-large");
  });

  it("renders with clickable property", () => {
    render(<Card clickable>Clickable Card</Card>);

    const clickableCard = screen.getByText("Clickable Card");
    expect(clickableCard.parentElement).toHaveClass("clickable");
  });

  it("renders with a title", () => {
    render(<Card title="Card Title">Card Content</Card>);

    const cardTitle = screen.getByText("Card Title");
    expect(cardTitle).toBeInTheDocument();
    expect(cardTitle).toHaveClass("card-title");
  });

  it("renders with header actions", () => {
    const headerActions = <button>Action</button>;
    render(
      <Card title="Card with Actions" headerActions={headerActions}>
        Card Content
      </Card>
    );

    const actionButton = screen.getByRole("button", { name: "Action" });
    expect(actionButton).toBeInTheDocument();
  });

  it("renders with a footer", () => {
    const footer = <div className="card-footer">Footer Content</div>;
    render(<Card footer={footer}>Card Content</Card>);

    const footerContent = screen.getByText("Footer Content");
    expect(footerContent).toBeInTheDocument();
    expect(footerContent.parentElement).toHaveClass("card-footer-container");
  });
});
