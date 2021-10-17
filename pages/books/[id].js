import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import styles from "./book.module.css";
import Image from "next/image";

import books from "../../data/books";

export const getStaticPaths = () => {
  // map data to an array of path objects with params (id)
  const paths = books.map((book) => {
    return {
      params: { id: book.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const id = context.params.id;
  const data = books.find((book) => book.id === id);

  return {
    props: { book: data },
  };
};

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#FEE6E8" offset="20%" />
      <stop stop-color="#fff" offset="50%" />
      <stop stop-color="#FEE6E8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#FEE6E8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function Book({ book }) {
  const basePath = "/images";
  return (
    <Layout>
      <Head>
        <title>{book.title}</title>
      </Head>
      <article className={styles.book_container}>
        <div className={styles.book_image}>
          <Image
            src={`${basePath}/${book.id}.jpeg`}
            alt={`${book.shortTitle} book cover image`}
            layout="fill"
            placeholder="blur" // Optional blur-up while loading
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </div>
        <header className={styles.book_header}>
          <h1 className={utilStyles.headingXl}>{book.title}</h1>
          <span className={utilStyles.lightText}>{book.author}</span>
        </header>
        <div className={styles.book_details}>
          <div>
            <p>{book.description}</p>
            <a href={book.link} target="_blank" rel="noreferrer">
              More details on Amazon
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
