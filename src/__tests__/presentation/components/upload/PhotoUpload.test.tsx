import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PhotoUpload from "../../../../presentation/components/upload/PhotoUpload";

describe("PhotoUpload Component", () => {
  const mockOnPhotoSelect = jest.fn();
  const defaultProps = {
    onPhotoSelect: mockOnPhotoSelect,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<PhotoUpload {...defaultProps} />);
    expect(screen.getByTestId("photo-upload-area")).toBeInTheDocument();
  });

  it("displays upload instructions", () => {
    render(<PhotoUpload {...defaultProps} />);
    expect(screen.getByText(/点击或拖拽照片到这里/i)).toBeInTheDocument();
  });

  it("renders a file input element", () => {
    render(<PhotoUpload {...defaultProps} />);
    const fileInput = screen.getByTestId("file-input");
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute("type", "file");
    expect(fileInput).toHaveAttribute("accept", "image/*");
  });

  it("shows photo requirements", () => {
    render(<PhotoUpload {...defaultProps} />);
    expect(screen.getByTestId("photo-requirements")).toBeInTheDocument();
  });

  it("calls onPhotoSelect when a file is selected", async () => {
    render(<PhotoUpload {...defaultProps} />);

    const file = new File(["(binary content)"], "photo.jpg", {
      type: "image/jpeg",
    });
    const fileInput = screen.getByTestId("file-input");

    await userEvent.upload(fileInput, file);

    expect(mockOnPhotoSelect).toHaveBeenCalledTimes(1);
    expect(mockOnPhotoSelect).toHaveBeenCalledWith(file);
  });

  it("changes class when drag enters and leaves", () => {
    render(<PhotoUpload {...defaultProps} />);

    const uploadArea = screen.getByTestId("photo-upload-area");
    expect(uploadArea).not.toHaveClass("drag-active");

    fireEvent.dragEnter(uploadArea);
    expect(uploadArea).toHaveClass("drag-active");

    fireEvent.dragLeave(uploadArea);
    expect(uploadArea).not.toHaveClass("drag-active");
  });

  it("prevents default on drag over", () => {
    render(<PhotoUpload {...defaultProps} />);

    const uploadArea = screen.getByTestId("photo-upload-area");
    const dragOverEvent = createEvent.dragOver(uploadArea);
    const preventDefaultSpy = jest.spyOn(dragOverEvent, "preventDefault");

    fireEvent(uploadArea, dragOverEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it("handles file drop", () => {
    render(<PhotoUpload {...defaultProps} />);

    const uploadArea = screen.getByTestId("photo-upload-area");
    const file = new File(["(binary content)"], "photo.jpg", {
      type: "image/jpeg",
    });

    // Create a mock drop event with files
    const dropEvent = createEvent.drop(uploadArea);
    Object.defineProperty(dropEvent, "dataTransfer", {
      value: {
        files: [file],
      },
    });

    fireEvent(uploadArea, dropEvent);

    expect(mockOnPhotoSelect).toHaveBeenCalledTimes(1);
    expect(mockOnPhotoSelect).toHaveBeenCalledWith(file);
  });
});
