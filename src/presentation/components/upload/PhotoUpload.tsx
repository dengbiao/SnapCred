import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "@styles/components/upload/PhotoUpload.scss";

interface PhotoUploadProps {
  onPhotoSelect: (file: File) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ onPhotoSelect }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onPhotoSelect(files[0]);
    }
  };

  const handleDragEnter = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragActive(false);

    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      onPhotoSelect(files[0]);
    }
  };

  const handleAreaClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="photo-upload-container">
      <div
        className={`upload-area ${isDragActive ? "drag-active" : ""}`}
        onClick={handleAreaClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-testid="photo-upload-area"
      >
        <FaCloudUploadAlt className="upload-icon" />
        <p className="upload-text">点击或拖拽照片到这里</p>
        <p className="upload-subtext">支持JPG、PNG、HEIF等格式</p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="file-input"
          data-testid="file-input"
        />
      </div>

      <div className="requirements-container" data-testid="photo-requirements">
        <h3 className="requirements-title">支持的图片格式和要求</h3>
        <ul className="requirements-list">
          <li>清晰的正面照，面部和肩部完整可见</li>
          <li>自然表情，双眼睁开并看向镜头</li>
          <li>均匀光线，无过度曝光或阴影</li>
          <li>简单背景（将自动移除并替换）</li>
          <li>最低分辨率：600 x 800像素</li>
        </ul>
        <div className="photo-formats">
          <span className="format-badge">JPG</span>
          <span className="format-badge">PNG</span>
          <span className="format-badge">HEIF</span>
          <span className="format-badge">WEBP</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoUpload;
