import React from "react";
import Layout from "@presentation/components/layout/Layout";
import "../styles/pages/AboutPage.scss";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="about-container">
        <h1 className="page-title">关于快证先生</h1>

        <section className="section">
          <h2 className="section-title">我们是谁</h2>
          <p className="paragraph">
            快证先生（SnapCred）是一家致力于为用户提供高质量、便捷的在线证件照制作服务的科技创业公司。我们于2023年成立，总部位于深圳，由一群热爱创新、关注用户体验的年轻人组成。
          </p>
          <p className="paragraph">
            在传统的证件照制作过程中，人们常常需要花费大量时间和金钱到照相馆拍摄，而且效果参差不齐。我们看到了这一痛点，决定运用现代科技手段，帮助用户轻松在家完成专业证件照的制作，节省时间和金钱。
          </p>

          <div className="mission-box">
            <h3 className="mission-title">我们的使命</h3>
            <p className="mission-statement">
              让每个人都能便捷获取符合各种标准的高质量证件照，消除地域和经济上的障碍，让证件照制作变得简单、愉快且无忧。
            </p>
          </div>

          <p className="paragraph">
            快证先生提供完全免费的基础功能，无需专业设备或摄影知识，用户只需上传照片，选择规格，系统就会自动生成符合标准的证件照。我们支持护照、身份证、签证、驾照等多种规格的证件照制作，确保满足国内外各种官方要求。
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">我们的团队</h2>
          <p className="paragraph">
            快证先生的团队由一群充满激情和创造力的年轻人组成，他们在人工智能、计算机视觉、UI/UX设计和软件开发等领域拥有丰富的经验和专业知识。我们深信，只有组建一支多元化且专业的团队，才能为用户提供最佳的产品体验。
          </p>

          <div className="team-section">
            <div className="team-member">
              <div className="member-image">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <h4 className="member-name">张明</h4>
              <p className="member-title">创始人 & CEO</p>
              <p className="member-bio">
                前Google工程师，拥有丰富的AI和计算机视觉经验。北京大学计算机科学硕士，致力于将前沿技术应用于解决实际问题。
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <h4 className="member-name">李思琪</h4>
              <p className="member-title">CTO</p>
              <p className="member-bio">
                计算机视觉和人工智能专家，曾主导多个与图像处理相关的创新项目。清华大学博士，发表过多篇学术论文。
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <h4 className="member-name">王晓东</h4>
              <p className="member-title">UI/UX 设计总监</p>
              <p className="member-bio">
                资深用户体验设计师，注重产品的易用性和美观度。曾为多家知名科技公司设计用户界面，追求简约而不简单的设计理念。
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">我们的发展历程</h2>
          <p className="paragraph">
            从最初的创意到如今服务数十万用户，快证先生一直在不断发展和完善。以下是我们的关键发展里程碑：
          </p>

          <div className="timeline-section">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-year">2023年1月</h4>
                <h5 className="timeline-title">创意萌芽</h5>
                <p className="timeline-text">
                  创始人张明在需要制作各种证件照时，发现传统方式既昂贵又耗时，由此产生了创建一个在线证件照服务的想法。
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-year">2023年3月</h4>
                <h5 className="timeline-title">团队组建</h5>
                <p className="timeline-text">
                  核心团队组建完成，开始进行产品设计和技术研发，确定了产品的主要功能和技术路线。
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-year">2023年7月</h4>
                <h5 className="timeline-title">Alpha版本发布</h5>
                <p className="timeline-text">
                  第一个内部测试版本发布，实现了基本的照片上传和证件照生成功能，开始小范围用户测试。
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-year">2023年10月</h4>
                <h5 className="timeline-title">公测版本上线</h5>
                <p className="timeline-text">
                  完成了产品的大部分核心功能，包括多种证件照规格支持、背景颜色调整等，开始公开测试。
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-year">2024年1月</h4>
                <h5 className="timeline-title">正式版发布</h5>
                <p className="timeline-text">
                  快证先生1.0正式版发布，支持几十种证件照规格，并推出了AI自动修图、一键美颜等高级功能。
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-year">2024年至今</h4>
                <h5 className="timeline-title">持续发展</h5>
                <p className="timeline-text">
                  不断完善产品功能，优化用户体验，扩大服务规模，目前已累计服务超过10万用户，获得了广泛好评。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">我们的价值观</h2>
          <p className="paragraph">
            在快证先生，我们坚持以下核心价值观指导我们的工作和决策：
          </p>
          <p className="paragraph">
            <strong>用户至上：</strong>
            我们始终将用户需求放在首位，不断倾听用户反馈，持续改进产品体验。
          </p>
          <p className="paragraph">
            <strong>技术创新：</strong>
            我们积极拥抱新技术，运用人工智能、计算机视觉等先进技术提升产品能力。
          </p>
          <p className="paragraph">
            <strong>简约高效：</strong>
            我们追求产品的简洁易用，让技术的复杂性对用户透明，提供高效的解决方案。
          </p>
          <p className="paragraph">
            <strong>开放共享：</strong>
            我们相信知识的力量，乐于分享我们的经验和见解，与行业共同成长。
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
