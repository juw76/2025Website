import {
    R as r
} from "./client-DVrblGvH.js";
const l = e => {
        const t = ({
            children: n,
            ...o
        }) => r.createElement(e, { ...o,
            dangerouslySetInnerHTML: {
                __html: n
            }
        });
        return t.displayName = `InnerHtml(${e})`, t
    },
    a = ["a", "blockquote", "button", "caption", "cite", "code", "dd", "div", "dl", "dt", "h1", "h2", "h3", "h4", "h5", "h6", "label", "li", "p", "pre", "span", "td"],
    d = a.reduce((e, t) => (e[t] = l(t), e), {});
export {
    d as i
};