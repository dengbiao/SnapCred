import { render, screen, fireEvent } from "@testing-library/react";
import CredentialSelector from "@presentation/components/upload/CredentialSelector";
import { CredentialType } from "@domain/models/CredentialType";

// 模拟数据
const mockCredentialTypes = [
  new CredentialType({
    id: "test1",
    name: {
      zh: "测试证件1",
      en: "Test Credential 1",
    },
    description: {
      zh: "测试证件描述1",
      en: "Test credential description 1",
    },
    icon: "/test-icon1.svg",
    dimensions: {
      width: 35,
      height: 45,
    },
    previewImage: "/test-preview1.jpg",
  }),
  new CredentialType({
    id: "test2",
    name: {
      zh: "测试证件2",
      en: "Test Credential 2",
    },
    description: {
      zh: "测试证件描述2",
      en: "Test credential description 2",
    },
    icon: "/test-icon2.svg",
    dimensions: {
      width: 25,
      height: 35,
    },
    previewImage: "/test-preview2.jpg",
  }),
];

describe("CredentialSelector", () => {
  const mockOnSelect = jest.fn();
  const mockOnBack = jest.fn();
  const mockPhotoUrl = "test-photo-url.jpg";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with photo preview and credential types", () => {
    render(
      <CredentialSelector
        photoUrl={mockPhotoUrl}
        credentialTypes={mockCredentialTypes}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
      />
    );

    // 验证标题和说明
    expect(screen.getByText("选择证件照类型")).toBeInTheDocument();

    // 验证照片预览
    const photoPreview = screen.getByAltText("您的照片");
    expect(photoPreview).toBeInTheDocument();
    expect(photoPreview).toHaveAttribute("src", mockPhotoUrl);

    // 验证返回按钮
    expect(screen.getByText("返回重新上传")).toBeInTheDocument();

    // 验证证件类型列表
    expect(screen.getByText("测试证件1")).toBeInTheDocument();
    expect(screen.getByText("测试证件2")).toBeInTheDocument();
    expect(screen.getByText("测试证件描述1")).toBeInTheDocument();
    expect(screen.getByText("测试证件描述2")).toBeInTheDocument();

    // 验证尺寸显示
    expect(screen.getByText("35 × 45 mm")).toBeInTheDocument();
    expect(screen.getByText("25 × 35 mm")).toBeInTheDocument();
  });

  it("calls onSelect when a credential type is clicked", () => {
    render(
      <CredentialSelector
        photoUrl={mockPhotoUrl}
        credentialTypes={mockCredentialTypes}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
      />
    );

    // 点击第一个证件类型
    fireEvent.click(screen.getByTestId("credential-type-test1"));

    // 验证onSelect被调用，且传入了正确的参数
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith(mockCredentialTypes[0]);
  });

  it("calls onBack when back button is clicked", () => {
    render(
      <CredentialSelector
        photoUrl={mockPhotoUrl}
        credentialTypes={mockCredentialTypes}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
      />
    );

    // 点击返回按钮
    fireEvent.click(screen.getByText("返回重新上传"));

    // 验证onBack被调用
    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it("displays all credential types correctly", () => {
    render(
      <CredentialSelector
        photoUrl={mockPhotoUrl}
        credentialTypes={mockCredentialTypes}
        onSelect={mockOnSelect}
        onBack={mockOnBack}
      />
    );

    // 验证所有证件类型都被渲染
    const credentialOptions = screen.getAllByTestId(/^credential-type-/);
    expect(credentialOptions).toHaveLength(mockCredentialTypes.length);
  });
});
