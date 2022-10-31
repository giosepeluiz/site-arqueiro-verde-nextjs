import styles from "../styles/Home.module.scss";

const Home = () => (
  <main className={styles["main-wrapper"]}>
    <div className={styles["main-title"]}>
      <span className={styles["main-title-emphasis"]}>&#10094;</span>
      <span className={styles["main-title-middle"]}>ArqueiroVerde</span>
      <span className={styles["main-title-emphasis"]}>/&#10095;</span>
    </div>

    <div className={styles["main-subtitle"]}>
      <span className={styles["main-subtitle-name"]}>Giosepe Luiz</span>
      <span className={styles["main-subtitle-arrow"]}>{`=>`}</span>
      <span className={styles["main-subtitle-dev"]}>{`{ desenvolvedor web }`}</span>
    </div>
  </main>
);

export default Home;
