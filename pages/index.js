import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm currently work as software engineer. You can also find me on{" "}
          <a href="https://codepen.io/hellofanny" target="_blank">
            Codepen
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
