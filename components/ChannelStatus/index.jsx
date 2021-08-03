import { useState } from "react";

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

  getYoutubeData().then((yt) => {
    setYoutube(yt.items[0].statistics);
  });

  return (
    <section className="channel-status">
      <div className="status-one">
        <span className="status-title">{youtube.subscriberCount}</span>
        <br />
        <span className="status-subtitle">inscritos</span>
      </div>
      <div className="status-two">
        <span className="status-title">{youtube.videoCount}</span>
        <br />
        <span className="status-subtitle">vídeos</span>
      </div>
      <div className="status-three">
        <span className="status-title">{youtube.viewCount}</span>
        <br />
        <span className="status-subtitle">visualizações</span>
      </div>
    </section>
  );
}
