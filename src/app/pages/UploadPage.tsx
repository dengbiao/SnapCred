import React, { useState, useCallback } from "react";
import Layout from "@presentation/components/layout/Layout";
import PhotoUpload from "@presentation/components/upload/PhotoUpload";
import "../styles/pages/UploadPage.scss";

const UploadPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePhotoSelect = useCallback((file: File) => {
    // 清除任何先前的错误
    setError(null);
    setIsLoading(true);

    try {
      // 验证文件是否为图片
      if (!file.type.startsWith("image/")) {
        throw new Error("请选择有效的图片文件");
      }

      setSelectedPhoto(file);

      // 创建预览URL
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
        setIsLoading(false);
      };

      fileReader.onerror = () => {
        setError("无法读取所选图片，请重试");
        setIsLoading(false);
      };

      fileReader.readAsDataURL(file);
    } catch (err) {
      setError(err instanceof Error ? err.message : "上传图片时出错");
      setIsLoading(false);
    }
  }, []);

  const handleResetSelection = useCallback(() => {
    setSelectedPhoto(null);
    setPreviewUrl(null);
    setError(null);
  }, []);

  // 这里使用selectedPhoto以避免TypeScript未使用变量的警告
  const canContinue = !!selectedPhoto && !!previewUrl && !isLoading;

  return (
    <Layout>
      <div className="upload-page" data-testid="upload-container">
        <h1 className="upload-title">上传照片</h1>

        <div className="upload-container">
          {error && (
            <div className="error-message">
              <p>{error}</p>
              <button onClick={handleResetSelection} className="retry-button">
                重试
              </button>
            </div>
          )}

          {isLoading && (
            <div className="loading-indicator">
              <p>正在处理图片...</p>
            </div>
          )}

          {!isLoading && previewUrl ? (
            <>
              <div className="photo-preview">
                <img src={previewUrl} alt="照片预览" />
              </div>

              <div className="buttons-container">
                <button
                  className="continue-button"
                  onClick={() => console.log("继续处理照片")}
                  disabled={!canContinue}
                >
                  继续
                </button>
                <button
                  className="cancel-button"
                  onClick={handleResetSelection}
                >
                  重新选择
                </button>
              </div>
            </>
          ) : !isLoading && !error ? (
            <PhotoUpload onPhotoSelect={handlePhotoSelect} />
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default UploadPage;
