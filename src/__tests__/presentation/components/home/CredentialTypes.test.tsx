import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CredentialTypes } from "../../../../presentation/components/home/CredentialTypes";

describe("CredentialTypes Component", () => {
  it("renders without crashing", () => {
    render(<CredentialTypes />);
    // 如果渲染没有抛出错误，则测试通过
  });

  it("renders the section title", () => {
    render(<CredentialTypes />);
    const titleElement = screen.getByRole("heading", { name: /证书类型/i });
    expect(titleElement).toBeInTheDocument();
  });

  it("displays a subtitle or description", () => {
    render(<CredentialTypes />);
    const subtitleElement = screen.getByText(/多样化的证书类型满足不同需求/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  it("displays at least 3 credential types", () => {
    render(<CredentialTypes />);
    const credentialTypeCards = screen.getAllByTestId("credential-type-card");
    expect(credentialTypeCards.length).toBeGreaterThanOrEqual(3);
  });

  it("each credential type has a title and description", () => {
    render(<CredentialTypes />);
    const credentialTypeCards = screen.getAllByTestId("credential-type-card");

    credentialTypeCards.forEach((card) => {
      const title = card.querySelector('[data-testid="credential-title"]');
      const description = card.querySelector(
        '[data-testid="credential-description"]'
      );

      expect(title).toBeInTheDocument();
      expect(title?.textContent).not.toBe("");

      expect(description).toBeInTheDocument();
      expect(description?.textContent).not.toBe("");
    });
  });

  it("each credential type has an image or icon", () => {
    render(<CredentialTypes />);
    const credentialImages = screen.getAllByTestId("credential-image");
    expect(credentialImages.length).toBeGreaterThanOrEqual(3);
  });

  it("applies responsive layout for different screen sizes", () => {
    render(<CredentialTypes />);
    const credentialTypesSection = screen.getByTestId(
      "credential-types-section"
    );
    const credentialTypesList = screen.getByTestId("credential-types-list");

    expect(credentialTypesSection).toHaveClass("credential-types-container");
    expect(credentialTypesList).toHaveClass("credential-types-grid");
  });
});
