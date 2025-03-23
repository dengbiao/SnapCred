import React from "react";
import { Link } from "react-router-dom";
import "@styles/components/home/Hero.scss";

const Hero: React.FC = () => {
  return (
    <section className="hero-container" data-testid="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">快证先生 SnapCred</h1>
        <p className="hero-subtitle">
          快速生成各类标准证件照，智能调整尺寸和背景，满足各种证件要求。无需专业知识，一键生成高质量证件照。
        </p>
        <div className="hero-buttons">
          <Link to="/upload" className="hero-cta-primary">
            立即体验
          </Link>
          <Link to="/guide" className="hero-cta-secondary">
            了解更多
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
