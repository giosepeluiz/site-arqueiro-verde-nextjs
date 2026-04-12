module.exports = [
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/src/styles/Home.module.scss [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "blink-cursor": "Home-module-scss-module__FTgTta__blink-cursor",
  "main-arrow": "Home-module-scss-module__FTgTta__main-arrow",
  "main-arrow-button": "Home-module-scss-module__FTgTta__main-arrow-button",
  "main-menu": "Home-module-scss-module__FTgTta__main-menu",
  "main-menu-icon": "Home-module-scss-module__FTgTta__main-menu-icon",
  "main-subtitle": "Home-module-scss-module__FTgTta__main-subtitle",
  "main-subtitle-arrow": "Home-module-scss-module__FTgTta__main-subtitle-arrow",
  "main-subtitle-arrow-token": "Home-module-scss-module__FTgTta__main-subtitle-arrow-token",
  "main-subtitle-dev": "Home-module-scss-module__FTgTta__main-subtitle-dev",
  "main-subtitle-emphasis": "Home-module-scss-module__FTgTta__main-subtitle-emphasis",
  "main-subtitle-name": "Home-module-scss-module__FTgTta__main-subtitle-name",
  "main-tip": "Home-module-scss-module__FTgTta__main-tip",
  "main-title": "Home-module-scss-module__FTgTta__main-title",
  "main-title-emphasis": "Home-module-scss-module__FTgTta__main-title-emphasis",
  "main-title-middle": "Home-module-scss-module__FTgTta__main-title-middle",
  "main-title-space-after-open": "Home-module-scss-module__FTgTta__main-title-space-after-open",
  "main-title-space-before-close": "Home-module-scss-module__FTgTta__main-title-space-before-close",
  "main-wrapper": "Home-module-scss-module__FTgTta__main-wrapper",
  "projects-card": "Home-module-scss-module__FTgTta__projects-card",
  "projects-card-description": "Home-module-scss-module__FTgTta__projects-card-description",
  "projects-card-meta": "Home-module-scss-module__FTgTta__projects-card-meta",
  "projects-card-title": "Home-module-scss-module__FTgTta__projects-card-title",
  "projects-feedback": "Home-module-scss-module__FTgTta__projects-feedback",
  "projects-grid": "Home-module-scss-module__FTgTta__projects-grid",
  "projects-inner": "Home-module-scss-module__FTgTta__projects-inner",
  "projects-subtitle": "Home-module-scss-module__FTgTta__projects-subtitle",
  "projects-title": "Home-module-scss-module__FTgTta__projects-title",
  "projects-wrapper": "Home-module-scss-module__FTgTta__projects-wrapper",
  "typing-cursor": "Home-module-scss-module__FTgTta__typing-cursor",
});
}),
"[project]/src/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$seo__$5b$external$5d$__$28$next$2d$seo$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$seo$29$__ = __turbopack_context__.i("[externals]/next-seo [external] (next-seo, cjs, [project]/node_modules/next-seo)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/Home.module.scss [ssr] (css module)");
;
;
;
;
;
const HIDDEN_REPOS = [
    "giosepeluiz",
    "boilerplate-nextjs-13",
    "boilerplate-nextjs-14",
    "boilerplate-nextjs"
];
const HERO_TITLE_TEXT = "❮ArqueiroVerde/❯";
const HERO_SUBTITLE_TEXT = "Giosepe Luiz=>{ desenvolvedor web }";
const HERO_TITLE_EMPHASIS_CHARS = new Set([
    "❮",
    "/",
    "❯"
]);
const HERO_SUBTITLE_EMPHASIS_CHARS = new Set([
    "=",
    ">"
]);
const HERO_SUBTITLE_DEV_START = HERO_SUBTITLE_TEXT.indexOf("{");
const HERO_SUBTITLE_DEV_END = HERO_SUBTITLE_TEXT.lastIndexOf("}");
const HERO_TITLE_OPENING_INDEX = HERO_TITLE_TEXT.indexOf("❮");
const HERO_TITLE_SLASH_INDEX = HERO_TITLE_TEXT.lastIndexOf("/");
const HERO_SUBTITLE_ARROW_INDEX = HERO_SUBTITLE_TEXT.indexOf("=>");
const Home = ()=>{
    const [repos, setRepos] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [typedTitle, setTypedTitle] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [typedSubtitle, setTypedSubtitle] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const projectsRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const isMagneticScrollingRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    const magneticTimeoutRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const scrollToProjects = ()=>{
        if (!projectsRef.current || isMagneticScrollingRef.current) {
            return;
        }
        isMagneticScrollingRef.current = true;
        projectsRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        if (magneticTimeoutRef.current) {
            window.clearTimeout(magneticTimeoutRef.current);
        }
        magneticTimeoutRef.current = window.setTimeout(()=>{
            isMagneticScrollingRef.current = false;
        }, 900);
    };
    const handleHeroWheel = (event)=>{
        if (event.deltaY <= 8) {
            return;
        }
        event.preventDefault();
        scrollToProjects();
    };
    const hasFinishedTitleTyping = typedTitle.length === HERO_TITLE_TEXT.length;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let typingTimeout;
        if (typedTitle.length < HERO_TITLE_TEXT.length) {
            typingTimeout = window.setTimeout(()=>{
                setTypedTitle(HERO_TITLE_TEXT.slice(0, typedTitle.length + 1));
            }, 75);
        } else if (typedSubtitle.length < HERO_SUBTITLE_TEXT.length) {
            typingTimeout = window.setTimeout(()=>{
                setTypedSubtitle(HERO_SUBTITLE_TEXT.slice(0, typedSubtitle.length + 1));
            }, 40);
        }
        return ()=>{
            if (typingTimeout) {
                window.clearTimeout(typingTimeout);
            }
        };
    }, [
        typedTitle,
        typedSubtitle
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const controller = new AbortController();
        const loadRepos = async ()=>{
            try {
                setIsLoading(true);
                const response = await fetch("https://api.github.com/users/giosepeluiz/repos?sort=updated&per_page=12", {
                    signal: controller.signal
                });
                if (!response.ok) {
                    throw new Error("Falha ao carregar os projetos do GitHub.");
                }
                const data = await response.json();
                const hiddenReposSet = new Set(HIDDEN_REPOS.map((repoName)=>repoName.toLowerCase()));
                const publicRepos = data.filter((repo)=>!repo.fork && !hiddenReposSet.has(repo.name.toLowerCase())).slice(0, 8);
                setRepos(publicRepos);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setErrorMessage("Nao foi possivel carregar os projetos agora.");
                }
            } finally{
                setIsLoading(false);
            }
        };
        loadRepos();
        return ()=>{
            if (magneticTimeoutRef.current) {
                window.clearTimeout(magneticTimeoutRef.current);
            }
            controller.abort();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$seo__$5b$external$5d$__$28$next$2d$seo$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$seo$29$__["NextSeo"], {
                title: "Arqueiro Verde - Desenvolvimento Web",
                description: "Arqueiro Verde - Desenvolvimento Web",
                openGraph: {
                    type: "website",
                    url: "https://arqueirover.de",
                    title: "Arqueiro Verde - Desenvolvimento Web",
                    description: "Arqueiro Verde - Desenvolvimento Web",
                    images: [
                        {
                            url: ".",
                            width: 800,
                            height: 420,
                            alt: "Arqueiro Verde - Desenvolvimento Web"
                        },
                        {
                            url: "images/og-banner.jpg"
                        }
                    ],
                    site_name: "Arqueiro Verde - Desenvolvimento Web"
                },
                additionalLinkTags: [
                    {
                        rel: "icon",
                        href: "icons/favicon.ico"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/pages/index.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-wrapper"],
                onWheel: handleHeroWheel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-title"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: Array.from(typedTitle).map((character, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: [
                                            hasFinishedTitleTyping && HERO_TITLE_EMPHASIS_CHARS.has(character) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-title-emphasis"] : "",
                                            index === HERO_TITLE_OPENING_INDEX ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-title-space-after-open"] : "",
                                            index === HERO_TITLE_SLASH_INDEX ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-title-space-before-close"] : ""
                                        ].filter(Boolean).join(" "),
                                        children: character
                                    }, `title-char-${index}`, false, {
                                        fileName: "[project]/src/pages/index.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            typedTitle.length < HERO_TITLE_TEXT.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["typing-cursor"],
                                "aria-hidden": "true",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/index.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-subtitle"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: Array.from(typedSubtitle).map((character, index)=>{
                                    if (index === HERO_SUBTITLE_ARROW_INDEX + 1) {
                                        return null;
                                    }
                                    if (index === HERO_SUBTITLE_ARROW_INDEX) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-subtitle-arrow-token"],
                                            children: "=>"
                                        }, "subtitle-arrow", false, {
                                            fileName: "[project]/src/pages/index.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: HERO_SUBTITLE_EMPHASIS_CHARS.has(character) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-subtitle-emphasis"] : index >= HERO_SUBTITLE_DEV_START && index <= HERO_SUBTITLE_DEV_END ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-subtitle-dev"] : "",
                                        children: character
                                    }, `subtitle-char-${index}`, false, {
                                        fileName: "[project]/src/pages/index.tsx",
                                        lineNumber: 219,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            typedTitle.length === HERO_TITLE_TEXT.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["typing-cursor"],
                                "aria-hidden": "true",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/index.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-menu"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-menu-icon"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/giosepeluiz",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/logo-github-white.svg",
                                        width: "60",
                                        height: "60",
                                        alt: "Logotipo Github"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/index.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-menu-icon"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "https://facebook.com/giosepeluiz",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/icons/icon-fb.svg",
                                        width: "60",
                                        height: "60",
                                        alt: "Logotipo Facebook"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/index.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-menu-icon"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "https://instagram.com/giosepeluiz",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/icons/icon-insta.svg",
                                        width: "60",
                                        height: "60",
                                        alt: "Logotipo Instagram"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/index.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/index.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-tip"],
                        children: "[descer]"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: scrollToProjects,
                        "aria-label": "Ir para projetos",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-arrow"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["main-arrow-button"]}`,
                        children: "⇓"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["projects-wrapper"],
                ref: projectsRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["projects-inner"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["projects-title"],
                            children: "Projetos Publicos no GitHub"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/index.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["projects-subtitle"],
                            children: "@giosepeluiz"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/index.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["projects-feedback"],
                            children: "Carregando projetos..."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/index.tsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        !isLoading && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["projects-feedback"],
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/pages/index.tsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        !isLoading && !errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["projects-grid"],
                            children: repos.map((repo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: repo.html_url,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["projects-card"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["projects-card-title"],
                                            children: repo.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/index.tsx",
                                            lineNumber: 317,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["projects-card-description"],
                                            children: repo.description || "Projeto publico disponivel no seu GitHub."
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/index.tsx",
                                            lineNumber: 318,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Home$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]["projects-card-meta"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    children: repo.language || "Sem linguagem informada"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/index.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "★ ",
                                                        repo.stargazers_count
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/index.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/index.tsx",
                                            lineNumber: 322,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, repo.id, true, {
                                    fileName: "[project]/src/pages/index.tsx",
                                    lineNumber: 311,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/index.tsx",
                            lineNumber: 309,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/index.tsx",
                    lineNumber: 293,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/index.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Home;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__10oo-h4._.js.map