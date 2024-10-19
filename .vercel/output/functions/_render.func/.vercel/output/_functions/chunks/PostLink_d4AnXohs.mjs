import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_eZPLzT5w.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://blog-updates.vercel.app/");
const $$PostLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLink;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a> </li>`;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/components/blog/PostLink.astro", void 0);

export { $$PostLink as $ };
