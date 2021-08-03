import { useState, useEffect } from "react";
import styles from "../../styles/ChannelStatus.module.scss";

const getYoutubeData = async () => {
  const ytKey = process.env.YT_KEY;
  const ytUsr = process.env.YT_ID;

  const data = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ytUsr}&key=${ytKey}`,
  );
  const response = data.json();
  return response;
};

export default function ChannelStatus() {
  const [youtube, setYoutube] = useState({
    subscriberCount: 0,
    videoCount: 0,
    viewCount: 0,
  });

  // const animateCount = (value) => {
  //     let current = -1;
  //     const timer = setInterval(function() {
  //         current++;
  //         console.log(current)
  //         if (current === value) {
  //             clearInterval(timer);
  //         }
  //     }, 10);
  // }

  // animateCount(288);

  useEffect(() => {
    getYoutubeData().then((yt) => {
      setYoutube(yt.items[0].statistics);
    });
  }, []);

  return (
    <section className={styles["channel-status"]}>
      <div className={styles["status-one"]}>
        <span className={styles["status-title"]}>
          {Number(youtube.subscriberCount).toLocaleString("pt-br")}
        </span>
        <br />
        <span className={styles["status-subtitle"]}>inscritos</span>
      </div>
      <div className={styles["status-two"]}>
        <span className={styles["status-title"]}>
          {Number(youtube.videoCount).toLocaleString("pt-br")}
        </span>
        <br />
        <span className={styles["status-subtitle"]}>vídeos</span>
      </div>
      <div className={styles["status-three"]}>
        <span className={styles["status-title"]}>
          {Number(youtube.viewCount).toLocaleString("pt-br")}
        </span>
        <br />
        <span className={styles["status-subtitle"]}>visualizações</span>
      </div>
    </section>
  );
}
