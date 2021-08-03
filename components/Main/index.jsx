import Image from 'next/image';

export default function Main(){
    return(
        <main className="main">
            <div className="main-first" />
            <div className="main-second">
                <div className="submain-one">
                    <picture>
                        <source media="(min-width: 650px)" srcSet="./img/logo-texto.svg" />
                            <Image src="/images/logo-texto-alt.svg" layout="fill" alt="Logo Fique no Controle" id="logo-main" />
                        </picture>
                </div>
                <div className="submain-two text">
                    <span>Boas vindas! Me chame de Arqueiro Verde.</span>
                </div>
                <div className="submain-three">
                    <ul>
                        <li><a href="https://facebook.com/fiquenocontrole" rel="noreferrer" target="_blank"><Image alt="Acesse nosso Facebook" layout="fill" src="/icons/icon-fb.svg" /></a></li>
                        <li><a href="https://twitter.com/fiquenocontrole" rel="noreferrer" target="_blank"><Image alt="Acesse nosso Twitter" layout="fill" src="/icons/icon-tt.svg" /></a></li>
                        <li><a href="https://instagram.com/fiquenocontrole" rel="noreferrer" target="_blank"><Image alt="Acesse nosso Instagram" layout="fill" src="/icons/icon-insta.svg" /></a></li>
                        <li><a href="https://youtube.com/fiquenocontrolebr" rel="noreferrer" target="_blank"><Image alt="Acesse nosso canal no Youtube" layout="fill" src="/icons/icon-yt.svg" /></a></li>
                        <li><a href="https://fb.gg/fiquenocontrole" rel="noreferrer" target="_blank"><Image alt="Acesse nosso canal no Facebook Gaming" layout="fill" src="/icons/icon-gg.svg" /></a></li>
                        <li><a href="https://twitch.tv/fiquenocontrole" rel="noreferrer" target="_blank"><Image alt="Acesse nosso canal na Twitch" layout="fill" src="/icons/icon-twitch.svg" /></a></li>
                    </ul>

                    <i className="fas fa-angle-double-down" />
                </div>
            </div>
            <div className="main-third" />
        </main>
    )
}