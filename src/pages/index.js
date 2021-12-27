import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Scale larger</>,
    imageUrl: 'img/stonks.jpg',
    description: (
      <>
        Spectacles is inherently stateless, meaning you&apos;ll always be able
        to add more servers as your bot grows.
      </>
    ),
  },
  {
    title: <>Build bigger</>,
    imageUrl: 'img/stonks.jpg',
    description: (
      <>
        Spectacles is engineered around microservices, enabling you to build
        bigger and more complex applications around your Discord bot.
      </>
    ),
  },
  {
    title: <>Serve reliably</>,
    imageUrl: 'img/stonks.jpg',
    description: (
      <>
        Spectacles is designed to recover gracefully, allowing you to focus on
        building your application rather than keeping it alive.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const logoUrl = useBaseUrl('img/white-padding.svg');
  const {siteConfig = {}} = context;
  return (
    <Layout>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src={logoUrl} alt="Spectacles" />
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
