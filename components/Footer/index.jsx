import styles from "../../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-copy"]}>
        <span>
          Desenvolvido por Giosepe Luiz com o{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          para todos que apoiam o projeto.
        </span>
      </div>
    </footer>
  );
}
