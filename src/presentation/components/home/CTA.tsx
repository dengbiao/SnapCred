import React from "react";
import { Link } from "react-router-dom";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTA: React.FC<CTAProps> = ({
  title = "立即开始制作您的证件照",
  description = "免费、快速、专业 - 只需几分钟，获得完美证件照",
  buttonText = "开始制作",
  buttonLink = "/upload",
}) => {
  return (
    <section className="cta-section" data-testid="cta-section">
      <div className="cta-container" data-testid="cta-container">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-text">{description}</p>
        <Link to={buttonLink} className="cta-button">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTA;
