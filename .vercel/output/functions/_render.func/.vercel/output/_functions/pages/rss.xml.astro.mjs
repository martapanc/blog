import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: context.site,
        items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_DUBnJ_f5.mjs').then(n => n._),"./posts/post-2.md": () => import('../chunks/post-2_BUQ5dx29.mjs').then(n => n._),"./posts/post-3.md": () => import('../chunks/post-3_up3QnuKf.mjs').then(n => n._),"./posts/post-4.md": () => import('../chunks/post-4_B09iHjIA.mjs').then(n => n._)})),
        customData: `<language>en-us</language>`,
    });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
