import {
    r as l,
    j as e
} from "./client-DVrblGvH.js";
import {
    u
} from "./hook-Dy1HR1NH.js";
import {
    T as i
} from "./web-3yxPAvXP.js";
import {
    C as c
} from "./ChatGlobe-CCBGmKg_.js";
import {
    HeroHome as x
} from "./HeroHome-DqrOOAs-.js";
import {
    KeyNumbersHome as h
} from "./KeyNumbersHome-B7tiPzhO.js";
import {
    UseCasesListing as C
} from "./UseCasesListing-CsM1ixH8.js";
import {
    Values as d
} from "./Values-DYz5ZrGZ.js";
import {
    NewsListing as _
} from "./NewsListing-BI1tBC0S.js";
import "./php_de-BQ7JcKcq.js";
import "./php_en-BEWIHNMz.js";
import "./php_es-N-rQexfv.js";
import "./php_et-CgC_YEx0.js";
import "./php_fr-D5uL_cPI.js";
import "./php_it-OO3BVlk-.js";
import "./php_nl-CLBq2UJu.js";
import "./maths-BcBSyK5V.js";
import "./Video-BBuaToM0.js";
import "./clsx-B-dksMZM.js";
import "./index-B3wK0VMZ.js";
import "./meta-Ctg1RHBe.js";
import "./moment--fyrORtG.js";
import "./Globe-BI52bYoy.js";
import "./Button-B2cWWBb2.js";
import "./innerHtml-CEPnmf3L.js";
import "./NavigationBar-D0Oz531L.js";
import "./chevron-right-rLNBw_Rz.js";
import "./ItemCard-Cd6z31fw.js";
const I = "_useCasesIntro_ypy6x_23",
    b = "_useCasesIntroTitle_ypy6x_36",
    f = "_useCasesIntroDescription_ypy6x_49",
    r = {
        useCasesIntro: I,
        useCasesIntroTitle: b,
        useCasesIntroDescription: f
    },
    S = ({
        keyNumbers: a,
        useCases: p,
        points: n,
        values: m,
        news: s = []
    }) => {
        const {
            t
        } = u(), o = l.useRef(null);
        return e.jsxs(e.Fragment, {
            children: [e.jsx(x, {
                title: t("app.home.slogan"),
                description: {
                    long: t("app.home.slogan_long"),
                    short: t("app.home.slogan_short")
                }
            }), e.jsx("div", {
                className: r.useCasesIntro,
                children: e.jsxs("div", {
                    ref: o,
                    className: "container",
                    children: [e.jsx(i, {
                        className: r.useCasesIntroTitle,
                        tag: "h2",
                        parentWrapper: o,
                        children: t("app.home.useCase_title")
                    }), e.jsx(i, {
                        className: r.useCasesIntroDescription,
                        tag: "p",
                        byChar: !1,
                        delay: .6,
                        parentWrapper: o,
                        children: t("app.home.useCase_description")
                    })]
                })
            }), e.jsx(C, {
                withNavigation: !0,
                useCases: p
            }), e.jsx(d, {
                values: m
            }), e.jsx(h, {
                title: t("app.home.about_keynumbers.title"),
                description: t("app.home.about_keynumbers.description"),
                link: {
                    text: t("app.home.about_keynumbers.link"),
                    url: route("web.about.index")
                },
                keyNumbers: a
            }), e.jsx(c, {
                title: t("app.home.globe.title"),
                link: {
                    text: t("app.home.globe.link"),
                    url: route("web.contact.index")
                },
                points: n
            }), s && s.length > 0 && e.jsx(_, {
                news: s
            })]
        })
    };
export {
    S as Index, S as
    default
};