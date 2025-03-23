import React from "react";
import Layout from "@presentation/components/layout/Layout";
import { Link } from "react-router-dom";
import "../styles/pages/GuidePage.scss";

const GuidePage: React.FC = () => {
  return (
    <Layout>
      <div className="guide-container">
        <h1 className="page-title">使用指南</h1>
        <p className="page-description">
          本指南将帮助您快速了解如何使用快证先生制作各种标准的证件照，从上传照片到下载成品，只需简单几步。
        </p>

        <section className="guide-section">
          <h2 className="section-title">快证先生使用步骤</h2>

          <div className="step-container">
            <div className="step">
              <div className="step-image-container">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="#4285F4"
                >
                  <path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"></path>
                </svg>
              </div>
              <div className="step-content">
                <div className="step-number">1</div>
                <h3 className="step-title">上传您的照片</h3>
                <p className="step-description">
                  点击首页的"立即制作证件照"按钮，或导航到上传页面。您可以通过点击上传区域或将照片拖拽到上传区域来上传照片。
                </p>
                <div className="step-tip">
                  <h4 className="tip-title">照片要求</h4>
                  <p className="tip-text">为获得最佳效果，请确保您上传的照片：</p>
                  <ul className="requirements-list">
                    <li className="requirement-item">清晰，无模糊，无过度曝光</li>
                    <li className="requirement-item">包含完整的头部和肩部</li>
                    <li className="requirement-item">面部朝向正前方，无侧脸</li>
                    <li className="requirement-item">
                      背景尽量单一，避免复杂背景
                    </li>
                    <li className="requirement-item">
                      照片分辨率至少为600×800像素
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-image-container">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="#4285F4"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
              </div>
              <div className="step-content">
                <div className="step-number">2</div>
                <h3 className="step-title">选择证件照规格</h3>
                <p className="step-description">
                  上传照片后，您需要选择所需的证件照类型和规格。我们提供包括身份证、护照、签证、驾照等多种标准规格。选择规格后，系统会自动调整您的照片以符合所选规格的要求。
                </p>
                <div className="step-tip">
                  <h4 className="tip-title">如何选择合适的规格</h4>
                  <p className="tip-text">
                    不确定需要哪种规格？每种证件照规格下方都有详细说明，包括适用场景和官方要求。您也可以点击"了解更多"查看该规格的详细信息。
                  </p>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-image-container">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="#4285F4"
                >
                  <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path>
                </svg>
              </div>
              <div className="step-content">
                <div className="step-number">3</div>
                <h3 className="step-title">调整和编辑照片</h3>
                <p className="step-description">
                  系统会自动处理您的照片，包括裁剪、调整大小和更换背景色。您可以进一步编辑照片，如调整亮度、对比度，选择不同的背景颜色，甚至使用我们的AI美颜功能优化面部特征。
                </p>
                <div className="step-tip">
                  <h4 className="tip-title">编辑技巧</h4>
                  <p className="tip-text">
                    不同类型的证件照对背景颜色有不同要求，例如护照和签证照片通常需要白色背景，而有些特殊场合可能需要蓝色背景。我们的系统会根据您选择的规格提供推荐的背景颜色。
                  </p>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-image-container">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="#4285F4"
                >
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
                </svg>
              </div>
              <div className="step-content">
                <div className="step-number">4</div>
                <h3 className="step-title">预览并下载</h3>
                <p className="step-description">
                  完成编辑后，您可以预览最终的证件照效果。如果满意，点击"下载"按钮即可获取高质量的证件照文件。我们提供多种文件格式（JPG、PNG），您可以根据需要选择。
                </p>
                <div className="step-tip">
                  <h4 className="tip-title">打印建议</h4>
                  <p className="tip-text">
                    如需打印照片，建议使用照片打印服务或专业照片纸，以确保打印质量。打印时请选择"实际大小"或"100%"比例，避免自动缩放导致尺寸不符合要求。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2 className="section-title">常见问题解答</h2>

          <div className="faq-section">
            <div className="faq-item">
              <h4 className="question">快证先生是否完全免费？</h4>
              <p className="answer">
                是的，快证先生的基础功能完全免费，包括上传照片、选择常见规格、基本编辑和下载。我们未来可能会提供一些高级功能作为付费选项，如AI高级美颜、批量处理等，但核心功能将始终保持免费。
              </p>
            </div>

            <div className="faq-item">
              <h4 className="question">如何确保我的证件照符合官方标准？</h4>
              <p className="answer">
                我们的系统基于各类证件照的官方规定开发，自动调整照片以符合相应标准。包括尺寸、比例、背景颜色等关键要素。不过，某些特殊场合可能有额外要求，建议您在使用前确认具体场合的具体要求。
              </p>
            </div>

            <div className="faq-item">
              <h4 className="question">我的照片背景很复杂，能否自动更换背景？</h4>
              <p className="answer">
                可以。我们的AI背景识别技术能够智能识别人像，并自动替换背景。对于背景复杂的照片，效果可能会有所差异，建议上传时选择背景相对简单的照片以获得最佳效果。
              </p>
            </div>

            <div className="faq-item">
              <h4 className="question">照片生成后的分辨率和质量如何？</h4>
              <p className="answer">
                我们生成的证件照默认采用高分辨率（至少300dpi），以确保打印时的清晰度。下载的图片质量不会低于您上传的原始照片，我们的处理过程会尽量保留原始细节。
              </p>
            </div>

            <div className="faq-item">
              <h4 className="question">可以在手机上使用快证先生吗？</h4>
              <p className="answer">
                是的，快证先生完全适配移动设备。您可以直接在手机浏览器中访问我们的网站，或使用手机相机拍摄照片后上传。我们的界面会根据您的设备自动调整，确保最佳的使用体验。
              </p>
            </div>
          </div>
        </section>

        <div className="cta-section">
          <h3 className="cta-title">准备好制作您的证件照了吗？</h3>
          <p className="cta-text">
            现在您已了解如何使用快证先生，赶快上传您的照片，在几分钟内获得符合标准的专业证件照吧！
          </p>
          <Link className="cta-button" to="/upload">立即开始</Link>
        </div>
      </div>
    </Layout>
  );
};

export default GuidePage;
