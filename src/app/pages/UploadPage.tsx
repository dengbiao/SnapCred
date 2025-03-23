import React, { useState } from "react";
import Layout from "@presentation/components/layout/Layout";
import PhotoUpload from "@presentation/components/upload/PhotoUpload";
import "../styles/pages/UploadPage.scss";

const UploadPage: React.FC = () => {
  const [_, setSelectedPhoto] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handlePhotoSelect = (file: File) => {
    setSelectedPhoto(file);

    // Create a preview URL for the selected photo
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <Layout>
      <div className="upload-page" data-testid="upload-container">
        <h1 className="upload-title">上传照片</h1>

        <div className="upload-container">
          {previewUrl ? (
            <>
              <div className="photo-preview">
                <img src={previewUrl} alt="照片预览" />
              </div>

              <div className="buttons-container">
                <button
                  className="continue-button"
                  onClick={() => console.log("继续处理照片")}
                >
                  继续
                </button>
                <button
                  className="cancel-button"
                  onClick={() => {
                    setSelectedPhoto(null);
                    setPreviewUrl(null);
                  }}
                >
                  重新选择
                </button>
              </div>
            </>
          ) : (
            <PhotoUpload onPhotoSelect={handlePhotoSelect} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UploadPage;
