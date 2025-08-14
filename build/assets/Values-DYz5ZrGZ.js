import {
    r as a,
    j as r,
    $ as V
} from "./client-DVrblGvH.js";
import {
    u,
    a as h,
    S as l
} from "./web-3yxPAvXP.js";
import {
    c as m
} from "./clsx-B-dksMZM.js";
import {
    g as d
} from "./maths-BcBSyK5V.js";
import {
    u as Z,
    S as x,
    a as T,
    m as ee
} from "./Video-BBuaToM0.js";
import {
    u as se
} from "./hook-Dy1HR1NH.js";
import {
    B as te
} from "./Button-B2cWWBb2.js";
import {
    i as re
} from "./innerHtml-CEPnmf3L.js";
import "./php_de-BQ7JcKcq.js";
import "./php_en-BEWIHNMz.js";
import "./php_es-N-rQexfv.js";
import "./php_et-CgC_YEx0.js";
import "./php_fr-D5uL_cPI.js";
import "./php_it-OO3BVlk-.js";
import "./php_nl-CLBq2UJu.js";
import "./index-B3wK0VMZ.js";
import "./meta-Ctg1RHBe.js";
import "./moment--fyrORtG.js";
const ne = "_valuesWrapper_jx3ei_23",
    ie = "_titleWrapper_jx3ei_27",
    ae = "_title_jx3ei_27",
    le = "_titleLine_jx3ei_63",
    oe = "_titleLineInner_jx3ei_69",
    ce = "_valuesContent_jx3ei_76",
    pe = "_active_jx3ei_81",
    ue = "_valuesList_jx3ei_81",
    me = "_valuesInner_jx3ei_89",
    de = "_value_jx3ei_23",
    _e = "_valueTitle_jx3ei_170",
    ge = "_lineH_jx3ei_193",
    fe = "_lineV_jx3ei_208",
    ve = "_valueDescriptionWrapper_jx3ei_223",
    je = "_valueDescriptionInner_jx3ei_238",
    he = "_valueDescription_jx3ei_223",
    xe = "_valueSmallDescription_jx3ei_257",
    Le = "_valueLink_jx3ei_269",
    Te = "_progressWrapper_jx3ei_278",
    Se = "_progressContent_jx3ei_301",
    We = "_progressPart_jx3ei_314",
    ye = "_linesW_jx3ei_318",
    Re = "_lines_jx3ei_318",
    Ie = "_dotWhite_jx3ei_336",
    Ne = "_progressLinesWrapper_jx3ei_340",
    Ce = "_progressLinesContent_jx3ei_347",
    De = "_number_jx3ei_357",
    s = {
        valuesWrapper: ne,
        titleWrapper: ie,
        title: ae,
        titleLine: le,
        titleLineInner: oe,
        valuesContent: ce,
        active: pe,
        valuesList: ue,
        valuesInner: me,
        value: de,
        valueTitle: _e,
        lineH: ge,
        lineV: fe,
        valueDescriptionWrapper: ve,
        valueDescriptionInner: je,
        valueDescription: he,
        valueSmallDescription: xe,
        valueLink: Le,
        progressWrapper: Te,
        progressContent: Se,
        progressPart: We,
        linesW: ye,
        lines: Re,
        dotWhite: Ie,
        progressLinesWrapper: Ne,
        progressLinesContent: Ce,
        number: De
    },
    Je = ({
        values: o
    }) => {
        const {
            t: S
        } = se(), _ = a.useRef(null), L = a.useRef(null), g = a.useRef(null), H = a.useRef(null), W = a.useRef(null), y = a.useRef(null), [P, B] = u(), [A, G] = u(), [$, M] = u(), [U, X] = u(), [Y, q] = u(), [z, R] = u(), [I, N] = u(), C = a.useRef([]), D = a.useRef([]), v = a.useRef(null), [F, J] = a.useState(-1), [c, w] = a.useState(-1), {
            add: K
        } = Z(), O = t => typeof window > "u" ? V : t.startsWith("http") && !t.startsWith(window.location.origin) ? "a" : V;
        return h(() => {
            const t = new l.SplitText("h2", {
                    type: "lines",
                    linesClass: s.titleLine
                }),
                e = new l.SplitText(t.lines, {
                    type: "lines",
                    linesClass: s.titleLineInner
                }),
                n = d.timeline({
                    paused: !0
                });
            n.fromTo(e.lines, {
                y: "105%",
                rotate: 10
            }, {
                y: "0%",
                rotate: 0,
                stagger: .13,
                duration: 1,
                ease: "power3"
            }, 0), n.addLabel("step-0"), n.to(e.lines, {
                y: "-105%",
                stagger: .13
            });
            const i = x.ScrollTrigger.create({
                trigger: _.current,
                start: "top 50%",
                end: () => `${L.current.offsetHeight}px`,
                id: "title",
                onEnter: () => {
                    n.tweenTo("step-0")
                },
                onLeaveBack: () => {
                    n.tweenTo(0, {
                        duration: .6
                    })
                }
            });
            return () => {
                t.revert(), e.revert(), i == null || i.kill(), n == null || n.kill()
            }
        }, {
            scope: L
        }), h(() => {
            const t = d.timeline({
                paused: !0
            });
            t.fromTo(y.current, {
                scaleY: 0
            }, {
                scaleY: 1,
                duration: 1.2,
                ease: "power2.out"
            }, .2), t.fromTo(W.current, {
                scaleX: 0
            }, {
                scaleX: 1,
                duration: 1.2,
                ease: "power2.out"
            }, .2);
            const e = x.ScrollTrigger.create({
                trigger: g.current,
                start: "top top",
                toggleClass: s.active,
                onEnter: () => {
                    t.play()
                },
                onEnterBack: () => {
                    t.play()
                },
                onLeave: () => {
                    t.reverse()
                },
                onLeaveBack: () => {
                    t.reverse()
                }
            });
            return () => {
                e == null || e.kill()
            }
        }, {
            scope: _
        }), h(async () => {
            await document.fonts.ready, $.current.forEach((t, e) => {
                const n = new l.SplitText(U.current[e], {
                        type: "lines",
                        linesClass: s.titleLine
                    }),
                    i = new l.SplitText(n.lines, {
                        type: "lines",
                        linesClass: s.titleLineInner
                    }),
                    j = new l.SplitText(Y.current[e], {
                        type: "lines",
                        linesClass: s.titleLine
                    }),
                    f = new l.SplitText(j.lines, {
                        type: "lines",
                        linesClass: s.titleLineInner
                    }),
                    k = new l.SplitText(z.current[e], {
                        type: "lines",
                        linesClass: s.titleLine
                    }),
                    Q = new l.SplitText(k.lines, {
                        type: "lines",
                        linesClass: s.titleLineInner
                    }),
                    b = k.lines.length > 0 ? [f.lines, Q.lines] : [f.lines],
                    p = d.timeline({
                        paused: !0
                    }),
                    E = d.timeline({
                        paused: !0
                    });
                p.set(t, {
                    opacity: 1
                }, 0), p.fromTo(i.lines, {
                    y: "100%"
                }, {
                    y: "0%",
                    ease: "power3.out",
                    duration: .8,
                    stagger: .1
                }, 0), p.fromTo(i.lines, {
                    alpha: 0
                }, {
                    alpha: 1,
                    duration: .4,
                    ease: "linear"
                }, "<"), p.fromTo(b, {
                    y: "100%"
                }, {
                    y: "0%",
                    ease: "power3.out",
                    duration: .6,
                    stagger: .05
                }, .2), p.fromTo(b, {
                    alpha: 0
                }, {
                    alpha: 1,
                    duration: .4,
                    ease: "linear"
                }, "<"), I.current[e] && p.fromTo(I.current[e], {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: .7,
                    ease: "linear"
                }, "-=.3"), C.current[e] = p, E.to(t, {
                    opacity: 0,
                    duration: .1,
                    ease: "linear"
                }, 0), D.current[e] = E
            })
        }, {
            scope: _
        }), h(() => {
            const t = o.length,
                e = d.timeline({
                    paused: !0
                });
            o.forEach((n, i) => {
                i < t - 1 && e.to([P.current[i + 1], A.current[i + 1]], {
                    x: 0,
                    duration: 1 / t * .5,
                    ease: "none"
                }, i / t)
            }), x.ScrollTrigger.create({
                trigger: g.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                onUpdate: n => {
                    var j, f;
                    const i = (f = (j = T.webgl) == null ? void 0 : j.domSync.rectangles.get(g.current)) == null ? void 0 : f.object;
                    i && (i.uniforms.uGradientScroll.value = T.tools ? n.progress * (n.end - n.start) / T.tools.viewport.height * 2 : 0, i.progress = n.progress)
                }
            }), x.ScrollTrigger.create({
                trigger: g.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                onUpdate: n => {
                    w(Math.min(Math.round(n.progress * o.length), o.length - 1)), e.seek(n.progress)
                },
                onLeaveBack: () => {
                    w(-1)
                }
            })
        }, {
            scope: _
        }), a.useEffect(() => {
            var i;
            (i = v.current) == null || i.kill(), v.current = d.timeline();
            const t = C.current[c],
                e = D.current[F];
            J(c);
            const n = c === 0 ? 0 : .3;
            v.current.add(() => {
                t == null || t.kill(), e == null || e.seek(0), e == null || e.play()
            }), v.current.add(() => {
                t == null || t.seek(0), t == null || t.play()
            }, n)
        }, [c]), r.jsxs("div", {
            ref: _,
            className: s.valuesWrapper,
            children: [r.jsx("div", {
                ref: L,
                className: s.titleWrapper,
                children: r.jsx(re.h2, {
                    className: s.title,
                    children: S("app.home.values_titles")
                })
            }), r.jsx("div", {
                ref: ee([g, K("gradients-home", 0)]),
                "data-config": "home",
                "data-object": "gradients",
                className: s.valuesContent,
                style: {
                    "--items-count": o.length + 1
                },
                children: r.jsxs("div", {
                    className: s.valuesInner,
                    children: [r.jsxs("ul", {
                        className: s.valuesList,
                        children: [r.jsx("hr", {
                            ref: y,
                            className: s.lineV
                        }), r.jsx("hr", {
                            ref: W,
                            className: m("hide-mobile", s.lineH)
                        }), o.map((t, e) => r.jsxs("li", {
                            ref: M(e),
                            className: m(c === e && s.active, s.value),
                            children: [r.jsx("h3", {
                                ref: X(e),
                                className: s.valueTitle,
                                children: t.title
                            }), r.jsx("hr", {
                                className: m("hide-desktop", s.lineH)
                            }), r.jsx("div", {
                                className: s.valueDescriptionWrapper,
                                children: r.jsxs("div", {
                                    className: s.valueDescriptionInner,
                                    children: [r.jsx("p", {
                                        ref: q(e),
                                        className: s.valueDescription,
                                        children: t.description
                                    }), t.smallDescription ? r.jsx("p", {
                                        ref: R(e),
                                        className: s.valueSmallDescription,
                                        children: t.smallDescription
                                    }) : r.jsx("span", {
                                        ref: R(e)
                                    }), t.link ? r.jsx(te, {
                                        ref: N(e),
                                        text: t.link ? ? S("app.ui.discover_offers"),
                                        as: O(t.href ? ? "/"),
                                        href: t.href ? ? "/",
                                        className: s.valueLink
                                    }) : r.jsx("span", {
                                        ref: N(e)
                                    })]
                                })
                            })]
                        }, e))]
                    }), r.jsx("div", {
                        ref: H,
                        className: m(c >= 0 && s.active, s.progressWrapper),
                        children: r.jsx("div", {
                            className: s.progressContent,
                            children: o.map((t, e) => r.jsxs("div", {
                                className: s.progressPart,
                                children: [e !== 0 && r.jsxs("div", {
                                    className: s.linesW,
                                    children: [r.jsx("div", {
                                        className: s.lines
                                    }), r.jsx("div", {
                                        className: s.lines
                                    }), r.jsx("div", {
                                        ref: B(e),
                                        className: s.progressLinesWrapper,
                                        children: r.jsxs("div", {
                                            ref: G(e),
                                            className: s.progressLinesContent,
                                            children: [r.jsx("div", {
                                                className: m(s.dotWhite, s.lines)
                                            }), r.jsx("div", {
                                                className: m(s.dotWhite, s.lines)
                                            })]
                                        })
                                    })]
                                }), r.jsxs("span", {
                                    className: m(e <= c && s.active, s.number),
                                    children: ["0", e + 1]
                                }, e)]
                            }, e))
                        })
                    })]
                })
            })]
        })
    };
export {
    Je as Values
};