import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ContactPage from "@app/pages/ContactPage";

// Mock the Layout component since we're testing ContactPage specifically
jest.mock("@presentation/components/layout/Layout", () => {
  return ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mocked-layout">{children}</div>
  );
});

describe("ContactPage", () => {
  beforeEach(() => {
    // Wrap component in BrowserRouter since it might use Links
    render(
      <BrowserRouter>
        <ContactPage />
      </BrowserRouter>
    );
  });

  it("renders the contact page title", () => {
    expect(
      screen.getByRole("heading", { name: /联系我们/i })
    ).toBeInTheDocument();
  });

  it("renders the contact form with all required fields", () => {
    // Check for form elements
    expect(screen.getByLabelText(/姓名/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/邮箱/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/留言/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /提交/i })).toBeInTheDocument();
  });

  it("displays validation errors for empty fields on submit", async () => {
    // Click submit without filling in any fields
    fireEvent.click(screen.getByRole("button", { name: /提交/i }));

    // Expect validation errors to be displayed
    await waitFor(() => {
      expect(screen.getByText(/请输入您的姓名/i)).toBeInTheDocument();
      expect(screen.getByText(/请输入有效的邮箱地址/i)).toBeInTheDocument();
      expect(screen.getByText(/请输入您的留言/i)).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/姓名/i), {
      target: { value: "测试用户" },
    });
    fireEvent.change(screen.getByLabelText(/邮箱/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/留言/i), {
      target: { value: "这是一条测试留言" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /提交/i }));

    // Check for success message
    await waitFor(() => {
      expect(screen.getByText(/感谢您的留言/i)).toBeInTheDocument();
    });
  });

  it("displays contact information section", () => {
    // Check for contact details
    const contactElements = screen.getAllByText(/地址|联系方式|电子邮件/i);
    expect(contactElements.length).toBeGreaterThan(0);
  });
});
