import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UploadPage from "../../../app/pages/UploadPage";

// Mock the Layout component
jest.mock("@presentation/components/layout/Layout", () => {
  return ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-layout">{children}</div>
  );
});

describe("UploadPage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <UploadPage />
      </BrowserRouter>
    );
  });

  it("renders the main upload container", () => {
    const uploadContainer = screen.getByTestId("upload-container");
    expect(uploadContainer).toBeInTheDocument();
  });

  it("renders the page title", () => {
    const pageTitle = screen.getByRole("heading", { name: /上传照片/i });
    expect(pageTitle).toBeInTheDocument();
  });

  it("displays photo upload area", () => {
    const uploadArea = screen.getByTestId("photo-upload-area");
    expect(uploadArea).toBeInTheDocument();
  });

  it("shows upload instructions", () => {
    const instructions = screen.getByText(/点击或拖拽照片到这里/i);
    expect(instructions).toBeInTheDocument();
  });

  it("renders a file input element", () => {
    const fileInput = screen.getByTestId("file-input");
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute("type", "file");
    expect(fileInput).toHaveAttribute("accept", "image/*");
  });

  it("displays supported photo requirements", () => {
    const requirements = screen.getByTestId("photo-requirements");
    expect(requirements).toBeInTheDocument();
    expect(screen.getByText(/支持的图片格式/i)).toBeInTheDocument();
  });
});
