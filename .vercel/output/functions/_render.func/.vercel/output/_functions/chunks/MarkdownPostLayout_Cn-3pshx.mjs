import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot } from './astro/server_eZPLzT5w.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_DWrSZimk.mjs';
/* empty css                          */

const $$Astro = createAstro("https://blog-updates.vercel.app/");
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  const tags = frontmatter.tags;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "data-astro-cid-5grsw2hi": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p data-astro-cid-5grsw2hi>Written by ${frontmatter.author}</p><p data-astro-cid-5grsw2hi>Published on ${frontmatter.pubDate.toString().slice(0, 10)}</p><p data-astro-cid-5grsw2hi><em data-astro-cid-5grsw2hi>${frontmatter.description}</em></p><img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")} data-astro-cid-5grsw2hi>${renderSlot($$result2, $$slots["default"])}<div data-astro-cid-5grsw2hi><h2 data-astro-cid-5grsw2hi>Tags</h2><div class="tags" data-astro-cid-5grsw2hi>${tags.map(
    (tag) => renderTemplate`<p class="tag" data-astro-cid-5grsw2hi><a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-5grsw2hi>${tag}</a></p>`
  )}</div></div>` })}`;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$MarkdownPostLayout as $ };
