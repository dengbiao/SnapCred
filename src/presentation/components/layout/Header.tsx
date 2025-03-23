import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "@styles/components/layout/Header.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.svg" alt="快证先生" />
        </Link>
      </div>

      <div className="header-actions">
        <button className="hamburger-button" onClick={toggleMenu} aria-label="菜单">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 6H21"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 18H21"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'open' : 'closed'}`}>
        <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">首页</Link>
        <Link className={`nav-link ${isActive('/guide') ? 'active' : ''}`} to="/guide">使用指南</Link>
        <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">关于我们</Link>
        <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">联系我们</Link>
      </nav>
    </header>
  );
};

export default Header;
