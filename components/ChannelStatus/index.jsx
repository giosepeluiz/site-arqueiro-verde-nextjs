import ytch from 'yt-channel-info';

function youtube(id) {
    const channelId = id;
    ytch
      .getChannelInfo(channelId)
      .then((response) => response)
      .catch((err) => err);
}


export default function ChannelStatus(){

    console.log(youtube("UCjzB67LSKFcDdkEcYX6Q7rg"));

    return(
        <section className="channel-status">
            <div className="status-one">
                <span className="status-title">900</span><br />
                <span className="status-subtitle">inscritos</span>
            </div>
            <div className="status-two">
                <span className="status-title">1180</span><br />
                <span className="status-subtitle">vídeos</span>
            </div>
            <div className="status-three">
                <span className="status-title">3000</span><br />
                <span className="status-subtitle">visualizações</span>
            </div>
        </section>
    )    
}