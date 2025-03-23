import React, { useState } from "react";
import { FAQ as FAQModel } from "../../../domain/models/FAQ";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Sample FAQ data
const faqData: FAQModel[] = [
  new FAQModel({
    id: "1",
    question: {
      zh: "快证先生可以制作哪些类型的证件照？",
      en: "What types of ID photos can SnapCred create?",
    },
    answer: {
      zh: "快证先生支持多种证件照类型，包括身份证、护照、签证、驾照、工作证、学生证等各种标准尺寸的证件照。",
      en: "SnapCred supports various ID photo types, including identity cards, passports, visas, driver's licenses, work permits, student IDs, and other standard-sized ID photos.",
    },
    category: "general",
  }),
  new FAQModel({
    id: "2",
    question: {
      zh: "照片处理需要多长时间？",
      en: "How long does photo processing take?",
    },
    answer: {
      zh: "使用我们的AI技术，大多数照片处理只需几秒钟。复杂的处理可能需要长达一分钟的时间。",
      en: "With our AI technology, most photos are processed within seconds. Complex processing may take up to a minute.",
    },
    category: "usage",
  }),
  new FAQModel({
    id: "3",
    question: {
      zh: "如何确保照片符合官方要求？",
      en: "How do you ensure photos meet official requirements?",
    },
    answer: {
      zh: "我们的系统根据各类证件的官方规范和标准进行智能调整，包括尺寸、背景颜色、亮度和对比度等，确保照片符合要求。",
      en: "Our system intelligently adjusts photos according to official specifications and standards for various credentials, including size, background color, brightness, and contrast, ensuring compliance with requirements.",
    },
    category: "quality",
  }),
  new FAQModel({
    id: "4",
    question: {
      zh: "我可以在手机上使用快证先生吗？",
      en: "Can I use SnapCred on my mobile phone?",
    },
    answer: {
      zh: "是的，快证先生完全支持移动设备。您可以直接通过手机浏览器访问我们的网站，无需下载任何应用。",
      en: "Yes, SnapCred fully supports mobile devices. You can access our website directly through your mobile browser without downloading any applications.",
    },
    category: "usage",
  }),
  new FAQModel({
    id: "5",
    question: {
      zh: "照片处理完成后，我可以保存多久？",
      en: "How long can I keep my processed photos?",
    },
    answer: {
      zh: "您处理完成的照片将在我们的系统中保存7天，此期间您可以随时下载。我们建议您下载后自行保存。",
      en: "Your processed photos will be stored in our system for 7 days, during which you can download them at any time. We recommend that you save them yourself after downloading.",
    },
    category: "storage",
  }),
];

const FAQ: React.FC = () => {
  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  // Toggle FAQ item expansion
  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // For this example we'll default to Chinese
  const language = "zh";

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">常见问题</h2>

        <div className="faq-items">
          {faqData.map((faq) => (
            <div key={faq.id} className="faq-item" data-testid="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleItem(faq.id)}
                data-testid="faq-question"
              >
                <h3>{faq.getLocalizedQuestion(language)}</h3>
                <span
                  className={`icon ${expandedItems[faq.id] ? "expanded" : ""}`}
                >
                  {expandedItems[faq.id] ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>

              <div
                className={`faq-answer ${
                  expandedItems[faq.id] ? "expanded" : "collapsed"
                }`}
                data-testid="faq-answer"
                style={{
                  visibility: expandedItems[faq.id] ? "visible" : "hidden",
                }}
              >
                <p>{faq.getLocalizedAnswer(language)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <p className="contact-text">还有其他问题？请联系我们的客服团队</p>
          <a href="/contact" className="contact-button">
            联系客服
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
