import React from "react";
import Layout from "@presentation/components/layout/Layout";
import { Link } from "react-router-dom";
import "../styles/pages/HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">快速制作专业证件照</h1>
          <p className="hero-subtitle">
            在几分钟内获得符合各种规格的高质量证件照，无需专业设备，随时随地，完全免费
          </p>
          <Link to="/upload" className="hero-button">
            立即制作证件照
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">为什么选择快证先生</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
              </svg>
            </div>
            <h3 className="feature-title">快速便捷</h3>
            <p className="feature-description">
              上传照片后几秒钟内即可生成符合标准的证件照，无需等待，随时可用
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zm-1-4.5H17v1h-2.5v-1zM7 9.5h1v-1H7v1zm1.5 1.5H10v-1H8.5v1zM11 9h1.5v2.5h1V9H15v2.5h1V9h1v3c0 .55-.45 1-1 1h-2V9h-.5v4H12v-1c-.55 0-1-.45-1-1V9z"></path>
              </svg>
            </div>
            <h3 className="feature-title">多种规格</h3>
            <p className="feature-description">
              支持护照、身份证、签证、驾照等多种规格，符合中国和国际标准要求
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
            </div>
            <h3 className="feature-title">AI智能优化</h3>
            <p className="feature-description">
              使用先进的AI技术自动优化照片，确保符合官方要求，提供最佳效果
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M7 10l5 5 5-5z"></path>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
            </div>
            <h3 className="feature-title">多种背景色</h3>
            <p className="feature-description">
              支持白色、蓝色、红色等多种背景色选择，满足不同证件照的要求
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-9-3.82l-2.17-2.17-1.42 1.41L11 18l6.59-6.59-1.42-1.41L11 15.18z"></path>
              </svg>
            </div>
            <h3 className="feature-title">免费下载</h3>
            <p className="feature-description">
              生成的证件照完全免费下载，提供高清JPG或PNG格式，便于打印或在线使用
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </svg>
            </div>
            <h3 className="feature-title">隐私保护</h3>
            <p className="feature-description">
              我们重视您的隐私，上传的照片不会保存在服务器，所有处理在本地完成
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2 className="section-title">使用流程</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3 className="step-title">上传照片</h3>
            <p className="step-description">
              从您的设备中选择一张照片上传，或直接拖拽到上传区域
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3 className="step-title">选择规格</h3>
            <p className="step-description">
              从多种证件照规格中选择您需要的尺寸和要求
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3 className="step-title">智能处理</h3>
            <p className="step-description">
              系统自动处理照片，调整大小，更换背景，优化图像
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3 className="step-title">下载成品</h3>
            <p className="step-description">
              预览并下载处理后的证件照，即可用于打印或在线提交
            </p>
          </div>
        </div>
      </section>

      {/* Credential Types */}
      <section className="credential-types-section">
        <h2 className="section-title">支持的证件照类型</h2>
        <div className="credential-types-grid">
          <div className="credential-type">
            <div className="credential-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path>
              </svg>
            </div>
            <h3 className="credential-name">一寸照片</h3>
          </div>

          <div className="credential-type">
            <div className="credential-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path>
              </svg>
            </div>
            <h3 className="credential-name">二寸照片</h3>
          </div>

          <div className="credential-type">
            <div className="credential-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11z"></path>
              </svg>
            </div>
            <h3 className="credential-name">身份证</h3>
          </div>

          <div className="credential-type">
            <div className="credential-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"></path>
              </svg>
            </div>
            <h3 className="credential-name">护照</h3>
          </div>

          <div className="credential-type">
            <div className="credential-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
              </svg>
            </div>
            <h3 className="credential-name">签证</h3>
          </div>

          <div className="credential-type">
            <div className="credential-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M18.92 5.01L18.57 4H5.43L5.08 5.01C4.7 6.23 4.86 7.88 6 9c.49.47 1 .82 1.5 1.09C7.19 10.89 7 11.91 7 13v7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-7c0-1.09-.19-2.11-.5-2.91.5-.27 1.01-.62 1.5-1.09 1.14-1.12 1.3-2.77.92-3.99zM12 3c.83 0 1.5.67 1.5 1.5S12.83 6 12 6s-1.5-.67-1.5-1.5S11.17 3 12 3zm5 10c0 .83-.67 1.5-1.5 1.5S14 13.83 14 13s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-5-4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5S7 13.83 7 13z"></path>
              </svg>
            </div>
            <h3 className="credential-name">驾照</h3>
          </div>

          <div className="credential-type">
            <div className="credential-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
            </div>
            <h3 className="credential-name">学生证</h3>
          </div>

          <div className="credential-type">
            <div className="credential-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path>
              </svg>
            </div>
            <h3 className="credential-name">更多规格...</h3>
          </div>
        </div>
        <Link to="/photo-specs" className="view-all-button">
          查看全部规格
        </Link>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">用户评价</h2>
        <div className="testimonials-container">
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-content">
                "我需要赶紧办理签证，但没时间去照相馆。快证先生帮我在家就完成了证件照制作，照片质量很高，使领馆完全接受了。非常方便！"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <div className="author-info">
                  <div className="author-name">李明</div>
                  <div className="author-title">上海</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-content">
                "作为一个经常需要更新各种证件的人，快证先生真的解决了我的大问题。一次上传，可以生成各种尺寸的证件照，太棒了！"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <div className="author-info">
                  <div className="author-name">张小华</div>
                  <div className="author-title">北京</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-content">
                "AI自动优化功能真的很惊艳，自动调整了我照片的亮度和对比度，最终效果比我在本地照相馆拍的还要好！强烈推荐！"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <div className="author-info">
                  <div className="author-name">王芳</div>
                  <div className="author-title">广州</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">立即开始制作您的证件照</h2>
          <p className="cta-text">
            免费、快速、专业 - 只需几分钟，获得完美证件照
          </p>
          <Link to="/upload" className="hero-button">
            开始制作
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
