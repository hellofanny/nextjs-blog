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
            src={`${basePath}/${book.id}.jpg`}
            alt="Picture of book cover"
            layout="fill"
            placeholder="blur" // Optional blur-up while loading
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
