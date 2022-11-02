import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const [tipClass, setTipClass] = useState("none");

  return (
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
          <a href="https://github.com/giosepeluiz" target="_blank" rel="noreferrer">
            <Image
              src="/images/logo-github-white.svg"
              width="70"
              height="70"
              alt="Logotipo Github"
              onMouseEnter={setTipClass("block")}
              onMouseLeave={setTipClass("none")}
            />
          </a>
        </li>
      </ul>
      <div className={styles["main-tip"]}>[descer]</div>
      <div className={styles["main-arrow"]}>&#x21d3;</div>
    </main>
  );
};

export default Home;
