import React from "react";
import styled from "styled-components";
import Layout from "../../presentation/components/layout/Layout";
import { Link } from "react-router-dom";

// Hero 区域样式
const HeroSection = styled.section`
  background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: #4285f4;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

// 特点区域样式
const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ebf3ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

// 使用流程区域样式
const ProcessSection = styled.section`
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ProcessSteps = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProcessStep = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 1rem;
  position: relative;

  @media (max-width: 992px) {
    margin-bottom: 2rem;
    max-width: 400px;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:not(:last-child):after {
    content: "";
    position: absolute;
    top: 50px;
    right: 0;
    width: 70%;
    height: 2px;
    background: #ddd;

    @media (max-width: 992px) {
      display: none;
    }
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4285f4;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 auto 1.5rem;
  position: relative;
  z-index: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

// 证件照类型区域样式
const CredentialTypesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const CredentialTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CredentialTypeCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CredentialTypeImage = styled.div`
  height: 160px;
  background-color: #ebf3ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CredentialTypeContent = styled.div`
  padding: 1.5rem;
`;

const CredentialTypeTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const CredentialTypeSpecs = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const CredentialTypeLink = styled(Link)`
  display: inline-block;
  color: #4285f4;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// CTA 区域样式
const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #ea4335 0%, #fbbc05 100%);
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: #ea4335;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero 区域 */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>在家轻松制作专业证件照</HeroTitle>
          <HeroSubtitle>
            免费在线制作各种规格的证件照，无需专业设备和摄影技能，立即上传照片，一键生成符合标准的证件照
          </HeroSubtitle>
          <HeroButton to="/upload">立即制作证件照</HeroButton>
        </HeroContent>
      </HeroSection>

      {/* 特点区域 */}
      <FeaturesSection>
        <SectionTitle>为什么选择快证先生</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
              </svg>
            </FeatureIcon>
            <FeatureTitle>完全免费</FeatureTitle>
            <FeatureDescription>
              所有基础功能完全免费，无隐藏收费，无水印，高质量输出
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7h-2V8h2v2zm0 4h-2v-2h2v2zm-2 4h2v-2h-2v2zm4-2v2h6v-2h-6zm0-2h6v-2h-6v2zm0-4h6V8h-6v2z"></path>
              </svg>
            </FeatureIcon>
            <FeatureTitle>标准规格</FeatureTitle>
            <FeatureDescription>
              提供数十种国内外标准证件照规格，确保符合官方要求
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
              </svg>
            </FeatureIcon>
            <FeatureTitle>便捷易用</FeatureTitle>
            <FeatureDescription>
              简单几步操作，无需专业知识，人人都能制作专业证件照
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      {/* 使用流程区域 */}
      <ProcessSection>
        <SectionTitle>简单三步，轻松搞定</SectionTitle>
        <ProcessSteps>
          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepTitle>上传照片</StepTitle>
            <StepDescription>
              上传您的照片，支持JPG、PNG等常见格式
            </StepDescription>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepTitle>选择规格</StepTitle>
            <StepDescription>
              选择所需的证件照类型和尺寸，自动调整
            </StepDescription>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepTitle>下载成品</StepTitle>
            <StepDescription>
              系统自动处理后，即可下载高质量证件照
            </StepDescription>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      {/* 证件照类型区域 */}
      <CredentialTypesSection>
        <SectionTitle>支持多种证件照</SectionTitle>
        <CredentialTypesGrid>
          <CredentialTypeCard>
            <CredentialTypeImage>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 6H8v1h3v1H8v1h2v1H8v3h3c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm7 0h-1c-.55 0-1 .45-1 1v5h1.5v-4.5h1V16H19v-5c0-.55-.45-1-1-1z"></path>
              </svg>
            </CredentialTypeImage>
            <CredentialTypeContent>
              <CredentialTypeTitle>身份证照片</CredentialTypeTitle>
              <CredentialTypeSpecs>尺寸: 26mm × 32mm</CredentialTypeSpecs>
              <CredentialTypeLink to="/credential-types/id-card">
                了解更多
              </CredentialTypeLink>
            </CredentialTypeContent>
          </CredentialTypeCard>

          <CredentialTypeCard>
            <CredentialTypeImage>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"></path>
              </svg>
            </CredentialTypeImage>
            <CredentialTypeContent>
              <CredentialTypeTitle>护照照片</CredentialTypeTitle>
              <CredentialTypeSpecs>尺寸: 33mm × 48mm</CredentialTypeSpecs>
              <CredentialTypeLink to="/credential-types/passport">
                了解更多
              </CredentialTypeLink>
            </CredentialTypeContent>
          </CredentialTypeCard>

          <CredentialTypeCard>
            <CredentialTypeImage>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path>
              </svg>
            </CredentialTypeImage>
            <CredentialTypeContent>
              <CredentialTypeTitle>驾驶证照片</CredentialTypeTitle>
              <CredentialTypeSpecs>尺寸: 21mm × 26mm</CredentialTypeSpecs>
              <CredentialTypeLink to="/credential-types/drivers-license">
                了解更多
              </CredentialTypeLink>
            </CredentialTypeContent>
          </CredentialTypeCard>

          <CredentialTypeCard>
            <CredentialTypeImage>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
            </CredentialTypeImage>
            <CredentialTypeContent>
              <CredentialTypeTitle>签证照片</CredentialTypeTitle>
              <CredentialTypeSpecs>尺寸: 35mm × 45mm</CredentialTypeSpecs>
              <CredentialTypeLink to="/credential-types/visa">
                了解更多
              </CredentialTypeLink>
            </CredentialTypeContent>
          </CredentialTypeCard>
        </CredentialTypesGrid>
      </CredentialTypesSection>

      {/* CTA 区域 */}
      <CTASection>
        <CTAContent>
          <CTATitle>立即体验快证先生</CTATitle>
          <CTADescription>
            告别排队和高额费用，在家就能轻松制作专业证件照。现在就上传您的照片，免费体验！
          </CTADescription>
          <CTAButton to="/upload">开始制作</CTAButton>
        </CTAContent>
      </CTASection>
    </Layout>
  );
};

export default HomePage;
