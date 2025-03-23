import { render, screen, fireEvent } from "@testing-library/react";
import PhotoEditor from "@presentation/components/upload/PhotoEditor";
import { CredentialType } from "@domain/models/CredentialType";

// 模拟Canvas的toDataURL方法
HTMLCanvasElement.prototype.toDataURL = jest.fn(
  () => "data:image/jpeg;base64,mockDataUrl"
);

// 模拟CredentialType对象
const createMockCredentialType = (): CredentialType => {
  return new CredentialType({
    id: "passport",
    name: {
      zh: "普通护照照片",
      en: "Passport Photo",
    },
    description: {
      zh: "用于申请普通护照的证件照",
      en: "Photo for regular passport application",
    },
    icon: "/images/icons/passport.svg",
    dimensions: {
      width: 33,
      height: 48,
    },
    previewImage: "/images/credentials/passport.jpg",
  });
};

describe("PhotoEditor Component", () => {
  const mockPhotoUrl =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA==";
  const mockCredentialType = createMockCredentialType();
  const mockOnBack = jest.fn();
  const mockOnComplete = jest.fn();

  const renderComponent = () => {
    return render(
      <PhotoEditor
        photoUrl={mockPhotoUrl}
        credentialType={mockCredentialType}
        onBack={mockOnBack}
        onComplete={mockOnComplete}
      />
    );
  };

  it("renders without crashing", () => {
    renderComponent();

    // 验证页面标题
    expect(screen.getByText("编辑您的照片")).toBeInTheDocument();

    // 验证照片预览
    expect(screen.getByAltText("照片预览")).toBeInTheDocument();

    // 验证证件类型信息
    expect(screen.getByText(mockCredentialType.name.zh)).toBeInTheDocument();
  });

  it("displays editing tools", () => {
    renderComponent();

    // 验证编辑工具
    expect(screen.getByText("调整背景")).toBeInTheDocument();
    expect(screen.getByText("旋转照片")).toBeInTheDocument();
    expect(screen.getByText("亮度调整")).toBeInTheDocument();
  });

  it("calls onBack when back button is clicked", () => {
    renderComponent();

    const backButton = screen.getByText("返回");
    fireEvent.click(backButton);

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it("calls onComplete when complete button is clicked", () => {
    renderComponent();

    const completeButton = screen.getByText("完成");
    fireEvent.click(completeButton);

    expect(mockOnComplete).toHaveBeenCalledTimes(1);
    // 验证传递了编辑后的照片URL
    expect(mockOnComplete).toHaveBeenCalledWith(expect.any(String));
  });
});
