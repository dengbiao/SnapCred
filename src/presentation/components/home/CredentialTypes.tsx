import React from "react";
import "@styles/components/home/CredentialTypes.scss";

type CredentialType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

export const CredentialTypes: React.FC = () => {
  const credentialTypesList: CredentialType[] = [
    {
      id: "academic",
      title: "学术证书",
      description:
        "包括学位证书、课程证书和研究成果认证，为学术领域提供可信的数字证明。",
      imageUrl: "/images/credentials/academic.svg",
    },
    {
      id: "professional",
      title: "职业资格证书",
      description: "专业技能和职业资格认证，帮助雇主快速验证求职者的专业能力。",
      imageUrl: "/images/credentials/professional.svg",
    },
    {
      id: "achievement",
      title: "成就证书",
      description: "记录个人或团队的特殊成就和贡献，提供长期可验证的数字证明。",
      imageUrl: "/images/credentials/achievement.svg",
    },
    {
      id: "membership",
      title: "会员资格证书",
      description: "确认组织成员身份，提供特定权益和访问权限的数字凭证。",
      imageUrl: "/images/credentials/membership.svg",
    },
    {
      id: "event",
      title: "活动参与证书",
      description:
        "证明参与特定活动、会议或培训的数字证书，支持个人职业发展记录。",
      imageUrl: "/images/credentials/event.svg",
    },
    {
      id: "custom",
      title: "定制化证书",
      description:
        "根据机构特定需求定制的证书类型，满足特殊场景的证书颁发需求。",
      imageUrl: "/images/credentials/custom.svg",
    },
  ];

  return (
    <section
      className="credential-types-container"
      data-testid="credential-types-section"
    >
      <h2 className="credential-types-title">证书类型</h2>
      <p className="credential-types-subtitle">
        多样化的证书类型满足不同需求，为各行各业提供可靠的数字凭证解决方案
      </p>

      <div
        className="credential-types-grid"
        data-testid="credential-types-list"
      >
        {credentialTypesList.map((credentialType) => (
          <div
            key={credentialType.id}
            className="credential-type-card"
            data-testid="credential-type-card"
          >
            <div className="credential-image-container">
              <img
                src={credentialType.imageUrl}
                alt={`${credentialType.title} 图标`}
                data-testid="credential-image"
              />
            </div>
            <h3 className="credential-title" data-testid="credential-title">
              {credentialType.title}
            </h3>
            <p
              className="credential-description"
              data-testid="credential-description"
            >
              {credentialType.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
