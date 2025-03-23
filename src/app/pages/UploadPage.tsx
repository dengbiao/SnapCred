import React, { useState } from "react";
import Layout from "@presentation/components/layout/Layout";
import PhotoUpload from "@presentation/components/upload/PhotoUpload";
import CredentialSelector from "@presentation/components/upload/CredentialSelector";
import PhotoEditor from "@presentation/components/upload/PhotoEditor";
import { CredentialType } from "@domain/models/CredentialType";
import { credentialTypes } from "@app/data/credentialTypes";
import "../styles/pages/UploadPage.scss";
import Button from "@presentation/components/ui/Button";

// 页面状态枚举
enum PageState {
  UPLOAD = "upload",
  SELECT = "select",
  EDIT = "edit",
  RESULT = "result",
}

/**
 * 上传页面，提供照片上传、证件照类型选择、照片编辑和最终结果展示功能
 */
const UploadPage: React.FC = () => {
  // 页面状态管理
  const [pageState, setPageState] = useState<PageState>(PageState.UPLOAD);

  // 照片数据管理
  const [_, setSelectedPhoto] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedCredentialType, setSelectedCredentialType] =
    useState<CredentialType | null>(null);
  const [editedPhotoUrl, setEditedPhotoUrl] = useState<string | null>(null);

  /**
   * 处理照片选择
   * @param file 选择的照片文件
   */
  const handlePhotoSelect = (file: File) => {
    setSelectedPhoto(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  /**
   * 处理照片上传后的后续操作
   */
  const handleContinue = () => {
    if (previewUrl) {
      setPageState(PageState.SELECT);
    }
  };

  /**
   * 处理返回上传照片步骤
   */
  const handleBackToUpload = () => {
    setPageState(PageState.UPLOAD);
    setSelectedCredentialType(null);
  };

  /**
   * 处理证件照类型选择
   * @param type 选择的证件照类型
   */
  const handleCredentialTypeSelect = (type: CredentialType) => {
    setSelectedCredentialType(type);
    setPageState(PageState.EDIT);
  };

  /**
   * 处理返回证件照类型选择步骤
   */
  const handleBackToSelect = () => {
    setPageState(PageState.SELECT);
  };

  /**
   * 处理照片编辑完成
   * @param editedUrl 编辑后的照片URL
   */
  const handleEditComplete = (editedUrl: string) => {
    setEditedPhotoUrl(editedUrl);
    setPageState(PageState.RESULT);
  };

  /**
   * 重新开始整个流程
   */
  const handleRestart = () => {
    setSelectedPhoto(null);
    setPreviewUrl(null);
    setSelectedCredentialType(null);
    setEditedPhotoUrl(null);
    setPageState(PageState.UPLOAD);
  };

  /**
   * 根据页面状态渲染不同内容
   */
  const renderContent = () => {
    switch (pageState) {
      case PageState.UPLOAD:
        return (
          <div className="upload-container">
            <h1 className="upload-title">上传您的照片</h1>
            <p className="upload-description">
              请上传一张清晰的面部照片，我们将为您生成专业证件照
            </p>

            {!previewUrl ? (
              <PhotoUpload onPhotoSelect={handlePhotoSelect} />
            ) : (
              <div className="preview-container">
                <div className="preview-image-container">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="preview-image"
                  />
                </div>
                <div className="action-buttons">
                  <Button onClick={handleContinue} className="continue-button">
                    继续
                  </Button>
                  <Button
                    onClick={() => {
                      setSelectedPhoto(null);
                      setPreviewUrl(null);
                    }}
                    variant="secondary"
                    className="reselect-button"
                  >
                    重新选择
                  </Button>
                </div>
              </div>
            )}
          </div>
        );

      case PageState.SELECT:
        return previewUrl ? (
          <CredentialSelector
            photoUrl={previewUrl}
            credentialTypes={credentialTypes}
            onSelect={handleCredentialTypeSelect}
            onBack={handleBackToUpload}
          />
        ) : null;

      case PageState.EDIT:
        return selectedCredentialType && previewUrl ? (
          <PhotoEditor
            photoUrl={previewUrl}
            credentialType={selectedCredentialType}
            onBack={handleBackToSelect}
            onComplete={handleEditComplete}
          />
        ) : null;

      case PageState.RESULT:
        return editedPhotoUrl && selectedCredentialType ? (
          <div className="result-container">
            <h1 className="result-title">您的证件照已准备好</h1>
            <div className="result-content">
              <div className="result-image-container">
                <img
                  src={editedPhotoUrl}
                  alt="Final Result"
                  className="result-image"
                />
              </div>
              <div className="result-info">
                <h3 className="credential-type-name">
                  {selectedCredentialType.name.zh}
                </h3>
                <p className="credential-type-specs">
                  {selectedCredentialType.dimensions.width} ×{" "}
                  {selectedCredentialType.dimensions.height} mm
                </p>
              </div>
            </div>
            <div className="result-actions">
              <a
                href={editedPhotoUrl}
                download="credential-photo.jpg"
                className="button button--primary download-button"
              >
                下载照片
              </a>
              <Button
                onClick={handleRestart}
                variant="secondary"
                className="restart-button"
              >
                重新上传
              </Button>
            </div>
          </div>
        ) : null;

      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <Layout>
      <div className="upload-page" data-testid="upload-container">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default UploadPage;
