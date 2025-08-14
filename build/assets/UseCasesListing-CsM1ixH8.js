var xe = Object.defineProperty;
var pe = s => {
    throw TypeError(s)
};
var Ee = (s, i, e) => i in s ? xe(s, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : s[i] = e;
var d = (s, i, e) => Ee(s, typeof i != "symbol" ? i + "" : i, e),
    fe = (s, i, e) => i.has(s) || pe("Cannot " + e);
var t = (s, i, e) => (fe(s, i, "read from private field"), e ? e.call(s) : i.get(s)),
    m = (s, i, e) => i.has(s) ? pe("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(s) : i.set(s, e),
    p = (s, i, e, n) => (fe(s, i, "write to private field"), n ? n.call(s, e) : i.set(s, e), e);
import {
    r as S,
    j as v,
    $ as Le
} from "./client-DVrblGvH.js";
import {
    u as O,
    a as ve,
    I as ye,
    c as Ne
} from "./web-3yxPAvXP.js";
import {
    c as he
} from "./clsx-B-dksMZM.js";
import {
    g as N,
    c as D,
    a as _e,
    l as Re
} from "./maths-BcBSyK5V.js";
import {
    D as ke,
    S as H,
    V as Ie
} from "./Video-BBuaToM0.js";
import {
    u as ze
} from "./hook-Dy1HR1NH.js";
import {
    B as Me
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
const je = s => {
    let i = !1,
        e = [];
    const n = new Map,
        r = new window.ResizeObserver((o, a) => {
            e = e.concat(o), i || window.requestAnimationFrame(() => {
                const l = new Set;
                for (let f = 0; f < e.length; f++) {
                    if (l.has(e[f].target)) continue;
                    l.add(e[f].target);
                    const g = n.get(e[f].target);
                    g == null || g.forEach(y => y(e[f], a))
                }
                e = [], i = !1
            }), i = !0
        });
    return {
        observer: r,
        subscribe(o, a) {
            r.observe(o);
            const l = n.get(o) ? ? [];
            l.push(a), n.set(o, l)
        },
        unsubscribe(o, a) {
            const l = n.get(o) ? ? [];
            if (l.length === 1) {
                r.unobserve(o), n.delete(o);
                return
            }
            const f = l.indexOf(a);
            f !== -1 && l.splice(f, 1), n.set(o, l)
        }
    }
};
let de;
const ge = s => de || (de = je());
var C;
class Te {
    constructor() {
        m(this, C, new Map);
        d(this, "on", (i, e) => {
            t(this, C).has(i) ? t(this, C).get(i).add(e) : t(this, C).set(i, new Set([e]))
        });
        d(this, "off", (i, e) => {
            t(this, C).has(i) && t(this, C).get(i).delete(e)
        });
        d(this, "emit", i => {
            t(this, C).has(i) && t(this, C).get(i).forEach(e => e(this))
        })
    }
    clean() {
        t(this, C).clear()
    }
}
C = new WeakMap;
const Pe = 100 / 6 / 2;
class We {
    constructor() {
        d(this, "rafId", 0);
        d(this, "queue", new Set);
        d(this, "running", !1);
        d(this, "time", {
            start: 0,
            delta: 0,
            elapsed: 0,
            _elapsed: 0
        });
        d(this, "onDemand", !1);
        d(this, "tick", () => {
            this.running && this.update()
        });
        d(this, "update", () => {
            this.running && (this.updateTime(), this.queue.forEach(i => i()))
        })
    }
    run() {
        this.running || (this.time = {
            start: N.ticker.time,
            elapsed: 0,
            delta: 0,
            _elapsed: 0
        }, this.running = !0, this.onDemand || N.ticker.add(this.tick))
    }
    start(i) {
        this.queue.add(i), this.run()
    }
    stop(i) {
        i && (this.queue.delete(i), this.queue.size || this.stopAll())
    }
    stopAll() {
        N.ticker.remove(this.tick), this.running = !1
    }
    updateTime() {
        const e = N.ticker.time * 1e3 - this.time.start;
        this.time.delta = D(e - this.time._elapsed, Pe, 32), this.time._elapsed = e, this.time.elapsed += this.time.delta
    }
}
const me = new We,
    qe = {
        immediate: !1,
        sync: !1,
        inertia: !1,
        easing: "spring",
        min: -1 / 0,
        max: 1 / 0
    },
    $e = s => () => (s.idle = !0, s.to),
    Ae = (s, {
        tension: i = 170,
        friction: e = 26,
        mass: n = 1,
        velocity: r
    }) => {
        const o = e / (2 * Math.sqrt(i * n)),
            a = Math.sqrt(i / n) * .001,
            l = a * Math.sqrt(1 - o * o),
            f = r ? ? s.startVelocity;
        return function() {
            const y = s.elapsed;
            let x;
            if (o < 1) {
                const J = Math.exp(-o * a * y);
                x = s.to - J * ((-f + o * a * s.x0) / l * Math.sin(l * y) + s.x0 * Math.cos(l * y))
            } else {
                const J = Math.exp(-a * y);
                x = s.to - J * (s.x0 + (-f + a * s.x0) * y)
            }
            return x
        }
    },
    Be = (s, {
        factor: i = .05
    }) => function() {
        return Re(s.value, s.to, i)
    },
    De = (s, {
        momentum: i = .998,
        snapPoints: e,
        velocity: n,
        min: r = -1 / 0,
        max: o = 1 / 0
    }) => {
        const a = n ? ? s.startVelocity,
            l = (g = s.elapsed) => {
                const y = Math.exp(-(1 - i) * g),
                    x = s.from + a / (1 - i) * (1 - y);
                return D(x, r, o)
            },
            f = -1 / (1 - i) * Math.log(.02);
        if (s.to = l(f), s.x0 = s.to - s.from, e) {
            const g = _e(s.to, e, !0);
            return s.to = e[g], s.x0 = s.to - s.from, s.inertia = !1, le.spring(s, {
                tension: 28,
                friction: 30,
                velocity: s.velocity
            })
        }
        return l
    },
    le = {
        immediate: $e,
        spring: Ae,
        lerp: Be,
        damping: De
    };
var k, j, ee;
class He extends Te {
    constructor(e, n) {
        super();
        m(this, k);
        d(this, "key");
        d(this, "init", (e, n) => {
            p(this, k, typeof e == "function" ? e() : e), this.key = n
        });
        d(this, "startVelocity", 0);
        d(this, "elapsed", 0);
        d(this, "from", 0);
        d(this, "to", 0);
        d(this, "x0", 0);
        d(this, "idle", !0);
        d(this, "inertia", !1);
        d(this, "velocity", 0);
        m(this, j, "spring");
        m(this, ee, 0);
        d(this, "update", () => {});
        d(this, "stop", () => {
            me.stop(this.update), this.emit("stop")
        });
        d(this, "set", (e, n) => {
            const r = { ...qe,
                ...n
            };
            if (this.from = this.value, this.to = D(e, r.min, r.max), this.x0 = this.to - this.from, this.elapsed = 0, this.startVelocity = this.velocity, this.inertia = r.inertia, p(this, j, r.easing), r.distancePrecision ? ? (r.distancePrecision = r.snapPoints ? .5 : t(this, j) === "spring" ? .01 : .1), r.velocityPrecision ? ? (r.velocityPrecision = r.snapPoints ? .2 : t(this, j) === "spring" ? .001 : .01), r.sync) {
                this.value = this.to;
                return
            }
            let o;
            const a = new Promise(f => o = f);
            if (this.to === this.value && !r.inertia) {
                this.idle = !0, this.velocity = 0;
                return
            }
            this.idle = !1;
            const l = r.immediate ? le.immediate(this) : this.inertia ? le.damping(this, r) : le[t(this, j)](this, r);
            return this.stop(), this.update = () => {
                if (this.idle) {
                    this.stop(), o(void 0), p(this, ee, window.setTimeout(() => this.velocity = 0, 50));
                    return
                }
                const f = me.time.delta;
                this.elapsed += f;
                const g = l(),
                    y = D(g, r.min, r.max);
                if (this.velocity = (y - this.value) / f, this.inertia && Math.abs(this.velocity) < r.velocityPrecision || Math.abs(this.to - y) < r.distancePrecision && Math.abs(this.velocity) < r.velocityPrecision) {
                    this.inertia || (this.value = this.to), this.idle = !0;
                    return
                }
                this.value = y
            }, clearTimeout(t(this, ee)), me.start(this.update), this.emit("start"), a
        });
        d(this, "clean", () => {
            super.clean(), this.stop()
        });
        e && this.init(e, n)
    }
    get value() {
        return this.key ? t(this, k)[this.key] : t(this, k)
    }
    set value(e) {
        this.key ? t(this, k)[this.key] = e : p(this, k, e)
    }
}
k = new WeakMap, j = new WeakMap, ee = new WeakMap;
var I, V, P, G, W, E, X, F, te, Y, q, se, $, ie, U, L, A, z, ue, re, B, ne, oe, ae;
class Ve extends Te {
    constructor() {
        super(...arguments);
        d(this, "element", null);
        d(this, "snapPoints", []);
        m(this, I, 0);
        m(this, V, 0);
        m(this, P, 0);
        m(this, G, 0);
        m(this, W, 0);
        m(this, E, 0);
        m(this, X, !1);
        m(this, F, !1);
        m(this, te, "");
        m(this, Y, 0);
        m(this, q, !1);
        m(this, se, 1);
        m(this, $, !1);
        m(this, ie, !1);
        m(this, U);
        m(this, L);
        m(this, A, 0);
        m(this, z, () => {
            this.element && (t(this, F) && (this.element.style.scrollSnapType = t(this, te)), this.element.style.overflow = "", this.element.style.scrollBehavior = "")
        });
        m(this, ue, async ({
            offset: e,
            first: n,
            last: r,
            tap: o,
            direction: a
        }) => {
            const l = this.element;
            if (!o) {
                if (n && (l.style.overflow = "hidden", l.style.scrollBehavior = "auto", t(this, F) && (l.style.scrollSnapType = "none")), r) {
                    p(this, se, a.x), p(this, $, !0), await t(this, L).set(-e.x, {
                        inertia: !0,
                        snapPoints: this.snapPoints,
                        max: t(this, E),
                        min: 0
                    }), p(this, $, !1), t(this, z).call(this);
                    return
                }
                t(this, L).set(-e.x, {
                    immediate: !0,
                    max: t(this, E),
                    min: 0
                })
            }
        });
        m(this, re, () => {
            p(this, X, !0)
        });
        m(this, B, () => {
            p(this, X, !1)
        });
        m(this, ne, e => {
            clearTimeout(t(this, A)), p(this, A, window.setTimeout(t(this, z), 50)), t(this, $) && t(this, se) !== -Math.sign(e.deltaX) && (p(this, $, !1), t(this, L).stop(), t(this, z).call(this))
        });
        d(this, "scrollToIndex", (e, n = !0) => {
            var r, o;
            this.index = e, (r = t(this, L)) == null || r.stop(), t(this, z).call(this), clearTimeout(t(this, P)), !(t(this, X) || !t(this, q)) && e in this.snapPoints && ((o = this.element) == null || o.scrollTo({
                left: this.snapPoints[e],
                behavior: n ? "smooth" : "instant"
            }))
        });
        m(this, oe, () => {
            clearTimeout(t(this, P)), p(this, P, window.setTimeout(() => {
                var r;
                if (!this.element) return;
                const e = this.element.scrollLeft,
                    n = _e(e, this.snapPoints, !0);
                p(this, I, n), this.emit("change"), (r = this.element.children[n]) == null || r.focus({
                    preventScroll: !0
                })
            }, 75))
        });
        d(this, "layout", () => {
            if (this.element) {
                const e = window.getComputedStyle(this.element);
                p(this, F, e.scrollSnapType === "x mandatory"), p(this, te, this.element.style.scrollSnapType);
                const n = ~~parseInt(e.scrollPaddingInlineStart),
                    r = ~~parseInt(e.scrollPaddingInlineEnd),
                    o = Array.prototype.map.call(this.element.children, a => {
                        const f = getComputedStyle(a).scrollSnapAlign;
                        return f === "start" ? D(a.offsetLeft - n, 0, t(this, E)) : f === "end" ? D(a.offsetLeft + a.offsetWidth - t(this, W) + r, 0, t(this, E)) : D(a.offsetLeft + a.offsetWidth / 2 - t(this, W) / 2, 0, t(this, E))
                    });
                this.snapPoints = o.sort((a, l) => a - l), p(this, Y, o.length), clearTimeout(t(this, V)), p(this, V, window.setTimeout(() => {
                    this.scrollToIndex(this.index, !1)
                }, 10))
            }
        });
        m(this, ae, e => {
            clearTimeout(t(this, G));
            const n = () => {
                p(this, W, e.borderBoxSize.at(0).inlineSize), p(this, E, this.element.scrollWidth - t(this, W)), this.layout()
            };
            t(this, q) ? p(this, G, window.setTimeout(n, 75)) : (n(), p(this, q, !0), this.emit("ready"))
        });
        d(this, "clean", () => {
            var n, r;
            super.clean(), p(this, q, !1), (n = t(this, U)) == null || n.clean(), (r = t(this, L)) == null || r.clean();
            const e = ge();
            clearTimeout(t(this, P)), clearTimeout(t(this, V)), clearTimeout(t(this, G)), clearTimeout(t(this, A)), this.element && (t(this, z).call(this), e.unsubscribe(this.element, t(this, ae)), this.element.removeEventListener("touchstart", t(this, re)), this.element.removeEventListener("touchend", t(this, B)), this.element.removeEventListener("touchcancel", t(this, B)), this.element.removeEventListener("scroll", t(this, oe)), this.element.removeEventListener("wheel", t(this, ne)))
        })
    }
    get index() {
        return t(this, I)
    }
    set index(e) {
        e >= 0 && e < t(this, Y) && e !== t(this, I) && (p(this, I, e), this.emit("change"), this.scrollToIndex(e))
    }
    get canScrollPrev() {
        return this.index > 0
    }
    get canScrollNext() {
        return this.index < t(this, Y) - 1
    }
    init(e, {
        index: n = 0,
        mouseDrag: r = !1
    } = {}) {
        this.element = e, this.element.addEventListener("touchstart", t(this, re), {
            passive: !0
        }), this.element.addEventListener("touchend", t(this, B), {
            passive: !0
        }), this.element.addEventListener("touchcancel", t(this, B), {
            passive: !0
        }), this.element.addEventListener("scroll", t(this, oe), {
            passive: !0
        }), this.element.addEventListener("wheel", t(this, ne), {
            passive: !0
        }), p(this, I, n), p(this, ie, r), t(this, ie) && (p(this, U, new ke(this.element, t(this, ue), () => ({
            beforeStart: () => clearTimeout(t(this, A)),
            rubber: !1,
            touch: !1,
            from: {
                x: -this.element.scrollLeft
            }
        }))), t(this, U).init(), p(this, L, new He(e, "scrollLeft"))), ge().subscribe(e, t(this, ae))
    }
}
I = new WeakMap, V = new WeakMap, P = new WeakMap, G = new WeakMap, W = new WeakMap, E = new WeakMap, X = new WeakMap, F = new WeakMap, te = new WeakMap, Y = new WeakMap, q = new WeakMap, se = new WeakMap, $ = new WeakMap, ie = new WeakMap, U = new WeakMap, L = new WeakMap, A = new WeakMap, z = new WeakMap, ue = new WeakMap, re = new WeakMap, B = new WeakMap, ne = new WeakMap, oe = new WeakMap, ae = new WeakMap;
const Ge = (s, {
        index: i = 0,
        mouseDrag: e
    } = {}) => {
        const n = S.useRef(new Ve),
            r = S.useRef(i);
        return S.useEffect(() => {
            const o = n.current;
            return s.current && o.init(s.current, {
                index: r.current,
                mouseDrag: e
            }), o.clean
        }, []), S.useEffect(() => {
            isFinite(i) && n.current.scrollToIndex(i)
        }, [i]), n
    },
    Xe = "_useCasesNavigation_btml4_24",
    Fe = "_webGLEffect_btml4_37",
    Ye = "_useCasesList_btml4_45",
    Ue = "_itemCase_btml4_70",
    Je = "_itemName_btml4_83",
    Ke = "_useCaseItem_btml4_96",
    Qe = "_navActive_btml4_122",
    M = {
        useCasesNavigation: Xe,
        webGLEffect: Fe,
        useCasesList: Ye,
        itemCase: Ue,
        itemName: Je,
        useCaseItem: Ke,
        navActive: Qe
    },
    Ze = ({
        useCases: s,
        currentIndex: i,
        className: e,
        scrollToUseCase: n
    }) => {
        const r = S.useRef(null),
            o = S.useRef(null);
        Ge(o, {
            index: 0,
            mouseDrag: !0
        });
        const [a, l] = O(), f = g => {
            n(g)
        };
        return ve(() => {
            const g = H.ScrollTrigger.create({
                trigger: r.current,
                onEnter: () => {
                    a.current[0].scrambleText()
                },
                onEnterBack: () => {
                    a.current[0].scrambleText()
                },
                toggleActions: "play complete none none"
            });
            return () => {
                g == null || g.kill()
            }
        }), v.jsx("div", {
            ref: r,
            className: he(M.useCasesNavigation, e),
            "data-animation": "fade",
            children: v.jsx("ul", {
                ref: o,
                className: M.useCasesList,
                children: s.map((g, y) => v.jsxs("li", {
                    className: he(M.useCaseItem, y === i ? M.navActive : ""),
                    onClick: () => f(y),
                    onMouseEnter: () => a.current[y].scrambleText(),
                    children: [v.jsx("div", {
                        className: M.webGLEffect,
                        children: v.jsx(ye, {
                            src: "/images/dots-use-cases.png",
                            alt: "Dots",
                            height: 160,
                            width: 464
                        })
                    }), v.jsx(Ne, {
                        ref: l(y),
                        uppercase: !0,
                        className: M.itemCase,
                        children: "/ " + g.reference
                    }), v.jsx("p", {
                        className: M.itemName,
                        children: g.short_title
                    })]
                }, y))
            })
        })
    },
    Oe = "_useCasesListingWrapper_o02cl_23",
    et = "_useCasesListingContent_o02cl_34",
    tt = "_caseNavigation_o02cl_49",
    st = "_cardsWrapper_o02cl_54",
    it = "_cardsContent_o02cl_70",
    rt = "_card_o02cl_54",
    nt = "_cardContent_o02cl_117",
    ot = "_cardBackground_o02cl_128",
    at = "_useCase_o02cl_23",
    ct = "_shortTitle_o02cl_155",
    lt = "_title_o02cl_170",
    ht = "_button_o02cl_186",
    ut = "_buttonMobile_o02cl_198",
    dt = "_videoWrapper_o02cl_216",
    mt = "_video_o02cl_216",
    T = {
        useCasesListingWrapper: Oe,
        useCasesListingContent: et,
        caseNavigation: tt,
        cardsWrapper: st,
        cardsContent: it,
        card: rt,
        cardContent: nt,
        cardBackground: ot,
        useCase: at,
        shortTitle: ct,
        title: lt,
        button: ht,
        buttonMobile: ut,
        videoWrapper: dt,
        video: mt
    },
    zt = ({
        useCases: s,
        withNavigation: i
    }) => {
        const {
            t: e
        } = ze(), n = 1.5, r = .5, o = S.useRef(null), a = S.useRef(null), [l, f] = O(), [g, y] = O(), [x, J] = O(), [w, we] = O(), be = S.useRef(null), R = S.useRef(null), [Ce, ce] = S.useState(0);
        ve(() => {
            const b = N.matchMedia();
            b.add("(max-width: 1023px)", () => {
                const c = window.innerHeight * n;
                R.current = N.timeline();
                const h = R.current;
                l.current.forEach((K, u) => {
                    var Z;
                    if (u === 0) return;
                    const Q = a.current.offsetHeight / 2 + u * c - c / 2;
                    H.ScrollTrigger.create({
                        trigger: a.current,
                        start: `+=${Q}px 50%`,
                        end: `+=${Q}px 50%`,
                        onEnter: () => {
                            var _;
                            (_ = w.current[u - 1].querySelector("video")) == null || _.pause(), ce(u)
                        },
                        onEnterBack: () => {
                            var _;
                            (_ = w.current[u - 1].querySelector("video")) == null || _.play(), ce(u - 1)
                        }
                    }), h.fromTo(K, {
                        y: (Z = a.current) == null ? void 0 : Z.offsetHeight,
                        z: 15,
                        rotateX: -15,
                        rotateY: 0,
                        willChange: "transform"
                    }, {
                        y: 0,
                        z: 0,
                        rotateX: 0,
                        duration: c,
                        ease: "power1",
                        onStart: () => {
                            var _;
                            (_ = w.current[u].querySelector("video")) == null || _.play()
                        }
                    }, ">"), h.fromTo(x.current[u], {
                        y: 80
                    }, {
                        y: 0,
                        duration: c,
                        ease: "power1"
                    }, "<"), h.fromTo(w.current[u], {
                        y: 200
                    }, {
                        y: 0,
                        duration: c,
                        ease: "power1"
                    }, "<"), h.fromTo(l.current[u - 1], {
                        z: 0
                    }, {
                        z: -40,
                        duration: c * .5
                    }, "<50%"), h.fromTo(x.current[u - 1], {
                        opacity: 1
                    }, {
                        opacity: .6,
                        duration: c * .5
                    }, "<"), h.fromTo(g.current[u - 1], {
                        opacity: 1
                    }, {
                        opacity: .8,
                        duration: c * .5
                    }, "<"), u > 1 && (h.fromTo(l.current[u - 2], {
                        z: -40
                    }, {
                        z: -80,
                        duration: c * .5
                    }, "<"), h.fromTo(g.current[u - 2], {
                        opacity: .8
                    }, {
                        opacity: .7,
                        duration: c * .5
                    }, "<")), h.addLabel(`card${u}`)
                }), h.add(() => {}, `>+${r*window.innerHeight}`), o.current.style.height = `${h.totalDuration()+window.innerHeight-80}px`, H.ScrollTrigger.create({
                    trigger: a.current,
                    start: "top 80px",
                    end: `+=${h.totalDuration()}px 80px`,
                    animation: R.current,
                    scrub: !0
                })
            }), b.add("(min-width: 1024px)", () => {
                const c = window.innerHeight * n;
                R.current = N.timeline();
                const h = R.current;
                h.add(() => {}, 0), l.current.forEach((K, u) => {
                    var Z;
                    if (u === 0) return;
                    const Q = a.current.offsetHeight / 2 + u * c - c / 2;
                    H.ScrollTrigger.create({
                        trigger: a.current,
                        start: `+=${Q}px 50%`,
                        end: `+=${Q}px 50%`,
                        onEnter: () => {
                            var _;
                            (_ = w.current[u - 1].querySelector("video")) == null || _.pause(), ce(u)
                        },
                        onEnterBack: () => {
                            var _;
                            (_ = w.current[u - 1].querySelector("video")) == null || _.play(), ce(u - 1)
                        }
                    }), h.fromTo(K, {
                        y: (Z = a.current) == null ? void 0 : Z.offsetHeight,
                        z: 50,
                        rotateX: -30,
                        rotateY: 10
                    }, {
                        y: 0,
                        z: 0,
                        rotateX: 0,
                        rotateY: 0,
                        duration: c,
                        ease: "power1",
                        onStart: () => {
                            var _;
                            (_ = w.current[u].querySelector("video")) == null || _.play()
                        }
                    }, ">"), h.fromTo(x.current[u], {
                        y: 350
                    }, {
                        y: 0,
                        duration: c,
                        ease: "power1"
                    }, "<"), h.fromTo(w.current[u], {
                        y: 850
                    }, {
                        y: 0,
                        duration: c,
                        ease: "power1"
                    }, "<"), h.fromTo(l.current[u - 1], {
                        z: 0
                    }, {
                        z: -200,
                        duration: c * .65
                    }, "<35%"), h.fromTo(x.current[u - 1], {
                        opacity: 1
                    }, {
                        opacity: .5,
                        duration: c * .65
                    }, "<"), h.fromTo(g.current[u - 1], {
                        opacity: 1
                    }, {
                        opacity: .8,
                        duration: c * .65
                    }, "<"), u > 1 && (h.fromTo(l.current[u - 2], {
                        z: -200
                    }, {
                        z: -400,
                        duration: c * .65
                    }, "<"), h.fromTo(g.current[u - 2], {
                        opacity: .8
                    }, {
                        opacity: .7,
                        duration: c * .65
                    }, "<")), h.addLabel(`card${u}`)
                }), h.add(() => {}, `>+=${r*window.innerHeight}`), h.seek("-=0"), o.current.style.height = `${h.totalDuration()+window.innerHeight-80}px`, H.ScrollTrigger.create({
                    trigger: a.current,
                    start: "top 80px",
                    end: `+=${h.totalDuration()}px 80px`,
                    animation: R.current,
                    scrub: !0
                })
            }), H.ScrollTrigger.create({
                trigger: o.current,
                start: "top bottom",
                end: "bottom top",
                onEnter: () => {
                    var c;
                    (c = w.current[0].querySelector("video")) == null || c.play()
                },
                onEnterBack: () => {
                    var c;
                    (c = w.current.at(-1).querySelector("video")) == null || c.play()
                },
                onLeave: () => {
                    w.current.forEach(c => {
                        var h;
                        (h = c.querySelector("video")) == null || h.pause()
                    })
                },
                onLeaveBack: () => {
                    w.current.forEach(c => {
                        var h;
                        (h = c.querySelector("video")) == null || h.pause()
                    })
                }
            })
        }, []);
        const Se = b => {
            N.context(() => {
                const c = b === 0 ? R.current.scrollTrigger.start : R.current.scrollTrigger.labelToScroll(`card${b}`),
                    h = Math.abs(c - window.scrollY),
                    K = Math.min(h * .8 / (window.innerHeight * n), 1.6);
                N.to(window, {
                    duration: K,
                    ease: "power2",
                    scrollTo: c
                })
            })
        };
        return v.jsx("div", {
            ref: o,
            className: T.useCasesListingWrapper,
            children: v.jsxs("div", {
                ref: a,
                className: T.useCasesListingContent,
                children: [i && v.jsx(Ze, {
                    useCases: s,
                    currentIndex: Ce,
                    className: T.caseNavigation,
                    scrollToUseCase: Se
                }), v.jsx("div", {
                    ref: be,
                    className: he("", T.cardsWrapper),
                    children: v.jsx("div", {
                        className: T.cardsContent,
                        children: s.map((b, c) => v.jsxs(Le, {
                            ref: f(c),
                            href: route("web.use-cases.single", b.slug),
                            className: he("card", T.card),
                            children: [v.jsx("div", {
                                ref: y(c),
                                className: T.cardBackground,
                                children: v.jsx(ye, {
                                    src: "/images/dots-card.png",
                                    width: 1250,
                                    height: 620
                                })
                            }), v.jsx("div", {
                                ref: we(c),
                                className: T.videoWrapper,
                                children: v.jsx(Ie, {
                                    formats: ["webm", "mov"],
                                    folder: "usecases",
                                    className: T.video,
                                    videoId: b.video_id,
                                    alpha: !0,
                                    isAutoPlay: !1
                                })
                            }), v.jsxs("div", {
                                ref: J(c),
                                className: T.cardContent,
                                children: [v.jsx("span", {
                                    className: T.useCase,
                                    children: b.reference
                                }), v.jsx("h3", {
                                    className: T.shortTitle,
                                    children: b.short_title
                                }), v.jsx("p", {
                                    className: T.title,
                                    children: b.title
                                }), v.jsx(Me, {
                                    text: e("app.home.useCase_link"),
                                    theme: "primary",
                                    className: T.button,
                                    as: "div"
                                })]
                            }), v.jsx("div", {
                                className: T.buttonMobile,
                                children: e("app.home.useCase_link")
                            })]
                        }, c))
                    })
                })]
            })
        })
    };
export {
    zt as UseCasesListing
};