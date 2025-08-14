import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

export default function HomepageFeatures(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const isArabic = i18n.currentLocale === "ar";

  const featureContent = {
    en: [
      {
        title: "Easy to Use",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        description: (
          <>
            Docusaurus was designed from the ground up to be easily installed
            and used to get your website up and running quickly.
          </>
        ),
      },
      {
        title: "Focus on What Matters",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: (
          <>
            Docusaurus lets you focus on your docs, and we&apos;ll do the
            chores. Go ahead and move your docs into the <code>docs</code>{" "}
            directory.
          </>
        ),
      },
      {
        title: "Powered by React",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
          <>
            Extend or customize your website layout by reusing React. Docusaurus
            can be extended while reusing the same header and footer.
          </>
        ),
      },
    ],
    ar: [
      {
        title: "سهل الاستخدام",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        description: (
          <>
            تم تصميم Docusaurus من البداية ليكون سهلاً في التثبيت والاستخدام
            لجعل موقعك يعمل بسرعة.
          </>
        ),
      },
      {
        title: "ركز على ما يهم",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: (
          <>
            يتيح لك Docusaurus التركيز على مستنداتك، وسنقوم نحن بالمهام
            الروتينية. اذهب قدماً وانقل مستنداتك إلى مجلد <code>docs</code>.
          </>
        ),
      },
      {
        title: "مدعوم بـ React",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
          <>
            وسع أو خصص تخطيط موقعك بإعادة استخدام React. يمكن تمديد Docusaurus
            مع إعادة استخدام نفس الترويسة والتذييل.
          </>
        ),
      },
    ],
  };

  const currentFeatures = isArabic ? featureContent.ar : featureContent.en;

  function Feature({ title, Svg, description }: FeatureItem) {
    return (
      <div className={clsx("col col--4")}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {currentFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
