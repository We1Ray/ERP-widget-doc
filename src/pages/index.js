import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>React</>,
    imageUrl: "img/ReactJS.png",
    description: (
      <>
        React 是 Facebook 在 2013 年 3 月開源的 open source， 現在熱門主流的前端
        JavaScript 函式庫 (library) 之一， 專門用來寫 UI (User Interfaces)，
        React 是一套 library 而不是一套 framework， React 在 MVC
        模式中，只有負責 V (View) 介面的部分， 所以 React 可以拿來搭配其他
        Frontend MVC framework 一起使用。
      </>
    ),
  },
  {
    title: <>ERP-widget 模組化元件</>,
    imageUrl: "img/ERP-widget.png",
    description: (
      <>
        使用模組化的元件，簡化控制ReactJS元件之間和元件與後端的的溝通，使用通用模組元件減少UI的重複性
      </>
    ),
  },
  {
    title: <>Nodejs+Express.js</>,
    imageUrl: "img/nodejs.png",
    description: <>簡潔靈活的後端框架，快速啟動、測試，輕鬆上手</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col col--4">
      <div className="text--center">
        <img className={styles.featureImage} src={imgUrl} alt={title} />
      </div>
      <h3 className={styles.feature}>{title}</h3>
      <p className={styles.feature}>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {
    siteConfig = {
      baseUrl: "/ReactJSERPWidget/",
      projectName: "ReactJS ERP Platform",
      organizationName: "WEIRAY",
    },
  } = context;
  return (
    <Layout title={`${siteConfig.title}`}>
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img src="img/icon.png" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button btn-outline-danger button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/guides/ERP-widget")}
            >
              <font style={{ color: "#92C9F6" }}>Get Started</font>
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.content}>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
