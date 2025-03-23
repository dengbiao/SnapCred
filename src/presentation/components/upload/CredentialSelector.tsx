import React from "react";
import { CredentialType } from "@domain/models/CredentialType";
import Button from "@presentation/components/ui/Button";
import "@styles/components/upload/CredentialSelector.scss";

interface CredentialSelectorProps {
  photoUrl: string;
  credentialTypes: CredentialType[];
  onSelect: (type: CredentialType) => void;
  onBack: () => void;
}

/**
 * 证件照类型选择器组件
 * 展示可用的证件照类型，并让用户选择
 */
const CredentialSelector: React.FC<CredentialSelectorProps> = ({
  photoUrl,
  credentialTypes,
  onSelect,
  onBack,
}) => {
  return (
    <div
      className="credential-selector"
      data-testid="credential-selector-container"
    >
      <h1 className="selector-title">选择证件照类型</h1>
      <p className="selector-subtitle">
        选择您需要的证件照类型，我们将为您生成符合标准的照片
      </p>

      <div className="selector-content">
        <div className="photo-preview-container">
          <img src={photoUrl} alt="您的照片" className="photo-preview" />
          <Button onClick={onBack} variant="secondary" className="back-button">
            返回重新上传
          </Button>
        </div>

        <div className="credential-options">
          <h2 className="options-title">可用证件照类型</h2>
          <div className="options-grid">
            {credentialTypes.map((type) => (
              <div
                key={type.id}
                className="credential-option"
                onClick={() => onSelect(type)}
                data-testid={`credential-type-${type.id}`}
              >
                <div className="option-icon">
                  <img src={type.icon} alt={type.name.zh} />
                </div>
                <div className="option-details">
                  <h3 className="option-name">{type.name.zh}</h3>
                  <p className="option-description">{type.description.zh}</p>
                  <p className="option-dimensions">
                    {type.dimensions.width} × {type.dimensions.height} mm
                  </p>
                </div>
                <div className="option-preview">
                  <img
                    src={type.previewImage}
                    alt={`${type.name.zh}预览`}
                    className="preview-thumbnail"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredentialSelector;
