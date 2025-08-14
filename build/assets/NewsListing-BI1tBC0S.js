import {
    r as n,
    j as s,
    $ as B
} from "./client-DVrblGvH.js";
import {
    d as E,
    u as M,
    a as k,
    T as P
} from "./web-3yxPAvXP.js";
import {
    c as D
} from "./clsx-B-dksMZM.js";
import {
    u as $,
    N as F
} from "./NavigationBar-D0Oz531L.js";
import {
    g as G
} from "./maths-BcBSyK5V.js";
import {
    u as O,
    S as Q
} from "./Video-BBuaToM0.js";
import {
    u as q
} from "./hook-Dy1HR1NH.js";
import {
    a as z,
    I as y
} from "./ItemCard-Cd6z31fw.js";
import {
    B as H
} from "./Button-B2cWWBb2.js";
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
import "./chevron-right-rLNBw_Rz.js";
const J = "_newsListingWrapper_1h70x_23",
    K = "_title_1h70x_44",
    U = "_embla_1h70x_62",
    V = "_newsList_1h70x_23",
    X = "_overlayMobile_1h70x_95",
    Y = "_navigationBar_1h70x_112",
    Z = "_itemContainer_1h70x_117",
    ee = "_lastItemContainer_1h70x_187",
    i = {
        newsListingWrapper: J,
        title: K,
        embla: U,
        newsList: V,
        overlayMobile: X,
        navigationBar: Y,
        itemContainer: Z,
        lastItemContainer: ee
    },
    Ne = ({
        news: h,
        className: C,
        withTitle: j = !0
    }) => {
        const {
            t: f
        } = q(), c = E(), d = n.useRef(null), [w, _] = M(), x = n.useRef(null), b = n.useRef(null), N = n.useRef(null), m = n.useRef(null), g = n.useRef(null), v = z({
            container: d,
            rectAnimRef: x,
            titleRef: b,
            buttonRef: N
        }), [S, a] = $({
            active: !0,
            breakpoints: {
                "(min-width: 1024px)": {
                    active: !1
                }
            }
        }), [I, L] = n.useState(0), u = n.useMemo(() => h.sort((e, t) => new Date(t.published_at).getTime() - new Date(e.published_at).getTime()), [h]), p = n.useMemo(() => {
            const e = [],
                t = (r, l) => {
                    [...new Array(r)].forEach((R, o) => {
                        l.includes(o) || o >= u.length ? (e.push(null), o < u.length && e.push(u[o])) : e.push(u[o])
                    })
                };
            return typeof window > "u" ? [] : ((c === "mobile" || c === "tablet") && window.innerWidth < 1024 ? t(6, []) : c === "desktop" ? t(6, [2, 3]) : t(5, [2, 4]), e)
        }, [u, c]), {
            add: A
        } = O();
        n.useEffect(() => {
            if ((c === "mobile" || c === "tablet") && window.innerWidth < 1024 && a) {
                const e = () => L(a.selectedScrollSnap());
                return a.on("select", e), e(), () => {
                    a.off("select", e)
                }
            }
        }, [c, a]);
        const T = () => {
                a && a.scrollPrev()
            },
            W = () => {
                a && a.scrollNext()
            };
        return k(() => {
            var e, t;
            if (w.current) {
                (e = m.current) == null || e.kill(), (t = g.current) == null || t.kill(), m.current = G.timeline({
                    paused: !0
                });
                let r = 0;
                w.current.forEach((l, R) => {
                    var o;
                    l && l.tl && ((o = m.current) == null || o.add(l.tl.play(), R * .05), r += .05)
                }), v.current && m.current.add(v.current.play(), r + .05), g.current = Q.ScrollTrigger.create({
                    trigger: d.current,
                    start: "top 75%",
                    animation: m.current,
                    toggleActions: "play complete none none"
                })
            }
            return () => {
                var r, l;
                (r = m.current) == null || r.kill(), (l = g.current) == null || l.kill()
            }
        }, [p]), s.jsx("div", {
            className: D(i.newsListingWrapper, C),
            children: s.jsxs("div", {
                className: "container",
                children: [j && s.jsx(P, {
                    className: i.title,
                    tag: "h3",
                    children: f("app.sections.newslisting_title")
                }), s.jsxs("div", {
                    ref: S,
                    className: i.embla,
                    children: [s.jsxs("div", {
                        ref: d,
                        className: i.newsList,
                        children: [p.map((e, t) => {
                            var r;
                            return e ? s.jsx(y, {
                                ref: _(t),
                                animate: !0,
                                item: {
                                    title: e.title,
                                    tags: [{
                                        title: ((r = e.category) == null ? void 0 : r.title) ? ? ""
                                    }],
                                    published_at: e.published_at,
                                    href: route("web.news.single", e.slug)
                                },
                                index: t,
                                customStyles: {
                                    itemContainer: i.itemContainer
                                }
                            }, e.slug + "-" + t) : s.jsx(y, {
                                ref: _(t),
                                index: t,
                                customStyles: {
                                    itemContainer: i.itemContainer
                                }
                            }, "empty-" + t)
                        }), s.jsxs(B, {
                            ref: A("index", 0),
                            "data-mouse-only": !0,
                            className: i.lastItemContainer,
                            "data-object": "grid",
                            "data-config": "newslistingAll",
                            href: route("web.news.index"),
                            children: [s.jsx("p", {
                                ref: b,
                                children: f("app.ui.all_lastest_news")
                            }), s.jsx(H, {
                                ref: N,
                                text: f("app.ui.see_all"),
                                theme: "primary"
                            }), s.jsx("div", {
                                ref: x,
                                className: "rect-anim"
                            })]
                        })]
                    }), s.jsx("div", {
                        className: i.overlayMobile
                    })]
                }), p.length > 1 && s.jsx(F, {
                    currentIndex: I,
                    itemsLength: p.length + 1,
                    className: i.navigationBar,
                    onPrev: T,
                    onNext: W
                })]
            })
        })
    };
export {
    Ne as NewsListing
};