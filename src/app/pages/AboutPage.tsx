import React from "react";
import styled from "styled-components";
import Layout from "../../presentation/components/layout/Layout";

// 样式组件
const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #4285f4;
  margin-bottom: 1.5rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #4285f4;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
`;

const MissionBox = styled.div`
  background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
  color: white;
  padding: 3rem;
  border-radius: 8px;
  margin: 2rem 0;
  text-align: center;
`;

const MissionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const MissionStatement = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

const TeamSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MemberName = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const MemberTitle = styled.p`
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const MemberBio = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`;

const TimelineSection = styled.div`
  margin-top: 2rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background-color: #f0f0f0;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  margin-bottom: 3rem;
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    padding-left: 60px;
  }

  &:nth-child(odd) {
    justify-content: flex-start;

    @media (min-width: 769px) {
      padding-right: calc(50% + 30px);
    }
  }

  &:nth-child(even) {
    justify-content: flex-end;

    @media (min-width: 769px) {
      padding-left: calc(50% + 30px);
    }

    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: #4285f4;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineContent = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
`;

const TimelineYear = styled.h4`
  font-size: 1.2rem;
  color: #4285f4;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h5`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const TimelineText = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`;

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <AboutContainer>
        <PageTitle>关于快证先生</PageTitle>

        <Section>
          <SectionTitle>我们是谁</SectionTitle>
          <Paragraph>
            快证先生（SnapCred）是一家致力于为用户提供高质量、便捷的在线证件照制作服务的科技创业公司。我们于2023年成立，总部位于深圳，由一群热爱创新、关注用户体验的年轻人组成。
          </Paragraph>
          <Paragraph>
            在传统的证件照制作过程中，人们常常需要花费大量时间和金钱到照相馆拍摄，而且效果参差不齐。我们看到了这一痛点，决定运用现代科技手段，帮助用户轻松在家完成专业证件照的制作，节省时间和金钱。
          </Paragraph>

          <MissionBox>
            <MissionTitle>我们的使命</MissionTitle>
            <MissionStatement>
              让每个人都能便捷获取符合各种标准的高质量证件照，消除地域和经济上的障碍，让证件照制作变得简单、愉快且无忧。
            </MissionStatement>
          </MissionBox>

          <Paragraph>
            快证先生提供完全免费的基础功能，无需专业设备或摄影知识，用户只需上传照片，选择规格，系统就会自动生成符合标准的证件照。我们支持护照、身份证、签证、驾照等多种规格的证件照制作，确保满足国内外各种官方要求。
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>我们的团队</SectionTitle>
          <Paragraph>
            快证先生的团队由一群充满激情和创造力的年轻人组成，他们在人工智能、计算机视觉、UI/UX设计和软件开发等领域拥有丰富的经验和专业知识。我们深信，只有组建一支多元化且专业的团队，才能为用户提供最佳的产品体验。
          </Paragraph>

          <TeamSection>
            <TeamMember>
              <MemberImage>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </MemberImage>
              <MemberName>张明</MemberName>
              <MemberTitle>创始人 & CEO</MemberTitle>
              <MemberBio>
                前Google工程师，拥有丰富的AI和计算机视觉经验。北京大学计算机科学硕士，致力于将前沿技术应用于解决实际问题。
              </MemberBio>
            </TeamMember>

            <TeamMember>
              <MemberImage>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </MemberImage>
              <MemberName>李思琪</MemberName>
              <MemberTitle>CTO</MemberTitle>
              <MemberBio>
                计算机视觉和人工智能专家，曾主导多个与图像处理相关的创新项目。清华大学博士，发表过多篇学术论文。
              </MemberBio>
            </TeamMember>

            <TeamMember>
              <MemberImage>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </MemberImage>
              <MemberName>王晓东</MemberName>
              <MemberTitle>UI/UX 设计总监</MemberTitle>
              <MemberBio>
                资深用户体验设计师，注重产品的易用性和美观度。曾为多家知名科技公司设计用户界面，追求简约而不简单的设计理念。
              </MemberBio>
            </TeamMember>
          </TeamSection>
        </Section>

        <Section>
          <SectionTitle>我们的发展历程</SectionTitle>
          <Paragraph>
            从最初的创意到如今服务数十万用户，快证先生一直在不断发展和完善。以下是我们的关键发展里程碑：
          </Paragraph>

          <TimelineSection>
            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>2023年1月</TimelineYear>
                <TimelineTitle>创意萌芽</TimelineTitle>
                <TimelineText>
                  创始人张明在需要制作各种证件照时，发现传统方式既昂贵又耗时，由此产生了创建一个在线证件照服务的想法。
                </TimelineText>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>2023年3月</TimelineYear>
                <TimelineTitle>团队组建</TimelineTitle>
                <TimelineText>
                  核心团队组建完成，开始进行产品设计和技术研发，确定了产品的主要功能和技术路线。
                </TimelineText>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>2023年7月</TimelineYear>
                <TimelineTitle>Alpha版本发布</TimelineTitle>
                <TimelineText>
                  第一个内部测试版本发布，实现了基本的照片上传和证件照生成功能，开始小范围用户测试。
                </TimelineText>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>2023年10月</TimelineYear>
                <TimelineTitle>公测版本上线</TimelineTitle>
                <TimelineText>
                  完成了产品的大部分核心功能，包括多种证件照规格支持、背景颜色调整等，开始公开测试。
                </TimelineText>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>2024年1月</TimelineYear>
                <TimelineTitle>正式版发布</TimelineTitle>
                <TimelineText>
                  快证先生1.0正式版发布，支持几十种证件照规格，并推出了AI自动修图、一键美颜等高级功能。
                </TimelineText>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot />
              <TimelineContent>
                <TimelineYear>2024年至今</TimelineYear>
                <TimelineTitle>持续发展</TimelineTitle>
                <TimelineText>
                  不断完善产品功能，优化用户体验，扩大服务规模，目前已累计服务超过10万用户，获得了广泛好评。
                </TimelineText>
              </TimelineContent>
            </TimelineItem>
          </TimelineSection>
        </Section>

        <Section>
          <SectionTitle>我们的价值观</SectionTitle>
          <Paragraph>
            在快证先生，我们坚持以下核心价值观指导我们的工作和决策：
          </Paragraph>
          <Paragraph>
            <strong>用户至上：</strong>
            我们始终将用户需求放在首位，不断倾听用户反馈，持续改进产品体验。
          </Paragraph>
          <Paragraph>
            <strong>技术创新：</strong>
            我们积极拥抱新技术，运用人工智能、计算机视觉等先进技术提升产品能力。
          </Paragraph>
          <Paragraph>
            <strong>简约高效：</strong>
            我们追求产品的简洁易用，让技术的复杂性对用户透明，提供高效的解决方案。
          </Paragraph>
          <Paragraph>
            <strong>开放共享：</strong>
            我们相信知识的力量，乐于分享我们的经验和见解，与行业共同成长。
          </Paragraph>
        </Section>
      </AboutContainer>
    </Layout>
  );
};

export default AboutPage;
