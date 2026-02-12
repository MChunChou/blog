import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Homepage from "@site/src/components/Homepage";
import Background from "@site/src/components/Backgrond";

import styles from "./index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
    // title={`${siteConfig.title}`}
    // description="Description will go into a meta tag in <head />"
    >
      <Background />
      <main>
        <Homepage />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
