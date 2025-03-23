import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  img {
    height: 40px;
  }
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #4285f4;
  }

  @media (max-width: 768px) {
    margin: 0.7rem 0;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <img src="/images/logo.svg" alt="快证先生" />
        </Link>
      </Logo>

      <HamburgerButton onClick={toggleMenu}>
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
      </HamburgerButton>

      <NavLinks isOpen={isMenuOpen}>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/credential-types">证件照类型</NavLink>
        <NavLink to="/guide">使用指南</NavLink>
        <NavLink to="/about">关于我们</NavLink>
        <NavLink to="/contact">联系我们</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
