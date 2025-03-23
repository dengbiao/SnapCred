import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UploadPage from "@app/pages/UploadPage";

// Mock the Layout component
jest.mock("@presentation/components/layout/Layout", () => {
  return ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-layout">{children}</div>
  );
});

// 模拟全局URL.createObjectURL
global.URL.createObjectURL = jest.fn(() => "mockedUrl");

describe("UploadPage", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <UploadPage />
      </BrowserRouter>
    );
  });

  it("renders the upload page title", () => {
    const pageTitle = screen.getByRole("heading", { name: /上传您的照片/i });
    expect(pageTitle).toBeInTheDocument();
  });

  it("renders the upload description", () => {
    const description = screen.getByText(/请上传一张清晰的面部照片/i);
    expect(description).toBeInTheDocument();
  });

  it("renders the photo upload component", () => {
    const uploadArea = screen.getByTestId("upload-container");
    expect(uploadArea).toBeInTheDocument();
  });

  it("renders the photo requirements section", () => {
    const requirementsTitle = screen.getByText(/支持的图片格式和要求/i);
    expect(requirementsTitle).toBeInTheDocument();
  });

  it("shows preview when photo is selected", () => {
    // 模拟文件选择
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    const fileInput = screen.getByTestId("file-input");
    fireEvent.change(fileInput, { target: { files: [file] } });

    // 检查预览是否显示
    const previewImage = screen.getByAltText(/Preview/i);
    expect(previewImage).toBeInTheDocument();
    expect(previewImage).toHaveAttribute("src", "mockedUrl");
  });

  it("shows action buttons when photo is selected", () => {
    // 模拟文件选择
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    const fileInput = screen.getByTestId("file-input");
    fireEvent.change(fileInput, { target: { files: [file] } });

    // 检查按钮是否显示
    const continueButton = screen.getByText(/继续/i);
    const reselectButton = screen.getByText(/重新选择/i);
    expect(continueButton).toBeInTheDocument();
    expect(reselectButton).toBeInTheDocument();
  });

  it("resets photo selection when 'reselect' is clicked", () => {
    // 模拟文件选择
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    const fileInput = screen.getByTestId("file-input");
    fireEvent.change(fileInput, { target: { files: [file] } });

    // 检查预览是否显示
    const previewImage = screen.getByAltText(/Preview/i);
    expect(previewImage).toBeInTheDocument();

    // 点击"重新选择"按钮
    const reselectButton = screen.getByText(/重新选择/i);
    fireEvent.click(reselectButton);

    // 检查预览是否不再显示
    expect(screen.queryByAltText(/Preview/i)).not.toBeInTheDocument();
  });
});
