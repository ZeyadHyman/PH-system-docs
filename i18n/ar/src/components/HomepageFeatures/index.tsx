import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'سهل الاستخدام',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        تم تصميم Docusaurus من البداية ليكون سهلاً في التثبيت والاستخدام
        لجعل موقعك يعمل بسرعة.
      </>
    ),
  },
  {
    title: 'ركز على ما يهم',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        يتيح لك Docusaurus التركيز على توثيقك، وسنقوم نحن بالمهام الروتينية. 
        اذهب قدماً ونقل توثيقك إلى مجلد <code>docs</code>.
      </>
    ),
  },
  {
    title: 'مدعوم بـ React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        وسّع أو خصّص تخطيط موقعك بإعادة استخدام React. يمكن تمديد Docusaurus
        مع إعادة استخدام نفس الترويسة والتذييل.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
