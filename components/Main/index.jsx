import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Main.module.scss";
import ImageResponsive from "./ImageResponsive";

export default function Main() {
  const router = useRouter();
  useEffect(() => {
    const { pathname } = router;
    const subdomain = location.hostname.split(".")[0];
    console.log(router);
    console.log(subdomain);
    console.log(pathname);
    // if (pathname === "/") {
    //   router.push("/hello-nextjs");
    // }
  });

  return (
    <main className={styles.main}>
      <div className={styles["main-first"]} />
      <div className={styles["main-second"]}>
        <div className={styles["submain-one"]}>
          <ImageResponsive />
        </div>
        <div className={styles["submain-two"]}>
          <span>Boas vindas! Me chame de Arqueiro Verde.</span>
        </div>
        <div className={styles["submain-three"]}>
          <ul>
            <li>
              <a href="https://facebook.com/fiquenocontrole" rel="noreferrer" target="_blank">
                <div className={styles.image}>
                  <Image
                    alt="Acesse nosso Facebook"
                    width={50}
                    height={50}
                    objectFit="contain"
                    src="/icons/icon-fb.svg"
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/fiquenocontrole" rel="noreferrer" target="_blank">
                <div className={styles.image}>
                  <Image
                    alt="Acesse nosso Twitter"
                    width={50}
                    height={50}
                    objectFit="contain"
                    src="/icons/icon-tt.svg"
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/fiquenocontrole" rel="noreferrer" target="_blank">
                <div className={styles.image}>
                  <Image
                    alt="Acesse nosso Instagram"
                    width={50}
                    height={50}
                    objectFit="contain"
                    src="/icons/icon-insta.svg"
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="https://youtube.com/fiquenocontrolebr" rel="noreferrer" target="_blank">
                <div className={styles.image}>
                  <Image
                    alt="Acesse nosso canal no Youtube"
                    width={50}
                    height={50}
                    objectFit="contain"
                    src="/icons/icon-yt.svg"
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="https://fb.gg/fiquenocontrole" rel="noreferrer" target="_blank">
                <div className={styles.image}>
                  <Image
                    alt="Acesse nosso canal no Facebook Gaming"
                    width={50}
                    height={50}
                    objectFit="contain"
                    src="/icons/icon-gg.svg"
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitch.tv/fiquenocontrole" rel="noreferrer" target="_blank">
                <div className={styles.image}>
                  <Image
                    alt="Acesse nosso canal na Twitch"
                    width={50}
                    height={50}
                    objectFit="contain"
                    src="/icons/icon-twitch.svg"
                  />
                </div>
              </a>
            </li>
          </ul>

          <FontAwesomeIcon icon={faAngleDoubleDown} className={styles["fa-icon"]} />
        </div>
      </div>
      <div className={styles["main-third"]} />
    </main>
  );
}
