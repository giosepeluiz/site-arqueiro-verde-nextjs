export default function LastVideos(){
    return(
        <section className="videos">
            <h1>Últimos Vídeos</h1>
            <hr />

            <p className="videos-text text">O canal Fique no Controle foi criado em 31 de outubro de 2017 com o intuito de apresentar gameplays, unboxings e outras coisas relacionadas ao mundo dos jogos.</p>
            
            <div className="videos-row">

                <div className="video-item">
                    <span className="video-title">Nome do vídeo</span>
                    <span className="video-views">2589 visualizações</span>
                </div>

                <div className="video-item">
                    <span className="video-title">Nome do vídeo</span>
                    <span className="video-views">2589 visualizações</span>
                </div>

                <div className="video-item">
                    <span className="video-title">Nome do vídeo</span>
                    <span className="video-views">2589 visualizações</span>
                </div>

                <div className="video-item">
                    <span className="video-title">Nome do vídeo</span>
                    <span className="video-views">2589 visualizações</span>
                </div>

                <div className="video-item">
                    <span className="video-title">Nome do vídeo</span>
                    <span className="video-views">2589 visualizações</span>
                </div>

                <div className="video-item">
                    <span className="video-title">Nome do vídeo</span>
                    <span className="video-views">2589 visualizações</span>
                </div>

            </div>

            <select>
                <option disabled selected>Navegue até uma playlist</option>
                <option>Assassin&apos;s Creed</option>
                <option>Assassin&apos;s Creed II</option>
                <option>Assassin&apos;s Creed III Remastered</option>
            </select>

        </section>
    )
}