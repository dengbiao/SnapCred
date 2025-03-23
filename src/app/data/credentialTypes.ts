import { CredentialType } from "@domain/models/CredentialType";

/**
 * 预定义的证件照类型列表
 */
export const credentialTypes: CredentialType[] = [
  new CredentialType({
    id: "passport",
    name: {
      zh: "护照照片",
      en: "Passport Photo"
    },
    description: {
      zh: "适用于中国护照及国际护照申请",
      en: "Suitable for Chinese and international passport applications"
    },
    icon: "/images/credentials/passport.svg",
    dimensions: {
      width: 33,
      height: 48
    },
    previewImage: "/images/credentials/preview/passport.jpg"
  }),
  new CredentialType({
    id: "id_card",
    name: {
      zh: "身份证照片",
      en: "ID Card Photo"
    },
    description: {
      zh: "符合中国第二代身份证标准规格",
      en: "Compliant with Chinese second-generation ID card standards"
    },
    icon: "/images/credentials/id_card.svg",
    dimensions: {
      width: 26,
      height: 32
    },
    previewImage: "/images/credentials/preview/id_card.jpg"
  }),
  new CredentialType({
    id: "driver_license",
    name: {
      zh: "驾驶证照片",
      en: "Driver's License Photo"
    },
    description: {
      zh: "符合中国驾驶证照片规格要求",
      en: "Compliant with Chinese driver's license photo requirements"
    },
    icon: "/images/credentials/driver.svg",
    dimensions: {
      width: 22,
      height: 32
    },
    previewImage: "/images/credentials/preview/driver.jpg"
  }),
  new CredentialType({
    id: "work_permit",
    name: {
      zh: "工作证照片",
      en: "Work Permit Photo"
    },
    description: {
      zh: "适用于大多数工作证、工牌及企业内部证件",
      en: "Suitable for most work permits, badges, and internal company credentials"
    },
    icon: "/images/credentials/work.svg",
    dimensions: {
      width: 25,
      height: 35
    },
    previewImage: "/images/credentials/preview/work.jpg"
  }),
  new CredentialType({
    id: "visa",
    name: {
      zh: "签证照片",
      en: "Visa Photo"
    },
    description: {
      zh: "适用于多国签证申请，包括申根签证",
      en: "Suitable for multi-country visa applications, including Schengen visas"
    },
    icon: "/images/credentials/visa.svg",
    dimensions: {
      width: 35,
      height: 45
    },
    previewImage: "/images/credentials/preview/visa.jpg"
  }),
  new CredentialType({
    id: "graduation",
    name: {
      zh: "毕业证照片",
      en: "Graduation Certificate Photo"
    },
    description: {
      zh: "适用于学位证、毕业证和学生证照片",
      en: "Suitable for degree certificates, graduation certificates, and student ID photos"
    },
    icon: "/images/credentials/graduation.svg",
    dimensions: {
      width: 35,
      height: 45
    },
    previewImage: "/images/credentials/preview/graduation.jpg"
  })
]; 