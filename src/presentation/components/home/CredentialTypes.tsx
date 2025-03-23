import React from "react";
import "@styles/components/home/CredentialTypes.scss";
import { Link } from "react-router-dom";

export const CredentialTypes: React.FC = () => {
  return (
    <section
      className="credential-types-container"
      data-testid="credential-types-section"
    >
      <h2 className="credential-types-title">支持的证件照类型</h2>
      <p className="credential-types-subtitle">
        多种规格的证件照片一站式解决，满足不同场景的需求
      </p>

      <div
        className="credential-types-grid"
        data-testid="credential-types-list"
      >
        <div
          className="credential-type-card"
          data-testid="credential-type-card"
        >
          <div className="credential-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path>
            </svg>
          </div>
          <h3 className="credential-title" data-testid="credential-title">
            一寸照片
          </h3>
        </div>

        <div
          className="credential-type-card"
          data-testid="credential-type-card"
        >
          <div className="credential-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path>
            </svg>
          </div>
          <h3 className="credential-title" data-testid="credential-title">
            二寸照片
          </h3>
        </div>

        <div
          className="credential-type-card"
          data-testid="credential-type-card"
        >
          <div className="credential-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11z"></path>
            </svg>
          </div>
          <h3 className="credential-title" data-testid="credential-title">
            身份证
          </h3>
        </div>

        <div
          className="credential-type-card"
          data-testid="credential-type-card"
        >
          <div className="credential-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
              <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"></path>
            </svg>
          </div>
          <h3 className="credential-title" data-testid="credential-title">
            护照
          </h3>
        </div>

        <div
          className="credential-type-card"
          data-testid="credential-type-card"
        >
          <div className="credential-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
            </svg>
          </div>
          <h3 className="credential-title" data-testid="credential-title">
            签证
          </h3>
        </div>

        <div
          className="credential-type-card"
          data-testid="credential-type-card"
        >
          <div className="credential-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
              <path d="M18.92 5.01L18.57 4H5.43L5.08 5.01C4.7 6.23 4.86 7.88 6 9c.49.47 1 .82 1.5 1.09C7.19 10.89 7 11.91 7 13v7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-7c0-1.09-.19-2.11-.5-2.91.5-.27 1.01-.62 1.5-1.09 1.14-1.12 1.3-2.77.92-3.99zM12 3c.83 0 1.5.67 1.5 1.5S12.83 6 12 6s-1.5-.67-1.5-1.5S11.17 3 12 3zm5 10c0 .83-.67 1.5-1.5 1.5S14 13.83 14 13s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-5-4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5S7 13.83 7 13z"></path>
            </svg>
          </div>
          <h3 className="credential-title" data-testid="credential-title">
            驾照
          </h3>
        </div>

        <div
          className="credential-type-card"
          data-testid="credential-type-card"
        >
          <div className="credential-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </div>
          <h3 className="credential-title" data-testid="credential-title">
            学生证
          </h3>
        </div>

        <div
          className="credential-type-card"
          data-testid="credential-type-card"
        >
          <div className="credential-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
              <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path>
            </svg>
          </div>
          <h3 className="credential-title" data-testid="credential-title">
            更多规格...
          </h3>
        </div>
      </div>
      <div className="button-container">
        <Link to="/photo-specs" className="view-all-button">
          查看全部规格
        </Link>
      </div>
    </section>
  );
};
