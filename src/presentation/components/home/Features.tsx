import React from "react";
import "@styles/components/home/Features.scss";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Features: React.FC = () => {
  const featuresList: Feature[] = [
    {
      id: "instant",
      title: "即时处理",
      description:
        "上传照片后，我们的AI系统能在数秒内完成照片的分析与处理，为您节省宝贵时间。",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          <path d="M13 7h-2v6h6v-2h-4z" />
        </svg>
      ),
    },
    {
      id: "multiple-types",
      title: "多种证件类型",
      description:
        "支持护照、身份证、驾照等多种证件照规格，满足您各类场景的证件照需求。",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M4 21h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2V5h16l.001 14H4z" />
          <path d="M14 7h-4v4h4V7zm-6 0H6v2h2V7zm0 4H6v2h2v-2zm12 0h-2v2h2v-2zm0-4h-2v2h2V7zm-6 8H6v2h8v-2z" />
        </svg>
      ),
    },
    {
      id: "auto-adjustment",
      title: "智能调整",
      description:
        "自动识别并调整照片姿势、表情和光线，确保照片符合各类证件的官方要求。",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z" />
          <path
            d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0
4 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"
          />
        </svg>
      ),
    },
    {
      id: "background-change",
      title: "背景更换",
      description:
        "提供多种标准背景色选项，一键更换照片背景，确保符合证件要求。",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z" />
          <path d="m10 14-1-1-3 4h12l-5-7z" />
        </svg>
      ),
    },
    {
      id: "size-customization",
      title: "尺寸定制",
      description: "可选择多种国际标准尺寸，也可根据特定需求自定义照片尺寸。",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M21 6H3c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm0 10H3V8h18v8z" />
          <path d="M6 14h12v2H6z" />
        </svg>
      ),
    },
    {
      id: "secure-storage",
      title: "安全存储",
      description:
        "所有照片加密存储，并在处理完成后自动删除，确保您的个人信息安全。",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 12.5V19H6v-7h12v2.5zM9 10V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z" />
          <path d="M12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="features-container" data-testid="features-section">
      <h2 className="features-title">平台特点</h2>
      <p className="features-subtitle">
        快证先生提供多种独特功能，帮助您快速获得符合标准的高质量证件照。
      </p>
      <div className="features-grid" data-testid="features-list">
        {featuresList.map((feature) => (
          <div
            key={feature.id}
            className="feature-card"
            data-testid={`feature-card-${feature.id}`}
          >
            <div
              className="feature-icon"
              data-testid={`feature-icon-${feature.id}`}
            >
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
