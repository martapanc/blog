import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_eZPLzT5w.mjs';
import 'kleur/colors';
/* empty css                                  */
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DWrSZimk.mjs';
import { $ as $$PostLink } from '../chunks/PostLink_d4AnXohs.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://blog-updates.vercel.app/");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const pageTitle = "My Astro Learning Blog";
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_DUBnJ_f5.mjs').then(n => n._),"./posts/post-2.md": () => import('../chunks/post-2_BUQ5dx29.mjs').then(n => n._),"./posts/post-3.md": () => import('../chunks/post-3_up3QnuKf.mjs').then(n => n._),"./posts/post-4.md": () => import('../chunks/post-4_B09iHjIA.mjs').then(n => n._)}), () => "./posts/*.md");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>This is where I will post about my journey learning Astro.</p> <ul> ${allPosts.map(
    (post) => renderTemplate`${renderComponent($$result2, "PostLink", $$PostLink, { "post": post })}`
  )} </ul> ` })}`;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/pages/blog.astro", void 0);

const $$file = "/Users/mpancaldi/Workspace/updates.martacodes.it/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
