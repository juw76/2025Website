import {
    r as h,
    j as e,
    $ as j
} from "./client-DVrblGvH.js";
import {
    u as W,
    k as v,
    a as E,
    T as A,
    I as F
} from "./web-3yxPAvXP.js";
import {
    c as y
} from "./clsx-B-dksMZM.js";
import {
    g as M
} from "./maths-BcBSyK5V.js";
import {
    u as T
} from "./hook-Dy1HR1NH.js";
import {
    G
} from "./Globe-BI52bYoy.js";
import {
    B as N
} from "./Button-B2cWWBb2.js";
const S = "_globeWrapper_1jhuc_23",
    B = "_title_1jhuc_35",
    O = "_content_1jhuc_50",
    H = "_globeContent_1jhuc_62",
    $ = "_globe_1jhuc_23",
    D = "_chatWrapper_1jhuc_84",
    P = "_chatInner_1jhuc_96",
    U = "_chatIcon_1jhuc_105",
    q = "_chatMessage_1jhuc_125",
    z = "_typing_1jhuc_143",
    J = "_chatMessageLink_1jhuc_159",
    K = "_linkChat_1jhuc_165",
    Q = "_chatMessageLinkItem_1jhuc_171",
    V = "_chatFooter_1jhuc_185",
    X = "_aboutLink_1jhuc_190",
    t = {
        globeWrapper: S,
        title: B,
        content: O,
        globeContent: H,
        globe: $,
        chatWrapper: D,
        chatInner: P,
        chatIcon: U,
        chatMessage: q,
        typing: z,
        chatMessageLink: J,
        linkChat: K,
        chatMessageLinkItem: Q,
        chatFooter: V,
        aboutLink: X
    },
    ce = ({
        title: I,
        points: R,
        link: m,
        linkChat: g
    }) => {
        const {
            t: r
        } = T(), [_, L] = W(), f = h.useRef(null), x = h.useRef(null), u = h.useRef(null), b = h.useRef(null), p = h.useRef(null), {
            setMenuUseCasesOpen: w
        } = v(), k = [r("app.home.globe.tchat_flow.0"), r("app.home.globe.tchat_flow.1"), r("app.home.globe.tchat_flow.2"), r("app.home.globe.tchat_flow.3")], C = [{
            text: r("app.menu.offers"),
            url: route("web.offers.index")
        }, {
            text: r("app.menu.usecase"),
            url: ""
        }, {
            text: r("app.menu.careers"),
            url: route("web.careers.index")
        }];
        return E(async () => {
            if (await document.fonts.ready, _.current.length === 0) return;
            const o = M.timeline({
                repeat: -1,
                paused: !0
            });
            u.current && Array.from(u.current.children).forEach((c, i) => {
                o.to(c, {
                    y: -2,
                    duration: .3,
                    ease: "power2.inOut"
                }, i * .1), o.to(c, {
                    y: 0,
                    duration: .3,
                    ease: "power2.inOut"
                }, i * .1 + .3)
            });
            const a = M.timeline({
                    scrollTrigger: {
                        trigger: _.current[0],
                        start: "top bottom",
                        end: "bottom bottom"
                    }
                }),
                s = 12,
                n = Array.from(_.current).map(l => l == null ? void 0 : l.scrollHeight);
            let d = 0;
            a.add(() => {
                o.play()
            }, 0), a.set(p.current, {
                y: n[0]
            }, 0), n.forEach((l, c) => {
                if (c === 0 || !f.current) return;
                c > 0 && (d += s + n[c - 1]), a.to(p.current, {
                    y: d,
                    duration: .6,
                    ease: "power3.out"
                }, "<-.2");
                const i = Array.from(f.current.children);
                i[c] && a.to(i[c], {
                    opacity: 1,
                    duration: .4
                }, ">1")
            }), a.to(p.current, {
                y: d + s + n[n.length - 1],
                duration: .6,
                ease: "power3.out"
            }, "<-.2"), a.to(u.current, {
                opacity: 0,
                display: "none",
                duration: .6
            }, "<.2"), a.to(x.current, {
                opacity: 1,
                duration: .6
            }, ">"), a.add(() => {
                o.repeat(0)
            })
        }), e.jsxs("div", {
            className: y(t.globeWrapper, "dk:container"),
            children: [e.jsx(A, {
                className: t.title,
                tag: "h2",
                children: I
            }), e.jsxs("div", {
                className: t.content,
                children: [e.jsx("div", {
                    className: t.globeContent,
                    children: e.jsx(G, {
                        points: R,
                        scale: .7,
                        className: t.globe
                    })
                }), e.jsxs("div", {
                    ref: b,
                    className: t.chatWrapper,
                    children: [e.jsxs("div", {
                        className: t.chatInner,
                        children: [e.jsx("div", {
                            className: t.chatIcon,
                            children: e.jsx(F, {
                                src: "/images/icon-chat.png",
                                alt: "chat icon",
                                width: 52,
                                height: 52
                            })
                        }), e.jsx("ul", {
                            ref: f,
                            children: k.map((o, a) => e.jsxs("li", {
                                ref: L(a),
                                className: t.chatMessage,
                                children: [e.jsx("span", {
                                    children: o
                                }), g && a === 1 && e.jsx(N, {
                                    text: g.text,
                                    theme: "primary",
                                    as: j,
                                    href: g.url,
                                    className: t.linkChat
                                }), a === 2 && e.jsx("div", {
                                    className: t.chatMessageLink,
                                    children: C.map((s, n) => e.jsxs(h.Fragment, {
                                        children: [s.url !== "" && e.jsx(j, {
                                            className: t.chatMessageLinkItem,
                                            href: s.url,
                                            children: s.text
                                        }, s.url), s.url === "" && e.jsx("button", {
                                            className: t.chatMessageLinkItem,
                                            onClick: () => w(!0),
                                            children: s.text
                                        })]
                                    }, n))
                                })]
                            }, a))
                        })]
                    }), e.jsxs("div", {
                        ref: p,
                        className: t.chatFooter,
                        children: [e.jsxs("div", {
                            ref: u,
                            className: y(t.typing, t.chatMessage),
                            children: [r("app.words.typing"), e.jsx("span", {
                                children: "."
                            }), e.jsx("span", {
                                children: "."
                            }), e.jsx("span", {
                                children: "."
                            })]
                        }), m && e.jsx(N, {
                            ref: x,
                            scrambleText: !0,
                            parentWrapper: b,
                            text: m.text,
                            theme: "primary",
                            as: j,
                            href: m.url,
                            className: t.aboutLink,
                            scrambleDelay: .5
                        })]
                    })]
                })]
            })]
        })
    };
export {
    ce as C
};