import React from "react";
import { Link } from "react-router-dom";
import "@styles/components/layout/Footer.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>关于快证先生</h3>
          <ul>
            <li>
              <Link to="/about">公司简介</Link>
            </li>
            <li>
              <Link to="/about/team">团队介绍</Link>
            </li>
            <li>
              <Link to="/about/technology">技术优势</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>帮助中心</h3>
          <ul>
            <li>
              <Link to="/guide">使用指南</Link>
            </li>
            <li>
              <Link to="/faq">常见问题</Link>
            </li>
            <li>
              <Link to="/support">联系客服</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>法律信息</h3>
          <ul>
            <li>
              <Link to="/privacy">隐私政策</Link>
            </li>
            <li>
              <Link to="/terms">使用条款</Link>
            </li>
            <li>
              <Link to="/copyright">版权信息</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>联系我们</h3>
          <ul>
            <li>电子邮件: contact@snapcred.com</li>
            <li>微信公众号: SnapCred快证先生</li>
            <li>
              <div className="social-links">
                <a
                  href="https://weibo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#555">
                    <path d="M10.098 20c-4.561 0-8.259-2.041-8.259-4.557 0-1.328 1.096-2.846 2.855-3.979 2.434-1.57 5.405-1.646 5.855-1.654 0.146-0.019 0.292 0.025 0.404 0.117 0.116 0.094 0.182 0.235 0.182 0.381 0 0.526-0.088 0.903-0.128 1.088 2.199-0.201 4.531-1.054 4.531-2.111 0-0.658-0.588-1.105-1.144-1.327-1.574-0.626-2.566-1.43-2.566-2.417 0-1.08 1.225-1.756 2.241-1.756 0.86 0 2.345 0.273 2.345 1.84 0 1.004-0.168 1.88-0.272 2.421 1.422-0.073 4.012-0.33 4.012 1.33 0 0.713-0.532 1.289-1.594 1.724 0.023 0.072 0.043 0.146 0.043 0.228 0 3.574-4.242 7.673-8.505 7.673zM7.079 14.981c-1.677 0-3.035 0.787-3.035 1.763s1.358 1.763 3.035 1.763c1.677 0 3.035-0.787 3.035-1.763s-1.359-1.763-3.035-1.763z"></path>
                    <circle cx="8.5" cy="16.5" r="1"></circle>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#555">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} 快证先生 (SnapCred). 保留所有权利。</p>
      </div>
    </footer>
  );
};

export default Footer;
