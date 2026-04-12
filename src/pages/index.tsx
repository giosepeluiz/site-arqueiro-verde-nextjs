import { NextSeo } from "next-seo";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { WheelEvent } from "react";
import styles from "styles/Home.module.scss";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

const HIDDEN_REPOS = [
  "giosepeluiz",
  "boilerplate-nextjs-13",
  "boilerplate-nextjs-14",
  "boilerplate-nextjs",
];

const HERO_TITLE_TEXT = "❮ArqueiroVerde/❯";
const HERO_SUBTITLE_TEXT = "Giosepe Luiz=>{ desenvolvedor web }";
const HERO_TITLE_EMPHASIS_CHARS = new Set(["❮", "/", "❯"]);
const HERO_SUBTITLE_EMPHASIS_CHARS = new Set(["=", ">"]);
const HERO_SUBTITLE_DEV_START = HERO_SUBTITLE_TEXT.indexOf("{");
const HERO_SUBTITLE_DEV_END = HERO_SUBTITLE_TEXT.lastIndexOf("}");
const HERO_TITLE_OPENING_INDEX = HERO_TITLE_TEXT.indexOf("❮");
const HERO_TITLE_SLASH_INDEX = HERO_TITLE_TEXT.lastIndexOf("/");
const HERO_SUBTITLE_ARROW_INDEX = HERO_SUBTITLE_TEXT.indexOf("=>");

const Home = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [typedTitle, setTypedTitle] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const projectsRef = useRef<HTMLElement | null>(null);
  const isMagneticScrollingRef = useRef(false);
  const magneticTimeoutRef = useRef<number | null>(null);

  const scrollToProjects = () => {
    if (!projectsRef.current || isMagneticScrollingRef.current) {
      return;
    }

    isMagneticScrollingRef.current = true;
    projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

    if (magneticTimeoutRef.current) {
      window.clearTimeout(magneticTimeoutRef.current);
    }

    magneticTimeoutRef.current = window.setTimeout(() => {
      isMagneticScrollingRef.current = false;
    }, 900);
  };

  const handleHeroWheel = (event: WheelEvent<HTMLElement>) => {
    if (event.deltaY <= 8) {
      return;
    }

    event.preventDefault();
    scrollToProjects();
  };

  const hasFinishedTitleTyping = typedTitle.length === HERO_TITLE_TEXT.length;

  useEffect(() => {
    let typingTimeout: number | undefined;

    if (typedTitle.length < HERO_TITLE_TEXT.length) {
      typingTimeout = window.setTimeout(() => {
        setTypedTitle(HERO_TITLE_TEXT.slice(0, typedTitle.length + 1));
      }, 75);
    } else if (typedSubtitle.length < HERO_SUBTITLE_TEXT.length) {
      typingTimeout = window.setTimeout(() => {
        setTypedSubtitle(HERO_SUBTITLE_TEXT.slice(0, typedSubtitle.length + 1));
      }, 40);
    }

    return () => {
      if (typingTimeout) {
        window.clearTimeout(typingTimeout);
      }
    };
  }, [typedTitle, typedSubtitle]);

  useEffect(() => {
    const controller = new AbortController();

    const loadRepos = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "https://api.github.com/users/giosepeluiz/repos?sort=updated&per_page=12",
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Falha ao carregar os projetos do GitHub.");
        }

        const data: GitHubRepo[] = await response.json();
        const hiddenReposSet = new Set(
          HIDDEN_REPOS.map((repoName) => repoName.toLowerCase()),
        );
        const publicRepos = data
          .filter(
            (repo) =>
              !repo.fork && !hiddenReposSet.has(repo.name.toLowerCase()),
          )
          .slice(0, 8);
        setRepos(publicRepos);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setErrorMessage("Nao foi possivel carregar os projetos agora.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadRepos();

    return () => {
      if (magneticTimeoutRef.current) {
        window.clearTimeout(magneticTimeoutRef.current);
      }
      controller.abort();
    };
  }, []);

  return (
    <>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title="Arqueiro Verde - Desenvolvimento Web"
        description="Arqueiro Verde - Desenvolvimento Web"
        openGraph={{
          type: "website",
          url: "https://arqueirover.de",
          title: "Arqueiro Verde - Desenvolvimento Web",
          description: "Arqueiro Verde - Desenvolvimento Web",
          images: [
            {
              url: ".",
              width: 800,
              height: 420,
              alt: "Arqueiro Verde - Desenvolvimento Web",
            },
            { url: "images/og-banner.jpg" },
          ],
          site_name: "Arqueiro Verde - Desenvolvimento Web",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "icons/favicon.ico",
          },
        ]}
      />

      <main className={styles["main-wrapper"]} onWheel={handleHeroWheel}>
        <div className={styles["main-title"]}>
          <span>
            {Array.from(typedTitle).map((character, index) => (
              <span
                key={`title-char-${index}`}
                className={[
                  hasFinishedTitleTyping &&
                  HERO_TITLE_EMPHASIS_CHARS.has(character)
                    ? styles["main-title-emphasis"]
                    : "",
                  index === HERO_TITLE_OPENING_INDEX
                    ? styles["main-title-space-after-open"]
                    : "",
                  index === HERO_TITLE_SLASH_INDEX
                    ? styles["main-title-space-before-close"]
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}>
                {character}
              </span>
            ))}
          </span>
          {typedTitle.length < HERO_TITLE_TEXT.length && (
            <span className={styles["typing-cursor"]} aria-hidden="true">
              |
            </span>
          )}
        </div>

        <div className={styles["main-subtitle"]}>
          <span>
            {Array.from(typedSubtitle).map((character, index) => {
              if (index === HERO_SUBTITLE_ARROW_INDEX + 1) {
                return null;
              }

              if (index === HERO_SUBTITLE_ARROW_INDEX) {
                return (
                  <span
                    key="subtitle-arrow"
                    className={styles["main-subtitle-arrow-token"]}>
                    {"=>"}
                  </span>
                );
              }

              return (
                <span
                  key={`subtitle-char-${index}`}
                  className={
                    HERO_SUBTITLE_EMPHASIS_CHARS.has(character)
                      ? styles["main-subtitle-emphasis"]
                      : index >= HERO_SUBTITLE_DEV_START &&
                        index <= HERO_SUBTITLE_DEV_END
                      ? styles["main-subtitle-dev"]
                      : ""
                  }>
                  {character}
                </span>
              );
            })}
          </span>
          {typedTitle.length === HERO_TITLE_TEXT.length && (
            <span className={styles["typing-cursor"]} aria-hidden="true">
              |
            </span>
          )}
        </div>

        <ul className={styles["main-menu"]}>
          <li className={styles["main-menu-icon"]}>
            <a
              href="https://github.com/giosepeluiz"
              target="_blank"
              rel="noreferrer">
              <Image
                src="/images/logo-github-white.svg"
                width="60"
                height="60"
                alt="Logotipo Github"
              />
            </a>
          </li>
          <li className={styles["main-menu-icon"]}>
            <a
              href="https://facebook.com/giosepeluiz"
              target="_blank"
              rel="noreferrer">
              <Image
                src="/icons/icon-fb.svg"
                width="60"
                height="60"
                alt="Logotipo Facebook"
              />
            </a>
          </li>
          <li className={styles["main-menu-icon"]}>
            <a
              href="https://instagram.com/giosepeluiz"
              target="_blank"
              rel="noreferrer">
              <Image
                src="/icons/icon-insta.svg"
                width="60"
                height="60"
                alt="Logotipo Instagram"
              />
            </a>
          </li>
        </ul>
        <div className={styles["main-tip"]}>[descer]</div>
        <button
          type="button"
          onClick={scrollToProjects}
          aria-label="Ir para projetos"
          className={`${styles["main-arrow"]} ${styles["main-arrow-button"]}`}>
          &#x21d3;
        </button>
      </main>

      <section className={styles["projects-wrapper"]} ref={projectsRef}>
        <div className={styles["projects-inner"]}>
          <h2 className={styles["projects-title"]}>
            Projetos Publicos no GitHub
          </h2>
          <p className={styles["projects-subtitle"]}>@giosepeluiz</p>

          {isLoading && (
            <p className={styles["projects-feedback"]}>
              Carregando projetos...
            </p>
          )}
          {!isLoading && errorMessage && (
            <p className={styles["projects-feedback"]}>{errorMessage}</p>
          )}

          {!isLoading && !errorMessage && (
            <div className={styles["projects-grid"]}>
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles["projects-card"]}>
                  <h3 className={styles["projects-card-title"]}>{repo.name}</h3>
                  <p className={styles["projects-card-description"]}>
                    {repo.description ||
                      "Projeto publico disponivel no seu GitHub."}
                  </p>
                  <div className={styles["projects-card-meta"]}>
                    <span>{repo.language || "Sem linguagem informada"}</span>
                    <span>★ {repo.stargazers_count}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
