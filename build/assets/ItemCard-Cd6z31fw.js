import {
    r as n,
    j as a,
    $ as k
} from "./client-DVrblGvH.js";
import {
    c as f
} from "./clsx-B-dksMZM.js";
import {
    u as C
} from "./hook-Dy1HR1NH.js";
import {
    a as E,
    u as B
} from "./web-3yxPAvXP.js";
import {
    u as I,
    m as A
} from "./Video-BBuaToM0.js";
import {
    g as S
} from "./maths-BcBSyK5V.js";
import {
    B as L
} from "./Button-B2cWWBb2.js";
const b = ({
        container: t,
        rectAnimRef: o,
        titleRef: m,
        dateRef: s,
        buttonRef: i,
        tagRefs: c,
        locationRef: l
    }) => {
        const r = n.useRef(null);
        return E(() => {
            var e;
            t.current && ((e = r.current) == null || e.kill(), r.current = S.timeline({
                paused: !0
            }), r.current.to(o.current, {
                scaleX: 0,
                stagger: .06,
                duration: 1.1,
                ease: "immg.zoomOut"
            }, 0), c != null && c.current && c.current.forEach((u, p) => {
                var d;
                (d = r.current) == null || d.to(u, {
                    opacity: 1,
                    duration: 1.1,
                    ease: "linear",
                    stagger: .1
                }, .4 + p * .1)
            }), r.current.to(m.current, {
                opacity: 1,
                duration: 1.1,
                ease: "linear",
                stagger: .1
            }, .45), s != null && s.current && r.current.to(s.current, {
                opacity: 1,
                duration: 1.1,
                ease: "linear",
                stagger: .1
            }, .55), l != null && l.current && r.current.to(l.current, {
                opacity: 1,
                duration: 1.1,
                ease: "linear",
                stagger: .1
            }, .55), i != null && i.current && r.current.to(i.current, {
                opacity: 1,
                duration: 1.1,
                ease: "linear",
                stagger: .1
            }, .6))
        }, {
            scope: t
        }), r
    },
    z = (t, o) => n.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 14,
        height: 15,
        fill: "none",
        viewBox: "0 0 14 15",
        focusable: "false",
        "aria-hidden": "true",
        ref: o,
        ...t
    }, n.createElement("path", {
        fill: "currentColor",
        d: "M6.417 12.135a5.25 5.25 0 1 1 1.166 0V14.5H6.417zM7 11a4.083 4.083 0 1 0 0-8.167A4.083 4.083 0 0 0 7 11"
    })),
    D = n.forwardRef(z),
    H = "_animatedBackground_1ade7_1",
    M = "_title_1ade7_23",
    W = "_empty_1ade7_39",
    $ = "_tag_1ade7_44",
    q = "_location_1ade7_61",
    F = "_info_1ade7_71",
    G = "_link_1ade7_83",
    O = "_item_1ade7_97",
    P = "_text_1ade7_125",
    R = "_animate_1ade7_1",
    T = "_date_1ade7_145",
    V = "_caption_1ade7_179",
    j = {
        animatedBackground: H,
        title: M,
        empty: W,
        tag: $,
        location: q,
        info: F,
        link: G,
        item: O,
        text: P,
        animate: R,
        date: T,
        caption: V
    },
    X = n.forwardRef(({
        item: t,
        index: o,
        customStyles: m,
        animate: s
    }, i) => {
        const {
            t: c,
            currentLocale: l
        } = C(), {
            add: r
        } = I(), e = m ? { ...j,
            ...m
        } : j, u = n.useRef(null), p = n.useRef(null), d = n.useRef(null), _ = n.useRef(null), g = n.useRef(null), [v, w] = B(), h = n.useRef(null), x = s ? b({
            container: u,
            rectAnimRef: p,
            titleRef: d,
            dateRef: _,
            buttonRef: g,
            tagRefs: v,
            locationRef: h
        }) : null;
        return n.useImperativeHandle(i, () => ({
            el: u.current,
            tl: t && x ? x.current : null
        })), t ? a.jsxs(k, {
            ref: A([u, r("single", o)]),
            "data-mouse-only": !0,
            "data-object": "grid",
            "data-config": "itemCard",
            className: f(e.itemContainer, e.item, {
                [e.animate]: s
            }),
            href: t.href,
            children: [a.jsxs("div", {
                children: [a.jsx("div", {
                    className: e.caption,
                    children: t.tags.map((y, N) => a.jsx("span", {
                        ref: w(N),
                        className: e.tag,
                        children: y.title
                    }, y.title))
                }), a.jsx("p", {
                    ref: d,
                    className: e.title,
                    children: t.title
                })]
            }), a.jsxs("div", {
                children: [t.published_at && a.jsx("p", {
                    ref: _,
                    className: f(e.info, e.date),
                    children: new Date(t.published_at).toLocaleDateString(l(), {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })
                }), t.location && a.jsxs("div", {
                    ref: h,
                    className: e.location,
                    children: [a.jsx(D, {}), a.jsx("p", {
                        className: e.info,
                        children: t.location
                    })]
                }), a.jsx(L, {
                    ref: g,
                    text: c("app.ui.readmore"),
                    theme: "quinary",
                    className: e.link,
                    as: "div"
                })]
            }), s && a.jsx("div", {
                ref: p,
                className: "rect-anim"
            })]
        }) : a.jsx("div", {
            ref: r("formattedNews", o),
            "data-mouse-only": !0,
            "data-object": "grid",
            "data-config": "itemEmpty",
            className: f(e.itemContainer, e.empty)
        })
    });
X.displayName = "ItemCard";
export {
    X as I, b as a
};