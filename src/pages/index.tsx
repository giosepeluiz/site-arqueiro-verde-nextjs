import Image from "next/image";
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

    <ul className={styles["main-menu"]}>
      <li className={styles["main-menu-icon"]}>
        <Image src="/images/logo-github-white.svg" width="70" height="70" alt="Logotipo Github" />
      </li>
    </ul>
  </main>
);

export default Home;
