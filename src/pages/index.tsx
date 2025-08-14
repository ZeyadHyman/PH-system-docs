import React from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home(): JSX.Element {
  const { i18n } = useDocusaurusContext();
  const isArabic = i18n.currentLocale === "ar";

  const content = {
    en: {
      title: "Welcome to PH System",
      subtitle:
        "Comprehensive documentation and guides for the PH System platform",
      pageTitle: "PH System Documentation",
      pageDescription: "Comprehensive documentation for the PH System platform",
    },
    ar: {
      title: "مرحباً بك في نظام PH",
      subtitle: "توثيق شامل ودليل لنظام PH",
      pageTitle: "توثيق نظام PH",
      pageDescription: "توثيق شامل ودليل لنظام PH",
    },
  };

  const currentContent = isArabic ? content.ar : content.en;

  return (
    <Layout
      title={currentContent.pageTitle}
      description={currentContent.pageDescription}
    >
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--12 text--center">
              <h1 className="hero__title">{currentContent.title}</h1>
              <p className="hero__subtitle">{currentContent.subtitle}</p>
            </div>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
