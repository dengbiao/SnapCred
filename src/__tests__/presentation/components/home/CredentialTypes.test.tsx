import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CredentialTypes } from "@presentation/components/home/CredentialTypes";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe("CredentialTypes Component", () => {
  it("renders without crashing", () => {
    renderWithRouter(<CredentialTypes />);
    // 如果渲染没有抛出错误，则测试通过
  });

  it("renders the section title", () => {
    renderWithRouter(<CredentialTypes />);
    const titleElement = screen.getByRole("heading", {
      name: /支持的证件照类型/i,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it("displays a subtitle or description", () => {
    renderWithRouter(<CredentialTypes />);
    const subtitleElement = screen.getByText(/多种规格的证件照片一站式解决/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  it("displays credential types", () => {
    renderWithRouter(<CredentialTypes />);
    const credentialTypeCards = screen.getAllByTestId("credential-type-card");
    expect(credentialTypeCards.length).toBeGreaterThanOrEqual(3);
  });

  it("each credential type has a title", () => {
    renderWithRouter(<CredentialTypes />);
    const credentialTypeCards = screen.getAllByTestId("credential-type-card");

    credentialTypeCards.forEach((card) => {
      const title = card.querySelector('[data-testid="credential-title"]');
      expect(title).toBeInTheDocument();
      expect(title?.textContent).not.toBe("");
    });
  });

  it("each credential type has an icon", () => {
    renderWithRouter(<CredentialTypes />);
    const credentialTypeCards = screen.getAllByTestId("credential-type-card");

    credentialTypeCards.forEach((card) => {
      const icon = card.querySelector(".credential-icon");
      expect(icon).toBeInTheDocument();
    });
  });

  it("displays a 'view all' button with correct link", () => {
    renderWithRouter(<CredentialTypes />);
    const viewAllButton = screen.getByText(/查看全部规格/i);
    expect(viewAllButton).toBeInTheDocument();
    expect(viewAllButton.tagName).toBe("A");
    expect(viewAllButton).toHaveAttribute("href", "/photo-specs");
  });

  it("applies responsive layout for different screen sizes", () => {
    renderWithRouter(<CredentialTypes />);
    const credentialTypesSection = screen.getByTestId(
      "credential-types-section"
    );
    const credentialTypesList = screen.getByTestId("credential-types-list");

    expect(credentialTypesSection).toHaveClass("credential-types-container");
    expect(credentialTypesList).toHaveClass("credential-types-grid");
  });
});
