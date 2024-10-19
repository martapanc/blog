import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_eZPLzT5w.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DWrSZimk.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://blog-updates.vercel.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('../chunks/post-1_DUBnJ_f5.mjs').then(n => n._),"../posts/post-2.md": () => import('../chunks/post-2_BUQ5dx29.mjs').then(n => n._),"../posts/post-3.md": () => import('../chunks/post-3_up3QnuKf.mjs').then(n => n._),"../posts/post-4.md": () => import('../chunks/post-4_B09iHjIA.mjs').then(n => n._)}), () => "../posts/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Tag Index", "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy><ul data-astro-cid-os4i7owy>${tags.map(
    (tag) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy><a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a></p>`
  )}</ul></div>` })}`;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/pages/tags/index.astro", void 0);

const $$file = "/Users/mpancaldi/Workspace/updates.martacodes.it/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
