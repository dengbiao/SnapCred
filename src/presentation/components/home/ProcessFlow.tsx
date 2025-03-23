import React from "react";
import { FaUpload, FaEdit, FaDownload, FaPrint } from "react-icons/fa";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "上传照片",
    description: "上传您的照片或直接使用设备拍摄新照片",
    icon: <FaUpload />,
  },
  {
    id: 2,
    title: "智能调整",
    description: "AI自动调整照片以符合所选证件类型的标准",
    icon: <FaEdit />,
  },
  {
    id: 3,
    title: "下载成品",
    description: "获取高质量的符合标准的证件照",
    icon: <FaDownload />,
  },
  {
    id: 4,
    title: "打印使用",
    description: "直接打印或前往合作店面享受专业打印服务",
    icon: <FaPrint />,
  },
];

const ProcessFlow: React.FC = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">如何使用 - 四步轻松获取证件照</h2>

        <div className="process-steps" data-testid="steps-container">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="process-step"
              data-testid="process-step"
            >
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="process-cta">
          <a href="/upload" className="cta-button">
            立即体验
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
