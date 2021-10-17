import styles from "../pages/404.module.css";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Oh no!</h1>
      <h2 className={styles.description}>404 - Page not found</h2>
    </div>
  );
}
