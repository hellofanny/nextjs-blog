import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

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
      <article>
        <h1 className={utilStyles.headingXl}>{book.title}</h1>
        <span className={utilStyles.lightText}> {book.author}</span>
        <div>
          <p>{book.description}</p>
          <a href={book.link} target="_blank" rel="noreferrer">
            More details on Amazon
          </a>
        </div>
      </article>
    </Layout>
  );
}
