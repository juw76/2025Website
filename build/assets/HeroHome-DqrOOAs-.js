import {
    r as s,
    j as e
} from "./client-DVrblGvH.js";
import {
    b as x,
    c as w,
    e as l,
    T as p
} from "./web-3yxPAvXP.js";
import {
    c as t
} from "./clsx-B-dksMZM.js";
import {
    u as j
} from "./hook-Dy1HR1NH.js";
import {
    V as d
} from "./Video-BBuaToM0.js";
import "./php_de-BQ7JcKcq.js";
import "./php_en-BEWIHNMz.js";
import "./php_es-N-rQexfv.js";
import "./php_et-CgC_YEx0.js";
import "./php_fr-D5uL_cPI.js";
import "./php_it-OO3BVlk-.js";
import "./php_nl-CLBq2UJu.js";
import "./maths-BcBSyK5V.js";
import "./index-B3wK0VMZ.js";
import "./meta-Ctg1RHBe.js";
import "./moment--fyrORtG.js";
const b = "_heroHomeWrapper_1tpnf_23",
    g = "_topContentWrapper_1tpnf_48",
    N = "_title_1tpnf_62",
    y = "_description_1tpnf_89",
    D = "_backgroundWrapper_1tpnf_115",
    V = "_hidden_1tpnf_168",
    k = "_loopingVideo_1tpnf_172",
    A = "_visible_1tpnf_175",
    B = "_fullDivWrapper_1tpnf_179",
    C = "_scrollDownBtnWrapper_1tpnf_202",
    H = "_scrollDownBtn_1tpnf_202",
    R = "_arrowWrapper_1tpnf_260",
    E = "_innerArrowWrapper_1tpnf_275",
    r = {
        heroHomeWrapper: b,
        topContentWrapper: g,
        title: N,
        description: y,
        backgroundWrapper: D,
        hidden: V,
        loopingVideo: k,
        visible: A,
        fullDivWrapper: B,
        scrollDownBtnWrapper: C,
        scrollDownBtn: H,
        arrowWrapper: R,
        innerArrowWrapper: E
    },
    Y = ({
        title: m,
        description: i
    }) => {
        const n = s.useRef(null),
            a = x(),
            {
                t: h
            } = j(),
            [c, _] = s.useState(!1),
            o = s.useRef(null),
            [u, f] = s.useState(!1);
        s.useEffect(() => {
            o.current && (o.current.load(), o.current.oncanplaythrough = () => f(!0))
        }, []);
        const v = () => {
                a && a.scrollTo(window.innerHeight, {
                    duration: 2
                })
            },
            W = () => {
                u && o.current && (o.current.currentTime = 0, o.current.play(), _(!0))
            };
        return e.jsxs("div", {
            ref: n,
            className: r.heroHomeWrapper,
            children: [e.jsxs("div", {
                className: t(r.fullDivWrapper, "container"),
                children: [e.jsxs("div", {
                    className: r.backgroundWrapper,
                    children: [e.jsxs(d, {
                        loop: !1,
                        className: t(r.video, {
                            [r.hidden]: c
                        }),
                        onEnded: W,
                        children: [e.jsx("source", {
                            src: "/videos/hero/home.mov",
                            type: "video/quicktime;codecs=hvc1"
                        }), e.jsx("source", {
                            src: "/videos/hero/home.webm",
                            type: "video/webm"
                        })]
                    }), e.jsxs(d, {
                        ref: o,
                        loop: !0,
                        className: t(r.video, r.loopingVideo, {
                            [r.visible]: c
                        }),
                        children: [e.jsx("source", {
                            src: "/videos/hero/home_loop.mov",
                            type: "video/quicktime;codecs=hvc1"
                        }), e.jsx("source", {
                            src: "/videos/hero/home_loop.webm",
                            type: "video/webm"
                        })]
                    })]
                }), e.jsx("div", {
                    className: r.scrollDownBtnWrapper,
                    "data-animation": "fade",
                    children: e.jsxs("button", {
                        className: r.scrollDownBtn,
                        "aria-label": "Scroll to discover",
                        onClick: v,
                        children: [e.jsx(w, {
                            uppercase: !0,
                            timescale: 1.5,
                            onHover: !0,
                            children: h("app.ui.scroll_to_discover")
                        }), e.jsx("div", {
                            className: r.arrowWrapper,
                            children: e.jsxs("div", {
                                className: r.innerArrowWrapper,
                                children: [e.jsx(l, {
                                    className: r.firstArrow
                                }), e.jsx(l, {
                                    className: r.secondArrow
                                })]
                            })
                        })]
                    })
                })]
            }), e.jsx("div", {
                className: "container",
                children: e.jsxs("div", {
                    className: r.topContentWrapper,
                    children: [e.jsx(p, {
                        className: r.title,
                        tag: "h1",
                        parentWrapper: n,
                        children: m
                    }), e.jsx(p, {
                        className: t(r.description, "hide-mobile hide-tablet-only"),
                        tag: "p",
                        parentWrapper: n,
                        byChar: !1,
                        children: i.long
                    }), i.short && e.jsx(p, {
                        className: t(r.description, "hide-desktop"),
                        tag: "p",
                        parentWrapper: n,
                        byChar: !1,
                        delay: .6,
                        children: i.short
                    })]
                })
            })]
        })
    };
export {
    Y as HeroHome
};