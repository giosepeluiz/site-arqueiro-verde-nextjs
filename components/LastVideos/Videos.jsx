import { useState } from "react";

const goToURL = (e) => {
  if (e !== "") {
    window.open(e, "_blank");
  }
};

export default function Videos(props) {
  const [videos] = useState([
    {
      title: "Uma jornada muito insana",
      videoId: "q_0ThCyT4lI",
      playlist: "Far Cry 3 [Hardcore]",
    },
    {
      title: "Consequências das Areias do Tempo",
      videoId: "tyI0sBkLdRI",
      playlist: "Prince of Persia: Warrior Within",
    },
    {
      title: "Aventuras num mundo cyberpunk",
      videoId: "HqtYEoYAzc8",
      playlist: "Deus Ex",
    },
    {
      title: "Pancadaria e sangue jorrando",
      videoId: "5qQ7zMD_rlg",
      playlist: "Deadpool",
    },
    {
      title: "Sobrevivência num mundo de zumbis",
      videoId: "i9sLMvYlP3I",
      playlist: "The Walking Dead: Survival Instinct",
    },
    {
      title: "A última aventura em Chernobyl",
      videoId: "kTWt1GF6lMI",
      playlist: "S.T.A.L.K.E.R. Call of Pripyat",
    },
  ]);
  return (
    <>
      {videos.map((e) => (
        <div
          key={e.videoId}
          className={props.styles["video-item"]}
          style={{
            backgroundImage: `url('https://img.youtube.com/vi/${e.videoId}/mqdefault.jpg')`,
            backgroundSize: "cover",
          }}
          onClick={() => goToURL(`https://www.youtube.com/watch?v=${e.videoId}`)}
          onKeyPress={null}
          role="link"
          tabIndex="0">
          <span className={props.styles["video-title"]}>{e.title}</span>
          <span className={props.styles["video-views"]}>{e.playlist}</span>
        </div>
      ))}
    </>
  );
}
