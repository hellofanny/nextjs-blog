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
  return (
    <Layout>
      <Head>
        <title>{book.title}</title>
      </Head>
      <article className={styles.book_container}>
        <div className={styles.book_image}>
          <Image
            src="https://images-na.ssl-images-amazon.com/images/I/81qJb1LmkBL.jpg"
            alt="Picture of the author"
            width={400}
            height={520}
            layout="responsive"
            placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className={styles.book_details}>
          <h1 className={utilStyles.headingXl}>{book.title}</h1>
          <span className={utilStyles.lightText}> {book.author}</span>
          <div>
            <p>{book.description}</p>
            <p>blahaajahahahahah</p>
            blahaajahahahahahblahaajahahahahah blahaajahahahahah
            blahaajahahahahah blahaajahahahahah blahaajahahahahah
            blahaajahahahahah blahaajahahahahahblahaajahahahahah
            blahaajahahahahah
            <a href={book.link} target="_blank" rel="noreferrer">
              More details on Amazon
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
