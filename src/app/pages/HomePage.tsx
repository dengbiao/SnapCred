import React from "react";
import Layout from "@presentation/components/layout/Layout";
import { Link } from "react-router-dom";
import "../styles/pages/HomePage.scss";
import Hero from "@presentation/components/home/Hero";
import Features from "@presentation/components/home/Features";
import { CredentialTypes } from "@presentation/components/home/CredentialTypes";

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Credential Types Section */}
      <CredentialTypes />

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
