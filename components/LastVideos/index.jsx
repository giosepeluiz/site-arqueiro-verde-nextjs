import styles from "../../styles/LastVideos.module.scss";

export default function LastVideos() {
  return (
    <section className={styles.videos}>
      <h1>Últimos Vídeos</h1>
      <hr />

      <p className={styles["videos-text"]}>
        O canal Fique no Controle foi criado em 31 de outubro de 2017 com o intuito de apresentar
        gameplays, unboxings e outras coisas relacionadas ao mundo dos jogos.
      </p>

      <div className={styles["videos-row"]}>
        <div className={styles["video-item"]}>
          <span className={styles["video-title"]}>Nome do vídeo</span>
          <span className={styles["video-views"]}>2589 visualizações</span>
        </div>

        <div className={styles["video-item"]}>
          <span className={styles["video-title"]}>Nome do vídeo</span>
          <span className={styles["video-views"]}>2589 visualizações</span>
        </div>

        <div className={styles["video-item"]}>
          <span className={styles["video-title"]}>Nome do vídeo</span>
          <span className={styles["video-views"]}>2589 visualizações</span>
        </div>

        <div className={styles["video-item"]}>
          <span className={styles["video-title"]}>Nome do vídeo</span>
          <span className={styles["video-views"]}>2589 visualizações</span>
        </div>

        <div className={styles["video-item"]}>
          <span className={styles["video-title"]}>Nome do vídeo</span>
          <span className={styles["video-views"]}>2589 visualizações</span>
        </div>

        <div className={styles["video-item"]}>
          <span className={styles["video-title"]}>Nome do vídeo</span>
          <span className={styles["video-views"]}>2589 visualizações</span>
        </div>
      </div>

      <select>
        <option disabled>Navegue até uma playlist</option>
        <option>Assassin&apos;s Creed</option>
        <option>Assassin&apos;s Creed II</option>
        <option>Assassin&apos;s Creed III Remastered</option>
      </select>
    </section>
  );
}
