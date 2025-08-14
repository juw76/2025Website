import {
    r as u,
    j as r
} from "./client-DVrblGvH.js";
import {
    a as T,
    f as w,
    c as A,
    s as e
} from "./web-3yxPAvXP.js";
import {
    c as y
} from "./clsx-B-dksMZM.js";
import {
    S as E
} from "./Video-BBuaToM0.js";
const I = o => t => typeof t == "object" && "type" in t && (t.type === o || t.type.name === o.name),
    h = (o, t) => u.Children.toArray(o).find(I(t)),
    j = ({
        children: o
    }) => r.jsx(r.Fragment, {
        children: o
    }),
    B = u.forwardRef(({
        as: o,
        theme: t = "primary",
        text: a,
        children: R,
        className: m,
        scrambleText: x,
        parentWrapper: n,
        scrambleDelay: S,
        ...b
    }, d) => {
        const i = o || w,
            g = i === "a" ? {
                target: "_blank",
                rel: "noopener noreferrer"
            } : {},
            l = u.useRef(),
            c = h(R, j);
        return T(() => {
            if (x && (n != null && n.current)) {
                const f = E.ScrollTrigger.create({
                    trigger: n.current,
                    onEnter: () => {
                        var s;
                        (s = l.current) == null || s.scrambleText()
                    },
                    onEnterBack: () => {
                        var s;
                        (s = l.current) == null || s.scrambleText()
                    },
                    toggleActions: "play complete none none"
                });
                return () => {
                    f == null || f.kill()
                }
            }
        }, [n == null ? void 0 : n.current]), x ? r.jsx("div", {
            children: r.jsxs(i, {
                ref: d,
                className: y(e.buttonWrapper, e[t], {
                    [e.withIcon]: !!c
                }, m),
                ...g,
                ...b,
                children: [r.jsx(A, {
                    ref: l,
                    centered: !0,
                    delay: S || 0,
                    scramble: !1,
                    children: a || ""
                }), c]
            })
        }) : r.jsxs(i, {
            ref: d,
            className: y(e.buttonWrapper, e[t], {
                [e.withIcon]: !!c
            }, m),
            ...g,
            ...b,
            children: [a, c]
        })
    });
B.displayName = "RawButton";
const P = Object.assign(B, {
    Icon: j
});
export {
    P as B
};