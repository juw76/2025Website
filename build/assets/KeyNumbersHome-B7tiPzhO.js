import {
    r as l,
    j as t,
    $ as h
} from "./client-DVrblGvH.js";
import {
    u as p,
    a as j,
    T as m
} from "./web-3yxPAvXP.js";
import {
    g as W
} from "./maths-BcBSyK5V.js";
import {
    S as v,
    V as R
} from "./Video-BBuaToM0.js";
import {
    B as T
} from "./Button-B2cWWBb2.js";
import "./php_de-BQ7JcKcq.js";
import "./php_en-BEWIHNMz.js";
import "./php_es-N-rQexfv.js";
import "./php_et-CgC_YEx0.js";
import "./php_fr-D5uL_cPI.js";
import "./php_it-OO3BVlk-.js";
import "./php_nl-CLBq2UJu.js";
import "./clsx-B-dksMZM.js";
import "./index-B3wK0VMZ.js";
import "./meta-Ctg1RHBe.js";
import "./hook-Dy1HR1NH.js";
import "./moment--fyrORtG.js";
const C = "_keyNumbersHomeWrapper_18b9b_23",
    S = "_bgVideoContainer_18b9b_36",
    V = "_video_18b9b_48",
    H = "_textWrapper_18b9b_59",
    A = "_title_18b9b_72",
    L = "_description_18b9b_82",
    w = "_keyNumberWrapper_18b9b_95",
    E = "_number_18b9b_161",
    B = "_unit_18b9b_177",
    $ = "_numberText_18b9b_189",
    q = "_aboutLink_18b9b_204",
    r = {
        keyNumbersHomeWrapper: C,
        bgVideoContainer: S,
        video: V,
        textWrapper: H,
        title: A,
        description: L,
        keyNumberWrapper: w,
        number: E,
        unit: B,
        numberText: $,
        aboutLink: q
    },
    k = ({
        title: d,
        description: u,
        link: a,
        keyNumbers: o
    }) => {
        const n = l.useRef(null),
            i = l.useRef(null),
            [c, b] = p(),
            [x, _] = p(),
            [f, g] = p();
        return j(() => {
            const e = W.timeline({
                paused: !0
            });
            e.from(c.current, {
                textContent: 0,
                duration: 1.6,
                snap: {
                    textContent: 1
                },
                ease: "power3.out"
            }, 0), e.to(c.current, {
                opacity: 1,
                duration: 1.1,
                ease: "linear",
                stagger: .1
            }, .1), e.to(x.current, {
                opacity: 1,
                duration: 1.1,
                ease: "linear",
                stagger: .1
            }, .1), e.to(f.current, {
                opacity: 1,
                duration: 1.1,
                ease: "linear",
                stagger: .1
            }, .4);
            const s = v.ScrollTrigger.create({
                trigger: i.current,
                start: "top 80%",
                animation: e,
                toggleActions: "play complete none none"
            });
            return () => {
                s == null || s.kill()
            }
        }), t.jsx("div", {
            className: r.keyNumbersHomeWrapper,
            children: t.jsxs("div", {
                className: "container",
                children: [t.jsx("div", {
                    className: r.bgVideoContainer,
                    children: t.jsxs(R, {
                        isWebgl: !0,
                        className: r.video,
                        children: [t.jsx("source", {
                            src: "/videos/hero/about.mov",
                            type: "video/quicktime;codecs=hvc1"
                        }), t.jsx("source", {
                            src: "/videos/hero/about.webm",
                            type: "video/webm"
                        })]
                    })
                }), t.jsxs("div", {
                    ref: n,
                    className: r.textWrapper,
                    children: [t.jsx(m, {
                        className: r.title,
                        tag: "h3",
                        parentWrapper: n,
                        children: d
                    }), t.jsx(m, {
                        className: r.description,
                        tag: "p",
                        byChar: !1,
                        delay: .2,
                        parentWrapper: n,
                        children: u
                    })]
                }), o && o.length > 0 && t.jsxs("div", {
                    ref: i,
                    className: r.keyNumberWrapper,
                    children: [t.jsx("ul", {
                        children: o.map((e, s) => t.jsxs("li", {
                            children: [(e == null ? void 0 : e.number) && t.jsxs("div", {
                                className: r.number,
                                children: [t.jsx("span", {
                                    ref: b(s),
                                    children: e == null ? void 0 : e.number
                                }), " ", (e == null ? void 0 : e.unit) && t.jsx("sup", {
                                    ref: _(s),
                                    className: r.unit,
                                    children: e.unit
                                })]
                            }), t.jsx("p", {
                                ref: g(s),
                                className: r.numberText,
                                children: e == null ? void 0 : e.text
                            })]
                        }, s))
                    }), a && t.jsx(T, {
                        scrambleText: !0,
                        parentWrapper: i,
                        text: a.text,
                        theme: "primary",
                        as: h,
                        href: a.url,
                        className: r.aboutLink,
                        "data-animation": "fade",
                        "data-delay": "0.4",
                        scrambleDelay: .5
                    })]
                })]
            })
        })
    };
export {
    k as KeyNumbersHome
};