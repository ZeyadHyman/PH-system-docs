import React from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="PH System Documentation"
      description="Comprehensive documentation for the PH System platform"
    >
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--12 text--center">
              <h1 className="hero__title">Welcome to PH System</h1>
              <p className="hero__subtitle">
                Comprehensive documentation and guides for the PH System
                platform
              </p>
            </div>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
