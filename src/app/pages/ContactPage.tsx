import React, { useState } from "react";
import Layout from "@presentation/components/layout/Layout";
import "../styles/pages/ContactPage.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "请输入您的姓名";
    }

    if (!formData.email.trim()) {
      newErrors.email = "请输入有效的邮箱地址";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }

    if (!formData.message.trim()) {
      newErrors.message = "请输入您的留言";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, you would submit the form data to a server here
      console.log("Form submitted:", formData);
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <Layout>
      <div className="contact-container">
        <h1 className="page-title">联系我们</h1>
        <p className="page-description">
          感谢您对快证先生的关注！无论您有任何问题、建议或合作意向，都欢迎通过以下方式与我们联系。我们将尽快回复您的咨询。
        </p>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-card">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="64"
                    height="64"
                    fill="#34a853"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"></path>
                  </svg>
                </div>
                <h2 className="success-title">感谢您的留言</h2>
                <p className="success-description">
                  我们已收到您的信息，将尽快与您联系。您的反馈对我们非常重要，感谢您的支持！
                </p>
                <button
                  className="new-message-button"
                  onClick={() => setIsSubmitted(false)}
                >
                  发送新留言
                </button>
              </div>
            ) : (
              <>
                <h2 className="card-title">给我们留言</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? "error" : ""}`}
                    />
                    {errors.name && (
                      <p className="error-message">{errors.name}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? "error" : ""}`}
                    />
                    {errors.email && (
                      <p className="error-message">{errors.email}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      留言
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`form-input form-textarea ${
                        errors.message ? "error" : ""
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="error-message">{errors.message}</p>
                    )}
                  </div>

                  <button type="submit" className="submit-button">
                    提交留言
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Information */}
          <div className="contact-info-card">
            <h2 className="card-title">联系方式</h2>

            <div className="info-section">
              <h3 className="info-title">
                <span className="info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                </span>
                公司地址
              </h3>
              <p className="info-content">
                上海市浦东新区张江高科技园区
                <br />
                科苑路88号
                <br />
                邮编: 200120
              </p>
              <div className="map-container">
                {/* 在实际应用中，这里可以放置地图组件 */}
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "#e9ecef",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="#4285F4"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3 className="info-title">
                <span className="info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                  </svg>
                </span>
                电子邮件
              </h3>
              <p className="info-content">
                <a href="mailto:contact@snapcred.com" className="info-link">
                  contact@snapcred.com
                </a>
              </p>
            </div>

            <div className="info-section">
              <h3 className="info-title">
                <span className="info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path>
                  </svg>
                </span>
                电话
              </h3>
              <p className="info-content">
                <a href="tel:+8621123456789" className="info-link">
                  +86 21 1234 5678
                </a>
              </p>
            </div>

            <div className="info-section">
              <h3 className="info-title">
                <span className="info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                  </svg>
                </span>
                工作时间
              </h3>
              <p className="info-content">
                周一至周五: 9:00 - 18:00
                <br />
                周六至周日: 休息
              </p>
            </div>

            <div className="info-section">
              <h3 className="info-title">
                <span className="info-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                  </svg>
                </span>
                社交媒体
              </h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17 2H7C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zM8.9 17.1c.8 0 1.2-.3 1.5-.8l.3.7h1.5v-5h-2.1c-1.5 0-2.6 1-2.6 2.5 0 1.7 1 2.6 2.4 2.6zm6.8 0c1.6 0 2.8-1 2.8-2.6 0-1.7-1.2-2.5-2.6-2.5h-2.1v5h1.5l.3-.7c.3.5.7.8 1.1.8zM8.5 13.4h.9c.7 0 1.2.5 1.2 1.3 0 .8-.5 1.3-1.2 1.3h-.9v-2.6zm7.1 0h.9c.7 0 1.2.5 1.2 1.3 0 .8-.5 1.3-1.2 1.3h-.9v-2.6zM6 10h12v1H6v-1zm0-4h12v1H6V6z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
