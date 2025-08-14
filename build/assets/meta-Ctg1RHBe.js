import {
    K as m,
    j as e,
    h as o
} from "./client-DVrblGvH.js";
const p = () => {
    const r = m(),
        {
            seo: t,
            locale: a,
            hreflangs: i
        } = r.props;
    return e.jsxs(o, {
        children: [e.jsx("title", {
            children: t == null ? void 0 : t.meta_title
        }), e.jsx("meta", {
            name: "description",
            content: t == null ? void 0 : t.meta_description
        }), e.jsx("meta", {
            name: "image",
            content: t == null ? void 0 : t.meta_image
        }), e.jsx("meta", {
            property: "og:locale",
            content: a + "_" + a.toUpperCase()
        }), e.jsx("meta", {
            property: "og:title",
            content: t == null ? void 0 : t.og_title
        }), e.jsx("meta", {
            property: "og:description",
            content: t == null ? void 0 : t.og_description
        }), e.jsx("meta", {
            property: "og:url",
            content: r.url
        }), e.jsx("meta", {
            property: "og:image",
            content: t == null ? void 0 : t.og_image
        }), e.jsx("meta", {
            property: "og:site_name",
            content: "neverhack.com"
        }), e.jsx("meta", {
            name: "twitter:title",
            content: t == null ? void 0 : t.twitter_title
        }), e.jsx("meta", {
            name: "twitter:description",
            content: t == null ? void 0 : t.twitter_description
        }), e.jsx("meta", {
            name: "twitter:image",
            content: t == null ? void 0 : t.twitter_image
        }), i.map(n => e.jsx("link", {
            rel: "alternate",
            hrefLang: n.locale_code,
            href: n.href
        }, n.locale_code))]
    })
};
export {
    p as M
};