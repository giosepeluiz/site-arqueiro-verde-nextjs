import styles from "../../../styles/LastVideos.module.scss";
import Playlist from "./Playlist";
import Videos from "./Videos";

export default function LastVideos() {
  return (
    <section className={styles.videos}>
      <h1>Assista aos Vídeos</h1>
      <hr />

      <p className={styles["videos-text"]}>
        O canal Fique no Controle foi criado em 31 de outubro de 2017 com o intuito de apresentar
        gameplays, unboxings e outras coisas relacionadas ao mundo dos jogos.
      </p>

      <div className={styles["videos-row"]}>
        <Videos styles={styles} />
      </div>

      <Playlist />
    </section>
  );
}
