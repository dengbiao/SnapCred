import React from "react";
import Layout from "@presentation/components/layout/Layout";
import "../styles/pages/HomePage.scss";
import Hero from "@presentation/components/home/Hero";
import Features from "@presentation/components/home/Features";
import { CredentialTypes } from "@presentation/components/home/CredentialTypes";
import ProcessFlow from "@presentation/components/home/ProcessFlow";
import FAQ from "@presentation/components/home/FAQ";
import Testimonials from "@presentation/components/home/Testimonials";
import CTA from "@presentation/components/home/CTA";

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">快速制作专业证件照</h1>
          <p className="hero-subtitle">
            在几分钟内获得符合各种规格的高质量证件照，无需专业设备，随时随地，完全免费
          </p>
          <Link to="/upload" className="hero-button">
            立即制作证件照
          </Link>
        </div>
      </section> */}
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Credential Types Section */}
      <CredentialTypes />

      {/* Process Section */}
      <ProcessFlow />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA />
    </Layout>
  );
};

export default HomePage;
